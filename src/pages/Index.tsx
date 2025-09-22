import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  BarChart3, Settings, Users, Calendar, Wrench, FileText, 
  MapPin, Phone, Facebook, Linkedin, Youtube 
} from "lucide-react";
import industrialHero from "@/assets/industrial-hero.jpg";

const Index = () => {
  const navigate = useNavigate();

  const navigationItems = [
    { title: "Dashboard", description: "Analyse des pannes selon la méthode 5M", icon: BarChart3, path: "/dashboard", color: "primary" },
    { title: "Équipements", description: "Gérez et surveillez tous vos équipements", icon: Settings, path: "/equipements", color: "accent" },
    { title: "Maintenance", description: "Planifiez et suivez les interventions", icon: Wrench, path: "/maintenance", color: "method" },
    { title: "Planning", description: "Organisez le planning des interventions", icon: Calendar, path: "/schedule", color: "milieu" },
    { title: "Techniciens", description: "Gérez votre équipe de maintenance", icon: Users, path: "/technicians", color: "moyens" },
    { title: "Rapports", description: "Analyses et statistiques détaillées", icon: FileText, path: "/reports", color: "matiere" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-light via-background to-secondary">
      <div className="flex-grow container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-16">
          <div 
            className="h-96 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${industrialHero})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-dashboard-sidebar/90 to-dashboard-sidebar/70"></div>
            <div className="relative h-full flex items-center justify-center text-center text-white">
              <div>
                <h1 className="text-6xl font-bold mb-6">TIMELEC</h1>
                <p className="text-2xl mb-4">Système de Gestion de Maintenance</p>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  Plateforme complète pour surveiller, planifier et analyser toutes vos opérations de maintenance industrielle
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => navigate(item.path)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-${item.color}/10`}>
                      <Icon 
                        className={`h-6 w-6 ${item.title === "Équipements" ? "text-blue-500" : `text-${item.color}`}`} 
                      />
                    </div>
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-start p-0">
                    Accéder →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dashboard-sidebar text-white py-8 mt-12">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Address */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <p>Z.I. Chebeda, C39, 1135, Naassen</p>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <p>79 307 400</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-end gap-6">
            <a 
              href="https://www.facebook.com/SocomecGroup" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/search/results/all/?keywords=timelec&origin=GLOBAL_SEARCH_HEADER&sid=rnb" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://www.youtube.com/channel/UCqYisxCze5VfEqjCymYWPxw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
            >
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="text-center text-sm opacity-70 mt-6">
          © {new Date().getFullYear()} TIMELEC. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
};

export default Index;
