var App = require('./../config').app;

module.exports = function(search, updateData, cb){	
	App.findOneAndUpdate(search, updateData, {}, function(err, app){
		if(err){return cb(err, null);}
		else return cb(null, app.getData());
	});
};