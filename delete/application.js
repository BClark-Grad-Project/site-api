var App = require('./../config').app;

module.exports = function(id, cb){
	User
		.find()
		.remove({_id: id})
		.exec(function(err){
			if(err){return cb(err, null);}
			
			cb(null, 'Deleted');
		});
};