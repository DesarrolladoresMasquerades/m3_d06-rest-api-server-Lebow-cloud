

const {Schema, model} = require("mongoose")

const projectSchema = new Schema({

  title: {type : String, required: true},
  description: {type: String, maxLenght: 500},
  owner: {type: Schema.types.ObjectId, ref: "User"},
  tasks : [{type: Schema.types.ObjectId, ref: "Task", default: []}]
})


const Project = model("Project", projectSchema);
module.exports = Project