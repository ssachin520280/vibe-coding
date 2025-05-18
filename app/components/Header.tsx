import { Button } from '@/components/ui/button';

type Props = {
  onAddLesson: () => void;
};

export default function Header({ onAddLesson }: Props) {
  return (
    <div className="flex justify-between items-center">
      <div className="text-xl font-semibold">📅 This Week</div>
      <div className="space-x-2">
        <Button variant="outline">←</Button>
        <Button variant="outline">→</Button>
        <Button onClick={onAddLesson}>+ Add Lesson</Button>
      </div>
    </div>
  );
}
