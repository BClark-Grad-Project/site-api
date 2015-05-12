var App = require('./application');

module.exports.app    = App;

module.exports = function(Obj, cb){
	if(Obj){
		if(Obj.user){
			App({user:Obj.user}, function(err, app){
				if(err) return cb(err, Obj);
				else return cb(null, app);
			});
		} else if(Obj.token){
			App(Obj, function(err, app){
				if(err) return cb(err, Obj);
				else return cb(null, app);
			});
		} else {
			App({_id:Obj.id}, function(err, app){
				if(err) return cb(err, Obj);
				else return cb(null, app);
			});
		}
	} else {
		return cb({type:'!No READ Item'}, Obj);
	}
};
