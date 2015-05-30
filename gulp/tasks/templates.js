var gulp = require('gulp'),
    jade = require('gulp-jade');

module.exports = function () {

    gulp.task('templates', function () {

        return gulp.src('./src/index.jade')
            .pipe(jade({
                pretty: true
            }))
            .pipe(gulp.dest('./dist'))
    });
};