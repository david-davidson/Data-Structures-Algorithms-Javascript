'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-mocha-istanbul');

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
        'bin/sorts/topDownMergeSort',
        'bin/sorts/bottomUpMergeSort',
        'bin/sorts/quicksort',
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

    mocha_istanbul: {
        coverage: {
            src: 'tests/**/*'//,
            // options: {
            //     mask: '*.spec.js'
            // }
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
          'jscs',
          'mocha_istanbul:coverage'
        ]
      }
    }

  });
grunt.registerTask('default', [
    'jshint',
    'jscs',
    'mocha_istanbul:coverage',
    'watch'
  ]);
};