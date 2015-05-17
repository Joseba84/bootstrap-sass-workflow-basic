/* File: gulpfile.js */
var gulp = require('gulp'),
	sass = require('gulp-sass'),
 	livereload = require('gulp-livereload');

var config = { bootstrapDir: './css/vendor/bootstrap-sass', };
// HTML
gulp.task('html', function() {
	return gulp.src([
		'./index.html'
	])
	.pipe(livereload());
});
//CSS
gulp.task('css', function() {
    return gulp.src(['./css/scss/app.scss'])
    .pipe(sass({
        includePaths: [config.bootstrapDir + '/assets/stylesheets'],
    }))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});

//Watch function
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(['./index.html'],['html']);
  	gulp.watch(['./css/**/*.scss'],[ 'css' ]);
});

gulp.task('default', ['html','css','watch']);