var mongoose=require("mongoose");
var userSchema=require("./userSchema.js")

var User=mongoose.model("usermsgs",userSchema);

module.exports=User;