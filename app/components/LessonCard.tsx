'use client';

import { useDraggable } from '@dnd-kit/core';
import { motion } from 'framer-motion';

type Props = {
  id: string;
  title: string;
};

export default function LessonCard({ id, title }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      layout
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.03, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
      whileTap={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-white dark:bg-gray-800 text-black dark:text-white p-2 rounded-md border shadow-sm cursor-grab active:cursor-grabbing select-none"
    >
      {title}
    </motion.div>
  );
}
