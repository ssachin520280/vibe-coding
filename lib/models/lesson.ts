import mongoose from 'mongoose';

const LessonSchema = new mongoose.Schema({
  title: String,
  hour: Number,
  day: Number,
  userId: String, // user-specific
  status: {
    type: String,
    enum: ['missed', 'completed', 'pending'],
    required: false
  },
  icon: {
    type: String,
    required: false
  }
});

export default mongoose.models.Lesson || mongoose.model('Lesson', LessonSchema);
