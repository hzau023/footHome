var mongoose=require("mongoose");
var loadSchema=require("./loadSchema")

var Load=mongoose.model("loadbanks",loadSchema);

module.exports=Load;