const config = require('../config').ejs;
const $ = require('../pulugin');

const ejsTask = function (done) {
    let json = JSON.parse($.fs.readFileSync(config.meta));
    // console.log(json)

    $.gulp
        .src(config.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('Error: <%= error.message %>') }))
        .pipe($.ejs({ json: json }))
        .pipe($.rename({ extname: '.html' }))
        .pipe($.gulp.dest(config.dist));

    done();
};

exports.ejsTask = ejsTask;
