//define(function(){
    require.config({
        // Karma serves files under /base, which is the basePath from your config file
        baseUrl: '/base',

        // example of using a couple path translations (paths), to allow us to refer to different library dependencies, without using relative paths
        paths: {
            'jquery': 'node_modules/jquery/dist/jquery',
            'underscore': 'node_modules/underscore/underscore',
            'app': 'src/app'
        },

        // example of using a shim, to load non AMD libraries (such as underscore)
        shim: {
            'underscore': {
                exports: '_'
            }
        }
    });
//});