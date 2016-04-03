import gulp from 'gulp';
import watch from 'gulp-watch';
import shell from 'gulp-shell';
import babel from 'gulp-babel';

gulp.task('compile', () => {
  gulp.src('server/src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('server/build'));
});

gulp.task('watch:js', ['compile'], () => {
  gulp.watch('server/src/**/*.js', ['compile']);
});

gulp.task('runKeystone', shell.task('node server/index.js'));

gulp.task('default', ['watch:js', 'runKeystone']);
