# requireJs-react-flux

This is a React + Flux + es6 application implemented with RequireJS.

I use [todos example from the official website](https://github.com/facebook/flux/tree/master/examples/flux-todomvc/) and it seems to work. You can give it a try.

# Install

package.json

```
{
	"directory": "js/vendor"
}
```

npm packages

```
  "dependencies": {
    "flux": "^2.1.1",
    "keymirror": "^0.1.1",
    "react": "^0.14.7",
    "react-dom": "^0.14.7",
    "requirejs": "^2.1.22",
    "requirejs-babel": "^0.2.5",
    "underscore": "^1.8.3"
  },

```

Install

```
$ npm install
```


# Usage

    Run your local server.

I use MAMP on mac. (You can use other ways, like: Python's Simple HTTPServer) 


Flux will need `Node EventEmmit`,  `keyMirror`. But we are not in node environment(no npm) so these modules must be packaged in another way.

I wrap `keyMirror` by `define`(RequireJS), then it can be used in Flux.

keyMirror.js

```
define('keyMirror', function () {
  var keyMirror = function(obj) {
    var ret = {};
    var key;
    if (!(obj instanceof Object && !Array.isArray(obj))) {
      throw new Error('keyMirror(...): Argument must be an object.');
    }
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        ret[key] = key;
      }
    }
    return ret;
  };
  return keyMirror;
});
```

`Dispatch`, `Constants`, `Actions`, `Store` will be used in Flux. The paths of these modules were defined in config.js then I can require them anywhere easily.

In order to write .jsx for react.js components, I need to define `jsx!components/XXX.jsx` in require.

You can write ES6 syntax in this application.

config.js

```
require({
    baseUrl: '.',
    paths: {
        'app': 'js/app',
        'react': 'node_modules/react/dist/react-with-addons',
        'react-dom': 'node_modules/react-dom/dist/react-dom',
        'babel': 'node_modules/requirejs-babel/browser',
        'babel_polyfill': 'node_modules/requirejs-babel/polyfill.min',
        'es6': 'node_modules/requirejs-babel/es6',
        'flux': 'node_modules/flux/dist/Flux',
        'EventEmitter': 'js/eventEmitter/eventEmitter',
        'underscore': 'node_modules/underscore/underscore',
        'keymirror': 'node_modules/keymirror/index',

        'Footer': 'js/components/Footer',
        'Header': 'js/components/Header',
        'MainSection': 'js/components/MainSection',
        'TodoApp': 'js/components/TodoApp',
        'TodoItem': 'js/components/TodoItem',
        'TodoTextInput': 'js/components/TodoTextInput',
        'TodoStore': 'js/stores/TodoStore',
        'TodoActions': 'js/actions/TodoActions',
        'TodoConstants': 'js/constants/TodoConstants',
        'AppDispatcher': 'js/dispatcher/AppDispatcher'
    },
    shim: {
        babel: {
            deps: ['babel_polyfill']
        }
    },
    config: {
        babel: {
            sourceMaps: "inline", // One of [false, 'inline', 'both']. See https://babeljs.io/docs/usage/options/
            fileExtension: ".jsx" // Can be set to anything, like .es6 or .js. Defaults to .jsx
        }
    }
});


# Building

You can use r.js (RequireJS) to bundle your application.

```
$ r.js -o build.js
```


# Notes

Please email me if you encounter other questions. Thank you.

