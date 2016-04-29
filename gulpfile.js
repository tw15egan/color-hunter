var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var rename = require("gulp-rename");
 
gulp.task('default', function () {
  gulp.src('./img/*-crop.png')
    .pipe(imageResize({ 
      quality: 1,
      imageMagick: true,
      format: "jpeg"
      
    }))
    .pipe(rename(function(path) {
      path.basename += '-edit';
    }))
    .pipe(gulp.dest('./img'));
});