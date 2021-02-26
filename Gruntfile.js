module.exports = function(grunt) {
  // configuration
  grunt.initConfig({
    // pass in options to plugins, reference to files etc
    concat: {
      js: {
        src: ['', 'js/*.js'],
        dest: 'build/script.js'
      },
      css: {
        src: ['css/*.css'],
        dest: 'build/styles.css'
      }
    }
  });
  
  // load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');

  // run single task
  grunt.loadNpmTasks('concat-js', ['concat:js']);
  grunt.loadNpmTasks('concat-css', ['concat:css']);
  /*
  // Register tasks
  grunt.registerTask('run', () => {
    console.log('I am running');
  });

  grunt.registerTask('sleep', () => {
    console.log('I am sleeping');
  });

  grunt.registerTask('all', ['sleep', 'run']);
  */
}