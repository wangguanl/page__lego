const gulp = require('gulp'),
  // 压缩css
  sass = require('gulp-dart-sass'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cleanCSS = require('gulp-clean-css'),
  // 压缩js
  uglify = require('gulp-uglify'),
  babel = require('gulp-babel'),
  stripDebug = require('gulp-strip-debug'), // 清除 console.log
  rename = require('gulp-rename');

// 文件路径配置
const output = __dirname + '/dist';
const config = {
  enter: {
    // 文件路径
    scss: [
      'src/**/*.scss',
      '!src/reset.common.scss',
      'src/**/*.css',
      '!src/libs/**',
    ],
    js: ['src/**/*.js', '!src/libs/**'],
    libs: ['src/libs/**'],
  },
  output, // 打包路径,
};

// 传输所有未处理的文件
gulp.task('pipeLibs', function () {
  return gulp.src(config.enter.libs).pipe(gulp.dest(config.output));
});

gulp.task('scss', function () {
  return gulp
    .src(config.enter.scss)
    .pipe(sass().on('error', sass.logError)) // sass编译
    .pipe(postcss([autoprefixer()])) // 添加前缀
    .pipe(cleanCSS()) // 压缩
    .pipe(
      rename({
        extname: '.min.css',
      })
    )
    .pipe(gulp.dest(config.output));
});

gulp.task('js', function () {
  return gulp
    .src(config.enter.js)
    .pipe(
      babel({
        presets: ['@babel/env'],
        plugins: [],
      })
    )
    .pipe(uglify()) // 压缩
    .pipe(
      rename({
        extname: '.min.js',
      })
    )
    .pipe(gulp.dest(config.output));
});

gulp.task('pipeFile', gulp.parallel('pipeLibs', 'scss', 'js'));
gulp.task('watch', function () {
  gulp.watch(['src/**'], {}, gulp.series('pipeFile'));
});

gulp.task('default', gulp.series('pipeFile', 'watch'));
