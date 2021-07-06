
const distPath = './dist/';
const srcPath  = './src/';

// ejs
const ejsSrc = srcPath + 'html/**/*.ejs';
const ejsMeta = srcPath + '_json/_meta.json';
const ejsDone = distPath;

// sass
const sassSrc = srcPath + "scss/**/*.scss";
const sassDone = distPath + 'css/';

// imgMin
const imgMin = srcPath + 'img/**/*.+(jpg|jpeg|png|gif|svg)';
const imgMinDone = distPath + 'img/';

// jsMin
const jsMin = srcPath + 'js/**/*.js';
const jsDone = distPath + 'js/';

//localServer
const localServerDir = distPath;

module.exports = {
    ejs: {
        src: ejsSrc,
        meta: ejsMeta,
        dist: ejsDone
    },
    sass: {
        src: sassSrc,
        sidt: distPath
    },
    
}