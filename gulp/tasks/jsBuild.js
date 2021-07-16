const config = require('../config').js;
const $ = require('../pulugin');

// browserifyを使ってJSファイルをビルド（開発環境）
const jsTask = function (done) {
    $.browserify({
        entries: [config.src],
        debug: true,
    })
        .transform($.babelify, { presets: ['@babel/preset-env'] })
        .bundle()
        .on('error', function (e) {
            console.log(e);
        })
        .pipe($.plumber({ errorHandler: $.notify.onError('Error: <%= error.message %>') }))
        .pipe($.source('bundle.js')) // 引数に出力後のファイル名を記述
        //エラーが出ても処理を止めない
        .pipe($.sourcemaps.write('./'))
        // 圧縮後は min が追記されたファイル名になる
        .pipe($.rename({ extname: '.min.js' }))
        .pipe($.gulp.dest(config.dist));
    done();
};

exports.jsTask = jsTask;

// const jsBuildProduction = function (done) {
//     $.browserify({
//         entries: [config.src],
//         debug: true,
//     })
//         .transform($.babelify, { presets: ['@babel/preset-env'] })
//         .pipe(plumber({ errorHandler: $.notify.onError('Error: <%= error.message %>') }))
//         .bundle()
//         .on('error', function (e) {
//             console.log(e);
//         })
//         .pipe(source('bundle.js')) // 引数に出力後のファイル名を記述
//         //エラーが出ても処理を止めない
//         .pipe($.streamify(stripDebug())) // ビルド時にconsole.log()の記述を削除する
//         .pipe($.streamify($.uglify())) // streamifyを使用していないと、GulpUglifyError: Streaming not supported とエラーが出る
//         .pipe($.sourcemaps.write('./'))
//         .pipe(
//             rename({
//                 extname: '.min.js', // 圧縮後は min が追記されたファイル名になる
//             })
//         )
//         .pipe($.gulp.dest(config.dist));
//     done();
// };
