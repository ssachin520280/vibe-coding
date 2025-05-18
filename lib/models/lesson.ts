import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema({
  title: String,
  startTime: String,
  endTime: String,
  day: String,
  status: String,
  icon: String,
});

export const Lesson =
  mongoose.models.Lesson || mongoose.model("Lesson", LessonSchema);