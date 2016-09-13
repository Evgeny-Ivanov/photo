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
                    'static/sass/**/*.scss'
                ],
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            },
            static: {
                files: [
                    'static/js/**/*.js',
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
        cafemocha: {
          all: {
              src: 'qa/tests-*.js',
              options: { ui: 'tdd' }
          }
        },
        jshint: {
            options: {
                "esversion": 6,
                "node":true
            },
            app: ['app.js', 'helpers/**/*.js', 'routes/**/*.js', 'models/**/*.js'],
            qa: ['Gruntfile.js', 'static/qa/**/*.js', 'qa/**/*.js']
        },
        concurrent: {
            target: [
                'jshint',
                'cafemocha',
                'shell',
                'sass',
                'watch'
            ],
            options: {
                logConcurrentOutput: true /* Вывод процесса */
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-cafe-mocha');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['concurrent']);
};