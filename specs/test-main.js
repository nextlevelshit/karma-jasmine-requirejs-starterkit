var TEST_REGEXP = /(spec|test)\.js$/i;
var allTestFiles = [];

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function(file) {
    console.log('File available for tests:', normalizePath(file));

    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
        // then do not normalize the paths
        allTestFiles.push(normalizePath(file));
    }
});

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
    },

    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});

function normalizePath(filePath) {
    return filePath.replace(/^\/base\/|\.js$/g, '');
}