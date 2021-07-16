const config = require('../config').server;
const $ = require('../pulugin');

const serverTask = function (done) {
    $.browserSync.init({
        server: config.baseDir,
        open: "external",
    });
    done();
};

exports.serverTask = serverTask;

// const dev = function () {
//     gulp_connect.server(
//       {
//         base: "./dist/",
//         livereload: true,
//         port: 8001,
//       },
//       function () {
//         browserSync.init({
//           proxy: "localhost:8001",
//           open: "external",
//         });
//       }
//     );

//     // 監視するタスク
//     gulp.watch(paths.srcDir + "/js/*.js", gulp.series(jsBuildDevelopment));
//     gulp.watch(paths.srcDir + "/scss/**/*.scss", gulp.series(sass_Build));
//     gulp.watch(paths.srcDir + "/img", gulp.series(img_Build));

//     // ファイルが更新（ビルド）されたらリロードする
//     gulp.watch(paths.dstDir + "/js/*.js").on("change", browserSync.reload);
//     gulp.watch(paths.dstDir + "/css/*.css").on("change", browserSync.reload);

//     // html,phpファイルが更新されたらリロードする
//     gulp.watch("./dist/**/*.html").on("change", browserSync.reload);
//   };
