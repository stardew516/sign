var fs = require('fs');

// nodejs 读json文件
var path = './static/database/';
exports.readFile = function(Filename) {
  var file = path + Filename + '.json';
  var result = fs.readFileSync(file);
  try {
    result = JSON.parse(result);
  } catch(e) {
    result = JSON.parse('[]');
  }
  console.log(111, result, 111);
  return result;
};

exports.writeData = function(data, Filename) {
  var filename = path + Filename + '.json';
  var data = data || [];
  fs.writeFileSync(filename, JSON.stringify(data));
};