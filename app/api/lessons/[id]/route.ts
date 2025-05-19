import { connectToDB } from '@/lib/db';
import Lesson from '@/lib/models/lesson';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await connectToDB();
  const data = await req.json();
  const { id } = await params;
  const lesson = await Lesson.findByIdAndUpdate(id, data, { new: true });
  return Response.json(lesson);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await connectToDB();
  await Lesson.findByIdAndDelete(params.id);
  return Response.json({ ok: true });
}
