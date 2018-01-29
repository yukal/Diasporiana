// Initialize plugins
var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    plugins = require('gulp-load-plugins')();

// Initialize folders path
var src_folder = './source',
    dest_folder = './build/assets';


gulp.task('webserver', function() {
    browserSync.init({server: {baseDir: './build'}});
});

// Clean build files
gulp.task('clean', function () {
  return gulp.src(dest_folder)
    .pipe(plugins.clean());
});

// Compile HTML
gulp.task('html', function () {
    return gulp.src(src_folder + '/html/*.html')
        .pipe(plugins.rigger())
        .pipe(gulp.dest('build'));
});

// Compile SASS to CSS
gulp.task('sass', function () {
    return gulp.src(src_folder + '/scss/**/*.scss')
        .pipe(plugins.sass({outputStyle: 'compressed'}).on('error', plugins.sass.logError))
        // .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(gulp.dest(dest_folder + '/css'));
});

gulp.task('js', function() {
    // Build Template
    return gulp.src(src_folder + '/js/*.js')
        .pipe(plugins.rigger())
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(gulp.dest(dest_folder + '/js'));
});

// Compile CoffeeScript to JS
gulp.task('coffee', function () {
  return gulp.src(src_folder + '/coffee/**/*.coffee')
    .pipe(plugins.coffee({bare: true}))
    .pipe(plugins.uglify())
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(gulp.dest(dest_folder + '/js'));
});

gulp.task('img', function () {
  return gulp.src(src_folder + '/img/assets/**/*.*')
    .pipe(gulp.dest(dest_folder))

  && gulp.src(src_folder + '/img/media/**/*.*')
    .pipe(gulp.dest(dest_folder + '/img'));
});

// Enable watching task
gulp.task('watch', ['webserver'], function () {
    // gulp.watch(src_folder + '/coffee/**/*.coffee', ['coffee'])
    //     .on('change', browserSync.reload);

    gulp.watch(src_folder + '/js/**/*.js', ['js'])
        .on('change', browserSync.reload);

    gulp.watch(src_folder + '/html/**/*.html', ['html'])
        .on('change', browserSync.reload);

    gulp.watch(src_folder + '/scss/**/*.scss', ['sass'])
        .on('change', browserSync.reload);
});

// Build
// gulp.task('build', ['html','sass','js','coffee']);
gulp.task('build', ['img','html','sass','js']);

// Enable default tast
// gulp.task('default', ['coffee', 'sass']);
// gulp.task('default', ['clean','build','webserver','watch']);
gulp.task('default', ['build','watch']);