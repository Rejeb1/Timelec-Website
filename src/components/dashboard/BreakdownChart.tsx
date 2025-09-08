import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breakdown, CAUSE_LABELS, CAUSE_COLORS } from "@/types/breakdown";

interface BreakdownChartProps {
  breakdowns: Breakdown[];
}

export function BreakdownChart({ breakdowns }: BreakdownChartProps) {
  const data = Object.entries(CAUSE_LABELS).map(([cause, label]) => {
    const count = breakdowns.filter(b => b.cause === parseInt(cause)).length;
    const percentage = breakdowns.length > 0 ? (count / breakdowns.length) * 100 : 0;
    
    return {
      name: label,
      value: count,
      percentage: percentage.toFixed(1),
      cause: parseInt(cause),
      color: `hsl(var(--${CAUSE_COLORS[parseInt(cause) as keyof typeof CAUSE_COLORS]}))`
    };
  }).filter(item => item.value > 0);

  // Custom label renderer to improve readability and adjust positions with original colors
  const renderCustomizedLabel = ({ name, percentage, cx, cy, midAngle, innerRadius, outerRadius, index }: any) => {
    const RADIAN = Math.PI / 180;
    let radius = innerRadius + (outerRadius - innerRadius) * 1.2;
    let x, y;
    let fillColor = "#000000"; // Default black text

    // Set fill color based on CAUSE_COLORS
    if (name === "Fausse Alerte") fillColor = `hsl(var(--${CAUSE_COLORS[0]}))`; // Gray
    else if (name === "Main-d'œuvre") fillColor = `hsl(var(--${CAUSE_COLORS[1]}))`; // Purple
    else if (name === "Milieu") fillColor = `hsl(var(--${CAUSE_COLORS[2]}))`; // Green
    else if (name === "Matière") fillColor = `hsl(var(--${CAUSE_COLORS[3]}))`; // Orange
    else if (name === "Méthode") fillColor = `hsl(var(--${CAUSE_COLORS[4]}))`; // Blue

    // Adjust position based on name to move "Milieu" far left relative to "Méthode"
    if (name === "Milieu") {
      radius += 50; // Move further out
      const xOffset = -120; // Move far left
      x = cx + (radius * Math.cos(-midAngle * RADIAN)) + xOffset;
      y = cy + radius * Math.sin(-midAngle * RADIAN);
    } else if (name === "Méthode") {
      x = cx + radius * Math.cos(-midAngle * RADIAN);
      y = cy + radius * Math.sin(-midAngle * RADIAN);
    } else {
      x = cx + radius * Math.cos(-midAngle * RADIAN);
      y = cy + radius * Math.sin(-midAngle * RADIAN);
    }

    return (
      <text
        x={x}
        y={y}
        fill={fillColor}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize={percentage > 5 ? 14 : 12}
      >
        {`${name}: ${percentage}%`}
      </text>
    );
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-card p-3 rounded-lg shadow-lg border">
          <p className="font-medium">{data.name}</p>
          <p className="text-sm text-muted-foreground">
            {data.value} panne{data.value > 1 ? 's' : ''} ({data.percentage}%)
          </p>
        </div>
      );
    }
    return null;
  };

  if (data.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Répartition des Pannes par Cause (5M)</CardTitle>
          <CardDescription>Analyse statistique des causes de pannes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64 text-muted-foreground">
            Aucune donnée à afficher
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Répartition des Pannes par Cause (5M)</CardTitle>
        <CardDescription>
          Analyse statistique des causes de pannes sur {breakdowns.length} enregistrement{breakdowns.length > 1 ? 's' : ''}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={130}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                formatter={(value, entry: any) => `${value} (${entry.payload.value})`}
                wrapperStyle={{ fontSize: 14, color: '#000000' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}