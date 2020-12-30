module.exports = function(grunt) {

    // Load Plugins
    require('load-grunt-tasks')(grunt);

    var options = {
        config: {
            src: 'grunt/*.js'
        },
        paths: {
            destination: 'js',
            npm_root: 'node_modules/'
        }
    };

    var configs = require('load-grunt-configs')(grunt, options);
    grunt.initConfig(configs);

    // Grunt Build
    grunt.registerTask('default', ['copy']);
};