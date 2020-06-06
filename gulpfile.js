const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('prefix', () =>
    gulp.src('style.css')
        .pipe(autoprefixer())
    .pipe(gulp.dest('./prefixe/style.css'))
);

