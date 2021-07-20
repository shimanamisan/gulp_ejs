const config = require('../config').ejs;
const $ = require('../pulugin');
const pageName = require('../../src/_json/_pagedata.json').pageData;

let taskLists = [];

const ejsTask = function (done) {

    // タスクをページ毎に設定

    for(key in pageName){
        console.log(pageName[key])

        let json = JSON.parse($.fs.readFileSync(config.meta));
        $.gulp
            .src(config.src)
            .pipe($.plumber({ errorHandler: $.notify.onError('Error: <%= error.message %>') }))
            .pipe($.ejs({ json: json }))
            .pipe($.rename({ extname: `${pageName[key]}.html` }))
            // .pipe($.rename( `${pageName[key]}.html` ))
            .pipe($.gulp.dest(config.dist));
    
        done();
    }
  
};

exports.ejsTask = ejsTask;
