module.exports = function(grunt){
    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['sorts/**/*.js', 'tests/**/*.js']
        }
    });
grunt.registerTask('default', [
    'jshint',
    ]);
};
