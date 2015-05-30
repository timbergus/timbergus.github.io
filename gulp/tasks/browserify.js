var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

module.exports = function () {

    gulp.task('browserify', function() {
        
        return browserify('./src/jsx/app.jsx')
            .bundle()
            .pipe(source('app.js'))
            .pipe(gulp.dest('./dist'));
    });
};