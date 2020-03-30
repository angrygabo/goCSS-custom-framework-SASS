const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('prefix', () =>
    gulp.src('boogo.min.css')
        .pipe(autoprefixer())
    .pipe(gulp.dest('./prefixe/boogo.min.css'))
);