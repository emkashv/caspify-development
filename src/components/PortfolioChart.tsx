"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { date: "Jan", value: 24500 },
  { date: "Feb", value: 28300 },
  { date: "Mar", value: 26800 },
  { date: "Apr", value: 31200 },
  { date: "May", value: 35600 },
  { date: "Jun", value: 33400 },
  { date: "Jul", value: 38900 },
  { date: "Aug", value: 42300 },
  { date: "Sep", value: 39800 },
  { date: "Oct", value: 45200 },
  { date: "Nov", value: 48600 },
  { date: "Dec", value: 52400 },
];

export function PortfolioChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(264, 45%, 60%)" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(264, 45%, 60%)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="date"
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
        />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-card p-3 shadow-lg">
                  <p className="text-sm font-medium">${payload[0].value?.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">{payload[0].payload.date}</p>
                </div>
              );
            }
            return null;
          }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="hsl(264, 45%, 60%)"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorValue)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
