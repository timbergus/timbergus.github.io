var gulp = require('gulp'),
    stylus = require('gulp-stylus');

module.exports = function () {

    gulp.task('stylus', function () {

        return gulp.src('./src/stylus/style.styl')
            .pipe(stylus({
      			compress: true
    		}))
            .pipe(gulp.dest('./dist'))
    });
};