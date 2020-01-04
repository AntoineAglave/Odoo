const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const uglify      = require('gulp-uglify');
const concat      = require('gulp-concat');


gulp.task('css', function () {
  return gulp.src('scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('../app/css'));
});

var jsFiles = ['js/jquery-3.4.1.slim.js','js/popper.min.js','js/bootstrap.js','js/app.js'],
    jsDest = '../app/js';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('app.js'))
//        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('gulp-watch', gulp.series(gulp.parallel('css', 'scripts'), function (done) {
    browserSync.reload();
    done();
}));

gulp.task('default', gulp.series(gulp.parallel('scripts', 'css'),function() {
browserSync.init({
        server: "../app"
    });

    gulp.watch(['scss/*.scss', 'js/*.js'],gulp.series('gulp-watch'));

}));
