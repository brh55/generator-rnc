# <%= packageName %> [![Travis Build Status](https://img.shields.io/travis/<%= githubUsername %>/<%= packageName %>.svg?style=flat-square)](https://travis-ci.org/<%= githubUsername %>/<%= packageName %>) [![David](https://img.shields.io/david/dev/<%= githubUsername %>/<%= packageName %>.svg?style=flat-square)](https://david-dm.org/<%= githubUsername %>/<%= packageName %>?type=dev) [![npm](https://img.shields.io/npm/dt/<%= packageName %>.svg?style=flat-square)](https://www.npmjs.com/package/<%= packageName %>)

> <%= description %>

## Install
```bash
$ npm install <%= packageName %> --save
```

## Usage
1. Add an import to the top of yur file
    ```js
    import <%= componentNameRaw %> from '<%= packageName %>';
    ```
2. Declare the component in the render method of your component
    ```jsx
    render() {
        return (
            <<%= componentNameRaw %>
              hello={'Hello world!'}
             />
        )
    }
    ```
3. Take a look at the [example app](/tree/master/example).

## Component Props
| Property | Type     | Description             | Example     |
|----------|----------|-------------------------|-------------|
| hello    | `string` | The hello world message | `Hello 🦄!` |

## License
MIT © [<%= name %>](https://github.com/<%= githubUsername %>/<%= packageName %>)

---
# Generator Notes
👋🏽 Hello and thanks for using, [`generator-rnc`](https://github.com/brh55/generator-rnc)! <br>
Please feel free to report [bugs](https://github.com/brh55/generator-rnc/issues) or contribute useful features to the generator to help others.

Also, don't forget to include example an application for users to test out and use your component.

1. `react-native init example`

> 🗒 P.S: Don't forget to delete this note :)
