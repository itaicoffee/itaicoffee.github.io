var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');

gulp.task('build', function() {
	return gulp.src('jsx/*.jsx')
		.pipe(watch('jsx/*.jsx'))
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify())
		.pipe(gulp.dest('js'));
});

gulp.task('default', ['build'], function() {});