var concat = require('gulp-concat');
var gulp = require('gulp');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');

gulp.task('server', function(){
    connect.server({
        root:'./',
        port:8080,
        livereload: true
    })
    gulp.watch(['index.html', './js/*.js'], ['html'])
})
gulp.task('html', function(){
    gulp.src('./index.html').pipe(connect.reload())
    
})
// 合并
gulp.task('concat', function(){
    gulp.src(['index.js','index2.js'])
        .pipe(concat('index1.js'))
        .pipe(gulp.dest('js'))
})
// 压缩
gulp.task('mainjs', function(){
    gulp.src(['index.js'])
    .pipe(uglify())
    .pipe(gulp.dest('./js'))
})