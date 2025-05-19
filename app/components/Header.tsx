import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="text-xl font-semibold">📅 This Week</div>
      <div className="space-x-2">
        <Button variant="outline">←</Button>
        <Button variant="outline">→</Button>
      </div>
    </div>
  );
}
