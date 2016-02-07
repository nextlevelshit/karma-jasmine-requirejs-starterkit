// Karma configuration
// Generated on Thu Feb 04 2016 16:24:10 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],

    // list of files / patterns to load in the browser
    files: [
      'requirejs.conf.js',
      'specs/test-main.js',
      {pattern: 'node_modules/jquery/dist/jquery.js', included: false},
      {pattern: 'node_modules/underscore/underscore.js', included: false},
      {pattern: 'src/**/*.js', included: false},
      {pattern: 'specs/*.spec.js', included: false},
    ],

    // list of files to exclude
    exclude: [
      'src/main.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'clear-screen'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    plugins: ['karma-requirejs',
              'karma-junit-reporter',
              'karma-spec-reporter',
              'karma-clear-screen-reporter',
              'karma-chrome-launcher',
              'karma-phantomjs-launcher',
              'karma-jasmine']
  })
}
