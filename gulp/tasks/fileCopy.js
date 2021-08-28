const copy = require("../config").copy;
const $ = require("../pulugin");

console.log("動画ファイルのソースディレクトリ： " + copy.movie_src);

const copyTask = function (done) {
  $.gulp.src(copy.movie_src).pipe($.gulp.dest(copy.movie_dist));
  done();
};

exports.copyTask = copyTask;