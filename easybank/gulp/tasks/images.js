import imagemin from 'gulp-imagemin';

export const images = () => {
  return app.gulp
    .src(app.path.src.images)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'Images',
          message: 'Error <%= error.message %>'
        })
      )
    )
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(
      app.plugins.ifPlugin(app.isBuild, app.gulp.dest(app.path.build.images))
    )
    .pipe(app.plugins.ifPlugin(app.isBuild, app.gulp.src(app.path.src.images)))
    .pipe(
      app.plugins.ifPlugin(
        app.isBuild,
        app.plugins.newer(app.path.build.images)
      )
    )
    .pipe(
      app.plugins.ifPlugin(
        app.isBuild,
        imagemin({
          progressive: true,
          svgoPlugins: [{ removeVieBox: false }],
          interlaced: true,
          optimizationLevel: 3
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
};
