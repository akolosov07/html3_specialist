var gulp = require('gulp');
gulp.task('hello', function () {
    console.log('Hello from GulpFile');
});

gulp.task('hi', function () {
    console.log('hi from GulpFile');
});

var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
gulp.task('one', function () {
    return gulp.src('./css/*')
        .pipe(stylus())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./css/build'));
});



//gulp - csso
var csso = require('gulp-csso');
gulp.task('two', function () {
    return gulp.src('./css/*')
        .pipe(csso())
        .pipe(gulp.dest('./css/build'));
});

var autopre = require('gulp-autoprefixer');
 
gulp.task('three', () =>
    gulp.src('./css/source/*')
        .pipe(autopre({
            browsers: ['last 20 versions'],
            cascade: false
        }))
        .pipe(csso())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./css/build'))
);
//gulp-minify-css 
