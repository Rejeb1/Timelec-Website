import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { BreakdownForm } from "@/components/dashboard/BreakdownForm";
import { BreakdownChart } from "@/components/dashboard/BreakdownChart";
import { BreakdownFilter } from "@/components/dashboard/BreakdownFilter";
import { IshikawaDiagram } from "@/components/dashboard/IshikawaDiagram";
import { Breakdown } from "@/types/breakdown";

// Sample data based on the provided numbers
const SAMPLE_DATA: Omit<Breakdown, 'id' | 'createdAt'>[] = [
  { equipmentName: "MACHINE DE TEST POIGNEE P69", date: "2025-08-21", description: "JOINT déchiré .", cause: 3 },
{ equipmentName: "Bobineusse PSM102", date: "2025-08-22", description: "Cassure curseur.", cause: 3 },
{ equipmentName: "MACHINE DE TEST POIGNEE P69", date: "2025-08-21", description: "Joint défectueux", cause: 3 },
{ equipmentName: "Lamme Ressort", date: "2025-08-26", description: "Lame ressort endommager", cause: 3 },
{ equipmentName: "PRESSE A PASTILLER + BOITIER DE COMMANDE", date: "2025-08-22", description: "Lame mal fixer", cause: 1 },
{ equipmentName: "MACHINE ENSACHAGE", date: "2025-08-25", description: "Problème coupure des sachets", cause: 3 },
{ equipmentName: "IMPRIMANTE ZEBRA ZT610", date: "2025-08-25", description: "Fausse ribbon (defaut operatoire)", cause: 1 },
{ equipmentName: "MACHINE TAMPOGRAPHIE MODULO 2", date: "2025-08-20", description: "Fin Scotch.", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE DIELECTRIQUE VM1", date: "2025-08-25", description: "Disjoncteur désactivé", cause: 3 },
{ equipmentName: "Gabarit de ctrl poignée type S AVEC DOUCHETTE", date: "2025-08-23", description: "Défaut caméra", cause: 3 },
{ equipmentName: "GABARIT POIGNEE", date: "2025-08-25", description: "Problème présence pièce", cause: 3 },
{ equipmentName: "GABARIT DE MONTAGE COMMANDE", date: "2025-08-26", description: "Présence pièce", cause: 3 },
{ equipmentName: "GABARIT DE MONTAGE COMMANDE", date: "2025-08-27", description: "Présence pièce", cause: 3 },
{ equipmentName: "GABARIT DE MONTAGE ECROU SUR PLASTRON SIRCOVER", date: "2025-08-22", description: "Capteur décalé", cause: 3 },
{ equipmentName: "GABARIT MONTAGE CAGE DE COUPURE B4", date: "2025-08-27", description: "Défaut contact", cause: 3 },
{ equipmentName: "GABARIT MONTAGE CAGE DE COUPURE B4", date: "2025-08-21", description: "Défaut contact", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE SIRCO B5", date: "2025-08-22", description: "Problème départ cycle", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE SIRCO B5", date: "2025-08-25", description: "Problème départ cycle", cause: 3 },
{ equipmentName: "Gabarit de montage poignées type S", date: "2025-08-26", description: "Problème détection de ressort", cause: 3 },
{ equipmentName: "GABARIT DE MONTAGE COMMANDE", date: "2025-08-21", description: "Problème présence pièce", cause: 3 },
{ equipmentName: "GABARIT MONTAGE CAGE DE COUPURE B4", date: "2025-08-27", description: "Défaut contact", cause: 3 },
{ equipmentName: "IMPRIMENTE Z110Xi4", date: "2025-08-22", description: "Impression décalée", cause: 3 },
{ equipmentName: "IMPRIMANTE ETQ EMB PSM102", date: "2025-07-28", description: "Image étiquette décalée", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE SIRCO B5", date: "2025-08-22", description: "Endurance", cause: 3 },
{ equipmentName: "Gabarit de contrôle modules fuser bloc export", date: "2025-08-21", description: "Zone de recherche décale", cause: 3 },
{ equipmentName: "TESTEUR NORMATIF", date: "2025-08-26", description: "", cause: 0 },
{ equipmentName: "Station de contrôle Fuser Bloc", date: "2025-08-15", description: "Zone de recherche décalé", cause: 3 },
{ equipmentName: "Linge D'assemblage Coupure F2+F3", date: "2025-08-26", description: "Zone de recherche écran décalé", cause: 3 },
{ equipmentName: "Gabarit de ctrl poignée type S AVEC DOUCHETTE", date: "2025-08-21", description: "PB capteurs de présence", cause: 3 },
{ equipmentName: "Gabarit de ctrl poignée type S AVEC DOUCHETTE", date: "2025-08-22", description: "PB. Capteur de présence .", cause: 3 },
{ equipmentName: "LIGNE D'ASSEMBLAGE MECA MANU", date: "2025-08-25", description: "", cause: 0 },
{ equipmentName: "IMPRIMANTE ZEBRA ZT610", date: "2025-08-19", description: "IMPRESSION DECALE", cause: 3 },
{ equipmentName: "Imprimante étiquette traçabilité poste2", date: "2025-08-27", description: "PB Calibration", cause: 3 },
{ equipmentName: "IMPRIMANTE GK420T", date: "2025-08-14", description: "PB Calibration", cause: 3 },
{ equipmentName: "IMPRIMANTE ZEBRA ZT610", date: "2025-08-15", description: "PB Calibration", cause: 3 },
{ equipmentName: "IMPRIMANTE ZEBRA ZT610", date: "2025-08-15", description: "PB Calibration", cause: 3 },
{ equipmentName: "PRESS CAPOT", date: "2025-08-19", description: "DEFAUT CAPTEUR DECALE", cause: 3 },
{ equipmentName: "PRESS CAPOT", date: "2025-08-25", description: "Capteur metaux decale", cause: 3 },
{ equipmentName: "GRAISSEUR SIRCO M", date: "2025-08-22", description: "Aiguille déformer", cause: 3 },
{ equipmentName: "Testeur SIRCO M", date: "2025-08-20", description: "", cause: 0 },
{ equipmentName: "MACHINE DE CONTROLE DIELECTRIQUE VM1", date: "2025-08-21", description: "Problème continuité", cause: 3 },
{ equipmentName: "IMPRIMANTE ZEBRA ZT610", date: "2025-08-21", description: "", cause: 0 },
{ equipmentName: "MACHINE DE CONTROLE DIELECTRIQUE VM1", date: "2025-08-21", description: "Problème contuinuité", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE DIELECTRIQUE VM/COMM", date: "2025-08-21", description: "Problème contuinuité", cause: 3 },
{ equipmentName: "BANC DE TEST ATYS B3 /B4 /B5", date: "2025-08-20", description: "Defaut minimum voltage (probleme produit)", cause: 2 },
{ equipmentName: "GRAISSEUR SIRCO M", date: "2025-08-23", description: "Aiguille endommager", cause: 3 },
{ equipmentName: "GRAISSEUR SIRCO M", date: "2025-08-26", description: "Aiguille déformer", cause: 0 },
{ equipmentName: "MACHINE DE CONTROLE DIELECTRIQUE VM1", date: "2025-08-21", description: "", cause: 0 },
{ equipmentName: "GRAISSEUR SIRCO M", date: "2025-08-21", description: "Aiguille endommager (opérateur en formation )", cause: 1 },
{ equipmentName: "GRAISSEUR SIRCO M", date: "2025-08-21", description: "Aiguille endommager (opérateur en formation )", cause: 1 },
{ equipmentName: "GRAISSEUR SIRCO M", date: "2025-08-22", description: "Aiguille endommager", cause: 1 },
{ equipmentName: "GRAISSEUR SIRCO M", date: "2025-08-22", description: "Aiguille endommager", cause: 1 },
{ equipmentName: "Linge D'assemblage Coupure F2+F3", date: "2025-08-25", description: "Boitier endommage", cause: 3 },
{ equipmentName: "BANC DE TEST ATYS B3 /B4 /B5", date: "2025-08-19", description: "Défaut nominale volt", cause: 3 },
{ equipmentName: "PRESSE A SERTIR 4,3T", date: "2025-08-25", description: "", cause: 0 },
{ equipmentName: "MACHINE TAMPOGRAPHIE MODULO 2", date: "2025-08-25", description: "Fin de scotch", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE SIRCO B5", date: "2025-08-23", description: "Pas d'affichage de pièce bonne", cause: 3 },
{ equipmentName: "Machine Tampo", date: "2025-08-23", description: "Tampon défectueux", cause: 3 },
{ equipmentName: "MACHINE SAFIR 130 T", date: "2025-08-23", description: "Tampon défectueux", cause: 3 },
{ equipmentName: "BANC DE TEST BT-P77-FINAL", date: "2025-08-11", description: "Fusion de fusible T 2,5 A", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE SIRCO B5", date: "2025-08-19", description: "", cause: 0 },
{ equipmentName: "Gabarit de montage poignées type S", date: "2025-08-22", description: "", cause: 0 },
{ equipmentName: "Gabarit de montage poignées type S", date: "2025-08-26", description: "Pb détection ressort suite support ressort casser", cause: 3 },
{ equipmentName: "Gabarit de montage poignées type S", date: "2025-08-26", description: "Pb détection ressort suite support ressort casser", cause: 3 },
{ equipmentName: "TESTEUR NORMATIF", date: "2025-08-26", description: "BLOCAGE AXE (PIECE EN POSITION 1)", cause: 3 },
{ equipmentName: "Linge D'assemblage Coupure F2+F3", date: "2025-08-25", description: "Blocage Barette Aimant F3", cause: 3 },
{ equipmentName: "Gabarit de montage poignées type S", date: "2025-08-22", description: "Blocage cycle", cause: 0 },
{ equipmentName: "TESTEUR NORMATIF", date: "2025-08-19", description: "Blocage produit", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE SIRCO B5", date: "2025-08-22", description: "Défaut endurance et coincement du produit avec l'axe", cause: 3 },
{ equipmentName: "Machine Tampo", date: "2025-08-20", description: "Tête vis endommagée", cause: 3 },
{ equipmentName: "GABARIT MONTAGE BARREAU", date: "2025-08-22", description: "Mauvaise insertion des ressorts", cause: 3 },
{ equipmentName: "IMPRIMANTE ZEBRA ZT610", date: "2025-08-16", description: "Pb impression caractéristique effaçable", cause: 2 },
{ equipmentName: "MACHINE DE CONTROLE DIELECTRIQUE VM1", date: "2025-08-26", description: "Pine déformé.", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE DIELECTRIQUE VM1", date: "2025-08-26", description: "Pine déformé.", cause: 3 },
{ equipmentName: "Machine laser", date: "2025-08-14", description: "", cause: 0 },
{ equipmentName: "NV gabarit poigne", date: "2025-08-20", description: "Blocage cycle ( blocage mécanisme suite vis)", cause: 3 },
{ equipmentName: "STATION DE VISSAGE", date: "2025-08-01", description: "Cassure au lieu de montage", cause: 1 },
{ equipmentName: "STATION DE VISSAGE", date: "2025-08-27", description: "Defaut capteur", cause: 3 },
{ equipmentName: "GABARIT CTRL COUPURE PAR CAMERA", date: "2025-08-25", description: "Connecteur mal connecté", cause: 3 },
{ equipmentName: "GABARIT MONTAGE COULISSEAU", date: "2025-08-26", description: "Marteaux mal fixé", cause: 3 },
{ equipmentName: "GRAISSEUR AUTOMATIQUE", date: "2025-08-27", description: "Coincement du robot", cause: 3 },
{ equipmentName: "GRAISSEUR AUTOMATIQUE", date: "2025-08-22", description: "Coincement du robot", cause: 3 },
{ equipmentName: "GRAISSEUR AUTOMATIQUE", date: "2025-08-27", description: "Coincement du robot", cause: 3 },
{ equipmentName: "GRAISSEUR AUTOMATIQUE", date: "2025-08-25", description: "Coincement de la pince", cause: 3 },
{ equipmentName: "BANC DE TEST COMMANDE ATYS M", date: "2025-08-26", description: "Manque bouton bleu", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE DIELECTRIQUE VM1", date: "2025-08-23", description: "Numéro de série atteint à 10000 pièces", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE SIRCO B5", date: "2025-08-20", description: "Coupure électrique", cause: 3 },
{ equipmentName: "TESTEUR NORMATIF", date: "2025-08-23", description: "Goupilles de fixation de 3pignon détacher.", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE SIRCO B5", date: "2025-08-23", description: "", cause: 0 },
{ equipmentName: "Machine laser", date: "2025-08-15", description: "", cause: 0 },
{ equipmentName: "PRESSE A PASTILLER + BOITIER DE COMMANDE", date: "2025-08-19", description: "Marche avec seule vois", cause: 3 },
{ equipmentName: "Machine laser", date: "2025-08-15", description: "", cause: 0 },
{ equipmentName: "Gabarit montage poigne", date: "2025-08-23", description: "Présence graisse au barre de limier de la capteur.", cause: 3 },
{ equipmentName: "Gabarit de montage poignées type S", date: "2025-08-26", description: "Présence graisse au barre de limier de la capteur.", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE SIRCO B5", date: "2025-08-27", description: "Défaut continuité", cause: 3 },
{ equipmentName: "GABARIT DE MONTAGE COMMANDE", date: "2025-08-21", description: "Absence d'ordre de vissage", cause: 3 },
{ equipmentName: "Machine laser", date: "2025-08-15", description: "Présence poussière sur douchette", cause: 3 },
{ equipmentName: "GABARIT CTRL COUPURE PAR CAMERA", date: "2025-08-20", description: "Problème départ cycle", cause: 3 },
{ equipmentName: "GABARIT MONTAGE CAGE DE COUPURE B5", date: "2025-08-22", description: "Défaut contacts", cause: 3 },
{ equipmentName: "Gabarit de mtg barreau B4", date: "2025-08-20", description: "Mauvais serrage des doigts", cause: 3 },
{ equipmentName: "Gabarit de ctrl poignée type S AVEC DOUCHETTE", date: "2025-08-23", description: "Graisse sur produit", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE DIELECTRIQUE VM1", date: "2025-08-20", description: "Poussière sur pine cassette", cause: 3 },
{ equipmentName: "MACHINE ENSACHAGE", date: "2025-08-27", description: "", cause: 0 },
{ equipmentName: "GRAISSEUR AUTOMATIQUE", date: "2025-08-26", description: "Taux de rebut +pb graisse", cause: 0 },
{ equipmentName: "PRESSE A SERTIR 4,3T", date: "2025-08-23", description: "Trace dans le contact", cause: 3 },
{ equipmentName: "Gabarit de ctrl poignée type S AVEC DOUCHETTE", date: "2025-08-22", description: "Mélange plastron", cause: 1 },
{ equipmentName: "Testeur FCT CAL 100mV PSM102", date: "2025-08-21", description: "PLAINTAGE APPLICATION", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE DIELECTRIQUE VM/COMM", date: "2025-08-25", description: "Problème réseau", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE DIELECTRIQUE VM1", date: "2025-08-25", description: "Problème réseau", cause: 3 },
{ equipmentName: "Testeur diélectrique", date: "2025-08-25", description: "Problème initialisation", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE SIRCO B5", date: "2025-08-27", description: "Problème initialisation", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE DIELECTRIQUE VM1", date: "2025-08-20", description: "Problème réseau", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE DIELECTRIQUE VM/COMM", date: "2025-08-20", description: "Problème réseau", cause: 3 },
{ equipmentName: "Testeur diélectrique", date: "2025-08-20", description: "Problème réseau", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE DIELECTRIQUE VM/COMM", date: "2025-08-25", description: "Problème démarrage application", cause: 3 },
{ equipmentName: "BANC DE TEST BEL", date: "2025-08-19", description: "Defaut Reload defaaults", cause: 3 },
{ equipmentName: "Machine laser", date: "2025-08-15", description: "Appuyer sur le départ cycle  avant la fermeture de tiroir", cause: 1 },
{ equipmentName: "MACHINE DE CONTROLE SIRCO B5", date: "2025-08-23", description: "Pb départ de cycle (capteur cassette)", cause: 3 },
{ equipmentName: "GABARIT MONTAGE BARREAU", date: "2025-08-25", description: "Mauvaise insertion des ressorts", cause: 3 },
{ equipmentName: "Gabarit de ctrl poignée type S AVEC DOUCHETTE", date: "2025-08-26", description: "", cause: 0 },
{ equipmentName: "GABARIT MONTAGE CAGE DE COUPURE B4", date: "2025-08-23", description: "Problème bridage et ordre de vissage", cause: 3 },
{ equipmentName: "IMPRIMENTE Z110Xi4", date: "2025-08-25", description: "Problème impression", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE SIRCO B5", date: "2025-08-27", description: "Défaut endurance", cause: 3 },
{ equipmentName: "STATION DE VISSAGE", date: "2025-08-19", description: "Defaut capteur", cause: 3 },
{ equipmentName: "GABARIT MONTAGE COULISSEAU", date: "2025-08-25", description: "Defaut ressort el cage ouvert", cause: 3 },
{ equipmentName: "GABARIT MONTAGE CAGE DE COUPURE B4", date: "2025-08-25", description: "Capteur inductif décalé .", cause: 3 },
{ equipmentName: "Gabarit de montage poignées type S", date: "2025-08-25", description: "Support de ressort décalé .", cause: 3 },
{ equipmentName: "Gabarit de montage poignées type S", date: "2025-08-22", description: "Support de ressort décalé .", cause: 3 },
{ equipmentName: "Gabarit de montage coupure Tri/tétra", date: "2025-08-26", description: "Switch décale.", cause: 3 },
{ equipmentName: "GABARIT CTRL COUPURE PAR CAMERA", date: "2025-08-23", description: "PB. Template image .", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE DIELECTRIQUE VM1", date: "2025-08-22", description: "Cassette démonter", cause: 3 },
{ equipmentName: "Imprimante étiquette traçabilité poste2", date: "2025-08-27", description: "", cause: 0 },
{ equipmentName: "BANC DE TEST BEL", date: "2025-08-20", description: "Probleme réseaux", cause: 4 },
{ equipmentName: "MACHINE DE CONTROLE DIELECTRIQUE VM/COMM", date: "2025-08-23", description: "Numéro de série atteint à 10000 pièces", cause: 3 },
{ equipmentName: "GABARIT MONTAGE BARREAU", date: "2025-08-20", description: "Doigt desserrer", cause: 3 },
{ equipmentName: "Gabarit de montage poignées type S", date: "2025-08-22", description: "Pb insertion  (support ressort desserrer)", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE FUSER BLOC N°2", date: "2025-08-02", description: "Fil de cassette couper", cause: 3 },
{ equipmentName: "Gabarit de ctrl poignée type S AVEC DOUCHETTE", date: "2025-08-20", description: "Couts sécurit au bouton départ cycle.", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE DIELECTRIQUE VM/COMM", date: "2025-08-21", description: "Défaut d'isolement", cause: 3 },
{ equipmentName: "GRAISSEUR AUTOMATIQUE", date: "2025-08-20", description: "Problème démarrage du convoyeur", cause: 3 },
{ equipmentName: "Banc BBE", date: "2025-08-20", description: "", cause: 0 },
{ equipmentName: "MACHINE ENSACHAGE", date: "2025-08-22", description: "Problème impression sur sachet", cause: 3 },
{ equipmentName: "Banc BBE", date: "2025-08-22", description: "Défaut isolement", cause: 3 },
{ equipmentName: "MACHINE DE CONTROLE DIELECTRIQUE VM1", date: "2025-08-25", description: "Demande incorrecte .", cause: 0 },
{ equipmentName: "MACHINE DE CONTROLE DIELECTRIQUE VM1", date: "2025-08-25", description: "Demande incorrecte .", cause: 0 },
{ equipmentName: "MACHINE DE CONTROLE DIELECTRIQUE VM/COMM", date: "2025-08-25", description: "Demande incorrecte .", cause: 0 },
{ equipmentName: "MACHINE DE TEST POIGNEE P69", date: "2025-08-22", description: "Demande incorrecte .", cause: 0 },
{ equipmentName: "NV testeur VM", date: "2025-08-26", description: "Demande incorrecte .", cause: 0 },
{ equipmentName: "Gabarit de montage poignées type S", date: "2025-08-26", description: "Demande incorrecte .", cause: 0 },
{ equipmentName: "MACHINE DE CONTROLE DIELECTRIQUE VM1", date: "2025-08-26", description: "Demande incorrecte .", cause: 0 }
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [breakdowns, setBreakdowns] = useState<Breakdown[]>([]);

  useEffect(() => {
    // Load sample data
    const sampleBreakdowns: Breakdown[] = SAMPLE_DATA.map((item, index) => ({
      ...item,
      id: `breakdown-${index + 1}`,
      createdAt: new Date()
    }));
    setBreakdowns(sampleBreakdowns);
  }, []);

  const handleAddBreakdown = (newBreakdown: Omit<Breakdown, 'id' | 'createdAt'>) => {
    const breakdown: Breakdown = {
      ...newBreakdown,
      id: `breakdown-${Date.now()}`,
      createdAt: new Date()
    };
    setBreakdowns(prev => [breakdown, ...prev]);
    setActiveTab('overview'); // Redirect to overview after adding
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Tableau de Bord 5M</h1>
              <p className="text-muted-foreground mt-2">
                Analyse des pannes d'équipement selon la méthode 5M (Méthode, Milieu, Matière, Main-d'œuvre, Moyens)
              </p>
            </div>
            <DashboardOverview breakdowns={breakdowns} />
            <BreakdownChart breakdowns={breakdowns} />
          </div>
        );
      case 'add':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Ajouter une Panne</h1>
              <p className="text-muted-foreground mt-2">
                Enregistrez une nouvelle panne d'équipement
              </p>
            </div>
            <BreakdownForm onAdd={handleAddBreakdown} />
          </div>
        );
      case 'filter':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Filtrer les Pannes</h1>
              <p className="text-muted-foreground mt-2">
                Analysez les pannes par cause selon la méthode 5M
              </p>
            </div>
            <BreakdownFilter breakdowns={breakdowns} />
          </div>
        );
      case 'ishikawa':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Diagramme d'Ishikawa</h1>
              <p className="text-muted-foreground mt-2">
                Visualisation des causes racines selon la méthode 5M
              </p>
            </div>
            <IshikawaDiagram breakdowns={breakdowns} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <DashboardLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </DashboardLayout>
  );
}