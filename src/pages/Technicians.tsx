import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { User, Mail, Phone, MapPin, Clock, Star, Plus, Edit } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Technicians() {
  // State to manage technicians data
  const [techniciansData, setTechniciansData] = useState([
    {
      id: "TECH-001",
      name: "Kamel",
      email: "Kamel.tech@timelec.com",
      phone: "20 456 789",
      specialty: "Mécanique",
      zone: "UAP1",
      status: "Disponible",
      experience: "10 ans",
      tasksCompleted: 21,
      initials: "K",
    },
    // ... (rest of the initial data remains the same)
    {
      id: "TECH-002",
      name: "Houssem",
      email: "Houssem.tech@timelec.com",
      phone: "52 318 640",
      specialty: "Mécanique",
      zone: "UAP2",
      status: "En intervention",
      experience: "8 ans",
      tasksCompleted: 58,
      initials: "H",
    },
    {
      id: "Wassim",
      name: "Wassim",
      email: "Wassim.tech@timelec.com",
      phone: "27 905 314",
      specialty: "Hydraulique",
      zone: "UAP2",
      status: "Disponible",
      experience: "6 ans",
      tasksCompleted: 17,
      initials: "W",
    },
    {
      id: "TECH-004",
      name: "Mohamed",
      email: "Mohamed.tech@timelec.com",
      phone: "58 729 041",
      specialty: "Électronique",
      zone: "UAP1",
      status: "En congé",
      experience: "4 ans",
      tasksCompleted: 28,
      initials: "M",
    },
    {
      id: "TECH-005",
      name: "Mourad",
      email: "mourad.tech@timelec.com",
      phone: "24 353 400",
      specialty: "Pneumatique",
      zone: "UAP1",
      status: "En intervention",
      experience: "5 ans",
      tasksCompleted: 20,
      initials: "MD",
    },
    {
      id: "TECH-006",
      name: "Fathi",
      email: "fathi.tech@timelec.com",
      phone: "54 133 501",
      specialty: "Électronique",
      zone: "UAP2",
      status: "Disponible",
      experience: "2 ans",
      tasksCompleted: 6,
      initials: "F",
    },
  ]);

  // State for the form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "",
    zone: "",
    status: "Disponible",
    experience: "",
    tasksCompleted: 0,
  });

  // State to control dialog visibility
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTechnician = {
      id: `TECH-${String(techniciansData.length + 1).padStart(3, "0")}`,
      ...formData,
      initials: formData.name.charAt(0).toUpperCase(),
      tasksCompleted: Number(formData.tasksCompleted),
    };
    setTechniciansData([...techniciansData, newTechnician]);
    setFormData({
      name: "",
      email: "",
      phone: "",
      specialty: "",
      zone: "",
      status: "Disponible",
      experience: "",
      tasksCompleted: 0,
    });
    setIsDialogOpen(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Disponible":
        return "bg-success/10 text-success border-success/20";
      case "En intervention":
        return "bg-primary/10 text-primary border-primary/20";
      case "En congé":
        return "bg-muted/10 text-muted-foreground border-muted/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  const getSpecialtyColor = (specialty: string) => {
    switch (specialty) {
      case "Électrique":
        return "bg-accent/10 text-accent border-accent/20";
      case "Mécanique":
        return "bg-primary/10 text-primary border-primary/20";
      case "Hydraulique":
        return "bg-method/10 text-method border-method/20";
      case "Électronique":
        return "bg-moyens/10 text-moyens border-moyens/20";
      case "Pneumatique":
        return "bg-milieu/10 text-milieu border-milieu/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <div className="min-h-screen bg-dashboard-content">
      {/* Header */}
      <div className="bg-dashboard-header border-b p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Techniciens</h1>
            <p className="text-muted-foreground">Gérez votre équipe de maintenance et suivez leurs interventions</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="w-fit">
                <Plus className="h-4 w-4 mr-2" />
                Ajouter Technicien
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Ajouter un nouveau technicien</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nom</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="specialty">Spécialité</Label>
                  <Input
                    id="specialty"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="zone">Zone</Label>
                  <Input
                    id="zone"
                    name="zone"
                    value={formData.zone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="status">Statut</Label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="Disponible">Disponible</option>
                    <option value="En intervention">En intervention</option>
                    <option value="En congé">En congé</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="experience">Expérience</Label>
                  <Input
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="tasksCompleted">Tâches complétées</Label>
                  <Input
                    id="tasksCompleted"
                    name="tasksCompleted"
                    type="number"
                    value={formData.tasksCompleted}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Button type="submit">Ajouter</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Techniciens</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{techniciansData.length}</div>
              <p className="text-xs text-muted-foreground">Équipe complète</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Disponibles</CardTitle>
              <Clock className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {techniciansData.filter((tech) => tech.status === "Disponible").length}
              </div>
              <p className="text-xs text-muted-foreground">Prêts pour intervention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">En Intervention</CardTitle>
              <Clock className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {techniciansData.filter((tech) => tech.status === "En intervention").length}
              </div>
              <p className="text-xs text-muted-foreground">Actuellement occupés</p>
            </CardContent>
          </Card>
        </div>

        {/* Team Overview Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techniciansData.slice(0, 3).map((tech) => (
            <Card key={tech.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-medium">
                      {tech.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{tech.name}</h3>
                      <Badge className={getStatusColor(tech.status)}>{tech.status}</Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className={getSpecialtyColor(tech.specialty)}>{tech.specialty}</Badge>
                      <span className="text-sm text-muted-foreground">• {tech.zone}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-3 w-3 text-muted-foreground" />
                    {tech.email}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-3 w-3 text-muted-foreground" />
                    {tech.phone}
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-warning fill-current" />
                    </div>
                    <span className="text-sm text-muted-foreground">{tech.tasksCompleted} tâches</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Full Team Table */}
        <Card>
          <CardHeader>
            <CardTitle>Équipe Complète</CardTitle>
            <CardDescription>Vue d'ensemble de tous les techniciens et leurs informations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Technicien</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Spécialité</TableHead>
                    <TableHead>Zone</TableHead>
                    <TableHead>Expérience</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Tâches</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {techniciansData.map((tech) => (
                    <TableRow key={tech.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-primary/10 text-primary text-xs">
                              {tech.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{tech.name}</div>
                            <div className="text-xs text-muted-foreground">{tech.id}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 text-xs">
                            <Mail className="h-3 w-3" />
                            {tech.email}
                          </div>
                          <div className="flex items-center gap-1 text-xs">
                            <Phone className="h-3 w-3" />
                            {tech.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getSpecialtyColor(tech.specialty)}>{tech.specialty}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          {tech.zone}
                        </div>
                      </TableCell>
                      <TableCell>{tech.experience}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(tech.status)}>{tech.status}</Badge>
                      </TableCell>
                      <TableCell>{tech.tasksCompleted}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}