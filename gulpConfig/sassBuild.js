const $ = require("./pulugin");

console.log($);
// scssファイルをコンパイル
const sass = function (done) {
    $.gulp
      .src(paths.srcDir + "/scss/**/*.scss")
      .pipe($.sassGlob())
      .pipe($.sass({ outputStyle: "compressed" }).on("error", sass.logError))
      // {outputStyle: 'compressed'} はgulp-sassのオプションで出力ファイルを圧縮している
      // https://www.npmjs.com/package/gulp-sass
      .pipe($.postcss([autoprefixer()]))
      .pipe(
        plumber(
          //エラーが出ても処理を止めない
          {
            errorHandler: notify.onError("Error:<%= error.message %>"),
            //エラー出力設定
          }
        )
      )
      .pipe(
        rename({
          extname: ".min.css", //.min.cssの拡張子にする
        })
      )
      .pipe(gulp.dest(paths.dstDir + "/css/"));
    done();
  };