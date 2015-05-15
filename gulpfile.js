/* File: gulpfile.js */
var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
    bootstrapDir: './css/vendor/bootstrap-sass',
    publicDir: './',
};

gulp.task('css', function() {
    return gulp.src('./css/scss/app.scss')
    .pipe(sass({
        includePaths: [config.bootstrapDir + '/assets/stylesheets'],
    }))
    .pipe(gulp.dest(config.publicDir + 'css'));
});
gulp.task('watch', function() {
  gulp.watch('css/*.scss', ['styles']);
});


gulp.task('default', ['css','watch']);