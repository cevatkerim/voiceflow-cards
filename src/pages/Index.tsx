import { VoiceDock } from "@/components/VoiceDock";
import { InfoCard } from "@/components/InfoCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 pb-24">
        <div className="space-y-4">
          <InfoCard title="Welcome">
            <p className="text-muted-foreground">
              Click the microphone icon to start speaking with your AI assistant.
            </p>
          </InfoCard>
        </div>
      </div>
      <VoiceDock />
    </div>
  );
};

export default Index;