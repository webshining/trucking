const gulp = require("gulp");
const browserSync = require("browser-sync");
const gulpSass = require("gulp-sass")(require('sass'));

gulp.task("server", () => {
  browserSync.init({
    server: {
      baseDir: "src",
    },
  });
});

gulp.task('styles', () => {
  return gulp.src("src/sass/*.scss").pipe(gulpSass({outputStyle: "compressed"})).pipe(gulp.dest("src/css")).pipe(browserSync.stream())
})

gulp.task('watch', () => {
  gulp.watch('src/sass/*.scss', gulp.parallel('styles'))
  gulp.watch('src/**/*').on("change", browserSync.reload)
})

gulp.task('default', gulp.parallel('server', 'styles', 'watch'))
