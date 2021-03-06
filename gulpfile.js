var gulp = require('gulp');
var jade = require('gulp-jade');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var del = require('del');
var connect = require('gulp-connect');



//************************************
// GULP IMAGE
//************************************
gulp.task('image', function() {
	gulp.src('src/img/**/')
		// .pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
});

//************************************
// GULP JADE
//************************************
gulp.task('jade', function() {
	gulp.src([
			'src/jade/*.jade',
			'!src/jade/_*.jade'
		])
		.pipe(jade({pretty: true}))
		.pipe(gulp.dest('dist'))
		.pipe(connect.reload());
});

//************************************
// GULP SASS
//************************************
gulp.task('sass', function() {
	return gulp.src([
			'src/scss/**/*.scss',
			'!src/scss/_*.scss'
		])
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/css'))
		.pipe(connect.reload());
});

//************************************
// GULP LIB
//************************************
gulp.task('lib', function() {
	return gulp.src([
			'src/lib/**/*.css',
			'src/lib/**/*.js'
		])
		.pipe(gulp.dest('dist/lib'));
});

//************************************
// CLEAN
//************************************
gulp.task('clean', function() {
	return del(['dist/**/*']);
});

//************************************
// GULP CONNECT
//************************************
gulp.task('connect', function() {
	connect.server({
		root: 'dist',
		livereload: true
	});
});

//************************************
// GULP SCRIPT
//************************************
gulp.task('script', function() {
	gulp.src('src/js/**/*.js')
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist/js'))
		.pipe(connect.reload());
});

//**************************************
// GULP WATCH
//**************************************
gulp.task('watch', function() {
	gulp.watch('src/**/*.jade', ['jade']);
	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch('src/js/**/*.js', ['script']);
});

//**************************************
// GULP BUILD
//**************************************
gulp.task('build', ['clean'], function() {
	gulp.start('jade', 'sass', 'script', 'image', 'lib');
});

//**************************************
// GULP
//**************************************
gulp.task('default', ['watch', 'connect']);
