var gulp = require('gulp');

module.exports = function () {

    gulp.task('copy', function () {

        return gulp.src('src/comments.json')
            .pipe(gulp.dest('dist'));
    });
};
