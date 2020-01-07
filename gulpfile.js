var gulp = require('gulp');
// var concatCss = require('gulp-concat-css');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
// var minifyCss = require('gulp-minify-css');
var sass = require('gulp-sass');


gulp.task('connect', function () {
  connect.server({
    root: '',
    livereload:true
  })
});

gulp.task('css', function () {
  return gulp.src('css/style.css')
    /*.pipe(concatCss("styles.css"))*/
    .pipe(sass())
    // .pipe(minifyCss())
    .pipe(rename("styles-min.css"))
    .pipe(gulp.dest('css/'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  return gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  // gulp.watch('css/style.css', ['css'])
  // gulp.watch('index.html', ['html'])
  gulp.watch('css/style.css', gulp.series('css'));
  gulp.watch('index.html', gulp.series('html'))
});

// gulp.task('default', ['connect', 'html', 'css', 'watch']);

gulp.task('default', gulp.parallel('connect', 'html', 'css', 'watch'));