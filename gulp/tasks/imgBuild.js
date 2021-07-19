const config = require('../config').img;
const $ = require('../pulugin');

const imgTask = function (done) {
    // /**/ で、その配下の全部のディレクトリを見に行く
    $.gulp
        .src(config.src)
        // gulp-changedというライブラリは、読込み元と保存先のディレクトリの差分を確認して、画像圧縮を実行するか判断するもの
        .pipe($.changed(config.dist))
        .pipe(
            $.imgMin([
                $.imgMinPng({
                    quality: [0.6, 0.7], // 画質
                    speed: 1, // スピード
                }),
                $.imgMinJpg({ quality: 80 }),
                $.imgMin.svgo(),
                $.imgMin.optipng(),
                $.imgMin.gifsicle({ optimizationLevel: 5 }), // 圧縮率

                // $.imgMin.gifsicle({ interlaced: true }),
                // // imagemin.jpegtran({progressive: true}), v6.x系の書き方
                // // imagemin.mozjpeg({progressive: true}),
                // $.imgMin.optipng({ optimizationLevel: 5 }),
            ])
        )
        .pipe($.imgWebP()) // WebPの生成
        .pipe($.gulp.dest(config.dist));

    done();
};

exports.imgTask = imgTask;