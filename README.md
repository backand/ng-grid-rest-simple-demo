## ng-grid and a Simple REST

This demo provides a grid solution using Angular and ng-grid, which hooks in to the RESTful end point running locally using NodeJS & ExpressJS. 

## How to use angular-grunt-seed

Clone the angular-grunt-seed repository and start hacking...


### Running the app during development

> grunt

This will run following tasks:

1. Compile LESS to CSS using 'grunt-contrib-less' Plugin

2. Combine 3rd party JS files in to one single JS file using 'usemin' plugin. Also combine all project related JS files in to one single JS file. (This is little pain while debugging but will evolve over next iterations)

3. Copy template \ partial files (currently we do not have any but Grunt is ready to handle that)

4. Copy images to '.build' folder.

5. Run 'jshint' on Grunt and project JS files

6. Watch for any changes to LESS, JS, HTML files and run specific tasks

7. Any changes to project files except Grunt files will kick-off 'livereload' and refresh your browser session  (This is very useful in Development)

8. Start Express server at "9000"


### To Do:

1. Grunt support for compiling HTML to JS using Angular's $templateCache

2. Angular examples for Karma Unit tests

3. Grunt setup ready for Karma

4. Grunt task for generating Github 'gh-pages'
