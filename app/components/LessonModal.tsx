type Props = {
  onClose: () => void;
};

export default function LessonModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg w-80">
        <div className="text-lg font-semibold mb-4">Add Lesson</div>
        <div className="text-sm text-muted-foreground">Modal content here...</div>
        <button onClick={onClose} className="mt-4 text-blue-600 underline">Close</button>
      </div>
    </div>
  );
}
