module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.initConfig({
        protractor: {
            options: {
                configFile: "e2e.conf.js", // Default config file
                keepAlive: false, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                args: {
                    // Arguments passed to the command
                }
            },
            e2e: {
                options: {
                    configFile: "e2e.conf.js", // Target-specific config file
                    args: {} // Target-specific arguments
                }
            }
        },
        jshint: {
            files: [
                'Gruntfile.js',
                'src/main/webapp/app/**/*.js',
                'src/test/webapp/app/**/*.js'
            ]
        }
    });
    grunt.registerTask('default', ['jshint']);

};