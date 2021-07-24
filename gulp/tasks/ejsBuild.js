const ejs = require('../config').ejs;
const $ = require('../pulugin');
const pageData = require('../../src/_json/_config.json');

const ejsTask = function (done) {
    // タスクをページ毎に設定

    // console.log(pageData)

    for (key in pageData.item) {
        console.log(ejs.confData);

        let json = JSON.parse($.fs.readFileSync(ejs.confData));
        $.gulp
            .src(ejs.src)
            .pipe($.plumber({ errorHandler: $.notify.onError('Error: <%= error.message %>') }))
            .pipe(
                $.ejs({
                    json: json,
                })
            )
            .pipe(
                $.rename({
                    // renameメソッド内のパラメータ設定方法
                    // https://www.npmjs.com/package/gulp-rename
                    basename: pageData.item[key],
                    extname: '.html',
                })
            )
            // .pipe($.rename( `${pageName[key]}.html` ))
            .pipe($.gulp.dest(ejs.dist));

        done();
    }
};

exports.ejsTask = ejsTask;
