const gulp = require('gulp'),
    //Autoprefixer (for detecting newer versions)
    autoprefixer = require('autoprefixer'),
    
    //Sass and CSS
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    
    //Babel, browserify and React
    browserify = require('browserify'),
    watchify = require('watchify'),
    babel = require('babelify'),
    mkdirp = require('mkdirp'),
    jsx = require('gulp-jsx'),
    _ = require('lodash'),
    path = require('path'),
    
    //File System
    fs = require('fs'),
    colors = require('colors'),
      
    //Live reload
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
      
    //Meta Reload (Reload gulp itself),
    //{ exec } = require('child_process'),
    
    //Only work with new or updated files
    newer = require('gulp-newer'),
    rename = require('gulp-rename'),
      wpFldr = './htdocs/',
      contentFldr = wpFldr + 'wp-content/',
      themes = contentFldr + 'themes/',
      plugins = contentFldr + 'plugins/',
      pluginFldr = plugins + 'page-background-color/',
      themeFldr = themes + 'cstech/',
      topFldrType = 'themes',
      
    src = pluginFldr + 'src/';

var topFldr = themeFldr; //default to theme -> overridden in watch call

//Browsersync instance
var bs = null;
var styleFile = null;

//Error Handling
function logError(err) {
    console.log(err.message.red);
    err.stack && console.log(err.stack.red);
}

function getTopFldr(){
    if(topFldrType == 'plugins'){
        return src;
    } else if(topFldrType == 'themes'){
        return themeFldr;
    }
}


//Sass
function watchSassDest(srcFldr, destFldr){
    gulp.watch([srcFldr + '/*.scss']).on('change', function(file){
        console.log('Compiling ' + file);
       compileSass(file, destFldr ); 
    });
}
function compileSass(file, destFldr){
    gulp.src(file)
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'expanded',
        indentType: 'tab',
        indentWidth: '1'
        }).on('error', sass.logError)
    )
    .pipe(postcss([
        autoprefixer('last 2 versions', '> 1%')
    ]))
    .pipe(rename({dirname: ''}))
    .pipe(sourcemaps.write('maps'))
    //.pipe(gulp.dest(srcFldr + '/css'));
    .pipe(gulp.dest(destFldr))
    .pipe(browserSync.stream());
}

async function topSass(){
    gulp.src(topFldr + 'style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'expanded',
        indentType: 'tab',
        indentWidth: '1'
        }).on('error', sass.logError)
    )
    .pipe(postcss([
        autoprefixer('last 2 versions', '> 1%')
    ]))
    .pipe(rename({dirname: ''}))
    //.pipe(sourcemaps.write('maps'))
    .pipe(sourcemaps.write(''))
    //.pipe(gulp.dest(srcFldr + '/css'));
    .pipe(gulp.dest(themeFldr))
    .pipe(browserSync.stream());
}

function compileScripts(src, dest, cb, opts, watch) {
    // see https://stackoverflow.com/questions/33460420/babel-loader-jsx-syntaxerror-unexpected-token
	var extensions = ['.js', '.ts', '.json', '.jsx'];

	var opts = _.defaults(opts || {}, {
		base: __dirname,
		maxDisplayFileChanges: 5,
		debug: false,
		basedir: './',
		cache: {},
		packageCache: {},
		sourceType: "module",
		extensions: extensions
	});

	mkdirp.sync(path.dirname(dest));

	var b = browserify(src, opts);
	b
		.plugin(watchify)
		.transform(babel.configure({extensions: extensions, sourceType: "module"}))
		.add(src);

	if (watch) {
		b.on('update', bundle);
	}
	b.on('time', function (time) {
		console.log('Update took ' + (time + ' ms').cyan);
	});

	bundle();

	function bundle(files) {
		files = files || [];

		var l = Math.min(files.length, opts.maxDisplayFileChanges);
		var filesDisplay = [];

		for (var i = 0; i < l; i++) {
			filesDisplay.push('./' + path.relative(opts.base, files[i]));
		}

		if (files.length > 0) {
			console.log(files.length + ' scripts changed...\n\t' + (filesDisplay.join('\n\t')).cyan);
		}

		if (files.length > opts.maxDisplayFileChanges) {
			console.log('\tand ' + (String(files.length - opts.maxDisplayFileChanges)).magenta + ' more...');
		}

		// Create the bundle and write it to disk.
		b.bundle(function (err, buffer) {
				if (buffer) {
                    console.log('Compiled jsx to: ' + dest);
					fs.writeFile(dest, buffer, function (err) {
						if (err) {
							logError(err);
						} else {
							cb && cb();
							cb = null;
						}
					});
				} else {
					logError(err);
				}
			}
		)
	}
}

//JSX
function taskJsx(parFldr, srcFldr, destFldr, fileName){
    
    if( fileName !== null && fileName !== '' && fileName !== undefined ){
        gulp.task(srcFldr + 'Jsx', function (cb) {
            compileScripts(
                topFldr + parFldr + "/" + srcFldr + "/"+fileName+".jsx", //source
                topFldr + destFldr + "/" + srcFldr + "/"+fileName.replace(parFldr + '/','')+".js", //destination
                cb, 
                {}, 
                true
            );

        });

        //Rename to local js file (change file extension)
        gulp.watch([topFldr + parFldr + '/' + srcFldr + '/' + srcFldr + '.jsx']).on('change', function(file){
            gulp.src(file)
            .pipe(rename({dirname: '', extname: '.js'}))
            .pipe(gulp.dest(topFldr + destFldr + '/' + srcFldr));
        });
    }
    else{
        gulp.task(srcFldr + 'Jsx', function (cb) {
            compileScripts(topFldr + parFldr + "/" + srcFldr + "/"+srcFldr+".jsx", "./" + destFldr + '/' + parFldr + "/" + srcFldr + "/"+srcFldr.replace(parFldr + '/','')+".js", cb, {}, true);

        });

        //Rename to local js file (change file extension)
        gulp.watch([topFldr + parFldr + '/' + srcFldr + '/' + srcFldr + '.jsx']).on('change', function(file){
            gulp.src(file)
            .pipe(rename({dirname: '', extname: '.js'}))
            .pipe(gulp.dest(topFldr + parFldr + '/' + srcFldr));
        });
    }
    /*
    gulp.watch([src + fldr + '/scripts/js/*.js']).on('change', function(file){
        gulp.src(file)
        .pipe(rename({dirname: ''}))
        .pipe(
            spsave({
                siteUrl: subSite,
                folder: './SiteAssets/code/' + fldr + '/js',
            }, creds)
        ).pipe(gulp.dest('./dist/' + fldr + '/js'));
    });
    */
}

function watchJsx(parFldr, srcFldr, destFldr, fileName){
    if( fileName !== null && fileName !== undefined ){
        taskJsx(parFldr, srcFldr, destFldr, fileName);
    } else {
        taskJsx(parFldr, srcFldr, destFldr);
    }
    gulp.watch([topFldr + parFldr + '/' + srcFldr + '/*.jsx'], {usePolling: true}, gulp.parallel([srcFldr + "Jsx"]));
}


function watchFolder(parFldr, srcFldr){

    var pathFldr = src + parFldr + '/' + srcFldr;
    if( parFldr == null ){
        pathFldr = src + srcFldr;
    }
    
    //Compile sass
    gulp.watch([pathFldr + '/*.scss']).on('change', function(file){
        compileSass(file, pathFldr);
    });
    
    //watchCss(srcFldr);
    
    //Push CSS
    //pushSp('./dist/'+srcFldr+'/css/*.css', srcFldr + '/css');
    
    //Compile JSX
    watchJsx(parFldr, srcFldr);
    
    //watchHtml(srcFldr);
    
    //watchJs(srcFldr);
    
    //watchImages(srcFldr);
}

function getStyleGlob(){
    return gulp.src('./style.scss');
}



function watchCss(fileName){
    gulp.watch([topFldr + fileName]).on('change', function(file){
        //console.log('Compiling ' + file);
        console.log(file);
        console.log('Compiling ' + file);
        //compileSass(file, themeFldr );
        topSass();
        reload();
    });
}
function watchPhp(fileName){
    gulp.watch([topFldr + fileName]).on('change', function(file){
        reload();
    });
}
/*
function logPassedArguments(){
    process.argv.forEach(function (val, index, array) {
        console.log(index + ': ' + val);
    });
}
*/

//Watch gulp itself
function watchGulp(){
    gulp.watch(['GulpFile.js']).on('change', function(file){
        console.log('GulpFile was changed. Restart with gulp command.');
        
        bs = initBrowser();

    });
}

function initBrowser(){
    var tempBs = browserSync.init({
        open: 'local',
        host: 'localhost:81/wordpress',
        //open: 'local',
        //host: 'localhost:32891',
        //https: true,
        //32909
        //32910
        //https: true,
        proxy: 'http://localhost:81/wordpress',
        
        ui: {
            //https: true,
            port: 5003
        },
        port: 5003,
        /*
        rewriteRules: [
          {
              match: /Content-Security-Policy/,
              fn: function (match) {
                  return "DISABLED-Content-Security-Policy";
              }
          }
        ]
        */
        //notify: true
    });
    //return tempBs;
}

//Watch everything
gulp.task('watch', function(){
    topFldr = getTopFldr();
    
    initBrowser();
    
    //watchGulp();
    //watchCss('**/*.scss');
    //watchSassDest(pluginFldr + 'src/sass/backend', pluginFldr + 'assets/css/backend');
    //watchSassDest(pluginFldr + 'src/sass/frontend', pluginFldr + 'assets/css/frontend');
    
    watchPhp('**/*.php');
    watchSassDest(topFldr + 'assets/sass', topFldr + 'assets/css');
    watchJsx('modules/custom-blocks/flex-block/src/scripts/jsx', 'backend', 'modules/custom-blocks/flex-block/assets/js', 'editor-script');
    //watchJsx('src/scripts/jsx/frontend', 'maintable', 'assets/js/frontend', 'frontend');
    //watchCss('style.scss');
    //watchCss('libary/sass/custom/*.scss');
    
    /*
    gulp.watch([themeFldr + 'style-editor.scss']).on('change', function(file){
        console.log('Compiling ' + file);
       compileSass(file, themeFldr ); 
    });
    gulp.watch([themeFldr + 'style-editor-customizer.scss']).on('change', function(file){
        console.log('Compiling ' + file);
       compileSass(file, themeFldr ); 
    });
    */
    //watchFolder(null, 'styles');
    
    //JSX compiling within layout directory
    //watchFolder('layout', 'Header');
    //watchFolder('layout', 'Body');
    //watchFolder('layout', 'Sidebar');
    //watchFolder('layout', 'Footer');
    
    //JSX compiling within components directory
    //watchFolder('components', 'PostCards');
});

gulp.task('default', gulp.series(['watch']));// Add your code here

