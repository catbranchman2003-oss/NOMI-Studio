export default function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-px bg-fern/20 ${className}`} />
  );
}
