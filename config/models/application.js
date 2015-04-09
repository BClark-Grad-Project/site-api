var mongo  = require('mongoose');

var AppSchema = mongo.Schema({
    user:        {type: mongo.Schema.Types.ObjectId, ref:  'User', required: true},
    active:      {type: Boolean, 'default': true}
});

AppSchema.methods.getData = function(){
	return {
  	  id:          this._id,
	  user:        this.user,
	  active:      this.active
	};
};

module.exports = AppSchema;
