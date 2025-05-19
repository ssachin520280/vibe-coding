'use client';

import { useState } from 'react';
import Header from './components/Header';
import TimelineGrid from './components/TimelineGrid';
import LessonModal from './components/LessonModal';
import { Toaster } from '@/components/ui/sonner';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground p-4">
      {/* Top Bar */}
      <Header />

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
