var App = require('./../config').app;

module.exports = function(Obj, cb){
    if(!Obj.user){ return cb('!No API Owner', Obj);}

    var user      = Obj.user;
    
	var app = new App({
	    user:      user
	    });	
	
	app.save(function (err) {
        if (err){
        	return cb(err, null);
        }
        return cb(null, app.getData());
    });
};