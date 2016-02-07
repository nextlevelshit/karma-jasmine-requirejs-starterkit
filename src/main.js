// TODO: Try to use global config here
requirejs.config({
    paths: {
        'app': 'app',
        'jquery': '../node_modules/jquery/dist/jquery',
        'underscore': '../node_modules/underscore/underscore'
    },

    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

define(['app', 'jquery'], function (App, $) {
    App.setOutputElement($('#message'));
    App.render('App is running successfully ;)');
});