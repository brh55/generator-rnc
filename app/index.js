'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const normalizeUrl = require('normalize-url');
const humanizeUrl = require('humanize-url');
const yosay = require('yosay');

module.exports = class extends Generator {
	init() {
		this.log(yosay(
			`Welcome to ${chalk.blue('react-native component')} generator!`
		));

		return this.prompt([{
			name: 'componentNameRaw',
			type: 'input',
			message: 'What do you want to call your component class referenced in code?',
			default: 'AwesomeComponent'
		},{
			name: 'prefixReactNative',
			type: 'boolean',
			message: 'Do you want to prefix react-native to your package?',
			default: true
		}, {
			name: 'description',
			type: 'input',
			message: 'What is your component description?',
			default: `My awesome component does a lot of cool stuff!`
		}, {
			name: 'website',
			message: 'What is the URL of your website?',
			store: true,
			validate: x => x.length > 0 ? true : 'You have to provide a website URL',
			filter: x => normalizeUrl(x)
		},
		{
			name: 'githubUsername',
			message: 'What is your GitHub username?',
			store: true,
			validate: x => x.length > 0 ? true : 'You have to provide a username',
			when: () => !this.options.org
		}])
		.then(props => {
			const copy = (from, to, tpl) => {
				const tplParam = tpl || {};
				this.fs.copyTpl(from, to, tplParam);
			};

			// Hypens and Uppercase each letter after Hypen from SO
			const toHypens = (word) => word.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, firstL => firstL.toUpperCase());

			const copyOrphan = (from, to, tpl) => {
				// Not ideal to be using private method
				// but this avoids issue with globby recogonizing destPath/file
				// as file and file/**
				const tplParam = tpl || {};
				copy(this.templatePath(from), this.destinationPath(to), tplParam);
			};

			// Add the raw value and componentName to template value
			const tpl = Object.assign({}, props);
			tpl.componentNameUpper = toHypens(props.componentNameRaw);
			tpl.componentName = tpl.componentNameUpper.toLowerCase();
			tpl.packageName = props.prefixReactNative ? `react-native-${tpl.componentName}` : tpl.componentName;
			tpl.website = humanizeUrl(props.website);
			tpl.name = this.user.git.name();
			tpl.email = this.user.git.email();

			copy([
				`${this.templatePath()}/**`,
				`!${this.templatePath()}/_*`,
				`!${this.templatePath()}/__tests__/*`,
				`!${this.templatePath()}/components/*`
			], this.destinationPath(), tpl);

			copyOrphan('_babelrc', '.babelrc');
			copyOrphan('_package.json', 'package.json', tpl);
			copyOrphan('_gitignore', '.gitignore');
			copyOrphan('_travis.yml', '.travis.yml');
			copyOrphan('__tests__/x.test.js', `__tests__/${tpl.componentNameUpper}.test.js`, tpl);
			copyOrphan('components/x.js', `components/${tpl.componentNameUpper}.js`, tpl);
		});
	}

	install() {
		this.installDependencies({bower: false});
	}
};
