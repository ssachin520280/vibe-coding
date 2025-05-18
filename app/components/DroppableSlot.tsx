'use client';

import { useDroppable } from '@dnd-kit/core';
import { motion } from 'framer-motion';

type Props = {
  id: string;
  children: React.ReactNode;
};

export default function DroppableSlot({ id, children }: Props) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <motion.div
      layout
      ref={setNodeRef}
      initial={false}
      animate={{
        backgroundColor: isOver ? '#d1fae5' : 'rgba(255,255,255,0.05)',
        transition: { duration: 0.2 },
      }}
      className="min-h-[60px] p-2 rounded-md border border-muted"
    >
      {children}
    </motion.div>
  );
}
