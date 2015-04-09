var App = require('./application');

module.exports.app    = App;

module.exports = function(Obj, cb){
	if(Obj){
		
	} else {
		return cb('!No UPDATE Item', null);
	}
};
