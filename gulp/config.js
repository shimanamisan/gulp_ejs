const distPath = './dist/';
const srcPath = './src/';

// ejs
const ejsSrc = srcPath + 'html/**/*.ejs';
const ejsMeta = srcPath + '_json/_meta.json';
const pageData = srcPath + '_json/_pagedata.json';
const ejsDone = distPath;

// sass
const sassSrc = srcPath + 'scss/**/*.scss';
const sassDone = distPath + 'css/';

// imgMin
const imgMin = srcPath + 'img/**/*.+(jpg|jpeg|png|gif|svg)';
const imgMinDone = distPath + 'img/';

// jsMin
const jsMin = srcPath + 'js/main.js';
const jsDone = distPath + 'js/';

//localServer
const localServerDir = distPath;

module.exports = {
    ejs: {
        src: ejsSrc,
        dist: ejsDone,
        meta: ejsMeta,
        page: pageData
    },
    sass: {
        src: sassSrc,
        dist: sassDone,
    },
    img: {
        src: imgMin,
        dist: imgMinDone,
    },
    js: {
        src: jsMin,
        dist: jsDone,
    },
    server: {
        baseDir: localServerDir,
        // mode: serverMode,
    },
};
