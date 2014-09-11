'use strict';

module.exports = {
    build: {
        files: [
            { '.build/index.html': 'src/index.html' }
        ]
    },
    temptobuild: {
        files: [
            {
                cwd     : '.tmp/concat/',
                src     : '**/*',
                dest    : '.build/',
                flatten : false,
                expand  : true
            }
        ]
    },
    templates: {
        files: [
            {
                cwd     : 'src/templates/',
                src     : '**/*.html',
                dest    : '.build/templates/',
                flatten : false,
                expand  : true
            }
        ]
    },
    css: {
        files: [
            {
                cwd     : 'src/css/',
                src     : '**/*.css',
                dest    : '.build/css/',
                flatten : false,
                expand  : true
            }
        ]
    },
    json: {
        files: [
            {
                cwd     : 'src/json/',
                src     : '**/*.json',
                dest    : '.build/json/',
                flatten : false,
                expand  : true
            }
        ]
    },
    images: {
        files: [
            {
                cwd     : 'src/img/dest/',
                src     : '**/*',
                dest    : '.build/img/',
                flatten : false,
                expand  : true
            }
        ]
    }
};