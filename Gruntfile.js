module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.initConfig({
        jshint: {
            files: [
                'Gruntfile.js',
                'src/main/webapp/app/*.js',
                'src/test/webapp/app/*.js'
            ]
        }
    });
    grunt.registerTask('default', ['jshint']);
};