import { VoiceDock } from "@/components/VoiceDock";
import { InfoCard } from "@/components/InfoCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Index = () => {
  const chargingData = [
    {
      location: "Tesla Supercharger",
      date: "Mar 15",
      energy: 45,
      cost: 12.50
    },
    {
      location: "Home",
      date: "Mar 13",
      energy: 30,
      cost: 7.50
    },
    {
      location: "ChargePoint",
      date: "Mar 10",
      energy: 25,
      cost: 8.75
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 pb-24">
        <div className="space-y-6">
          <InfoCard title="Recent Charging Activity" className="bg-white shadow-lg">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chargingData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" orientation="left" stroke="#22D3EE" />
                  <YAxis yAxisId="right" orientation="right" stroke="#94A3B8" />
                  <Tooltip />
                  <Bar yAxisId="left" dataKey="energy" fill="#22D3EE" name="Energy (kWh)" />
                  <Bar yAxisId="right" dataKey="cost" fill="#94A3B8" name="Cost ($)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </InfoCard>

          <InfoCard title="Charging Sessions Details" className="bg-white shadow-lg">
            <div className="space-y-4">
              {chargingData.map((session, index) => (
                <div key={index} className="flex justify-between items-center border-b border-border pb-2 last:border-0">
                  <div className="text-left">
                    <p className="font-medium text-gray-900">{session.location}</p>
                    <p className="text-sm text-gray-500">{session.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-cyan-500">{session.energy} kWh</p>
                    <p className="text-sm text-gray-500">${session.cost.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>
      </div>
      <VoiceDock />
    </div>
  );
};

export default Index;