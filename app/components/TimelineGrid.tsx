'use client';

import {
  DndContext,
  closestCenter,
  DragEndEvent,
} from '@dnd-kit/core';
import DroppableColumn from './DroppableColumn';
import LessonCard from './LessonCard';
import { useState } from 'react';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

type Lesson = {
  id: string;
  title: string;
  day: string;
};

export default function TimelineGrid() {
  const [lessons, setLessons] = useState<Lesson[]>([
    { id: '1', title: 'Math', day: 'Mon' },
    { id: '2', title: 'Science', day: 'Tue' },
    { id: '3', title: 'Art', day: 'Wed' },
  ]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeLesson = lessons.find((l) => l.id === active.id);
    if (!activeLesson || activeLesson.day === over.id) return;

    setLessons((prev) =>
      prev.map((lesson) =>
        lesson.id === active.id ? { ...lesson, day: over.id as string } : lesson
      )
    );
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-5 gap-4 mt-4">
        {days.map((day) => (
          <div key={day}>
            <div className="text-center font-semibold mb-2">{day}</div>
            <DroppableColumn id={day}>
              {lessons
                .filter((lesson) => lesson.day === day)
                .map((lesson) => (
                  <LessonCard
                    key={lesson.id}
                    id={lesson.id}
                    title={lesson.title}
                  />
                ))}
            </DroppableColumn>
          </div>
        ))}
      </div>
    </DndContext>
  );
}
