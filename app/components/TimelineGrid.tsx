'use client';

import {
  DndContext,
  closestCenter,
  DragEndEvent,
} from '@dnd-kit/core';
import LessonCard from './LessonCard';
import { useState } from 'react';
import DroppableSlot from './DroppableSlot';
import EditLessonModal from './EditLessonModal';
import { Lesson } from '@/types/lesson';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const hours = Array.from({ length: 9 }, (_, i) => i + 9); // 9AM to 17PM

export default function TimelineGrid() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([
    { _id: '1', title: 'Math', day: 'Mon', hour: 9 },
    { _id: '2', title: 'Science', day: 'Tue', hour: 10 },
    { _id: '3', title: 'Art', day: 'Wed', hour: 11 },
  ]);  

  const handleLessonClicked = (lesson: Lesson) => {
    console.log("clciekd")
    setSelectedLesson(lesson)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
  
    const [newDay, newHourStr] = String(over.id).split('-');
    const newHour = parseInt(newHourStr);
  
    setLessons((prev) =>
      prev.map((lesson) =>
        lesson._id === active.id ? { ...lesson, day: newDay, hour: newHour } : lesson
      )
    );
  };  

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      {selectedLesson && (
        <EditLessonModal
          lesson={selectedLesson}
          onClose={() => setSelectedLesson(null)}
          onSave={(updatedLesson) => {
            setLessons((prev: Lesson[]) =>
              prev.map((l) => (l._id === updatedLesson._id ? updatedLesson : l))
            );
            setSelectedLesson(null);
          }}
          onDelete={(id) => {
            setLessons((prev) => prev.filter((l) => l._id !== id));
            setSelectedLesson(null);
          }}
        />
      )}
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
                      <LessonCard key={lesson._id} id={lesson._id} title={lesson.title} onClick={() => handleLessonClicked(lesson)} />
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
