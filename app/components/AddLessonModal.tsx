'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onAdd: (lesson: any) => void;
  onClose: () => void;
  userId: string;
};

export default function AddLessonModal({ onAdd, onClose, userId }: Props) {
  const [title, setTitle] = useState('');
  const [hour, setHour] = useState(9);
  const [day, setDay] = useState(0);

  async function handleSubmit() {
    const res = await fetch('/api/lessons', {
      method: 'POST',
      body: JSON.stringify({ title, hour, day, userId }),
    });
    const data = await res.json();
    onAdd(data);
    onClose();
  }

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Lesson</DialogTitle>
        </DialogHeader>
        <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="mb-2" />
        <div className="flex gap-2 mb-2">
          <Input
            type="number"
            placeholder="Hour (0-23)"
            value={hour}
            onChange={(e) => setHour(Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="Day (0=Mon)"
            value={day}
            onChange={(e) => setDay(Number(e.target.value))}
          />
        </div>
        <Button onClick={handleSubmit} disabled={!title}>Add</Button>
      </DialogContent>
    </Dialog>
  );
}
