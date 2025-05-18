'use client';

import {
  DndContext,
  closestCenter,
  DragEndEvent,
} from '@dnd-kit/core';
import LessonCard from './LessonCard';
import { useState } from 'react';
import DroppableSlot from './DroppableSlot';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const hours = Array.from({ length: 9 }, (_, i) => i + 9); // 9AM to 17PM

type Lesson = {
  id: string;
  title: string;
  day: string;
  hour: number;
};

export default function TimelineGrid() {
  const [lessons, setLessons] = useState<Lesson[]>([
    { id: '1', title: 'Math', day: 'Mon', hour: 9 },
    { id: '2', title: 'Science', day: 'Tue', hour: 10 },
    { id: '3', title: 'Art', day: 'Wed', hour: 11 },
  ]);  

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
  
    const [newDay, newHourStr] = String(over.id).split('-');
    const newHour = parseInt(newHourStr);
  
    setLessons((prev) =>
      prev.map((lesson) =>
        lesson.id === active.id ? { ...lesson, day: newDay, hour: newHour } : lesson
      )
    );
  };  

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-6 gap-2">
  <div /> {/* Empty top-left cell */}
  {days.map((day) => (
    <div key={day} className="text-center font-bold">{day}</div>
  ))}

  {hours.map((hour) => (
    <>
      <div className="text-right pr-2 font-semibold">{hour}:00</div>
          {days.map((day) => {
            const slotId = `${day}-${hour}`;
            const lessonsInSlot = lessons.filter(
              (l) => l.day === day && l.hour === hour
            );

            return (
              <DroppableSlot key={slotId} id={slotId}>
                {lessonsInSlot.map((lesson) => (
                  <LessonCard key={lesson.id} id={lesson.id} title={lesson.title} />
                ))}
              </DroppableSlot>
            );
          })}
        </>
      ))}
    </div>
    </DndContext>
  );
}
