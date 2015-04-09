var App = require('./../config').app;

module.exports = function(Obj, cb){
	App
		.findOne(Obj)
		.exec(function(err, data){
			if(err) return cb(err, Obj); 
			else if(!data) return cb('!No application found', Obj);
			else return cb(null, data.getData());
		});	
};