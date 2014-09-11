'use strict';

module.exports = function (grunt) {

    require('time-grunt')(grunt);

    // load all grunt plugin tasks matching the `grunt-*` pattern (https://github.com/sindresorhus/load-grunt-tasks)
    require('load-grunt-tasks')(grunt);
    // one of the plugin is grunt-load-options (https://github.com/chriszarate/grunt-load-options)
    // grunt-load-options: will load plugin options and gruntfile tasks from /grunt/tasks & /grunt/options

    // loading one off
    // grunt.loadNpmTasks('css-sprite');

};