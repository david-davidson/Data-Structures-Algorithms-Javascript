'use strict';

module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: [
        'lib/**/*.js',
        'bin/**/*.js',
        'tests/**/*.js'
      ],
      options: {
        'jshintrc': true
      }
    },

    watch: {
      all: {
        files: [
          'lib/**/*.js',
          'bin/**/*.js',
          'tests/**/*.js'
        ],
        tasks: [
          'jshint'
        ]
      }
    }

  });
grunt.registerTask('default', [
    'jshint',
    'watch'
  ]);
};