'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import TimelineGrid from './components/TimelineGrid';
import LessonModal from './components/LessonModal';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/sonner';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground p-4">
      {/* Top Bar */}
      <Header onAddLesson={() => setIsModalOpen(true)} />

      {/* Timeline View */}
      <div className="mt-6 overflow-x-auto">
        <TimelineGrid />
      </div>

      {/* Modal for adding/editing lesson */}
      {isModalOpen && <LessonModal onClose={() => setIsModalOpen(false)} />}

      {/* Toast Notifications */}
      <Toaster />
    </main>
  );
}
