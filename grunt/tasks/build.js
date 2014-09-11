'use strict';

module.exports = function(grunt) {
    grunt.registerTask('build', function gruntTaskBuild(target){
        // Set defaults
        var isDevEnv = (target === 'dev'),
            type = isDevEnv && 'devbuild' || 'build';

//        grunt.task.run('clean:build');
//        grunt.task.run('clean:temp');

        grunt.task.run('less:'+type);
        grunt.task.run(['useminPrepare','copy:build','concat']);
        if (isDevEnv) {
            grunt.task.run('copy:temptobuild');
        } else {
            grunt.task.run('uglify');
        }
        grunt.task.run('usemin');
        grunt.task.run('copy:templates');
        grunt.task.run('copy:css');
        grunt.task.run('copy:json');
        grunt.task.run('copy:images');
        grunt.task.run('jshint:all');
    });
};
