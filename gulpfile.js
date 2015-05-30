var gulp = require('./gulp')([
    'stylus',
    'copy',
    'templates',
    'browserify',
    'watch',
    'connect'
]);

gulp.task('default', ['stylus', 'copy', 'templates', 'browserify', 'watch', 'connect']);