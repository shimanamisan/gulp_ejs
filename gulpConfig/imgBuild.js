// 画像圧縮
// 圧縮前と圧縮後のディレクトリを定義
// jpg, png, gif画像の圧縮タスク
// gulp-imageminのバージョンアップによるでるエラー：imagemin.jpegtran is not a function
// imagemin.jpegtran()をimagemin.mozjpeg()に変更
const img_Build = function (done) {
    var srcGlob = paths.srcDir + "/img/*.+(jpg|jpeg|png|gif|svg)"; // /**/ で、その配下の全部のディレクトリを見に行く
    var dstGlob = paths.dstDir + "/img";
    gulp
      .src(srcGlob)
      // gulp-changedというライブラリは、読込み元と保存先のディレクトリの差分を確認して、画像圧縮を実行するか判断するもの
      .pipe(changed(dstGlob))
      .pipe(
        imagemin([
          imagemin.gifsicle({ interlaced: true }),
          // imagemin.jpegtran({progressive: true}), v6.x系の書き方
          // imagemin.mozjpeg({progressive: true}),
          imagemin.mozjpeg({ quality: 80 }),
          imagemin.optipng({ optimizationLevel: 5 }),
        ])
      )
      .pipe(gulp.dest(dstGlob));
    done();
  };