const config = require('./gulp/config')
const $ = require('./gulp/pulugin');
const { ejsTask } = require('./gulp/tasks/ejsBuild');
const { sassTask} = require('./gulp/tasks/sassBuild');
const { imgTask } = require('./gulp/tasks/imgBuild');
const { jsTask } = require('./gulp/tasks/jsBuild');
const { serverTask } = require('./gulp/tasks/localServer');

//============================================================
// watch
//============================================================
const watch = function (done) {

    // 監視するタスク
    $.gulp.watch([config.ejs.src, config.ejs.meta], $.gulp.series(ejsTask));
    $.gulp.watch(config.ejs.src, $.gulp.series(ejsTask));
    $.gulp.watch(config.sass.src, $.gulp.series(sassTask));
    $.gulp.watch(config.img.src, $.gulp.series(imgTask));
    $.gulp.watch(config.js.src, $.gulp.series(jsTask));

    // 変更があったらリロードする
    $.gulp.watch(config.ejs.dist).on('change', $.browserSync.reload)
    $.gulp.watch(config.sass.dist).on('change', $.browserSync.reload)
    $.gulp.watch(config.js.dist).on('change', $.browserSync.reload)

    done();
}

exports.default = $.gulp.series(watch, serverTask);
