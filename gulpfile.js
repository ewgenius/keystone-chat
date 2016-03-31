var gulp = require('gulp');
var watch = require('gulp-watch');
var shell = require('gulp-shell')
var sass = require('gulp-sass');

var paths = {
  'src': ['./server/src/models/**/*.js', './server/src/routes/**/*.js', './server/src/keystone.js', 'package.json'],
  'style': {
    all: './server/public/styles/**/*.scss',
    output: './server/public/styles/'
  }
};

gulp.task('watch:sass', () => {
  gulp.watch(paths.style.all, ['sass']);
});

gulp.task('sass', () => {
  gulp.src(paths.style.all)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.style.output));
});

gulp.task('runKeystone', shell.task('node server/index.js'));
gulp.task('watch', [
  'watch:sass'
]);

gulp.task('default', ['watch', 'runKeystone']);
