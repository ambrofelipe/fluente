const { task, src, dest, watch, series, parallel } = require('gulp');

const clean = require('gulp-clean');
const sass = require('gulp-sass')(require('sass')) ;
const sassGlob = require('gulp-sass-glob');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const include = require('gulp-include');
const autoprefixer = require('gulp-autoprefixer');
const wpPot = require('gulp-wp-pot');
const rename = require('gulp-rename');
const rev = require("gulp-rev");

const server = browserSync.create();

task('reload', function(done) {
	server.reload();
	done();
});

task('clean', function() {
	return src('dist', {read: false, allowEmpty: true})
		.pipe(clean());
});

task('styles', function() {
	return src('src/scss/main.scss')
		.pipe(sassGlob())
		.pipe(sass({
			includePaths: ['node_modules'],
			}).on('error', sass.logError))
		.pipe(autoprefixer({cascade: false}))
		.pipe(rev())
		.pipe(dest('dist/css'))
		.pipe(rename({ dirname: 'css' }))
		.pipe(rev.manifest(rev.manifest('dist/rev-manifest.json', {base: process.cwd() + '/dist', merge: true})))
		.pipe(dest('dist'));
});


task('images', function() {
	return src('src/img/**/*.{jpg,jpeg,png,webp,svg,gif,mp4}')
		.pipe(dest('dist/img'));
});

task('scripts', function() {
	return src(['src/js/*.js', '!src/js/_*'], { base: 'src' })
		.pipe(include())
		.pipe(rev())
		.pipe(dest('dist'))
		.pipe(rev.manifest('dist/rev-manifest.json', {base: process.cwd() + '/dist', merge: true}))
		.pipe(dest('dist'));
});


task('vendor', function() {
	return src([
		'src/js/_scrollTimeline.js',
	])
		.pipe(concat('vendor.js'))
		.pipe(dest('src/js'));
});

task('pot', function() {
	return src('**/*.php')
		.pipe(wpPot({
			domain: 'fluente',
			package: 'Fluente WordPress theme',
		}))
		.pipe(dest('languages/fluente.pot'));
});

task('copy', function() {
	return src(['src/**/*', '!src/{img,js,scss}', '!src/{img,js,scss}/**/*'])
		.pipe(dest('dist'));
});

task('watchers', function() {
	watch('src/scss/**/*.scss', series('styles', 'scripts', 'reload'));
	watch('src/img/**/*.{jpg,jpeg,png,svg,gif}', series('images', 'reload'));
	watch('src/js/**/*.js', series('scripts', 'reload'));
	watch('**/*.php', series('reload'));
	watch(['src/**/*', '!src/{img,js,scss}', '!src/{img,js,scss}/**/*'], series('copy'));
});

task('default', series('clean', 'vendor', 'styles', 'images', 'scripts', 'copy', parallel( 'watchers')));
task('build', series('clean', 'vendor', 'styles', 'images', 'scripts', 'copy', 'pot'));
