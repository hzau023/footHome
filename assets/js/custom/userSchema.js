var mongoose=require("mongoose")

var userSchema=mongoose.Schema({
	name:String,
	pwd:String,
	nickname:String
});

module.exports=userSchema;