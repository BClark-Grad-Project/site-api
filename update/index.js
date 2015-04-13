var App = require('./application');

module.exports = function(Obj, cb){
	if(Obj){
		App({_id:Obj.id}, Obj, function(err, app){
			if(err) return cb(err, Obj);
			else return cb(null, app);
		});		
	} else {
		return cb({type:'!No UPDATE Item'}, null);
	}
};

module.exports.rekey = function(Obj, cb){
	if(Obj){
		App.rekey(Obj, function(err, app){
			if(err) return cb(err, Obj);
			else return cb(null, app);
		});		
	} else {
		return cb({type:'!No App to Re-key.'}, null);
	}
};

module.exports.app    = App;