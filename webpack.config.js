const path = require('path');

module.exports = {
    entry: './public/js/index.js',
    output: {
        filename: 'scripts.js',
        path: path.resolve(__dirname, 'public', 'js'),
    },
    mode: "development"
};
