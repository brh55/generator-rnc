# generator-rnc [![Travis](https://img.shields.io/travis/brh55/generator-rnc/master.svg?style=flat-square)](https://travis-ci.org/brh55/generator-rnc) [![David](https://img.shields.io/david/dev/brh55/generator-rnc.svg?style=flat-square)](https://david-dm.org/brh55/generator-rnc?type=dev) [![npm](https://img.shields.io/npm/dt/generator-rnc.svg?style=flat-square)](https://www.npmjs.com/package/generator-rnc)
> 🎩 A yeoman generator to scaffold a ready-to-go react-native component

This yeoman generator is pretty much inspired from the works of [generator-nm](https://github.com/sindresorhus/generator-nm).

**Nutshell Features:**
- ✅ Robust package.json with set peer dependencies, author, issue link, etc.
- ✅ Pre-configured Jest for react-native
- ✅ Flat-square `readme` badges for Travis, David DM, and NPM downloads
- ✅ `.gitignore` with ignores for emac files and a whole bunch of nonsense
- ✅ MIT license and listed on readme

![image](https://user-images.githubusercontent.com/6020066/28790560-37f7260c-75ef-11e7-8eb5-a55483f616cb.png)

## Install
`$ npm install --global generator-rnc`

## Usage
1. Install [Yo](http://yeoman.io/)
2. Run generator, `$ yo rnc`
3. Answer the prompts and go 🚀!

## Tips & Troubleshooting
### Importing/Publishing
#### How to import locally without have to publish every change?
1. `cd` into your generated component directory and run `npm link` to create a symlink
2. `cd` into your application where you want to import component directory and run `npm link <package name of component>`

Feel free to read over the [`link`](https://docs.npmjs.com/cli/link) for more information regarding `npm link`

### Testing
#### CI Build fails because of snapshot error?
Most likely you have an old snapshot, run `npm run renew-snap` or `jest --updateSnapshot` to renew existing snapshot.

Read the [Snapshot Testing Docs](https://facebook.github.io/jest/docs/en/snapshot-testing.html) for more information.

#### Unit test keep failing even after changes
This can be caused by cached files by jest, run `jest --no-cache` or `npm run clean-test` to run the test at a clean state.

For more additional help, visit the [Jest Troubleshoot Page](https://facebook.github.io/jest/docs/en/troubleshooting.html#content)

## Open-Source Components Built by `generator-rnc`
- **[react-native-open-maps](https://github.com/brh55/react-native-open-maps)**: A simple lib to open up the corresponding map (Google or Apple Maps) from a set of coordinates (latitude & longitude) within react-native.

> Did you built something recently? Feel free to add your component on here for others to reference and submit a PR.

## Contributors
> 👋🏽  Hello, currently looking to add more features, please submit PR's or issues if you have any additional enhancements!

## License
MIT © [Brandon Him](https://github.com/brh55/generator-rnc)
