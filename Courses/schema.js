import mongoose from "mongoose";
const courseSchema = mongoose.Schema(
  {
    id: String,
    name: String,
    number: String,
    startDate: Date,
    endDate: Date,
    description: String,
    image: String,
  },
  { collection: "courses" }
);
export default courseSchema;