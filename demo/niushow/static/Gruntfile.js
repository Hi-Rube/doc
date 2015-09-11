/**
 * Created by Rube on 15/2/28.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                hostname: 'localhost'
            },

            server: {
                options: {
                    open: true,
                    base: [
                        './'
                    ]
                }
            }
        },
        watch: {
            scripts: {
                files: ['react-dev/**/*.js'],
                tasks: ['react', 'webpack'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: 'css/**/*.css',
                tasks: ['concat'],
                options: {
                    livereload: true
                }
            }
        },
        react: {
            files: {
                expand: true,
                cwd: 'react-dev',
                src: ['**/*.js'],
                dest: 'react-build',
                ext: '.js'
            }
        },
        webpack: {
            pack: {
                entry: './react-build/main.js',
                output: {
                    filename: './react-build/build.js'
                },
                externals: {
                    'React': 'window.React',
                    'Qiniu': 'window.Qiniu'
                }
            }
        },
        concat: {
            css: {
                src: ['./css/*.css'],
                dest: './index.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('server', ['connect', 'watch']);
    grunt.registerTask('build', ['react', 'webpack']);
    grunt.registerTask('start', ['react', 'webpack', 'concat', 'connect', 'watch']);
};