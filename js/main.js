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

requirejs(['es6!app'], function(App) {});