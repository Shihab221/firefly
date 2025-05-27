'use client';

import { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';

export default function LiveTempChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const time = now.toLocaleTimeString().split(' ')[0]; // HH:MM:SS
      const temp = Math.floor(20 + Math.random() * 10); // 20–30°C

      setData(prev => {
        const updated = [...prev, { time, temp }];
        return updated.length > 6 ? updated.slice(-6) : updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex shadow-md p-4">
      <div className="bg-white rounded-xl  w-full ">
        <h2 className="text-xl font-semibold mb-4">Live Temperature (30s Window)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={[20, 40]} tickCount={5} label={{ value: '°C', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="temp"
              stroke="#00d492"
              strokeWidth={2}
              dot={{ r: 3 }}
              isAnimationActive={false} // Important: disables full redraw
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
