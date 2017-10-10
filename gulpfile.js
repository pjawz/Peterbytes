
var gulp 		=   require('gulp');
//loads all plugsins so you don't have to define all plugins
// use $.pluginName() to use
var $           =   require('gulp-load-plugins')();
var sass        =   require('gulp-sass');
var uglify      =   require('gulp-uglify');
var browserSync	=	require('browser-sync').create();
var watchSass   =   gulp.watch('./sass/*.scss', ['sass']);
var watchJS     =   gulp.watch('./js/*.js', ['js']);
var reload      =   browserSync.reload;
var process     =   require("process");

//Stops the process after a task finishes
//gulp.on('stop', function() { process.exit(0); });


// Starts the local server and watches for changes
gulp.task('go', function() {
	browserSync.init({
        server: {
            baseDir: "./"
        }
    });
        console.log('Initializing..');
		gulp.watch("**/*.html").on("change", reload);
        gulp.watch('./css/*.css', ['css']).on('change', reload);
        gulp.watch("js/*.js", ['js']).on('change', reload);
        gulp.watch('./sass/*.scss', ['sass']).on('change', reload);
        console.log('Devlopment Enviorment Initialized');
});

//Autoprefixes CSS 
gulp.task('css', function () {
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');
    
    return gulp.src('./css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css/'));
});

//Call reload to reload the browser after finsihing a task
gulp.task('reload', function(){
    browserSync.reload();
});

//Compiles Sass 
gulp.task('sass', function () {
    console.log('compiling Sass');
  return gulp.src('./sass/*.sass', {style: 'compressed'})
    .pipe($.sass().sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
// minifies and compiles JS and sends to the dist/ folder.
gulp.task('js', function () {
        gulp.src('js/*js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/minjs'));
        reload();
     
});

// creates a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('reload', ['js'], function (done) {
    browserSync.reload();
    done();
});

// add browserSync.reload to the tasks array to make
 // all browsers reload after tasks are complete.
 gulp.watch("js/*.js", ['js']);
