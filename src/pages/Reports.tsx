import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { FileText, Download, TrendingUp, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { saveAs } from "file-saver";

export default function Reports() {
  const monthlyData = [
    { month: "Mai", interventions: 605, preventive: 182, corrective: 424 },
    { month: "Juin", interventions: 460, preventive: 138, corrective: 322 },
    { month: "Juillet", interventions: 634, preventive: 189, corrective: 445 },
    { month: "Aout", interventions: 150, preventive: 54, corrective: 106 },
  ];

  const statusData = [
    { name: "Complétées", value: 1202, color: "hsl(var(--success))" },
    { name: "Programmées", value: 462, color: "hsl(var(--warning))" },
    { name: "En retard", value: 185, color: "hsl(var(--destructive))" },
  ];

  const equipmentData = [
    { zone: "UAP1", operational: 219, maintenance: 895 },
    { zone: "UAP2", operational: 307, maintenance: 909 },
    { zone: "MOL", operational: 138, maintenance: 13 },
    { zone: "IFS", operational: 63, maintenance: 2 },
    { zone: "LOG", operational: 49, maintenance: 2 },
    { zone: "PCO", operational: 31, maintenance: 0 },
    { zone: "LAB", operational: 12, maintenance: 0 },
    { zone: "ZZ", operational: 17, maintenance: 0 },
    { zone: "FAB", operational: 63, maintenance: 28 },
    { zone: "MPC3", operational: 3, maintenance: 0 },
  ];

  const performanceData = [
    { date: "01/02", completion: 94, efficiency: 87 },
    { date: "02/02", completion: 96, efficiency: 89 },
    { date: "03/02", completion: 92, efficiency: 85 },
    { date: "04/02", completion: 98, efficiency: 92 },
    { date: "05/02", completion: 95, efficiency: 88 },
    { date: "06/02", completion: 97, efficiency: 91 },
    { date: "07/02", completion: 94, efficiency: 86 },
  ];

  const convertToTXT = (data, title) => {
    if (!data || data.length === 0) return "";
    const headers = Object.keys(data[0]).join("\t");
    const rows = data.map((row) => Object.values(row).join("\t")).join("\n");
    return `${title}\n${headers}\n${rows}\n\n`;
  };

  const handleExport = () => {
    const txtContent =
      convertToTXT(monthlyData, "Monthly Interventions") +
      convertToTXT(statusData, "Status Distribution") +
      convertToTXT(equipmentData, "Equipment by Zone") ;
    const blob = new Blob([txtContent], { type: "text/plain;charset=utf-8;" });
    saveAs(blob, "maintenance_reports.txt");
  };

  return (
    <div className="min-h-screen bg-dashboard-content">
      {/* Header */}
      <div className="bg-dashboard-header border-b p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Rapports</h1>
            <p className="text-muted-foreground">Analyses et statistiques détaillées des opérations de maintenance</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleExport}>
              <Download className="h-4 w-4 mr-2" />
              Exporter
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taux de Completion</CardTitle>
              <CheckCircle className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.2%</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">MTTR Moyen</CardTitle>
              <Clock className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0.3h</div>
            </CardContent>
          </Card>

          

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Interventions Urgentes</CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Monthly Interventions Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Interventions Mensuelles</CardTitle>
              <CardDescription>Évolution des maintenances préventives et correctives</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="preventive" fill="hsl(var(--primary))" name="Préventive" />
                    <Bar dataKey="corrective" fill="hsl(var(--warning))" name="Corrective" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Status Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Répartition des Statuts</CardTitle>
              <CardDescription>État actuel de toutes les interventions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={statusData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {statusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Centered Equipment by Zone */}
        <div className="flex justify-center">
          <Card className="w-full lg:w-1/2">
            <CardHeader>
              <CardTitle>État des Équipements par Zone</CardTitle>
              <CardDescription>Répartition du statut des équipements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={equipmentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="zone" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="operational" fill="hsl(var(--success))" name="Nombre des équipements" />
                    <Bar dataKey="maintenance" fill="hsl(var(--warning))" name="Maintenance" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}