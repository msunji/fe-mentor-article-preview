const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();

function compileScss() {
  return src('src/styles/*.scss')
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(minify())
    .pipe(dest('dist/styles'));
}

function compileJs() {
  return src('src/js/*.js').pipe(terser()).pipe(dest('dist/js'));
}

function browserServe(done) {
  browserSync.init({
    server: {
      baseDir: '.',
    },
  });
  done();
}

function browserReload(done) {
  browserSync.reload();
  done();
}

function watchTask() {
  watch('*.html', browserReload);
  watch(
    ['src/styles/*.scss', 'src/js/*.js'],
    series(compileScss, compileJs, browserReload)
  );
}

exports.default = series(
  compileScss,
  compileJs,
  browserServe,
  browserReload,
  watchTask
);
