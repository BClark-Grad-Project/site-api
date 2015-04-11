var App = require('./../config').app;
var uuid = require('node-uuid');

//This parse a response to see why it could not be created
var getErrorField = function(err){
	var field = err.message.split('.$')[1];
	
	field = field.split(' dup key')[0];
	field = field.substring(0, field.lastIndexOf('_')); 
	
	return field;
};

var createApp = function(Obj, cb){

	var hasher = new App();
	var token  = uuid.v4(); 
	var hash   = hasher.generateHash(token);
	
    var user        = Obj.user;
    var name        = Obj.name;
    var description = Obj.description;
    var created     = Obj.created;
    
	var app = new App({
	    user:        user,
	    name:        name,
	    description: description,
	    created:     created,
	    token:       token,
	    hash:        hash
	});	
	
	app.save(function (err) {
        if (err){
        	console.log('!app creation err', err);
        	if(getErrorField(err) == 'token') return createApp(Obj);
        	else return cb(err, null);
        }
        return cb(null, app.getData());
    });
};

module.exports = function(Obj, cb){
    if(!Obj.user){ return cb('!No API Owner', Obj);}
    createApp(Obj, function(err, app){
    	if(err) return cb(err, Obj);
    	else return cb(null, app);
    });
};