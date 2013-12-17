module.exports = function(config) {
    config.set({
        basePath: '../../..',
        frameworks: ['jasmine'],
        files: [
            'src/main/webapp/lib/sugar-1.3.9.min.js',
            'src/main/webapp/lib/jquery-2.0.3.min.js',
            'src/main/webapp/lib/angular-1.2.5/angular.min.js',
            'src/main/webapp/lib/angular-1.2.5/angular-mocks.js',
            'src/main/webapp/lib/angular-1.2.5/angular-resource.min.js',
            'src/main/webapp/lib/angular-1.2.5/angular-route.min.js',
            'src/main/webapp/lib/ui-bootstrap-tpls-0.5.0.min.js',
            'src/main/webapp/app/remember/util.js',
            'src/main/webapp/app/remember/app.js',
            'src/main/webapp/app/remember/app/HomeController.js',
            'src/test/webapp/app/**/*.js'
        ],
        exclude: ['src/test/webapp/karma.conf*.js'],
        reporters: ['progress'],
        port: 9876,
        logLevel: config.LOG_INFO,
        browsers: ['PhantomJS'],
        singleRun: false,
        autoWatch: true,
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher'
        ]
    });
};
