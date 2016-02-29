module.exports = function (grunt) {

	grunt.initConfig({
		copy: {
			main: {
				expand: true,
				cwd: 'src',
				src: '**',
				dest: 'dist/'
			}
		},
		connect: {
			server: {
				options: {
					port: 8080,
					livereload: true,
                    open: true,
                    nospawn: true
				}
			}
		},
		watch: {
			js: {
				files: ['src/*.js'],
				tasks: ['copy'],
				options: {
					livereload: true,
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['copy', 'connect', 'watch']);

};