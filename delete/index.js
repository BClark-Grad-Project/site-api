var App = require('./application');

module.exports.app    = App;

module.exports = function(Obj, cb){
	if(Obj){
		App({_id:Obj.id}, function(err, app){
			if(err) return cb(err, Obj);
			else return cb(null, app);
		});
	} else {
		return cb('!No Delete Item', null);
	}
};
