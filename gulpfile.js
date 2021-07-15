let config = require('./gulpConfig/config')
let $ = require('./gulpConfig/pulugin');

$.requireDir('./gulpConfig', { recurse: true });





// 本番環境に上げる時の処理

//============================================================
// watch
//============================================================






// gulp コマンドで下記のタスクが実行される
exports.default = dev;
// gulp buildコマンドで実行される（初回ビルド時）
//   exports.build = gulp.parallel(jsBuildProduction, sass_Build, img_Build);
