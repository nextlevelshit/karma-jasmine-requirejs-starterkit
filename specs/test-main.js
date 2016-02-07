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
    // Rest of the config file is stored in ../requirejs.conf.js

    // Dynamically load all test files
    deps: allTestFiles,
    // We have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});

function normalizePath(filePath) {
    return filePath.replace(/^\/base\/|\.js$/g, '');
}
