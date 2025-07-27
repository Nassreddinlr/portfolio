export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-slate-9 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-10 w-10 rounded-full bg-slate-1"></div>
        </div>
      </div>
    </div>
  );
}