'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: [
        'lib/**/*.js',
        'tests/**/*.js',
        'bin/sorts/bubbleSort',
        'bin/sorts/insertionSort',
        'bin/sorts/selectionSort',
        'bin/sorts/shellSort',
        'Gruntfile.js'
      ],
      options: {
        'jshintrc': true
      }
    },

    jscs: {
        src: [
            'lib/**/*.js',
            'bin/**/*',
            'tests/**/*.js',
            'Gruntfile.js',
        ],
        options: {
            config: '.jscsrc'
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
          'jshint',
          'jscs'
        ]
      }
    }

  });
grunt.registerTask('default', [
    'jshint',
    'jscs',
    'watch'
  ]);
};