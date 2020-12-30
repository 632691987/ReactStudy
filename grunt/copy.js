module.exports = {
    copy: {
        files: [{
                cwd: '<%= paths.npm_root %>' + '@babel/standalone',
                src: [
                    'babel.js'
                ],
                dest: '<%= paths.destination %>',
                expand: true
            },
            {
                cwd: '<%= paths.npm_root %>' + '@babel/standalone',
                src: [
                    'babel.min.js'
                ],
                dest: '<%= paths.destination %>',
                expand: true
            },
            {
                cwd: '<%= paths.npm_root %>' + 'prop-types',
                src: [
                    'prop-types.js'
                ],
                dest: '<%= paths.destination %>',
                expand: true
            },
            {
                cwd: '<%= paths.npm_root %>' + 'react/umd/',
                src: [
                    'react.development.js'
                ],
                dest: '<%= paths.destination %>',
                expand: true
            },
            {
                cwd: '<%= paths.npm_root %>' + 'react-dom/umd/',
                src: [
                    'react-dom.development.js'
                ],
                dest: '<%= paths.destination %>',
                expand: true
            }
        ]
    }
};