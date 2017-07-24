var mongoose=require("mongoose")

var loadSchema=mongoose.Schema({
	img:String,
	index:Number,
	msg:String
});

module.exports=loadSchema;