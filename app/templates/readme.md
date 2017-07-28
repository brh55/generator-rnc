# <%= componentName %> [![Travis Build Status](https://img.shields.io/travis/<%= githubUsername %>/<%= componentName %>.svg?style=flat-square)](https://travis-ci.org/<%= githubUsername %>/<%= componentName %>) [![David](https://img.shields.io/david/dev/<%= githubUsername %>/<%= componentName %>.svg?style=flat-square)](https://david-dm.org/<%= githubUsername %>/<%= componentName %>?type=dev) [![npm](https://img.shields.io/npm/dt/<%= componentName %>.svg?style=flat-square)](https://www.npmjs.com/package/<%= componentName %>)

> <%= description %>

## Basic Usage
1. Install the repository
    ```bash
    $ npm install <%= componentName %> --save
    ```
2. Add an import to the top of yur file
    ```js
    import <%= componentNameRaw %> from '<%= componentName %>';
    ```
3. Declare the component in the render method of your component
    ```jsx
    render() {
        return (
            <<%= componentNameRaw %>
              hello={'Hello world!'}
             />
        )
    }
    ```
4. Take a look at the [example app](/tree/master/example).

## Component Props
| Property | Type     | Description             | Example     |
|----------|----------|-------------------------|-------------|
| hello    | `string` | The hello world message | `Hello 🦄!` |

## License
MIT © [<%= name %>](https://github.com/<%= githubUsername %>/<%= componentName %>)

---
# Generator Post Steps
Hello and thanks for using, [`generator-rnc`](https://github.com/brh55/generator-rnc)! <br>
Please feel free to report [bugs](https://github.com/brh55/generator-rnc/issues) or contribute to the generator to help others, or contribute to the generator to help others.

Also, don't forget it's always good to include example application for users to test out and use your component.

1. `react-native init example`

> P.S: Don't forget to delete this note :)