

const {Schema, model} = require("mongoose")

const taskSchema = new Schema({

  title: {type : String, required: true},
  description: {type: String, maxLenght: 500},
  project: {type: Schema.type.ObjectId, ref: "Project", required: true}
  
})


const Task = model("Task", taskSchema);
module.exports = Task