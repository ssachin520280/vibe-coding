'use client';

import {
  DndContext,
  closestCenter,
  DragEndEvent,
} from '@dnd-kit/core';
import LessonCard from './LessonCard';
import { useEffect, useState } from 'react';
import DroppableSlot from './DroppableSlot';
import EditLessonModal from './EditLessonModal';
import { Lesson } from '@/types/lesson';
import { Button } from '@/components/ui/button';
import AddLessonModal from './AddLessonModal';
import { Plus } from 'lucide-react';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const hours = Array.from({ length: 9 }, (_, i) => i + 9); // 9AM to 17PM

export default function TimelineGrid() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);  

  const handleLessonClicked = (lesson: Lesson) => {
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

    fetch(`/api/lessons/${active.id}`, {
      method: 'PUT',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({ day: newDay, hour: newHour }),
    }).catch((error) => {
      console.error('Failed to update lesson in the database:', error);
    });
  };  

  useEffect(() => {
    fetch('/api/lessons', {
      headers: { 'x-user-id': "1" } // replace it with userId variable
    })
      .then(res => res.json())
      .then((res) => {
        console.log(res);
        setLessons(res);
      });
  }, []);
  

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      {isAddModalOpen && (
        <AddLessonModal
          userId={"1"} // TODO: replace with userId variable
          onClose={() => setIsAddModalOpen(false)}
          onAdd={(newLesson) => setLessons((prev) => [...prev, newLesson])}
        />
      )}
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
      <Button
        onClick={() => setIsAddModalOpen(true)}
        className="fixed bottom-4 right-4 z-50"
        size="icon"
        variant="default"
      >
        <Plus />
      </Button>
    </DndContext>
  );
}
