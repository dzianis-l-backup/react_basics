//dependecies
const gulp = require('gulp'),
    run = require('run-sequence'),
    browserSync = require('browser-sync').create(),
    allFiles = '/**/*.*',
    src = './app';

//tasks
const compile = 'compile',
    clean = 'clean',
    cleanCompile = 'clean:compile',
    watch = 'watch',
    start = 'start',
    serve = 'serve',
    reload = 'reload';

//start clean compile watch serve

gulp.task(start, function(done) {
    console.log(`***${start} task started***`)
    run(watch, serve, function(){
        console.log(`***${start} task finished***`)
        done()
    })
})

gulp.task(watch, function(done) {
    console.log(`***${watch} task started***`)
    console.log(`watched path: ${src}${allFiles}`)
    gulp.watch(src+allFiles, [reload]).on('error', function() {
        console.log(`***error in ${watch}***`)
    })
    console .log(`***${watch} task finished***`)
    done()
})

gulp.task(serve, function(done){
    console .log(`***${serve} task started***`)
    browserSync.init()
    browserSync.reload();
    console.log(`***${serve} task finished***`)
    done()
})

gulp.task(reload, function(done) {
    console.log(`***${reload} task started***`)
    browserSync.reload();
    console.log(`***${reload} task finished***`)
    done()
})

gulp.task(cleanCompile,function(done){
    console .log(`***${cleanCompile} task started***`)
    run(clean,compile,reload,function(){
        console .log(`***${cleanCompile} task finished***`)
        //if(!reloadListener) reloadListener = browserSync.watch(`${dest}${allFiles}`).on('change',browserSync.reload)
        done()
    })
})






