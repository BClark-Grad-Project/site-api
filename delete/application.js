var App = require('./../config').app;

module.exports = function(Obj, cb){
	App
		.find()
		.remove(Obj)
		.exec(function(err){
			if(err){return cb(err, null);}
			
			cb(null, {response:'Deleted'});
		});
};