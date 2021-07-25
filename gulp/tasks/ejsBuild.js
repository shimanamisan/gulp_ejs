const ejs = require('../config').ejs;
const $ = require('../pulugin');
const pageData = require('../../src/_json/_pages.json');

const ejsTask = function (done) {
    var pageID = 0;

    for (key in pageData.item) {
        console.log(pageData.item[key]);
        let json = JSON.parse($.fs.readFileSync(ejs.pageJson));
        $.gulp
            .src(ejs.src)
            .pipe($.plumber({ errorHandler: $.notify.onError('Error: <%= error.message %>') }))
            .pipe(
                $.data((file) => {
                    return {
                        filename: file.path,
                    };
                })
            )
            .pipe(
                $.ejs(
                    {
                        // jsonデータをテンプレートに渡す
                        json: json,
                        // ページ毎に読み込むテンプレートを切り替えるための識別子を渡す
                        flagData: {
                            ittle: pageData.item[key],
                            id: pageID,
                        },
                    }
                    // // 余分な余白を削除する
                    // { rmWhitespace: true }
                )
            )
            .pipe(
                $.rename({
                    // renameメソッド内のパラメータ設定方法
                    // https://www.npmjs.com/package/gulp-rename
                    basename: pageData.item[key],
                    extname: '.html',
                })
            )
            // 参考：https://dezanari.com/gulp-html-beautify/
            .pipe(
                $.beautify({
                    indent_size: 2,
                    indent_char: ' ',
                    max_preserve_newlines: 0,
                    preserve_newlines: false,
                    extra_liners: [],
                })
            )
            .pipe($.gulp.dest(ejs.dist));
        pageID++;
        done();
    }
};

exports.ejsTask = ejsTask;
