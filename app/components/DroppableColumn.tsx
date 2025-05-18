// /app/components/DroppableColumn.tsx
'use client';

import { useDroppable } from '@dnd-kit/core';

type Props = {
  id: string;
  children: React.ReactNode;
};

export default function DroppableColumn({ id, children }: Props) {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`min-h-[600px] p-2 border rounded-md transition-all ${
        isOver ? 'bg-green-100 dark:bg-green-900' : 'bg-muted'
      }`}
    >
      {children}
    </div>
  );
}
