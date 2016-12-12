const bs = require('browser-sync');
const autoprefixer = require('autoprefixer');

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const mustache = require('gulp-mustache');

gulp.task('default', () => {
  bs.init({
    server: {
      baseDir: './',
    }
  })
});
