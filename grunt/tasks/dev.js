'use strict';

module.exports = function(grunt) {
    grunt.registerTask('dev', ['build:dev', 'express:server', 'watch']);
    grunt.registerTask('dev-short', ['build:dev']);
};
