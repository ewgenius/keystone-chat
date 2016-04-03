import gulp from 'gulp';
import shell from 'gulp-shell';
import babel from 'gulp-babel';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import webpackConfigDev from './frontend/webpack.config.dev.js';

gulp.task('compile:server', () => {
  gulp.src('server/src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('server/build'));
});

gulp.task('webpack:build', () => {

});

gulp.task('webpack:dev', () => {
  new webpackDevServer(webpack(webpackConfigDev), {
    publicPath: '/frontend',
    contentBase: './frontend/dist',
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  }).listen(3000, 'localhost', err => {
    console.log(err);
  });
});

gulp.task('watch:js', ['compile:server'], () => {
  gulp.watch('server/src/**/*.js', ['compile:server']);
});

gulp.task('runKeystone', shell.task('nodemon'));

gulp.task('default', ['watch:js', 'runKeystone']);
