export type Lesson = {
  _id: string;
  title: string;
  hour: number;
  day: string;        // "Monday", "Tuesday", etc.
  userId: string;
  status?: "pending" | "completed" | "missed";
  icon?: string;
};