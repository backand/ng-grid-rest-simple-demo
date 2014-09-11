'use strict';

module.exports = function(grunt) {
    grunt.registerTask('prod', ['build', 'express:server']);
    grunt.registerTask('prod-short', ['build']);
};
