var gulp  = require('gulp');
var shell = require('gulp-shell');

gulp.task('default', [ 'build', 'push']);

gulp.task('push',
  shell.task(
    "git ci -am 'deploy to github'"+
    ";"+
    "git push origin master",
    { verbose: true }
  )
);

gulp.task('build', shell.task([ 
      'gitbook build;'+
      'rm -fR docs/*;'+
      'mv _book/* docs/;'+
      'git add docs;'
    ],
    { verbose: true }
));

// "serve": "gitbook serve txt gh-pages",
gulp.task('serve', shell.task(
    ['gitbook serve --lrport 9999 --port 43210 `pwd` docs']
  )
);


// open browser 
gulp.task('opengh', function() {
  return gulp.src('').pipe(shell(['open https://ull-esit-mii-ca-1718.github.io/docs/']));
});

// open browser at local
gulp.task('open', function() {
  return gulp.src('').pipe(shell(['open localhost:4000']));
});

