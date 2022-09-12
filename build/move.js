const path = require('path');
const shell = require('shelljs');
const resolve = _path => path.resolve(__dirname, '../', _path);

// 强制更新
shell.cp('-Rf', resolve('dist/uu-console.umd.js'), resolve('examples/js'));
shell.cp('-Rf', resolve('dist/size/size.umd.js'), resolve('examples/js'));
shell.cp('-Rf', resolve('dist/theme/theme.umd.js'), resolve('examples/js'));
