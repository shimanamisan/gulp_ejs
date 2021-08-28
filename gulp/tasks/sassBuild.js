const config = require('../config').sass;
const $ = require('../pulugin');

// scssファイルをコンパイル
const sassTask = function (done) {
    let plugins = [
        // smacssルールでプロパティをソート
        $.sorter({
            order: 'smacss',
        }),
        $.mqpacker(),
        $.autoprefixer({
            overrideBrowserslist: ['last 2 versions', 'ie 11', 'Android 4', 'iOS 9'],
        }),
    ];
    $.gulp
        .src(config.src)
        .pipe($.sassGlob())
        .pipe($.plumber({ errorHandler: $.notify.onError('Error:<%= error.message %>') }))
        // .pipe($.sourcemap.init()) // srsの直後に指定
        .pipe($.sass({ outputStyle: 'compressed' }).on('error', $.sass.logError))
        .pipe($.postcss(plugins))
        // {outputStyle: 'compressed'} はgulp-sassのオプションで出力ファイルを圧縮している
        // https://www.npmjs.com/package/gulp-sass
        //.min.cssの拡張子にする
        .pipe($.rename({ extname: '.min.css' }))
        // .pipe($.sourcemap.write()) // distの直前に指定
        .pipe($.gulp.dest(config.dist));
    done();
};

exports.sassTask = sassTask;
