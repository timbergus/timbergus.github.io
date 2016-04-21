require('babel-polyfill');
require('babel-core/register');

var glob = require('glob');

glob(__dirname + '/src/**/_test_', function (err, files) {
    files.map(function (file) {
        require(file);
    });
});
