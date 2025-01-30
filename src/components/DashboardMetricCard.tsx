import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export const DashboardMetricCard = ({ title, value, icon, trend }: MetricCardProps) => {
  return (
    <Card className="bg-secondary/10 border-secondary/20">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <p className={`text-xs ${trend.isPositive ? "text-green-500" : "text-red-500"} mt-1`}>
            {trend.isPositive ? "↑" : "↓"} {trend.value}%
          </p>
        )}
      </CardContent>
    </Card>
  );
};