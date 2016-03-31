var gulp = require('gulp');
var watch = require('gulp-watch');
var shell = require('gulp-shell')
var babel = require('gulp-babel');

gulp.task('compile', () => {
  gulp.src('server/src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('server/build'));
});

gulp.task('watch:js', () => {
  gulp.watch('server/src/**/*.js', ['compile']);
});

gulp.task('runKeystone', shell.task('node server/index.js'));

gulp.task('default', ['watch', 'runKeystone']);
