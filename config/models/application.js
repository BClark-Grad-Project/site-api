var mongo  = require('mongoose');
var bcrypt = require('bcrypt');

var AppSchema = mongo.Schema({
    user:        {type: mongo.Schema.Types.ObjectId, ref:  'User', required: true},
    name:        {type: String, required: true},
    description: {type: String},
    creadted:    {type: Date, 'default':new Date()},
    token:       {type: String, unique:true, required: true},
    hash:        {type: String, required: true},
    active:      {type: Boolean, 'default': true, required: true}
});

AppSchema.methods.generateHash = function(hash) {
    return bcrypt.hashSync(hash, bcrypt.genSaltSync(8));
};

AppSchema.methods.validToken = function(token) {	
    return bcrypt.compareSync(token, this.hash);
};

AppSchema.methods.getData = function(){
	return {
  	  id:          this._id,
	  user:        this.user,
	  name:        this.name,
	  description: this.description,
	  created:     this.created,
	  token:       this.token,
	  active:      this.active
	};
};

AppSchema.methods.getHash = function(){
	return {
  	  id:          this._id,
  	  hash:        this.hash
	};
};

AppSchema.methods.getToken = function(){
	return {
  	  id:          this._id,
  	  token:       this.token
	};
};

  	  
module.exports = AppSchema;
