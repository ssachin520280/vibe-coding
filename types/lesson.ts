export type Lesson = {
  _id: string;
  title: string;
  startTime: string;  // ISO string
  endTime: string;
  day: string;        // "Monday", "Tuesday", etc.
  status: "pending" | "completed" | "missed";
  icon?: string;
};