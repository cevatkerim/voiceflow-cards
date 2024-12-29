import { cn } from "@/lib/utils";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const InfoCard = ({ title, children, className }: InfoCardProps) => {
  return (
    <div className={cn(
      "bg-card p-6 rounded-lg shadow-lg animate-fade-up",
      className
    )}>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
};