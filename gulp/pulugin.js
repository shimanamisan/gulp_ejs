module.exports = {
    // other
    plumber      : require('gulp-plumber'), // エラーが発生しても強制終了させない
    stripDebug   : require('gulp-strip-debug'), // console.logやalertを削除する
    gulp         : require('gulp'),
    notify       : require('gulp-notify'), // エラー発生時のアラート出力
    changed      : require('gulp-changed'),
    requireDir   : require('require-dir'),
    fs           : require('fs'),

    // html
    ejs          : require('gulp-ejs'), // esj形式でHTMLファイルを記述出来るようにする
    rename       : require('gulp-rename'), // ファイル名を変更するプラグインを追加
    beautify     : require('gulp-html-beautify'), // esjやpugで書かれたhtmlファイルをコンパイル後に整形する

    // javascript
    babelify     : require('babelify'), // babelify は Browserify 用の Babel 変換ライブラリ
    browserify   : require('browserify'), // jsファイルなどビルドする
    uglify       : require('gulp-uglify'), // jsファイルを圧縮する
    streamify    : require('gulp-streamify'), // gulpでストリームモードを利用できるようにする
    source       : require('vinyl-source-stream'), // gulpで使用するvinylオブジェクトに変換するためのもの。Browserify を扱う際に利用する

    // sass
    sass         : require('gulp-sass')(require('node-sass')), // sassを使えるようにする
    sassGlob     : require('gulp-sass-glob'), // 複数のimport文をまとめる
    autoprefixer : require('autoprefixer'), // 自動でベンダープレフィックスを記述する
    postcss      : require('gulp-postcss'), // PostCSS利用
    sourcemaps   : require('gulp-sourcemaps'), // ソースマップ作成
    sorter       : require('css-declaration-sorter'), // プロパティをアルファベット順にソートする
    mqpacker     : require('css-mqpacker'), // メディアクエリをまとる、デスクトップファースト・モバイルファーストの出力が指定できる（postcssが必要）

    // imgmin
    imgMin       : require('gulp-imagemin'), // 画像を圧縮する
    imgMinJpg    : require('imagemin-mozjpeg'), // jpeg
    imgMinPng    : require('imagemin-pngquant'), // png
    imgWebP      : require('gulp-webp'),

    // localserver
    browserSync  : require('browser-sync'), // ファイル変更時にブラウザを自動リロードする
    php          : require('gulp-connect-php'), // browserSyncとPHPを連携させる
    path         : require('path'), // ファイルパスやディレクトリに対して簡単にアクセス出来るような機能を提供しているモジュール
};
