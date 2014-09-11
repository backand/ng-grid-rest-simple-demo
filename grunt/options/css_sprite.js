'use strict';

module.exports = {
    options: {
        processor: 'less',
        orientation: 'horizontal',
        margin: 20
    },
    icons: {
        options: {
            style: 'src/css/_bootstrap-sprite-icons.less',
            cssPath: '../img',
            prefix: 'sprite-icons'
        },
        src: ['src/img/src/sprite-icons-png/*'],
        dest: 'src/img/dest/sprite-icons.png'
    }
};