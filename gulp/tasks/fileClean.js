const clean_path = require("../config").clean;
const $ = require("../pulugin");

const cleanTask = function (done) {
  $.gulp.src(clean_path, { read: false }).pipe($.clean());
  done();
};

exports.cleanTask = cleanTask;
