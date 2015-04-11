var App = require('./../config').app;

module.exports = function(Obj, cb){
	App
		.find(Obj)
		.exec(function(err, data){
			if(err) return cb(err, Obj); 
			else if(!data) return cb({type:'!No applications found'}, Obj);
			var apps = [];
			for(var i in data){
				apps.push(data[i].getData());
			}
			return cb(null, apps);
		});	
};

module.exports.findOne = function(Obj, cb){
	App
		.findOne(Obj)
		.exec(function(err, data){
			if(err) return cb(err, Obj); 
			else if(!data) return cb({type:'!No application found'}, Obj);
			else return cb(null, data.getData());
		});	
};