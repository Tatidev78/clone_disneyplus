const gulp =require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}

function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle : 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
}

function images(){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

function fonts() {
    return gulp.src('./assets/fonts/**/*')
        .pipe(gulp.dest('./dist/fonts'));
}

exports.default = gulp.parallel(styles, images, fonts, scripts);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)),
    gulp.watch('./src/images/**/*', gulp.parallel(images)),
    gulp.watch('./assets/fonts/**/*', gulp.parallel(fonts))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
};