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
    
	var app = new App({
	    user:        user,
	    name:        name,
	    description: description,
	    token:       token,
	    hash:        hash
	});	
	
	app.save(function (err) {
        if (err){
        	if(getErrorField(err) == 'token') return createApp(Obj);
        	else return cb(err, null);
        }
        
        var newApp = app.getData();
        newApp.hash = app.getHash();
        
        return cb(null, newApp);
    });
};

module.exports = function(Obj, cb){
    if(!Obj.user){ return cb({type:'!No API Owner'}, Obj);}
    createApp(Obj, function(err, app){
    	if(err) return cb(err, Obj);
    	else return cb(null, app);
    });
};