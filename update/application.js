var App = require('./../config').app;
var uuid = require('node-uuid');

module.exports = function(search, updateData, cb){	
	App.findOneAndUpdate(search, updateData, {}, function(err, app){
		if(err){return cb(err, null);}
		else return cb(null, app.getData());
	});
};

module.exports.rekey = function(Obj, cb){
	var hasher = new App();
	var token  = uuid.v4(); 
	var hash   = hasher.generateHash(token);	
	var updateData = {
		hash: hash,
		token: token
	};
	var search = {
		_id:Obj.id	
	};
	
	App.findOneAndUpdate(search, updateData, {}, function(err, app){
		if(err){return cb(err, null);}
		else {
			var newKey = app.getData();
			
			newKey.hash = app.getHash();
			
			return cb(null, newKey);
		}
	});
};