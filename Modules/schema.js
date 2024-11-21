import mongoose from "mongoose";
const moduleSchema = mongoose.Schema(
  {
    id: String,
    name: String,
    credits: Number,
    description: String,
    course: String,
    lessons: [Object],
  },
  { collection: "modules" }
);
export default moduleSchema;