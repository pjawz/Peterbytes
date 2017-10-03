var gulp 		=   require('gulp');
var browserSync	=	require('browser-sync').create();
var reload      =   browserSync.reload;


// Default Startup ft Static Server w/ Browser-sync
gulp.task('go', function() {
	browserSync.init({
        server: {
            baseDir: "./"
        }
    });
        console.log('Initializing..');
		gulp.watch("**/*.html").on("change", reload);
		gulp.watch("./css/*.css").on("change", reload);
		gulp.watch("./js/*.js").on('change', reload);
        console.log('Devlopment Enviorment Initialized');
});


// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src('js/*js')
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

// add browserSync.reload to the tasks array to make
 // all browsers reload after tasks are complete.
 gulp.watch("js/*.js", ['js-watch']);
