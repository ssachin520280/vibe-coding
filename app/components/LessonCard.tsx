'use client';

import { useDraggable } from '@dnd-kit/core';

type Props = {
  id: string;
  title: string;
};

export default function LessonCard({ id, title }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="bg-blue-600 text-white rounded-lg p-2 cursor-grab active:cursor-grabbing transition shadow-md"
      style={{
        transform: transform
          ? `translate(${transform.x}px, ${transform.y}px)`
          : undefined,
      }}
    >
      {title}
    </div>
  );
}
