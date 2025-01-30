import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardMetricCard } from "@/components/DashboardMetricCard";
import { ProductionChart } from "@/components/ProductionChart";
import { Activity, Battery, Box, Cpu, DollarSign, Gauge } from "lucide-react";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-secondary/5">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Manufacturing Dashboard</h1>
              <p className="text-muted-foreground">Real-time operational insights</p>
            </div>
            <SidebarTrigger />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <DashboardMetricCard
              title="Production Rate"
              value="892 units/hr"
              icon={<Gauge className="h-4 w-4 text-accent" />}
              trend={{ value: 12, isPositive: true }}
            />
            <DashboardMetricCard
              title="Equipment Efficiency"
              value="94.5%"
              icon={<Cpu className="h-4 w-4 text-accent" />}
              trend={{ value: 3, isPositive: true }}
            />
            <DashboardMetricCard
              title="Energy Usage"
              value="1,284 kWh"
              icon={<Battery className="h-4 w-4 text-accent" />}
              trend={{ value: 2.5, isPositive: false }}
            />
            <DashboardMetricCard
              title="Inventory Level"
              value="12,453 units"
              icon={<Box className="h-4 w-4 text-accent" />}
            />
            <DashboardMetricCard
              title="Maintenance Cost"
              value="$4,385"
              icon={<DollarSign className="h-4 w-4 text-accent" />}
              trend={{ value: 8, isPositive: false }}
            />
            <DashboardMetricCard
              title="Active Orders"
              value="284"
              icon={<Activity className="h-4 w-4 text-accent" />}
              trend={{ value: 15, isPositive: true }}
            />
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/20">
              <h2 className="text-xl font-semibold mb-4">Production Trends</h2>
              <ProductionChart />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;