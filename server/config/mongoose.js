var mongoose = require('mongoose');
var fs = require('fs');
var models_path = __dirname + '/../models';
console.log('connecting to DB...');

mongoose.connect('mongodb://localhost/MeanAPI');

mongoose.Promise = global.Promise;

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js')!=-1){
		console.log('loading ' + file + '...');
		require(models_path + '/' + file)
	}
})