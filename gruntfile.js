module.exports = function(grunt) {
  grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),
     karma: {
      options: {
        configFile: 'karma.conf.js',
        port: 9999,
        browsers: ['Chrome', 'Firefox']
      },
      continuous: {
        singleRun: true,
        browsers: ['PhantomJS']
      },
      dev: {
        singleRun: false,
        browsers: ['Chrome']
      }
    },
  })
  grunt.loadNpmTasks('grunt-karma');
  grunt.registerTask('default', ['karma']);
};
