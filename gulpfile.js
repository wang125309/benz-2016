var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var jade = require('gulp-jade');
var base64 = require('gulp-base64');
var css_minify = require('gulp-minify-css');
var browserify = require('gulp-browserify');
var spriter = require('gulp-css-spriter');

gulp.task('spriter',function(){
    gulp.src('./static/css-modify/index.styl')
        .pipe(spriter({
            'spriteSheet' : './image/a.png',
            'pathToSpriteSheetFromCSS' : './image/a.png'
        }))
        .pipe(gulp.dest('./static/css/'))

});

gulp.task('lint',function(){
    gulp.src('./static/js-modify/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('stylus',function(){
    gulp.src('./static/css-modify/*.styl')
        .pipe(stylus())
        .pipe(css_minify())
        //.pipe(base64())
        .pipe(gulp.dest('./static/css'));
});

var js_files = ['login','index','fullScene','share','weixin'];

gulp.task('js',function(){
    for (i in js_files) {
        gulp.src('./static/js-modify/*.js')
			.pipe(browserify())
            //.pipe(uglify())
            .pipe(gulp.dest('./static/js'));
    }
});



gulp.task('jade',function(){
    var jade_files = {};
    gulp.src('./template/jade/*.jade')
        .pipe(jade({
            locals:jade_files
        }))
        .pipe(gulp.dest('./template/'))
});
