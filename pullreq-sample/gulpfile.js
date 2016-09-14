var gulp = require("gulp");
var browserSync = require("browser-sync");

gulp.task("watch", function() {
  gulp.watch(["**/*.html"], browserSync.reload);
});

gulp.task("serve", ["watch"], function() {
  browserSync.init({
    server: "./"
  });
});

gulp.task("default", ["serve"]);
