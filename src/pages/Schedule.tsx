import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, User, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Schedule() {
  const today = new Date();
  const [viewDate, setViewDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    time: "",
    task: "",
    technician: "",
    location: "",
    priority: "Moyenne",
  });
  const [todaySchedule, setTodaySchedule] = useState([
    
  ]);

  const currentMonth = viewDate.toLocaleString('fr-FR', { month: 'long', year: 'numeric' });

  // Calculate calendar details
  const firstDayOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
  const lastDayOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDay = (firstDayOfMonth.getDay() + 6) % 7; // Adjust for Monday start

  const calendarDays = [];
  for (let i = 0; i < startingDay; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const upcomingTasks = [
   
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critique": return "bg-destructive/10 text-destructive border-destructive/20";
      case "Haute": return "bg-warning/10 text-warning border-warning/20";
      case "Moyenne": return "bg-primary/10 text-primary border-primary/20";
      case "Basse": return "bg-muted/10 text-muted-foreground border-muted/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  const hasTask = (day: number) => [3, 7, 12, 15, 18, 20, 25].includes(day);

  const handlePrevMonth = () => {
    const newDate = new Date(viewDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setViewDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(viewDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setViewDate(newDate);
  };

  const handleDateClick = (day: number | null) => {
    if (day) {
      const newSelected = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
      setSelectedDate(newSelected);
    }
  };

  const isToday = (day: number | null) => {
    return day === today.getDate() &&
           viewDate.getMonth() === today.getMonth() &&
           viewDate.getFullYear() === today.getFullYear();
  };

  const isSelected = (day: number | null) => {
    return day === selectedDate.getDate() &&
           viewDate.getMonth() === selectedDate.getMonth() &&
           viewDate.getFullYear() === selectedDate.getFullYear();
  };

  const handleInputChange = (field: string, value: string) => {
    setNewEvent(prev => ({ ...prev, [field]: value }));
  };

  const handleAddEvent = () => {
    if (newEvent.time && newEvent.task && newEvent.technician && newEvent.location) {
      if (selectedDate.toDateString() === today.toDateString()) {
        setTodaySchedule(prev => [...prev, newEvent]);
      }
      // Reset form and close dialog
      setNewEvent({ time: "", task: "", technician: "", location: "", priority: "Moyenne" });
      setIsDialogOpen(false);
    }
  };

  const isSelectedToday = selectedDate.toDateString() === today.toDateString();
  const dayTitle = isSelectedToday
    ? `Aujourd'hui - ${selectedDate.toLocaleDateString('fr-FR')}`
    : selectedDate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="min-h-screen bg-dashboard-content">
      {/* Header */}
      <div className="bg-dashboard-header border-b p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Planning</h1>
            <p className="text-muted-foreground">Organisez et suivez le planning des interventions</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="w-fit">
                <Plus className="h-4 w-4 mr-2" />
                Nouvel Événement
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Ajouter un nouvel événement</DialogTitle>
                <DialogDescription>
                  Remplissez les détails de l'événement pour la date sélectionnée : {selectedDate.toLocaleDateString('fr-FR')}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="time" className="text-right">Heure</Label>
                  <Input
                    id="time"
                    className="col-span-3"
                    placeholder="HH:MM"
                    value={newEvent.time}
                    onChange={(e) => handleInputChange("time", e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="task" className="text-right">Tâche</Label>
                  <Input
                    id="task"
                    className="col-span-3"
                    value={newEvent.task}
                    onChange={(e) => handleInputChange("task", e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="technician" className="text-right">Technicien</Label>
                  <Input
                    id="technician"
                    className="col-span-3"
                    value={newEvent.technician}
                    onChange={(e) => handleInputChange("technician", e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="location" className="text-right">Lieu</Label>
                  <Input
                    id="location"
                    className="col-span-3"
                    value={newEvent.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="priority" className="text-right">Priorité</Label>
                  <Select
                    value={newEvent.priority}
                    onValueChange={(value) => handleInputChange("priority", value)}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Sélectionner la priorité" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Critique">Critique</SelectItem>
                      <SelectItem value="Haute">Haute</SelectItem>
                      <SelectItem value="Moyenne">Moyenne</SelectItem>
                      <SelectItem value="Basse">Basse</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleAddEvent}>Ajouter l'événement</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Today's Overview */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {/* Selected Day's Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  {dayTitle}
                </CardTitle>
                <CardDescription>
                  Planning des interventions pour cette date
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {isSelectedToday ? (
                  todaySchedule.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="text-sm font-mono font-medium w-16">
                        {item.time}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{item.task}</div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {item.technician}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {item.location}
                          </div>
                        </div>
                      </div>
                      <Badge className={getPriorityColor(item.priority)}>
                        {item.priority}
                      </Badge>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-muted-foreground p-4">
                    Aucune tâche planifiée pour cette date. Cliquez sur "Nouvel Événement" pour en ajouter.
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Calendar View */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    {currentMonth}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={handlePrevMonth}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleNextMonth}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(day => (
                    <div key={day} className="text-center text-sm font-medium p-2">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {calendarDays.map((day, index) => (
                    <div 
                      key={index} 
                      onClick={() => handleDateClick(day)}
                      className={`
                        relative p-2 text-center text-sm border rounded transition-colors
                        ${day ? 'cursor-pointer hover:bg-muted/50' : 'cursor-default'}
                        ${isSelected(day) ? 'bg-primary text-primary-foreground' : ''}
                        ${isToday(day) && !isSelected(day) ? 'border-primary font-bold' : ''}
                        ${day && hasTask(day) ? 'border-accent' : ''}
                      `}
                    >
                      {day || ''}
                      {day && hasTask(day) && (
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Statistiques Rapides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Aujourd'hui</span>
                  <span className="font-medium">{todaySchedule.length} tâches</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Cette semaine</span>
                  <span className="font-medium">{todaySchedule.length} tâches</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Ce mois</span>
                  <span className="font-medium">150 tâches</span>
                </div>
                
              </CardContent>
            </Card>

            {/* Upcoming Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Prochaines Tâches</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingTasks.map((task, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-muted-foreground">{task.date}</span>
                      <Badge className={getPriorityColor(task.priority)}>
                        {task.priority}
                      </Badge>
                    </div>
                    <div className="text-sm font-medium mb-1">{task.task}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {task.technician}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}