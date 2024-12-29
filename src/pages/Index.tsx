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

          <InfoCard title="AI Response" className="bg-primary/5">
            <p className="text-muted-foreground">
              Hi, how can I help you today?
            </p>
          </InfoCard>

          <InfoCard title="Authentication Required" className="bg-secondary/5">
            <p className="text-muted-foreground">
              Please provide your email or phone number to view your charging sessions.
            </p>
          </InfoCard>

          <InfoCard title="Recent Charging Sessions" className="bg-primary/10">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <div className="text-left">
                  <p className="font-medium">Tesla Supercharger - Mountain View</p>
                  <p className="text-sm text-muted-foreground">March 15, 2024 - 2:30 PM</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-primary">45 kWh</p>
                  <p className="text-sm text-muted-foreground">$12.50</p>
                </div>
              </div>

              <div className="flex justify-between items-center border-b border-border pb-2">
                <div className="text-left">
                  <p className="font-medium">Home Charging</p>
                  <p className="text-sm text-muted-foreground">March 13, 2024 - 10:00 PM</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-primary">30 kWh</p>
                  <p className="text-sm text-muted-foreground">$7.50</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-left">
                  <p className="font-medium">ChargePoint - San Francisco</p>
                  <p className="text-sm text-muted-foreground">March 10, 2024 - 1:15 PM</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-primary">25 kWh</p>
                  <p className="text-sm text-muted-foreground">$8.75</p>
                </div>
              </div>
            </div>
          </InfoCard>
        </div>
      </div>
      <VoiceDock />
    </div>
  );
};

export default Index;