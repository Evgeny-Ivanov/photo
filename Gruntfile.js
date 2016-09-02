module.exports = function (grunt) {
    grunt.initConfig({
        shell: {
            options: {
                stdout: true,
                stderr: true
            },
            server: {
                command: 'nodemon app.js'
            }
        },
        watch: {
            sass: {
                files: [
                    'static/sass/**/*.scss',
                    'static/js/**/*.js',
                    'static/css/**/*.css',
                    'templates/**/*.html'
                ],
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            },
            static: {
                files: [
                    'static/js/**/*.js',
                    'static/css/**/*.css',
                    'templates/**/*.html'
                ],
                options: {
                    livereload: true
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'static/css/materialize.css': 'static/sass/materialize.scss',
                    'static/css/style.css': 'static/sass/style.scss'
                }
            }
        },
        concurrent: {
            target: ['shell', 'sass', 'watch'],
            options: {
                logConcurrentOutput: true /* Вывод процесса */
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['concurrent']);
};