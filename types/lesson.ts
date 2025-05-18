export type Lesson = {
  _id: string;
  title: string;
  hour: number;
  day: string;        // "Monday", "Tuesday", etc.
  status?: "pending" | "completed" | "missed";
  icon?: string;
};