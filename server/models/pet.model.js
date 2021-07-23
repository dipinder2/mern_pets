const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
	name:{
		type:String,
		required:[true,"name should be given"],
		unique:[true,"name already exists"],
		minLength:[3,"must also be more than 2 characters"]
	},
	type:{
		type:String,
		required:[true,"type should be given"],
		minLength:[3,"must also be more than 2 characters"]
	},
	description:{
		type:String,
		required:[true,"description should be given"],
		minLength:[3,"must also be more than 2 characters"]
	},
	likes:{
		type:Number,
		default:0
	},
	skill1:{
	type:String
	},
	skill2:{
	type:String
	},
	skill3:{
	type:String
	}

});

const Pet = mongoose.model("Pets", petSchema);

module.exports = Pet;