'use strict';

module.exports = {

    options: {
        strictImports: true
    },
    devbuild: {
        options: {
            dumpLineNumbers: 'comments'
        },
        files: {
            '.build/css/app.min.css': 'src/css/bootstrap.less'
        }
    },
    build: {
        options: {
            compress: true,
            cleancss: true
        },
        files: {
            '.build/css/app.min.css': 'src/css/bootstrap.less'
        }
    }

};