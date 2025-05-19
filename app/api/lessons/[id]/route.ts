import { connectToDB } from '@/lib/db';
import Lesson from '@/lib/models/lesson';

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }>  }) {
  await connectToDB();
  const data = await req.json();
  const { id } = await params;
  const lesson = await Lesson.findByIdAndUpdate(id, data, { new: true });
  return Response.json(lesson);
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }>  }) {
  await connectToDB();
  const { id } = await params;
  await Lesson.findByIdAndDelete(id);
  return Response.json({ ok: true });
}
