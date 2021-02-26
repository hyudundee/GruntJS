module.exports = function(grunt) {
  // configuration
  grunt.initConfig({
    // pass in options to plugins, reference to files etc

  });
  
  // load plugins
  // grunt.loadNpmTasks('')

  // Register tasks
  grunt.registerTask('run', () => {
    console.log('I am running');
  });

  grunt.registerTask('sleep', () => {
    console.log('I am sleeping');
  });

  grunt.registerTask('all', ['sleep', 'run']);
}