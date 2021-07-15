const config = require("./config").js;
const $ = require("./pulugin");

// browserifyを使ってJSファイルをビルド（開発環境）
const jsBuildDevelopment = function (done) {
    $.browserify({
      entries: [config.src],
      debug: true,
    })
      .transform($.babelify, { presets: ["@babel/preset-env"] })
      .bundle()
      .on("error", function (e) {
        console.log(e);
      })
      .pipe($.source("bundle.js")) // 引数に出力後のファイル名を記述
      .pipe(
        plumber(
          //エラーが出ても処理を止めない
          {
            errorHandler: $.notify.onError("Error: <%= error.message %>"),
          }
        )
      )
      .pipe($.sourcemaps.write("./"))
      .pipe(
        $.rename({
          extname: ".min.js", // 圧縮後は min が追記されたファイル名になる
        })
      )
      .pipe($.gulp.dest(config.dist));
    done();
  };


const jsBuildProduction = function (done) {
    $.browserify({
      entries: [config.src],
      debug: true,
    })
      .transform($.babelify, { presets: ["@babel/preset-env"] })
      .bundle()
      .on("error", function (e) {
        console.log(e);
      })
      .pipe(source("bundle.js")) // 引数に出力後のファイル名を記述
      .pipe(
        plumber(
          //エラーが出ても処理を止めない
          {
            errorHandler: $.notify.onError("Error: <%= error.message %>"),
          }
        )
      )
      .pipe($.streamify(stripDebug())) // ビルド時にconsole.log()の記述を削除する
      .pipe($.streamify($.uglify())) // streamifyを使用していないと、GulpUglifyError: Streaming not supported とエラーが出る
      .pipe($.sourcemaps.write("./"))
      .pipe(
        rename({
          extname: ".min.js", // 圧縮後は min が追記されたファイル名になる
        })
      )
      .pipe($.gulp.dest(config.dist));
    done();
  };