import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", production: 4000, efficiency: 2400 },
  { name: "Feb", production: 3000, efficiency: 1398 },
  { name: "Mar", production: 2000, efficiency: 9800 },
  { name: "Apr", production: 2780, efficiency: 3908 },
  { name: "May", production: 1890, efficiency: 4800 },
  { name: "Jun", production: 2390, efficiency: 3800 },
];

export const ProductionChart = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="name" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1a237e",
              border: "none",
              borderRadius: "8px",
            }}
          />
          <Line type="monotone" dataKey="production" stroke="#00acc1" strokeWidth={2} />
          <Line type="monotone" dataKey="efficiency" stroke="#00bcd4" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};