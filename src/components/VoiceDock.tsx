import { Mic, StopCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const VoiceDock = () => {
  const [isListening, setIsListening] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4">
      <div className="mx-auto max-w-2xl bg-card rounded-full p-4 shadow-lg flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className={cn(
            "w-3 h-3 rounded-full",
            isConnected ? "bg-green-500" : "bg-red-500"
          )} />
          <span className="text-sm text-muted-foreground">
            {isConnected ? "Connected" : "Disconnected"}
          </span>
        </div>
        
        <button
          onClick={toggleListening}
          className={cn(
            "p-4 rounded-full transition-all duration-300",
            isListening ? "bg-primary/20" : "bg-secondary hover:bg-secondary/80"
          )}
        >
          {isListening ? (
            <StopCircle className="w-6 h-6 text-primary animate-pulse" />
          ) : (
            <Mic className={cn(
              "w-6 h-6",
              isListening ? "text-primary animate-glow" : "text-primary"
            )} />
          )}
        </button>
      </div>
    </div>
  );
};