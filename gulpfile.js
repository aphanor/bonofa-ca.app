var gulp = require('gulp'),
    server = require('gulp-webserver'),
    s3 = require('gulp-s3'),
    gutil = require('gulp-util'),
    fs = require('fs');
    
    
//Amazon S3 configuration
gulp.task('aws', function() {
    aws = JSON.parse(fs.readFileSync('./aws.json'));
    gulp.src('build/**')
        .pipe(s3(aws));
});

// Webserver
gulp.task('server', function() {
    gulp.src('build/')
    .pipe(server({
    	livereload: true,
    	open: true
    }));
});

// Set of tasks
gulp.task('default', ['server']);