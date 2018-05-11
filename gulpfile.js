const del = require('del');
const fs = require('fs');
const git = require('git-rev-sync');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const mkdirp = require('mkdirp');
const replace = require('gulp-replace');
const util = require('util');

function waitFor(stream) {
  return new Promise((resolve, reject) => {
    stream.on('end', resolve);
    stream.on('error', reject);
  });
}

gulp.task('build:es5', function(done) {
  const buildDirectory = 'build/es5';
    mkdirp(__dirname + '/build/log/', (err) => {
      if (err) console.error(err);
      const log_file = fs.createWriteStream(__dirname + '/build/log/es5-' + new Date().toISOString().replace(':', '-').replace('.', '-') + '.txt', {flags : 'w'});
      const log_stdout = process.stdout;
      const log_stderr = process.stderr;

      console.log = (d) => {
        log_file.write(util.format(d) + '\n');
        log_stdout.write(util.format(d) + '\n');
      };

      console.error = (d) => {
        log_file.write(util.format(d) + '\n');
        log_stdout.write(util.format(d) + '\n');
      };

      console.warn = (d) => {
        log_file.write(util.format(d) + '\n');
        log_stdout.write(util.format(d) + '\n');
      };
    });
    gulp.src([
      'index.html',
      'assets/**/*',
      'node_modules/*/**'
    ], { 'base' : '.' })
    .pipe(gulpif('index.html', replace('$version', git.tag()))) 
    .pipe(gulpif('index.html', replace('$datetime', new Date().toISOString())))
    .pipe(gulpif('index.html', replace('$commit', git.short())))
    .pipe(gulpif('index.html', replace('$branch', git.branch())))
    .pipe(gulpif('index.html', replace('$target', 'es5')))
    .pipe(gulp.dest(`./${buildDirectory}`))
    .on('end', () => console.log('ES5 Build complete!'));
    done();
});

gulp.task('build:es6', function(done) {
  const buildDirectory = 'build/es6';
    mkdirp(__dirname + '/build/log/', (err) => {
      if (err) console.error(err);
      const log_file = fs.createWriteStream(__dirname + '/build/log/es6-' + new Date().toISOString().replace(':', '-').replace('.', '-') + '.txt', {flags : 'w'});
      const log_stdout = process.stdout;
      const log_stderr = process.stderr;

      console.log = (d) => {
        log_file.write(util.format(d) + '\n');
        log_stdout.write(util.format(d) + '\n');
      };

      console.error = (d) => {
        log_file.write(util.format(d) + '\n');
        log_stdout.write(util.format(d) + '\n');
      };

      console.warn = (d) => {
        log_file.write(util.format(d) + '\n');
        log_stdout.write(util.format(d) + '\n');
      };
    });
    gulp.src([
      'index.html',
      'assets/**/*',
      'node_modules/*/**'
    ], { 'base' : '.' })
    .pipe(gulpif('index.html', replace('$version', git.tag()))) 
    .pipe(gulpif('index.html', replace('$datetime', new Date().toISOString())))
    .pipe(gulpif('index.html', replace('$commit', git.short())))
    .pipe(gulpif('index.html', replace('$branch', git.branch())))
    .pipe(gulpif('index.html', replace('$target', 'es6')))
    .pipe(gulp.dest(`./${buildDirectory}`))
    .on('end', () => console.log('ES6 Build complete!'));
    done();
});

gulp.task('build:ie11', function(done) {
  const buildDirectory = 'build/ie11';
    mkdirp(__dirname + '/build/log/', (err) => {
      if (err) console.error(err);
      const log_file = fs.createWriteStream(__dirname + '/build/log/ie11-' + new Date().toISOString().replace(':', '-').replace('.', '-') + '.txt', {flags : 'w'});
      const log_stdout = process.stdout;
      const log_stderr = process.stderr;

      console.log = (d) => {
        log_file.write(util.format(d) + '\n');
        log_stdout.write(util.format(d) + '\n');
      };

      console.error = (d) => {
        log_file.write(util.format(d) + '\n');
        log_stdout.write(util.format(d) + '\n');
      };

      console.warn = (d) => {
        log_file.write(util.format(d) + '\n');
        log_stdout.write(util.format(d) + '\n');
      };
    });
    gulp.src([
      'index.html',
      'assets/**/*',
      'node_modules/*/**'
    ], { 'base' : '.' })
    .pipe(gulpif('index.html', replace('$version', git.tag()))) 
    .pipe(gulpif('index.html', replace('$datetime', new Date().toISOString())))
    .pipe(gulpif('index.html', replace('$commit', git.short())))
    .pipe(gulpif('index.html', replace('$branch', git.branch())))
    .pipe(gulpif('index.html', replace('$target', 'ie11')))
    .pipe(gulp.dest(`./${buildDirectory}`))
    .on('end', () => console.log('IE11 Build complete!'));
    done();
});
