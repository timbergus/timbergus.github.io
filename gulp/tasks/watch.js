var gulp = require('gulp'),
    livereload = require('gulp-livereload');

module.exports = function () {

    gulp.task('watch', function () {

    	livereload.listen();

        gulp.watch('./src/jsx/*.jsx', ['browserify'])
        	.on('change', livereload.changed);
        gulp.watch('./src/scss/*.styl', ['stylus'])
        	.on('change', livereload.changed);
        gulp.watch('./src/*.jade', ['templates'])
        	.on('change', livereload.changed);
    });
};
