// app/api/lessons/route.ts
import { connectToDB } from '@/lib/db';
import Lesson from '@/lib/models/lesson';

export async function GET(req: Request) {
  await connectToDB();
  const userId = req.headers.get('x-user-id')!;
  const lessons = await Lesson.find({ userId });
  return Response.json(lessons);
}

export async function POST(req: Request) {
  await connectToDB();
  const body = await req.json();
  const lesson = await Lesson.create(body);
  return Response.json(lesson);
}
