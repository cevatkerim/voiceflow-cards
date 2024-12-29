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

  const contractData = [
    {
      id: "CNT-001",
      type: "Home Charging Plan",
      status: "Active",
      startDate: "Jan 1, 2024",
      rate: "$0.12/kWh",
      features: ["Off-peak discounts", "Smart charging", "24/7 support"]
    },
    {
      id: "CNT-002",
      type: "Public Charging Network",
      status: "Active",
      startDate: "Feb 15, 2024",
      rate: "$0.35/kWh",
      features: ["Nationwide access", "Premium charging speeds", "Mobile app support"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
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
          </div>

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

          <InfoCard title="Active Contracts" className="bg-white shadow-lg">
            <div className="space-y-6">
              {contractData.map((contract, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{contract.type}</h4>
                      <p className="text-sm text-gray-500">Contract ID: {contract.id}</p>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      {contract.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Start Date</p>
                      <p className="font-medium">{contract.startDate}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Rate</p>
                      <p className="font-medium">{contract.rate}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-500 mb-2">Features:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {contract.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-700">{feature}</li>
                      ))}
                    </ul>
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