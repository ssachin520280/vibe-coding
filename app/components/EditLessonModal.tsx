'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Lesson } from '@/types/lesson';

type Props = {
  lesson: Lesson;
  onClose: () => void;
  onSave: (updated: Lesson) => void;
  onDelete: (id: string) => void;
};

export default function EditLessonModal({ lesson, onClose, onSave, onDelete }: Props) {
  const [title, setTitle] = useState(lesson.title);

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Lesson</DialogTitle>
        </DialogHeader>

        <Input value={title} onChange={(e) => setTitle(e.target.value)} />

        <div className="flex justify-between mt-4 gap-2">
          <Button variant="destructive" onClick={() => onDelete(lesson._id)}>
            Delete
          </Button>
          <Button onClick={() => onSave({ ...lesson, title })}>
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
