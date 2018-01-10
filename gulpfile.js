"use strict";

const gulp                  = require('gulp'),
    concat                  = require('gulp-concat'),
    uglify                  = require('gulp-uglify'),
  imagemin                  = require('gulp-imagemin'),
    rename                  = require('gulp-rename'),
     babel                  = require('gulp-babel'),
      sass                  = require('gulp-sass'),
    cssmin                  = require('gulp-cssmin'),
      maps                  = require('gulp-sourcemaps'),
       del                  = require('del'),
browserify                  = require('browserify'),
    source                  = require('vinyl-source-stream'),
    buffer                  = require('vinyl-buffer');

function compileReactEs6() {
    var bundler = browserify('src/app.js', {
        debug: true 
    });

    return bundler
        .transform('babelify', { presets: ['env', 'react'] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(maps.init({ loadMaps: true }))
        .pipe(uglify())
        //.pipe(rename('app.min.js'))
        .pipe(maps.write('.'))
        .pipe(gulp.dest('public/javascripts'));
}

function compileReactEs6Min() {
    var bundler = browserify('src/app.js');

    return bundler
        .transform('babelify', { presets: ['env', 'react'] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('public/javascripts'));
}

gulp.task("react", () => {
    return compileReactEs6();
});

gulp.task('reactMin', () => {
    return compileReactEs6Min();
})

gulp.task('jsMenu', () => {
    return gulp.src("src/js/menu.js")
        .pipe(rename('menu.min.js'))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('public/javascripts'));
});

gulp.task('jsMain', () => {
    return gulp.src(["src/js/clear-canvas.js", "src/js/main.js"])
        .pipe(concat('main.min.js'))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('public/javascripts'));
});

gulp.task('sassMain', () => {
    return gulp.src("src/styles/application.scss")
        .pipe(maps.init({ loadMaps: true }))
        .pipe(maps.identityMap())
        .pipe(sass())
        .pipe(maps.write('.'))
        .pipe(rename('index.css'))
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('sassMainMin', () => {
    return gulp.src('src/styles/application.scss')
        .pipe(sass())
        .pipe(cssmin())
        .pipe(rename('index.min.css'))
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('sassMenu', () => {
    return gulp.src("src/styles/menu.scss")
        .pipe(maps.init({ loadMaps: true }))
        .pipe(maps.identityMap())
        .pipe(sass())
        .pipe(maps.write('./'))
        .pipe(rename('menu.css'))
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('sassMenuMin', () => {
    return gulp.src("src/styles/menu.scss")
        .pipe(sass())
        .pipe(cssmin())
        .pipe(rename('menu.min.css'))
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('readmeImages', () => {
    gulp.src(['src/readme/img/*.*'])
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('doc/images'));
});

gulp.task('imageMin', () => {
    gulp.src(['src/img/*.*'])
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('public/img'));
});

gulp.task('clean', () => {
    del(['public/stylesheets/*.*.css', 
        'public/stylesheets/*.css*', 
        'public/img', 
        'public/javascripts/**',
        'doc/images']);
});

gulp.task('watchLists', () => {
    gulp.watch('src/styles/**/*.scss', ['sassMain', 'sassMenu']);
    gulp.watch(['src/app.js', 'src/components/**/*.js'], ['react']);
    gulp.watch('src/js/*.js', ['jsMenu', 'jsMain']);
    gulp.watch('src/img/*.*', ['imageMin']);
    gulp.watch('src/readme/img/*.*');
});

gulp.task("default", ['watchLists']);

gulp.task("development", ['clean', 'sassMenu', 'sassMain', 'react', 
    'jsMenu', 'jsMain', 'imageMin', 'readmeImages']);

gulp.task("build", ['clean', 'sassMenuMin', 'sassMainMin', 'reactMin', 
    'jsMenu', 'jsMain', 'imageMin', 'readmeImages']);