'use strict';

module.exports = {
    options: {
        jshintrc: '.jshintrc',
        report: 'jslint',
        force: true
    },
    all: {
        src: [
            'Gruntfile.js',
            'grunt/**/*.js',
            'src/js/*.js'
        ]
    }
};