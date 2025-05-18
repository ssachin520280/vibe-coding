export default function TimelineGrid() {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="text-right pr-2 text-sm text-muted-foreground">
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="h-20 border-b">
            {8 + i}:00
          </div>
        ))}
      </div>

      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
        <div key={day} className="flex flex-col border rounded-lg bg-muted/20">
          <div className="text-center font-medium py-1 border-b">{day}</div>
          {/* Placeholder time slots */}
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="h-20 border-b hover:bg-accent transition" />
          ))}
        </div>
      ))}
    </div>
  );
}
