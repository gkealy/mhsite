module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
        my_target: {
          files: {
            'bld/script.min.js': ['mjs/script.js']
          }
        }
      },


    cssmin: {
      minify: {
        expand: true,
        cwd: 'mcss/',
        src: ['*.css', '!styles.css', '!*.min.css'],
        dest: 'bld/css/',
        ext: '.min.css'
      }
    },

    concat: {
      dist: {
        src: ['bld/css/*.min.css'],
        dest: 'bld/bld.min.css',
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin', 'concat']);

};