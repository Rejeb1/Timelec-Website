import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, MapPin, Activity, Settings, Plus, Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";

export default function Equipements() {
const [equipmentData, setEquipmentData] = useState([{ id: "15232", name: "PC postes de contrôle 100% P87", status: "ES", location: "UAP2", lastMaintenance: "2024-01-15", nextMaintenance: "2025-09-15" },
            { id: "15243", name: "PC postes de contrôle 100% A20", status: "ES", location: "UAP2", lastMaintenance: "2024-01-10", nextMaintenance: "2025-09-10" },
            { id: "15499", name: "PC postes de contrôle 100% A40", status: "ES", location: "UAP1", lastMaintenance: "2024-01-20", nextMaintenance: "2025-09-20" },
            { id: "15561", name: "PC postes de contrôle 100% SDMO", status: "ES", location: "UAP2", lastMaintenance: "2024-01-18", nextMaintenance: "2025-09-18" },
            { id: "15570", name: "PC postes de contrôle 100% BET", status: "ES", location: "UAP2", lastMaintenance: "2024-01-12", nextMaintenance: "2025-09-12" },
            { id: "15628", name: "PC postes de contrôle 100% ATYS-M", status: "ES", location: "UAP2", lastMaintenance: "2024-01-08", nextMaintenance: "2025-09-08" },
            { id: "16122", name: "PC postes de contrôle 100%", status: "ES", location: "UAP1", lastMaintenance: "2024-01-25", nextMaintenance: "2025-09-25" },
            { id: "17283", name: "PC  S/E 100%", status: "ES", location: "UAP1", lastMaintenance: "2024-01-22", nextMaintenance: "2025-09-22" },
            { id: "17284", name: "PC 100% B4", status: "ES", location: "UAP1", lastMaintenance: "2024-01-19", nextMaintenance: "2025-09-19" },
            { id: "17286", name: "PC  S/E 100%", status: "ES", location: "UAP1", lastMaintenance: "2024-01-16", nextMaintenance: "2025-09-16" },
            { id: "17294", name: "PC postes de contrôle 100%", status: "ES", location: "UAP1", lastMaintenance: "2024-01-14", nextMaintenance: "2025-09-14" },
            { id: "17297", name: "PC 100%", status: "ES", location: "UAP2", lastMaintenance: "2024-01-11", nextMaintenance: "2025-09-11" },
            { id: "17395", name: "PC postes", status: "ES", location: "UAP1", lastMaintenance: "2024-01-09", nextMaintenance: "2025-09-09" },
            { id: "17656", name: "PC poste", status: "ES", location: "UAP1", lastMaintenance: "2024-01-07", nextMaintenance: "2025-09-07" },
            { id: "18473", name: "PC  B4", status: "ES", location: "UAP2", lastMaintenance: "2024-01-06", nextMaintenance: "2025-09-06" },
            { id: "18573", name: "PC postes de contrôle 100% BEL", status: "ES", location: "UAP2", lastMaintenance: "2024-01-05", nextMaintenance: "2025-09-05" },
            { id: "18579", name: "PC", status: "ES", location: "UAP2", lastMaintenance: "2024-01-04", nextMaintenance: "2025-09-04" },
            { id: "18580", name: "PC postes de contrôle 100% FUSERBLOC", status: "ES", location: "UAP2", lastMaintenance: "2024-01-03", nextMaintenance: "2025-09-03" },
            { id: "18583", name: "PC postes de contrôle 100%", status: "ES", location: "UAP2", lastMaintenance: "2024-01-02", nextMaintenance: "2025-09-02" },
            { id: "18585", name: "PC postes de contrôle 100%", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2025-09-01" },
            { id: "19135", name: "PC postes", status: "ES", location: "UAP1", lastMaintenance: "2023-12-30", nextMaintenance: "2025-08-30" },
            { id: "19904", name: "PC  S/E 100%", status: "ES", location: "UAP1", lastMaintenance: "2023-12-29", nextMaintenance: "2025-08-29" },
            { id: "25477", name: "PC poste", status: "ES", location: "UAP1", lastMaintenance: "2023-12-28", nextMaintenance: "2025-08-28" },
            { id: "25488", name: "PC poste", status: "ES", location: "UAP1", lastMaintenance: "2023-12-27", nextMaintenance: "2025-08-27" },
            { id: "26261", name: "PC postes", status: "ES", location: "UAP2", lastMaintenance: "2023-12-26", nextMaintenance: "2025-08-26" },
            { id: "41350", name: "PC postes de contrôle 100% SIRCO MV", status: "ES", location: "UAP1", lastMaintenance: "2023-12-25", nextMaintenance: "2025-08-25" },
            { id: "45080", name: "PC  B4", status: "ES", location: "UAP1", lastMaintenance: "2023-12-24", nextMaintenance: "2025-08-24" },
            { id: "45082", name: "PC postes de contrôle", status: "ES", location: "UAP1", lastMaintenance: "2023-12-23", nextMaintenance: "2025-08-23" },
            { id: "45083", name: "PC postes", status: "ES", location: "UAP1", lastMaintenance: "2023-12-22", nextMaintenance: "2025-08-22" },
            { id: "45084", name: "PC", status: "ES", location: "UAP1", lastMaintenance: "2023-12-21", nextMaintenance: "2025-08-21" },
            { id: "45087", name: "PC  S/E 100%", status: "ES", location: "UAP1", lastMaintenance: "2023-12-20", nextMaintenance: "2025-08-20" },
            { id: "45240", name: "PC  S/E 100%", status: "ES", location: "UAP1", lastMaintenance: "2023-12-19", nextMaintenance: "2025-08-19" },
            { id: "45249", name: "PC POIGNEE", status: "ES", location: "UAP1", lastMaintenance: "2023-12-18", nextMaintenance: "2025-08-18" },
                    
            // A-Series Equipment
            { id: "A-0003", name: "GABARIT COULISSEAUX", status: "ES", location: "MPC3", lastMaintenance: "2023-12-17", nextMaintenance: "2025-08-17" },
            { id: "A-0004", name: "GABARIT COULISSEAUX", status: "ES", location: "UAP2", lastMaintenance: "2023-12-16", nextMaintenance: "2025-08-16" },
            { id: "A-0010/01", name: "GABARIT ASSEMBLAGE CONTACT", status: "ES", location: "UAP1", lastMaintenance: "2023-12-15", nextMaintenance: "2025-08-15" },
            { id: "A-0024", name: "GABARIT MONTAGE BARREAU B3", status: "ES", location: "UAP1", lastMaintenance: "2023-12-14", nextMaintenance: "2025-08-14" },
            { id: "A-0027/02", name: "GABARIT D'ASSEMBLAGE BARREAUX VM1", status: "ES", location: "UAP1", lastMaintenance: "2023-12-13", nextMaintenance: "2025-08-13" },
            { id: "A-0033", name: "MACHINE SAFIR 130 T", status: "ES", location: "UAP1", lastMaintenance: "2023-12-12", nextMaintenance: "2025-08-12" },
            { id: "A-0038", name: "GABARIT POSAGE", status: "ES", location: "MPC3", lastMaintenance: "2023-12-11", nextMaintenance: "2025-08-11" },
            { id: "A-0041/06", name: "IMPRIMANTE ZEBRA DIRIS A20", status: "ES", location: "LOG", lastMaintenance: "2023-12-10", nextMaintenance: "2025-08-10" },
            { id: "A-0041/08", name: "IMPRIMANTE Z4M MAGASIN", status: "ES", location: "LOG", lastMaintenance: "2023-12-09", nextMaintenance: "2025-08-09" },
            { id: "A-0041/09", name: "IMPRIMANTE ZEBRA XI MAGASIN", status: "ES", location: "ZZ", lastMaintenance: "2023-12-08", nextMaintenance: "2025-08-08" },
            { id: "A-0041/10", name: "IMPRIMANTE ZEBRA 110 Xi III plus", status: "ES", location: "ZZ", lastMaintenance: "2023-12-07", nextMaintenance: "2025-08-07" },
            { id: "A-0041/12", name: "IMPRIMANATE RICOH METHODE", status: "ES", location: "ZZ", lastMaintenance: "2023-12-06", nextMaintenance: "2025-08-06" },
            { id: "A-0041/13", name: "IMPRIMANTE HP 8000", status: "ES", location: "ZZ", lastMaintenance: "2023-12-05", nextMaintenance: "2025-08-05" },
            { id: "A-0041/14", name: "IMPRIMANTE HP 4000 MAG", status: "ES", location: "LOG", lastMaintenance: "2023-12-04", nextMaintenance: "2025-08-04" },
            { id: "A-0041/15", name: "IMPRIMANTE ZEBRA MAGASIN", status: "ES", location: "MPF", lastMaintenance: "2023-12-03", nextMaintenance: "2025-08-03" },
            { id: "A-0041/16", name: "IMPRIMANTE RICOH COMPTABILITE", status: "ES", location: "ZZ", lastMaintenance: "2023-12-02", nextMaintenance: "2025-08-02" },
            { id: "A-0041/17", name: "RICOH FAX COMPTABILITE", status: "ES", location: "ZZ", lastMaintenance: "2023-12-01", nextMaintenance: "2025-08-01" },
            { id: "A-0041/18", name: "IMPRIMANTE DELL DIRECTEUR", status: "ES", location: "ZZ", lastMaintenance: "2023-11-30", nextMaintenance: "2025-07-31" },
            { id: "A-0041/19", name: "IMPRIMANTE HP GRH", status: "ES", location: "ZZ", lastMaintenance: "2023-11-29", nextMaintenance: "2025-07-30" },
            { id: "A-0041/20", name: "IMPRIMANTE RICOH LOGISTIQUE", status: "ES", location: "UAP1", lastMaintenance: "2023-11-28", nextMaintenance: "2025-07-29" },
            { id: "A-0044", name: "GABARIT MONTAGE BARREAU VM1", status: "ES", location: "UAP1", lastMaintenance: "2023-11-27", nextMaintenance: "2025-07-28" },
            { id: "A-0045", name: "GABARIT MONTAGE CAGE DE COUPURE VM1", status: "ES", location: "UAP2", lastMaintenance: "2023-11-26", nextMaintenance: "2025-07-27" },
            { id: "A-0049", name: "Outil de manœuvre", status: "ES", location: "UAP1", lastMaintenance: "2023-11-25", nextMaintenance: "2025-07-26" },
            { id: "A-0050", name: "GABARIT MONTAGE BARREAU VM2", status: "ES", location: "UAP1", lastMaintenance: "2023-11-24", nextMaintenance: "2025-07-25" },
            { id: "A-0052", name: "GABARIT MONTAGE CAGE DE COMMANDE VM2", status: "ES", location: "UAP1", lastMaintenance: "2023-11-23", nextMaintenance: "2025-07-24" },
            { id: "A-0058", name: "GABARIT CLIPSAGE CAPOT VM1/VM2", status: "ES", location: "UAP1", lastMaintenance: "2023-11-22", nextMaintenance: "2025-07-23" },
            { id: "A-0064", name: "Perceuse colonne d'établi CINCINATI PE 15", status: "ES", location: "UAP1", lastMaintenance: "2023-11-21", nextMaintenance: "2025-07-22" },
            { id: "A-0069/01", name: "PRESSE A PASTILLER + BOITIER DE COMMANDE", status: "ES", location: "UAP2", lastMaintenance: "2023-11-20", nextMaintenance: "2025-07-21" },
            { id: "A-0069/02", name: "PRESSE A PASTILLER + BOITIER DE COMMANDE", status: "ES", location: "UAP2", lastMaintenance: "2023-11-19", nextMaintenance: "2025-07-20" },
            { id: "A-0085", name: "MACHINE FILL AIR", status: "REBUS", location: "MPC1", lastMaintenance: "2023-11-18", nextMaintenance: "N/A" },
            { id: "A-0088", name: "GABARIT ASSEMBLAGE CONTACT", status: "ES", location: "UAP2", lastMaintenance: "2023-11-17", nextMaintenance: "2025-07-18" },
            { id: "A-0090/01", name: "PRESSE A SERTIR 4,3T", status: "ES", location: "UAP2", lastMaintenance: "2023-11-16", nextMaintenance: "2025-07-17" },
            { id: "A-0090/02", name: "PRESSE A SERTIR 4,3T", status: "ES", location: "UAP1", lastMaintenance: "2023-11-15", nextMaintenance: "2025-07-16" },
            { id: "A-0090/03", name: "PRESSE A SERTIR 3T", status: "ES", location: "UAP2", lastMaintenance: "2023-11-14", nextMaintenance: "2025-07-15" },
            { id: "A-0098", name: "GABARIT MONTAGE BARREAU B5", status: "ES", location: "UAP1", lastMaintenance: "2023-11-13", nextMaintenance: "2025-07-14" },
            { id: "A-0121", name: "GABARIT DE MONTAGE INSERT A20 & A40", status: "ES", location: "UAP2", lastMaintenance: "2023-11-12", nextMaintenance: "2025-07-13" },
            { id: "A-0123", name: "GABARIT D'ASSEMBLAGE DIRIS A20", status: "ES", location: "UAP2", lastMaintenance: "2023-11-11", nextMaintenance: "2025-07-12" },
            { id: "A-0131/10", name: "FER A SOUDER", status: "ES", location: "UAP2", lastMaintenance: "2023-11-10", nextMaintenance: "2025-07-11" },
            { id: "A-0131/11", name: "FER A SOUDER", status: "ES", location: "UAP2", lastMaintenance: "2023-11-09", nextMaintenance: "2025-07-10" },
            { id: "A-0131/12", name: "FER A SOUDER", status: "ES", location: "UAP2", lastMaintenance: "2023-11-08", nextMaintenance: "2025-07-09" },
            { id: "A-0131/13", name: "FER A SOUDER", status: "ES", location: "UAP2", lastMaintenance: "2023-11-07", nextMaintenance: "2025-07-08" },
            { id: "A-0131/14", name: "FER A SOUDER", status: "ES", location: "UAP2", lastMaintenance: "2023-11-06", nextMaintenance: "2025-07-07" },
            { id: "A-0133/01", name: "TESTEUR DIELECTRIQUE DIRIS A20", status: "ES", location: "UAP2", lastMaintenance: "2023-11-05", nextMaintenance: "2025-07-06" },
            { id: "A-0134", name: "BANC D'ENDURACE MECANIQUE 1", status: "ES", location: "LAB", lastMaintenance: "2023-11-04", nextMaintenance: "2025-07-05" },
            
           
            { id: "A-0147/1", name: "GABARIT DE COMPTAGE ACCESSOIRES", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-06-13" },
            { id: "A-0147/3", name: "GABARIT DE COMPTAGE ACCESSOIRES", status: "REBUS", location: "MPC2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-12-02" },
            { id: "A-0147/4", name: "GABARIT DE COMPTAGE ACCESSOIRES", status: "REBUS", location: "MPC2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-04-25" },
            { id: "A-0147/5", name: "GABARIT DE COMPTAGE ACCESSOIRES", status: "REBUS", location: "MPC2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-08-28" },
            { id: "A-0148", name: "GABARIT DE MONTAGE POIGNEE TYPE B", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-10-10" },
            { id: "A-0149/02", name: "GABARIT MONTAGE CLIP FIXATION DE L'AXE", status: "REBUS", location: "MPC", lastMaintenance: "2024-01-01", nextMaintenance: "2026-01-16" },
            { id: "A-0153", name: "GABARIT DE POSAGE A40", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-01-08" },
            { id: "A-0154", name: "BANC DE TEST DIRIS A40", status: "REBUS", location: "MPC3", lastMaintenance: "2024-01-01", nextMaintenance: "2026-06-25" },
            { id: "A-01576/02", name: "Gabarit de montage circlips", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-02-22" },
            { id: "A-0171", name: "GABARIT D'EBAVURAGE BARREAU VM1", status: "ES", location: "FAB", lastMaintenance: "2024-01-01", nextMaintenance: "2026-09-10" },
            { id: "A-0208", name: "MACHINE DE TEST POIGNEE P69", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-06-16" },
            { id: "A-0209", name: "GABARIT D'EBAVURAGE BARREAU VM2", status: "ES", location: "MOL", lastMaintenance: "2024-01-01", nextMaintenance: "2025-09-24" },
            { id: "A-0210", name: "MACHINE COUPE EJECTEUR", status: "ES", location: "MOL", lastMaintenance: "2024-01-01", nextMaintenance: "2025-10-06" },
            { id: "A-0213", name: "Testeur trames 026", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-01-30" },
            { id: "A-0227/01", name: "ARMOIRE ELECTRIQUE", status: "ES", location: "LAB", lastMaintenance: "2024-01-01", nextMaintenance: "2026-07-12" },
            { id: "A-0227/02", name: "BANC DE TEST NON DESTRICYIF DIRIS", status: "ES", location: "LAB", lastMaintenance: "2024-01-01", nextMaintenance: "2025-12-09" },
            { id: "A-0227/03", name: "BANC DE TEST NON DESTRICTIF DIRIS", status: "ES", location: "LAB", lastMaintenance: "2024-01-01", nextMaintenance: "2026-12-30" },
            { id: "A-0229/01", name: "MACHINE DE CONTROLE DIELECTRIQUE VM1", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-09-05" },
            { id: "A-0229/02", name: "MACHINE DE CONTROLE DIELECTRIQUE VM/COMM", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2025-11-11" },
            { id: "A-0232/02", name: "MACHINE DE CONTROLE FUSER BLOC N°2", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-08-02" },
            { id: "A-0237/02", name: "TENDEUR DE FIL", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-02-20" },
            { id: "A-0237/03", name: "TENDEUR DE FIL", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-09-17" },
            { id: "A-0238/01", name: "BOBINEUSE LS TRAMES 038/039", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-10-22" },
            { id: "A-0240", name: "DENUDEUSE ELECTRIQUE & TRANSFORMATEUR", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-07-28" },
            { id: "A-0243", name: "Testeur", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-06-03" },
            { id: "A-0247", name: "REGLAGE POINT 01", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-12-20" },
            { id: "A-0251", name: "ALIMENTATION ELECTRIQUE", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-05-06" },
            { id: "A-0252", name: "PLAQUE & SOCLE DE RACCORDEMENT", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-05-25" },
            { id: "A-0253", name: "Banc du test basulement", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2025-10-07" },
            { id: "A-0254", name: "GABARIT DE POSAGE S/E MECANISME SIRCO", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-09-29" },
            { id: "A-0255/01", name: "MACHINE DE CONTROLE SIRCO B5", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-08-18" },
            { id: "A-0255/03", name: "MACHINE DE CONTROLE SIRCO B4", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-03-18" },
            { id: "A-0255/04", name: "Testeur diélectrique", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-01-01" },
            { id: "A-0255/05", name: "Banc BBE", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-09-18" },
            { id: "A-0258", name: "COFFRET D'ALIMENTATION TRIPHASE", status: "ES", location: "LAB", lastMaintenance: "2024-01-01", nextMaintenance: "2025-10-22" },
            { id: "A-0259", name: "BANC D' ARRACHEMENT", status: "ES", location: "LAB", lastMaintenance: "2024-01-01", nextMaintenance: "2026-10-08" },
            { id: "A-0266", name: "Banc de controle 100 % A40", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-02-24" },
            { id: "A-0267", name: "GABARIT D'ASSEMBLAGE BARREAU B4", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-05-12" },
            { id: "A-0269", name: "GABARIT DE GRAISSAGE BARREAU B4", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-07-19" },
            { id: "A-0270", name: "GABARIT MONTAGE CAGE DE COUPURE B4", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2025-12-30" },
            { id: "A-0273", name: "GABARIT ASSEMBLAGE BARREAU B5", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2025-12-31" },
            { id: "A-0275", name: "GABARIT DE GRAISSAGE BARREAU B5", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-01-27" },
            { id: "A-0276", name: "GABARIT MONTAGE CAGE DE COUPURE B5", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2025-11-20" },
            { id: "A-0277", name: "IMPRIMANTE GK420T", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-06-07" },
            { id: "A-0284", name: "DISPOSITIF D ASSEMBLAGE DISQUE INDICATEU", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-10-31" },
            { id: "A-0285", name: "DISPOSITIF D ASSEMBLAGE SE ENTRAINEUR", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-09-22" },
            { id: "A-0286", name: "GABARIT DE MONTAGE SE MECANIQUE", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-04-13" },
            { id: "A-0287", name: "DISPOSITIF DE MONTAGE COMPOSANT CAGE INF", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-07-14" },
            { id: "A-0289", name: "BANC DE TEST COMMANDE ATYS M", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-07-24" },
            { id: "A-0290", name: "Gabarit mtge SE Pignon", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-01-14" },
            { id: "A-0291/01", name: "Outil de montage mecanisme CDE", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-12-12" },
            { id: "A-0291/02", name: "Outil de montage mecanisme CDE", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-11-26" },
            { id: "A-0291/03", name: "Outil de montage mecanisme CDE", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-08-17" },
            { id: "A-0292", name: "DISPOSITIF DE MONTAGE SE CAPOT SUPERIEUR", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-12-15" },
            { id: "A-0301", name: "MACHINE MARQUAGE LASER RT 800", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-12-17" },
            { id: "A-0312", name: "MACHINE TAMPOGRAPHIE MODULO 2", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-02-17" },
            { id: "A-0319", name: "MACHINEMONTAGE BARREAUX", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-11-28" },
            { id: "A-0320", name: "DISPOSITIF DU GRAISSAGE BARREAUX", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-05-23" },
            { id: "A-0321", name: "Gabarit de posage cage sup", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-11-04" },
            { id: "A-0323", name: "Testeur diélectrique SE Coupure ATyS M", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-06-10" },
            { id: "A-0324", name: "GABARIT D'ASSEMBLAGE", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-12-21" },
            { id: "A-0325", name: "DISPOSITIF D'ASSEMBLAGE NEZ P68/P77", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-11-03" },
            { id: "A-0326", name: "DISPOSITIF DE MONTAGE CAPOT ATYS M", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-06-21" },
            { id: "A-0328", name: "BANC DE TEST BT-P77-FINAL", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-09-30" },
            { id: "A-0328 SIB", name: "BANC DE TEST", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-03-12" },
            { id: "A-0328 SIB 1", name: "BANC DE TEST BT-P77-FINAL", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-12-21" },
            { id: "A-0330", name: "PRESSE D’INSERTION CHAMBRE DE COUPURE", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-05-30" },
            { id: "A-0345", name: "Gabarit MONTAGE ressort (sirco MV)", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-08-26" },
            { id: "A-0346", name: "MACHINE D'ASSEMBLAGE COMMANDE P77-P68", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-10-23" },
            { id: "A-0347", name: "MACHINE D'ASSEMBLAGE SIRCO MV", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-12-06" },
            { id: "A-0364", name: "SECHEUR TEMPO", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-12-29" },
            { id: "A-0400", name: "PRESS DE MONTAGE PLASTRON", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-09-24" },
            { id: "A-0401", name: "GABARIT DE COMPTAGE VIS BEL", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-03-20" },
            { id: "A-0402", name: "GABARIT DE MONTAGE BEL BET", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-12-08" },
            { id: "A-0410", name: "GABARIT DE MONTAGE S/E B3- B4 -B 5", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-02-15" },
            { id: "A-0442", name: "Gabarit de posage 100% A20", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-09-28" },
            { id: "A-0462", name: "GABARIT DE POSSAGE VM2", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-04-14" },
            { id: "A-0463", name: "Posage de gabarit", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-01-07" },
            { id: "A-0465", name: "GABARIT POSSAGE BARREAU GRAISSER 1", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-02-15" },
            { id: "A-0468", name: "GABARIT POSSAGE BARREAUX GRAISSER", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2025-12-12" },
            { id: "A-0475", name: "Banc du test basulement", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-12-15" },
            { id: "A-0476", name: "IMPRIMANTE GK420T", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-02-26" },
            { id: "A-0478", name: "Gabarit montage cage de coupure B4", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-06-08" },
            { id: "A-0480", name: "Gabarit de contrôle barreau B5", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2025-11-25" },
            { id: "A-0489", name: "Gabarit de posage", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-07-01" },
            { id: "A-0491", name: "IMPRIMANTE GK420T", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-03-04" },
            { id: "A-0492", name: "IMPRIMANTE GK420T", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-05-08" },
            { id: "A-0496", name: "PLATEAU DE POSSAGE B3/B4", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-04-23" },
            { id: "A-0497", name: "IMPRIMANTE GK420T", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-11-27" },
            { id: "A-0497 SIB", name: "IMPRIMANTE GK420T", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-12-17" },
            { id: "A-0498", name: "IMPRIMANTE Z110Xi3 PLUS", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-02-17" },
            { id: "A-0499", name: "IMPRIMANTE Z110Xi4", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-12-07" },
            { id: "A-0500", name: "BANC DE TEST ATYS B3 /B4 /B5", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-09-17" },
            { id: "A-0501", name: "IMPRIMANTE ZM 400", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-09-11" },
            { id: "A-0502", name: "IMPRIMANTE GK420T", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-03-28" },
            { id: "A-0502/01", name: "GABARIT MONTAGE COULISSEAU", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-07-04" },
            { id: "A-0503/01", name: "GABARIT CONTROLE COULISSEAU", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-11-06" },
            { id: "A-0511", name: "GABARIT DE DETECTION PASTILLE ET CONTACT", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-04-30" },
            { id: "A-0513", name: "IMPRIMANTE GK420T", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-05-04" },
            { id: "A-0514", name: "GABARIT de controole 100% P54", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-01-17" },
            { id: "A-0516", name: "Presse insertion lamelle", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-10-07" },
            { id: "A-0524", name: "IMPRIMANTE GK420T", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-05-31" },
            { id: "A-0525", name: "IMPRIMANTE GK420T", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-10-08" },
            { id: "A-0530", name: "GABARIT MONTAGE ECRAN DC B4", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-03-18" },
            { id: "A-0531", name: "COUPE CAROTTE PLAQUE 678900", status: "ES", location: "FAB", lastMaintenance: "2024-01-01", nextMaintenance: "2026-06-04" },
            { id: "A-0556", name: "Systéme de séchage", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-05-29" },
            { id: "A-0574", name: "GABARIT DE MONTAGE ECROU SUR PLASTRON SIRCOVER", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-02-17" },
            { id: "A-0578", name: "Presse D'assemblage cages VM", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-06-08" },
            { id: "A-0590", name: "Test basculement ATYSM", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-05-14" },
            { id: "A-0602", name: "MACHINE DE COMMUTATION MANUELLE DE COMMUTATEUR", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-05-18" },
            { id: "A-0608", name: "IMPRIMANTE GK420T", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-09-24" },
            { id: "A-0609", name: "Bain ultra son", status: "ES", location: "MOL", lastMaintenance: "2024-01-01", nextMaintenance: "2025-11-09" },
            { id: "A-0610", name: "Bain électrolusion", status: "ES", location: "MOL", lastMaintenance: "2024-01-01", nextMaintenance: "2025-10-16" },
            { id: "A-0611", name: "Rectifieuse", status: "REBUS", location: "MOL", lastMaintenance: "2024-01-01", nextMaintenance: "2025-12-10" },
            { id: "A-0619", name: "GABARIT AXE POIGNEE", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-11-10" },
            { id: "A-0634", name: "GABARIT DE CONTROLE VIS MOTEUR ET CAPOT BET", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-12-07" },
            { id: "A-0635/02", name: "SOUDEUSE 400V", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-08-22" },
            { id: "A-0635/03", name: "SOUDEUSE 300V", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-04-24" },
            { id: "A-0635/05", name: "SOUDEUSE 300V", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2025-12-06" },
            { id: "A-0635/06", name: "SOUDEUSE 300V", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-12-21" },
            { id: "A-0635/07", name: "SOUDEUSE 300V", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-10-30" },
            { id: "A-0643", name: "TESTEUR CAMERA", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-01-26" },
            { id: "A-0666", name: "Machine de montage et détection composants", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-04-04" },
            { id: "A-0669", name: "IMPRIMANTE Z110Xi3 PLUS", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-04-22" },
            { id: "A-0670", name: "IMPRIMANTE Z110Xi4", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-10-16" },
            { id: "A-0671", name: "Assemblage Posage Rotatif V2", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-12-25" },
            { id: "A-0674", name: "Gabarit de montage SE aimant P91 B4 et B5", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-10-17" },
            { id: "A-0682", name: "Gabarit de test barreau P91 B5", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-03-01" },
            { id: "A-0686/02", name: "SOUDEUSE 300V", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-08-30" },
            { id: "A-0686/03", name: "SOUDEUSE 300V", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-11-28" },
            { id: "A-0686/04", name: "SOUDEUSE 300V", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-04-25" },
            { id: "A-0686/05", name: "SOUDEUSE 300V", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-10-13" },
            { id: "A-0686/08", name: "SOUDEUSE 300V", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-11-19" },
            { id: "A-0686/10", name: "SOUDEUSE 300V", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-11-22" },
            { id: "A-0689/01", name: "SOUDEUSE 300V", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2025-11-29" },
            { id: "A-0711", name: "Moyen d’insertion presse lamelle", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-08-04" },
            { id: "A-0715", name: "IMPRIMANTE GK420T", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-09-23" },
            { id: "A-0752", name: "GABARIT MONAGE ECROU", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-11-27" },
            { id: "A-0753", name: "PERCEUSE A ETABLI", status: "ES", location: "MOL", lastMaintenance: "2024-01-01", nextMaintenance: "2026-09-03" },
            { id: "A-0808", name: "GABARIT COUPURE B3", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-01-07" },
            { id: "A-0809", name: "Gabarit de montage et test coupure", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-09-02" },
            { id: "A-0816", name: "Gabarit de pose cage de commande sircoverB4", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-05-11" },
            { id: "A-0822", name: "IMPRIMANTE GK420T", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2025-09-17" },
            { id: "A-0823", name: "IMPRIMANTE Z110Xi4", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-06-09" },
            { id: "A-0824", name: "IMPRIMANTE Z110Xi4", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-04-18" },
            { id: "A-0825", name: "IMPRIMANTE", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-11-11" },
            { id: "A-0832", name: "IMPRIMANTE Z110Xi4", status: "ES", location: "LOG", lastMaintenance: "2024-01-01", nextMaintenance: "2025-10-31" },
            { id: "A-0833", name: "IMPRIMANTE Z4M", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-10-12" },
            { id: "A-0834", name: "IMPRIMANTE", status: "REBUS", location: "LOG", lastMaintenance: "2024-01-01", nextMaintenance: "2026-06-26" },
            { id: "A-0838", name: "LE RÉENROULEUR", status: "ES", location: "LOG", lastMaintenance: "2024-01-01", nextMaintenance: "2025-10-24" },
            { id: "A-0842", name: "Gabarit manipulation poignee S2 axe 10", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-04-29" },
            { id: "A-0853", name: "Gabarit de Contrôle mécanisme frontal P54", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-12-10" },
            { id: "A-0854", name: "IMPRIMANTE Z110Xi4", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-07-17" },
            { id: "A-0855", name: "IMPRIMANTE Z110Xi4", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-10-29" },
            { id: "A-0859", name: "IMPRIMANTE ZM400", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-11-13" },
            { id: "A-0872", name: "GABARIT CTRL PRESENCE ECROU MODULE", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-11-23" },
            { id: "A-0876", name: "Banc de test TRAMES 026", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-09-04" },
            { id: "A-0894", name: "PRESSE A SERTIR 3T", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-04-10" },
            { id: "A-0897", name: "PC POSTE 100%", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-09-23" },
            { id: "A-0906", name: "Gabarit de contrôle vis mécanisme P54", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-12-05" },
            { id: "A-0907", name: "IMPRIMANTE Z110Xi4", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-02-21" },
            { id: "A-0908", name: "IMPRIMANTE Z110Xi4", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-05-09" },
            { id: "A-0910", name: "IMPRIMANTE Z110Xi3", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-10-06" },
            { id: "A-0911", name: "IMPRIMANTE Z110Xi4", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-02-04" },
            { id: "A-0918", name: "IMPRIMANTE Z110Xi4", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-11-19" },
            { id: "A-0919", name: "IMPRIMANTE Z110Xi4", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-05-26" },
            { id: "A-0937", name: "IMPRIMANTE Z110Xi4", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-04-26" },
            { id: "A-0938", name: "Gabarit de test méca LAT PROJET0002", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-02-20" },
            { id: "A-0952", name: "IMPRIMANTE GK420T", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-09-10" },
            { id: "A-0958", name: "PRESS MONTAGE CAPOT COMMUTATEUR VM", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-03-15" },
            { id: "A-0959", name: "Gabarit de montage poignées type S", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-10-05" },
            { id: "A-0965", name: "IMPRIMANTE GK420T", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-08-25" },
            { id: "A-0970/01", name: "TESTEUR DEUX ECROUX", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-06-02" },
            { id: "A-0973", name: "GABRIT DE CTRL BARREAU B4", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-10-13" },
            { id: "A-0981", name: "IMPRIMANTE GK420T", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-10-07" },
            { id: "A-0984", name: "GABARIT MONTAGE CDE B5", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-03-12" },
            { id: "A-1003", name: "GABARIT SIRCOVER B5", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-06-15" },
            { id: "A-1011", name: "IMPRIMANTE GK420T", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-04-17" },
            { id: "A-1014", name: "Machine Tampo", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2025-10-04" },
            { id: "A-1023", name: "GABRIT DE CTRL BARREAU B5", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-01-30" },
            { id: "A-1024", name: "IMPRIMANTE ZEBRA ZT610", status: "ES", location: "LOG", lastMaintenance: "2024-01-01", nextMaintenance: "2026-12-05" },
            { id: "A-1025", name: "IMPRIMANTE ZEBRA ZT610", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-09-28" },
            { id: "A-1026", name: "IMPRIMANTE GK420T", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2025-11-04" },
            { id: "A-1027", name: "IMPRIMANTE ZEBRA ZT610", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-12-20" },
            { id: "A-1028", name: "IPRIMANTE ZEBRZ ZT410", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-01-25" },
            { id: "A-1029", name: "Gabarit de montage barreau TRITRA", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-01-15" },
            { id: "A-1030", name: "Gabarit montage coupure TRITRA", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2025-12-12" },
            { id: "A-1042", name: "Machine cousin d ‘air BET", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-09-22" },
            { id: "A-1043", name: "Machine coussin d'air générique SIRCO", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-03-27" },
            { id: "A-1045", name: "IMPRIMANTE ZT410", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-05-16" },
            { id: "A-1046", name: "IPRIMANTE ZEBRA ZT410", status: "ES", location: "LOG", lastMaintenance: "2024-01-01", nextMaintenance: "2025-12-27" },
            { id: "A-1047", name: "DISTRIBUTEUR VIS BEL", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-10-05" },
            { id: "A-1049", name: "NV testeur VM", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-10-16" },
            { id: "A-1059", name: "GRAISSEUR SIRCO M", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-04-25" },
            { id: "A-1060", name: "GABARIT INSERTION GOUPILLE POIGNEE", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2025-10-12" },
            { id: "A-1064", name: "GABARIT MONTAGE CONTACT", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-02-16" },
            { id: "A-1114", name: "NOUVELLE GABARIT DE MONTAGE COUPURE P91 B5", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-01-04" },
            { id: "A-1115", name: "Imprimante étiquette défaut de banc BET", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-06-26" },
            { id: "A-1119", name: "DISTRIBUTEUR VIS BET", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-07-18" },
            { id: "A-1121", name: "Gabarit montage poigne", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-11-25" },
            { id: "A-1125", name: "ENCODEUR SUR PONTOGRAPHE", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-06-09" },
            { id: "A-1131", name: "GABARIT DE POSE SE MECANISME B3", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-04-10" },
            { id: "A-1132", name: "GABARIT DE POSE SE MECANISME B4", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-11-20" },
            { id: "A-1133", name: "GABARIT DE POSE SE MECANISME B5", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2025-10-20" },
            { id: "A-1138", name: "PRESSE D'INSERTION PICOTS", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-09-30" },
            { id: "A-1139", name: "GABARIT DE RACCORDEMENT ET DE SODURE", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-12-23" },
            { id: "A-1140", name: "GABARIT DE TEST TRAMES 239", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-12-15" },
            { id: "A-1143", name: "Gabarit de mtg barreau B4", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-03-20" },
            { id: "A-1144", name: "GABARIT TEST CONTACT", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-12-14" },
            { id: "A-1151", name: "ETUVE", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-08-01" },
            { id: "A-1152", name: "Gabarit teste présence pastille", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-11-27" },
            { id: "A-1154", name: "GABARIT DE MONTAGE COMMANDE", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2025-11-29" },
            { id: "A-1155", name: "Gabarit Montage SE Contact Mobile", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-12-04" },
            { id: "A-1156", name: "Gabarit Montage SE Contact Mobile", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-10-21" },
            { id: "A-1158", name: "IMPRIMANTE ZD420", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-02-10" },
            { id: "A-1165", name: "Gabarit commande sircover B03", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-09-22" },
            { id: "A-1166", name: "TESTEU ECROU EXPORT", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-02-26" },
            { id: "A-1167", name: "IMPRIMANTE", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-11-22" },
            { id: "A-1168", name: "Gabarit Montage S/E Barreaux", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2025-12-21" },
            { id: "A-1169", name: "Gabarit Montage S/E Barreaux", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-10-28" },
            { id: "A-1170", name: "Graisseur Contact Coupure F2+F3", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-08-08" },
            { id: "A-1171", name: "Ligne D'assemblage Coupure F2+F3", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-05-15" },
            { id: "A-1176", name: "Montage plage de raccordement", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-10-04" },
            { id: "A-1177", name: "TESTEUR COULISSEAU", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-11-17" },
            { id: "A-1178", name: "Testeur SIRCO M", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-09-20" },
            { id: "A-1181", name: "Moyen de montage chambre de coupure 500V", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-10-03" },
            { id: "A-1182", name: "Moyen de montage chambre de coupure 750V", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-09-16" },
            { id: "A-1200", name: "GABARIT MONTAGE BARREAU", status: "ES", location: "LOG", lastMaintenance: "2024-01-01", nextMaintenance: "2025-10-18" },
            { id: "A-1201", name: "Aspirateur de fumée", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-10-20" },
            { id: "A-1202", name: "IMPRIMANTE ZD421", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2025-12-07" },
            { id: "A-1207", name: "GABARIT CTRL COUPURE PAR CAMERA", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-04-10" },
            { id: "A-1210", name: "IMPRIMANTE GK420T", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-09-07" },
            { id: "A-1214", name: "Gabarit contrôle vis rondelle écrou", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2026-01-26" },
            { id: "A-1215", name: "TESTEUR TRAMES 285", status: "ES", location: "UAP1", lastMaintenance: "2024-01-01", nextMaintenance: "2026-02-28" },
            { id: "A-1216", name: "LIGNE D'ASSEMBLAGE MECA MANU", status: "ES", location: "UAP2", lastMaintenance: "2024-01-01", nextMaintenance: "2025-09-09"},
           
            { id: "A-1365", name: "RIVETEUSE", status: "ES", location: "UAP2", lastMaintenance: "2023-10-15", nextMaintenance: "2025-09-01" },
            { id: "A-1366", name: "RIVETEUSE", status: "ES", location: "UAP2", lastMaintenance: "2024-01-05", nextMaintenance: "2025-09-01" },
            { id: "A-1368", name: "BOL PASTILLAGE", status: "ES", location: "UAP2", lastMaintenance: "2023-12-20", nextMaintenance: "2025-09-01" },
            { id: "A-1371", name: "Montage Ecran +contrôle Ecrou", status: "ES", location: "UAP2", lastMaintenance: "2024-02-10", nextMaintenance: "2025-09-01" },
            { id: "A-1376", name: "Testeur Polarité Condensateur (pont MXL)", status: "ES", location: "PCO", lastMaintenance: "2023-11-01", nextMaintenance: "2025-09-01" },
            { id: "A-1377", name: "Pressfiteuse SE IGBT RI (pont MXL)", status: "ES", location: "PCO", lastMaintenance: "2024-03-15", nextMaintenance: "2025-09-01" },
            { id: "A-1378", name: "Test caméra et regroupement SE IGBT RI (pont MXL)", status: "ES", location: "PCO", lastMaintenance: "2023-09-25", nextMaintenance: "2025-09-01" },
            { id: "A-1381", name: "Gabarit de vissage SE IGBT BO (pont MXL)", status: "ES", location: "PCO", lastMaintenance: "2024-01-20", nextMaintenance: "2025-09-01" },
            { id: "A-1398/01", name: "Palette SE Pont (pont MXL)", status: "ES", location: "PCO", lastMaintenance: "2023-12-05", nextMaintenance: "2025-09-01" },
            { id: "A-1398/02", name: "Palette SE Pont (pont MXL)", status: "ES", location: "PCO", lastMaintenance: "2024-02-25", nextMaintenance: "2025-09-01" },
            { id: "A-1398/03", name: "Palette SE Pont (pont MXL)", status: "ES", location: "PCO", lastMaintenance: "2023-10-10", nextMaintenance: "2025-09-01" },
            { id: "A-1398/04", name: "Palette SE Pont (pont MXL)", status: "ES", location: "PCO", lastMaintenance: "2024-03-01", nextMaintenance: "2025-09-01" },
            { id: "A-1398/05", name: "Palette SE Pont (pont MXL)", status: "ES", location: "PCO", lastMaintenance: "2023-11-20", nextMaintenance: "2025-09-01" },
            { id: "A-1398/06", name: "Palette SE Pont (pont MXL)", status: "ES", location: "PCO", lastMaintenance: "2024-01-15", nextMaintenance: "2025-09-01" },
            { id: "A-1398/07", name: "Palette SE Pont (pont MXL)", status: "ES", location: "PCO", lastMaintenance: "2023-09-05", nextMaintenance: "2025-09-01" },
            { id: "A-1398/08", name: "Palette SE Pont (pont MXL)", status: "ES", location: "PCO", lastMaintenance: "2024-02-20", nextMaintenance: "2025-09-01" },
            { id: "A-1398/09", name: "Palette SE Pont (pont MXL)", status: "ES", location: "PCO", lastMaintenance: "2023-12-15", nextMaintenance: "2025-09-01" },
            { id: "A-1398/10", name: "Palette SE Pont (pont MXL)", status: "ES", location: "PCO", lastMaintenance: "2024-03-10", nextMaintenance: "2025-09-01" },
            { id: "A-1398/11", name: "Palette SE Pont (pont MXL)", status: "ES", location: "PCO", lastMaintenance: "2023-10-25", nextMaintenance: "2025-09-01" },
            { id: "A-1398/12", name: "Palette SE Pont (pont MXL)", status: "ES", location: "PCO", lastMaintenance: "2024-01-30", nextMaintenance: "2025-09-01" },
            { id: "A-1435", name: "Gabarit de montage Barreau Booster B4", status: "ES", location: "UAP1", lastMaintenance: "2023-11-10", nextMaintenance: "2025-09-01" },
            { id: "A-1440", name: "Gabarit d'empatage dissipateur BO (pont MXL)", status: "ES", location: "PCO", lastMaintenance: "2024-02-15", nextMaintenance: "2025-09-01" },
            { id: "A-1441", name: "Convoyeur pont vers ligne Module (pont MXL)", status: "ES", location: "PCO", lastMaintenance: "2023-09-20", nextMaintenance: "2025-09-01" },
            { id: "A-1446", name: "Liftop chariot manipulateur (pont MXL)", status: "ES", location: "PCO", lastMaintenance: "2024-03-05", nextMaintenance: "2025-09-01" },
            { id: "A-1456", name: "GABARTI DE CENTRAGE F3 2+2 4P", status: "ES", location: "UAP2", lastMaintenance: "2023-12-01", nextMaintenance: "2025-09-01" },
            { id: "A-1457", name: "GABARTI DE CENTRAGE F2 3P", status: "ES", location: "UAP2", lastMaintenance: "2024-01-25", nextMaintenance: "2025-09-01" },
            { id: "A-1458", name: "GABARTI DE CENTRAGE F2 1+1 2P", status: "ES", location: "UAP2", lastMaintenance: "2023-10-15", nextMaintenance: "2025-09-01" },
            { id: "A-1459", name: "GABARTI DE CENTRAGE F3 3P", status: "ES", location: "UAP2", lastMaintenance: "2024-02-28", nextMaintenance: "2025-09-01" },
            { id: "A-1460", name: "GABARTI DE CENTRAGE F3 1+1 2P", status: "ES", location: "UAP2", lastMaintenance: "2023-11-20", nextMaintenance: "2025-09-01" },
            { id: "A-1462", name: "Gabarit de montage coulisseaux", status: "ES", location: "UAP2", lastMaintenance: "2024-03-15", nextMaintenance: "2025-09-01" },
            { id: "A-1463", name: "Gabarit de montage coulisseaux", status: "ES", location: "UAP2", lastMaintenance: "2023-09-10", nextMaintenance: "2025-09-01" },
            { id: "A-1464", name: "Gabarit de montage coupure Tri/tétra", status: "ES", location: "UAP1", lastMaintenance: "2024-01-20", nextMaintenance: "2025-09-01" },
            { id: "A-1465", name: "Gabarit de montage coupure Tri/tétra", status: "ES", location: "UAP1", lastMaintenance: "2023-12-10", nextMaintenance: "2025-09-01" },
            { id: "A-1468", name: "GRAISSEUR AUTOMATIQUE", status: "ES", location: "UAP1", lastMaintenance: "2024-02-25", nextMaintenance: "2025-09-01" },
            { id: "A-1472", name: "Gabarit Montage cage commande 1", status: "ES", location: "UAP1", lastMaintenance: "2023-11-05", nextMaintenance: "2025-09-01" },
            { id: "A-1496", name: "Banc De Test FCT Calib DIRIS A20 A40", status: "ES", location: "UAP2", lastMaintenance: "2024-03-01", nextMaintenance: "2025-09-01" },
            { id: "A-1497", name: "BANC DE TEST BEL", status: "ES", location: "UAP2", lastMaintenance: "2023-10-20", nextMaintenance: "2025-09-01" },
            { id: "A-1498", name: "IMPRIMANTE ZT410", status: "ES", location: "UAP2", lastMaintenance: "2024-01-15", nextMaintenance: "2025-09-01" },
            { id: "A-1508", name: "IMPRIMANTE ZT411", status: "ES", location: "UAP1", lastMaintenance: "2023-12-20", nextMaintenance: "2025-09-01" },
            { id: "A-1512", name: "Gabarit contrôle de pastilles V2", status: "ES", location: "UAP2", lastMaintenance: "2024-02-10", nextMaintenance: "2025-09-01" },
            { id: "A-1530", name: "Convoyeur de retour et ascenseur palette SE Pont", status: "ES", location: "UAP2", lastMaintenance: "2023-11-25", nextMaintenance: "2025-09-01" },
            { id: "A-1535", name: "BANC DE TEST BET", status: "ES", location: "PCO", lastMaintenance: "2024-03-20", nextMaintenance: "2025-09-01" },
            { id: "A-1545", name: "Gabarit montage et contrôle coupure ATYS M", status: "ES", location: "UAP2", lastMaintenance: "2023-09-15", nextMaintenance: "2025-09-01" },
            { id: "A-1546", name: "Gabarit de montage S/E plastron B5", status: "ES", location: "UAP2", lastMaintenance: "2024-01-30", nextMaintenance: "2025-09-01" },
            { id: "A-1547", name: "GABARIT CONTROLE AXE", status: "ES", location: "PCO", lastMaintenance: "2023-12-05", nextMaintenance: "2025-09-01" },
            { id: "A-1566", name: "Machine de soudure automatique PSM102", status: "ES", location: "PCO", lastMaintenance: "2024-02-28", nextMaintenance: "2025-09-01" },
            { id: "A-1571", name: "Banc de test fonctionnel et diélectrique SLOT/DXL/MXL/ARMOIRE", status: "ES", location: "PCO", lastMaintenance: "2023-11-10", nextMaintenance: "2025-09-01" },
            { id: "A-1572", name: "Banc de test fonctionnel MXL", status: "ES", location: "PCO", lastMaintenance: "2024-03-05", nextMaintenance: "2025-09-01" },
            { id: "A-1573", name: "Banc Heat RUN MXL", status: "ES", location: "PCO", lastMaintenance: "2023-10-25", nextMaintenance: "2025-09-01" },
            { id: "A-1574", name: "Banc de test fonctionnel DXL", status: "ES", location: "PCO", lastMaintenance: "2024-01-20", nextMaintenance: "2025-09-01" },
            { id: "A-1575", name: "Banc Heat RUN DXL", status: "ES", location: "PCO", lastMaintenance: "2023-12-15", nextMaintenance: "2025-09-01" },
            { id: "A-1576/01", name: "Gabarit de montage circlips", status: "ES", location: "UAP2", lastMaintenance: "2024-02-25", nextMaintenance: "2025-09-01" },
            
            // B-Series Equipment
            { id: "B-0001", name: "END-04 BANC D'ENDURANCE SIRCO/SIRCOVER/FUSERBLOC/VM/MV", status: "ES", location: "LAB", lastMaintenance: "2023-11-05", nextMaintenance: "2025-09-01" },
            { id: "B-0002", name: "END-2 BANC D'ENDURANCE ATYS M(D);ATYS P87", status: "ES", location: "LAB", lastMaintenance: "2024-03-15", nextMaintenance: "2025-09-02" },
            { id: "B-0021", name: "END-03 BANC D'ENDURANCE SIRCO/SIRCOVER/FUSERBLOC/VM/MV", status: "ES", location: "LAB", lastMaintenance: "2023-09-20", nextMaintenance: "2025-09-03" },
            { id: "B-0030", name: "BANC DE TEST COMPLET", status: "ES", location: "LAB", lastMaintenance: "2024-01-25", nextMaintenance: "2025-09-04" },
            { id: "B-0031", name: "BANC D'ESSAI BASCULEMENT", status: "ES", location: "LAB", lastMaintenance: "2023-12-10", nextMaintenance: "2025-09-05" },
            { id: "B-0032", name: "END-1 BANC D'ENDURANCE ATYS M(P,T,G);ATYSP(P87)", status: "ES", location: "MOL", lastMaintenance: "2024-02-20", nextMaintenance: "2025-09-06" },
            // D-Series Equipment

            { id: "D-0001/01", name: "ROBOT SEPRO", status: "REBUS", location: "FAB", lastMaintenance: "2023-11-15", nextMaintenance: "2025-09-07" },
            { id: "D-0001/02", name: "CONVOYEUR PRESSE D'INJECTION KM01", status: "ES", location: "FAB", lastMaintenance: "2024-03-01", nextMaintenance: "2025-09-08" },
            { id: "D-0001/03", name: "CONVOYEUR PRESSE D'INJECTION KM03", status: "ES", location: "MOL", lastMaintenance: "2023-10-05", nextMaintenance: "2025-09-09" },
            { id: "D-0001/04", name: "ARMOIRE MOULE", status: "REBUS", location: "MOL", lastMaintenance: "2024-01-30", nextMaintenance: "2025-09-10" },
            { id: "D-0001/05", name: "PALAN TECMAN 3,2T KM05", status: "ES", location: "MOL", lastMaintenance: "2023-12-20", nextMaintenance: "2025-09-11" },
            { id: "D-0002/01", name: "ROBOT SEPRO", status: "REBUS", location: "FAB", lastMaintenance: "2024-02-10", nextMaintenance: "2025-09-12" },
            { id: "D-0002/03", name: "CONVOYEUR DE REFROIDISSEMENT KM02", status: "ES", location: "MOL", lastMaintenance: "2023-11-25", nextMaintenance: "2025-09-13" },
            { id: "D-0002/04", name: "ARMOIRE MOULE", status: "REBUS", location: "MOL", lastMaintenance: "2024-03-20", nextMaintenance: "2025-09-14" },
            { id: "D-0002/05", name: "PALAN TECMAN 3,2T KM02", status: "ES", location: "FAB", lastMaintenance: "2023-09-15", nextMaintenance: "2025-09-15" },
            { id: "D-0003", name: "PRESSE D'INJECTION KM01", status: "ES", location: "FAB", lastMaintenance: "2024-01-25", nextMaintenance: "2025-09-16" },
            { id: "D-0003/01", name: "ROBOT SEPRO KM01", status: "ES", location: "FAB", lastMaintenance: "2023-12-05", nextMaintenance: "2025-09-17" },
            { id: "D-0003/05", name: "PALAN TECMAN 3,2T KM01", status: "ES", location: "FAB", lastMaintenance: "2024-02-28", nextMaintenance: "2025-09-18" },
            { id: "D-0004", name: "PRESSE D'INJECTION KM02", status: "ES", location: "FAB", lastMaintenance: "2023-11-10", nextMaintenance: "2025-09-19" },
            { id: "D-0004/01", name: "ROBOT SEPRO KM02", status: "ES", location: "FAB", lastMaintenance: "2024-03-05", nextMaintenance: "2025-09-20" },
            { id: "D-0004/02", name: "CONVOYEUR PRESSE D'INJECTION KM02", status: "ES", location: "FAB", lastMaintenance: "2023-10-20", nextMaintenance: "2025-09-21" },
            { id: "D-0004/03", name: "CONVOYEUR DE REFROIDISSEMENT KM04", status: "ES", location: "FAB", lastMaintenance: "2024-01-20", nextMaintenance: "2025-09-22" },
            { id: "D-0004/05", name: "PALAN TECMAN 3,2T KM02", status: "ES", location: "FAB", lastMaintenance: "2023-12-15", nextMaintenance: "2025-09-23" },
            { id: "D-0005", name: "G, EAU GLACEE MACHINE", status: "REBUS", location: "MOL", lastMaintenance: "2024-02-25", nextMaintenance: "2025-09-24" },
            { id: "D-0006", name: "G, EAU GLACEE MACHINE", status: "REBUS", location: "MOL", lastMaintenance: "2023-11-05", nextMaintenance: "2025-09-25" },
            { id: "D-0007", name: "PRECHAUFFEUR", status: "ES", location: "FAB", lastMaintenance: "2024-03-15", nextMaintenance: "2025-09-26" },
            { id: "D-0008", name: "PRESSE D'INJECTION KM03", status: "ES", location: "FAB", lastMaintenance: "2023-09-20", nextMaintenance: "2025-09-27" },
            { id: "D-0008/01", name: "ROBOT SEPRO KM03", status: "ES", location: "FAB", lastMaintenance: "2024-01-25", nextMaintenance: "2025-09-28" },
            { id: "D-0008/05", name: "PALAN TECMAN 5T KM03", status: "ES", location: "FAB", lastMaintenance: "2023-12-10", nextMaintenance: "2025-09-29" },
            { id: "D-0009", name: "PRESSE D'INJECTION KM04", status: "ES", location: "FAB", lastMaintenance: "2024-02-20", nextMaintenance: "2025-09-30" },
            { id: "D-0009/01", name: "ROBOT SEPRO KM04", status: "ES", location: "FAB", lastMaintenance: "2023-11-15", nextMaintenance: "2025-10-01" },
            { id: "D-0009/03", name: "CONVOYEUR DE REFROIDISSEMENT KM01", status: "ES", location: "FAB", lastMaintenance: "2024-03-01", nextMaintenance: "2025-10-02" },
            { id: "D-0009/05", name: "PALAN TECMAN 3,2 T KM04", status: "ES", location: "FAB", lastMaintenance: "2023-10-05", nextMaintenance: "2025-10-03" },
            { id: "D-0010", name: "PRESSE D'INJECTION KM05", status: "ES", location: "FAB", lastMaintenance: "2024-01-30", nextMaintenance: "2025-10-04" },
            { id: "D-0010/01", name: "ROBOT SEPRO KM05", status: "ES", location: "FAB", lastMaintenance: "2023-12-20", nextMaintenance: "2025-10-05" },
            { id: "D-0012", name: "PRESSE D'INJECTION KM06", status: "ES", location: "FAB", lastMaintenance: "2024-02-10", nextMaintenance: "2025-10-06" },
            { id: "D-0012/01", name: "ROBOT SEPRO KM06", status: "ES", location: "FAB", lastMaintenance: "2023-11-25", nextMaintenance: "2025-10-07" },
           
            // E-Series Equipment
           
            { id: "E-0001/02", name: "SABLEUSE ROSLER N°4", status: "ES", location: "FAB", lastMaintenance: "2024-03-20", nextMaintenance: "2025-10-08" },
            { id: "E-0001/03", name: "CONVOYEUR PRESSE D'INJECTION KM04", status: "ES", location: "FAB", lastMaintenance: "2023-09-15", nextMaintenance: "2025-10-09" },
            { id: "E-0002/01", name: "SABLEUSE ROSLER N°2", status: "ES", location: "FAB", lastMaintenance: "2024-01-25", nextMaintenance: "2025-10-10" },
            { id: "E-0002/02", name: "SABLEUSE ROSLER N°5", status: "ES", location: "FAB", lastMaintenance: "2023-12-05", nextMaintenance: "2025-10-11" },
            { id: "E-0003/01", name: "SABLEUSE ROSLER N°1", status: "ES", location: "FAB", lastMaintenance: "2024-02-28", nextMaintenance: "2025-10-12" },
            { id: "E-0003/03", name: "CONVOYEUR D'EVACUATION KM02", status: "ES", location: "FAB", lastMaintenance: "2023-11-10", nextMaintenance: "2025-10-13" },
            { id: "E-0004/01", name: "SABLEUSE", status: "ES", location: "FAB", lastMaintenance: "2024-03-05", nextMaintenance: "2025-10-14" },
            { id: "E-0004/03", name: "CONVOYEUR PRESSE D'INJECTION KM04", status: "ES", location: "FAB", lastMaintenance: "2023-10-20", nextMaintenance: "2025-10-15" },
            { id: "E-0008/03", name: "CONVOYEUR D'EVACUATION KM03", status: "ES", location: "FAB", lastMaintenance: "2024-01-20", nextMaintenance: "2025-10-16" },
            { id: "E-0009/03", name: "CONVOYEUR D'EVACUATION KM01", status: "ES", location: "FAB", lastMaintenance: "2023-12-15", nextMaintenance: "2025-10-17" },
            { id: "E-0010/03", name: "CASIER MACHINE KM01", status: "REBUS", location: "FAB", lastMaintenance: "2024-02-25", nextMaintenance: "2025-10-18" },
            { id: "E-0011/01", name: "CONVOYEUR DE POSAGE PIECE KM05", status: "ES", location: "FAB", lastMaintenance: "2023-11-05", nextMaintenance: "2025-10-19" },
            { id: "E-0011/02", name: "CONVOYEUR DE REFROIDISSEMENT KM05", status: "ES", location: "FAB", lastMaintenance: "2024-03-15", nextMaintenance: "2025-10-20" },
            { id: "E-0012/01", name: "CONVOYEUR DE POSAGE PIECE KM06", status: "ES", location: "FAB", lastMaintenance: "2023-09-20", nextMaintenance: "2025-10-21" },
            { id: "E-0012/02", name: "Convoyeur de Refroidissement KM06", status: "ES", location: "FAB", lastMaintenance: "2024-01-25", nextMaintenance: "2025-10-22" },
            { id: "E-0012/03", name: "Convoyeur Finition KM06", status: "ES", location: "FAB", lastMaintenance: "2023-12-10", nextMaintenance: "2025-10-23" },
            
            // F-Series Equipment
           
            { id: "F-3277", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-02-20", nextMaintenance: "2025-10-24" },
            { id: "F-3277P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2023-11-15", nextMaintenance: "2025-10-25" },
            { id: "F-10636", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-03-01", nextMaintenance: "2025-10-26" },
            { id: "F-3197", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2023-10-05", nextMaintenance: "2025-10-27" },
            { id: "F-3197P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2024-01-30", nextMaintenance: "2025-10-28" },
            { id: "F-3253", name: "MOULE 515428 /515429", ref: "3253", status: "ES", location: "MOL", lastMaintenance: "2023-12-20", nextMaintenance: "2025-10-29" },
            { id: "F-3253P", name: "PLAQUE ROBOT", ref: "3253", status: "ES", location: "MOL", lastMaintenance: "2024-02-10", nextMaintenance: "2025-10-30" },
            { id: "F-3263", name: "MOULE FUSER BLOC 516969", ref: "3263", status: "ES", location: "MOL", lastMaintenance: "2023-11-25", nextMaintenance: "2025-10-31" },
            { id: "F-3263P", name: "PLAQUE ROBOT", ref: "3263", status: "ES", location: "MOL", lastMaintenance: "2024-03-20", nextMaintenance: "2025-11-01" },
            { id: "F-3277", name: "MOULE FUSER BLOC 518303", ref: "3277", status: "ES", location: "MOL", lastMaintenance: "2023-09-15", nextMaintenance: "2025-11-02" },
            { id: "F-3277P", name: "PLAQUE ROBOT", ref: "3277", status: "ES", location: "MOL", lastMaintenance: "2024-06-12", nextMaintenance: "2025-11-03" },
            { id: "F-10636", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2023-08-19", nextMaintenance: "2025-11-04" },
            { id: "F-3197", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-04-25", nextMaintenance: "2025-11-05" },
            { id: "F-3197P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2023-12-07", nextMaintenance: "2025-11-06" },
            { id: "F-3253", name: "MOULE 515428 /515429", ref: "3253", status: "ES", location: "MOL", lastMaintenance: "2024-02-14", nextMaintenance: "2025-11-07" },
            { id: "F-3253P", name: "PLAQUE ROBOT", ref: "3253", status: "ES", location: "MOL", lastMaintenance: "2023-10-30", nextMaintenance: "2025-11-08" },
            { id: "F-3263", name: "MOULE FUSER BLOC 516969", ref: "3263", status: "ES", location: "MOL", lastMaintenance: "2024-05-09", nextMaintenance: "2025-11-09" },
            { id: "F-3263P", name: "PLAQUE ROBOT", ref: "3263", status: "ES", location: "MOL", lastMaintenance: "2023-09-22", nextMaintenance: "2025-11-10" },
            { id: "F-3277", name: "MOULE FUSER BLOC 518303", ref: "3277", status: "ES", location: "MOL", lastMaintenance: "2024-03-16", nextMaintenance: "2025-11-11" },
            { id: "F-3277P", name: "PLAQUE ROBOT", ref: "3277", status: "ES", location: "MOL", lastMaintenance: "2023-11-28", nextMaintenance: "2025-11-12" },
            { id: "F-3326", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-01-05", nextMaintenance: "2025-11-13" },
            { id: "F-3326P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2023-10-12", nextMaintenance: "2025-11-14" },
            { id: "F-3356", name: "MOULE 520324 / 520325", ref: "3356", status: "ES", location: "MOL", lastMaintenance: "2024-04-03", nextMaintenance: "2025-11-15" },
            { id: "F-3356P", name: "PLAQUE ROBOT", ref: "3356", status: "ES", location: "MOL", lastMaintenance: "2023-12-19", nextMaintenance: "2025-11-16" },
            { id: "F-3358", name: "MOULE 520484 /520485", ref: "3358", status: "ES", location: "MOL", lastMaintenance: "2024-02-27", nextMaintenance: "2025-11-17" },
            { id: "F-3358P", name: "PLAQUE ROBOT", ref: "3358", status: "ES", location: "MOL", lastMaintenance: "2023-09-08", nextMaintenance: "2025-11-18" },
            { id: "F-3359", name: "MOULE 520542 /520543", ref: "3359", status: "ES", location: "MOL", lastMaintenance: "2024-05-22", nextMaintenance: "2025-11-19" },
            { id: "F-3359P", name: "PLAQUE ROBOT", ref: "3359", status: "ES", location: "MOL", lastMaintenance: "2023-11-03", nextMaintenance: "2025-11-20" },
            { id: "F-3360", name: "MOULE 520539 /520540", ref: "3360", status: "ES", location: "MOL", lastMaintenance: "2024-03-11", nextMaintenance: "2025-11-21" },
            { id: "F-3360P", name: "PLAQUE ROBOT", ref: "3360", status: "ES", location: "MOL", lastMaintenance: "2023-10-26", nextMaintenance: "2025-11-22" },
            { id: "F-3363", name: "MOULE CAGE DE COMMANDE", ref: "3363", status: "ES", location: "MOL", lastMaintenance: "2024-01-14", nextMaintenance: "2025-11-23" },
            { id: "F-3363P", name: "PLAQUE ROBOT", ref: "3363", status: "ES", location: "MOL", lastMaintenance: "2023-12-01", nextMaintenance: "2025-11-24" },
            { id: "F-3381", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-04-18", nextMaintenance: "2025-11-25" },
            { id: "F-3381P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2023-09-15", nextMaintenance: "2025-11-26" },
            { id: "F-3385", name: "MOULE BARREAU NON MARQUE VM1", ref: "3385", status: "ES", location: "MOL", lastMaintenance: "2024-02-09", nextMaintenance: "2025-11-27" },
            { id: "F-3385P", name: "PLAQUE ROBOT", ref: "3385", status: "ES", location: "MOL", lastMaintenance: "2023-11-21", nextMaintenance: "2025-11-28" },
            { id: "F-3388", name: "MOULE 521911 / 521912", ref: "3388", status: "ES", location: "MOL", lastMaintenance: "2024-05-05", nextMaintenance: "2025-11-29" },
            { id: "F-3388P", name: "PLAQUE ROBOT", ref: "3388", status: "ES", location: "MOL", lastMaintenance: "2023-10-08", nextMaintenance: "2025-11-30" },
            { id: "F-3397", name: "MOULE 522108 / 522109", ref: "3397", status: "ES", location: "MOL", lastMaintenance: "2024-03-29", nextMaintenance: "2025-12-01" },
            { id: "F-3397P", name: "PLAQUE ROBOT", ref: "3397", status: "ES", location: "MOL", lastMaintenance: "2023-12-14", nextMaintenance: "2025-12-02" },
            { id: "F-3398", name: "MOULE BARREAU MOBILE TETRA VM2", ref: "3398", status: "ES", location: "MOL", lastMaintenance: "2024-01-23", nextMaintenance: "2025-12-03" },
            { id: "F-3398P", name: "PLAQUE ROBOT", ref: "3398", status: "ES", location: "MOL", lastMaintenance: "2023-09-29", nextMaintenance: "2025-12-04" },
            { id: "F-3418", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-04-12", nextMaintenance: "2025-12-05" },
            { id: "F-3418P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2023-11-07", nextMaintenance: "2025-12-06" },
            { id: "F-3439", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-02-22", nextMaintenance: "2025-12-07" },
            { id: "F-3439P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2023-10-15", nextMaintenance: "2025-12-08" },
            { id: "F-3479", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-05-01", nextMaintenance: "2025-12-09" },
            { id: "F-3479P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2023-12-26", nextMaintenance: "2025-12-10" },
            { id: "F-3524", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-03-07", nextMaintenance: "2025-12-11" },
            { id: "F-3524P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2023-09-13", nextMaintenance: "2025-12-12" },
            { id: "F-3608", name: "MOULE", ref: "3608", status: "ES", location: "MOL", lastMaintenance: "2024-01-18", nextMaintenance: "2025-12-13" },
            { id: "F-3608P", name: "PLAQUE ROBOT", ref: "3608", status: "ES", location: "MOL", lastMaintenance: "2023-11-30", nextMaintenance: "2025-12-14" },
            { id: "F-3664", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-04-20", nextMaintenance: "2025-12-15" },
            { id: "F-3664P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2023-10-22", nextMaintenance: "2025-12-16" },
            { id: "F-3673", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-02-16", nextMaintenance: "2025-12-17" },
            { id: "F-3673P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2023-12-03", nextMaintenance: "2025-12-18" },
            { id: "F-3674", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-05-15", nextMaintenance: "2025-12-19" },
            { id: "F-3674P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2023-09-25", nextMaintenance: "2025-12-20" },
            { id: "F-3782", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-03-22", nextMaintenance: "2025-12-21" },
            { id: "F-3782P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2023-11-12", nextMaintenance: "2025-12-22" },
            { id: "F-3876", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-01-09", nextMaintenance: "2025-12-23" },
            { id: "F-3876P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2023-10-19", nextMaintenance: "2025-12-24" },
            { id: "F-3892", name: "Moule", status: "ES", location: "MOL", lastMaintenance: "2024-04-28", nextMaintenance: "2025-12-25" },
            { id: "F-3894", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2023-12-08", nextMaintenance: "2025-12-26" },
            { id: "F-3894P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2024-02-24", nextMaintenance: "2025-12-27" },
            { id: "F-3895", name: "Moule", status: "ES", location: "MOL", lastMaintenance: "2023-09-17", nextMaintenance: "2025-12-28" },
            { id: "F-3898", name: "Moule", status: "ES", location: "MOL", lastMaintenance: "2024-05-07", nextMaintenance: "2025-12-29" },
            { id: "F-3898P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2023-11-26", nextMaintenance: "2025-12-30" },
            { id: "F-3932", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-03-14", nextMaintenance: "2025-12-31" },
            { id: "F-3932P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2023-10-31", nextMaintenance: "2026-01-01" },
            { id: "F-3934", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-01-27", nextMaintenance: "2026-01-02" },
            { id: "F-3934P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2023-12-12", nextMaintenance: "2026-01-03" },
            { id: "F-4027", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-04-16", nextMaintenance: "2026-01-04" },
            { id: "F-4027P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2023-09-21", nextMaintenance: "2026-01-05" },
            { id: "F-4043", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-02-11", nextMaintenance: "2026-01-06" },
            { id: "F-4043P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2023-11-17", nextMaintenance: "2026-01-07" },
            { id: "F-4044", name: "Moule", status: "ES", location: "MOL", lastMaintenance: "2024-05-12", nextMaintenance: "2026-01-08" },
            { id: "F-4044P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2023-10-24", nextMaintenance: "2026-01-09" },
            { id: "F-4045", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-03-25", nextMaintenance: "2026-01-10" },
            { id: "F-4045P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2023-12-05", nextMaintenance: "2026-01-11" },
            { id: "F-4046", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-01-16", nextMaintenance: "2026-01-12" },
            { id: "F-4046P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2023-09-27", nextMaintenance: "2026-01-13" },
            { id: "F-4073", name: "MOULE", ref: "3360", status: "ES", location: "MOL", lastMaintenance: "2024-04-30", nextMaintenance: "2026-01-14" },
            { id: "F-4076", name: "Moule", status: "ES", location: "MOL", lastMaintenance: "2023-11-14", nextMaintenance: "2026-01-15" },
            { id: "F-4076P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2024-02-20", nextMaintenance: "2026-01-16" },
            { id: "F-4079", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2023-10-10", nextMaintenance: "2026-01-17" },
            { id: "F-4100", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-05-19", nextMaintenance: "2026-01-18" },
            { id: "F-4101", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2023-12-22", nextMaintenance: "2026-01-19" },
            { id: "F-4104", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-03-08", nextMaintenance: "2026-01-20" },
            { id: "F-4119", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2023-09-19", nextMaintenance: "2026-01-21" },
            { id: "F-4125", name: "Moule", status: "ES", location: "MOL", lastMaintenance: "2024-01-25", nextMaintenance: "2026-01-22" },
            { id: "F-4126", name: "Moule", status: "ES", location: "MOL", lastMaintenance: "2023-11-09", nextMaintenance: "2026-01-23" },
            { id: "F-4127", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-04-14", nextMaintenance: "2026-01-24" },
            { id: "F-4186", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2023-10-28", nextMaintenance: "2026-01-25" },
            { id: "F-4187", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-02-13", nextMaintenance: "2026-01-26" },
            { id: "F-4189", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2023-12-17", nextMaintenance: "2026-01-27" },
            { id: "F-4236", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-05-03", nextMaintenance: "2026-01-28" },
            { id: "F-4237", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2023-09-24", nextMaintenance: "2026-01-29" },
            { id: "F-4238", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-03-19", nextMaintenance: "2026-01-30" },
            { id: "F-4243", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2023-11-24", nextMaintenance: "2026-01-31" },
            { id: "F-4244", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-01-12", nextMaintenance: "2026-02-01" },
            { id: "F-4273", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2023-10-17", nextMaintenance: "2026-02-02" },
            { id: "F-4451", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-04-23", nextMaintenance: "2026-02-03" },
            { id: "F-4453", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2023-12-09", nextMaintenance: "2026-02-04" },
            { id: "F-4454", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-02-28", nextMaintenance: "2026-02-05" },
            { id: "F-4456", name: "MOULE 522381", ref: "3253", status: "ES", location: "MOL", lastMaintenance: "2023-09-12", nextMaintenance: "2026-02-06" },
            { id: "F-4457", name: "MOULE 522382", status: "ES", location: "MOL", lastMaintenance: "2024-05-08", nextMaintenance: "2026-02-07" },
            { id: "F-4458", name: "MOULE 522966", status: "ES", location: "MOL", lastMaintenance: "2023-11-19", nextMaintenance: "2026-02-08" },
            { id: "F-4475", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-03-13", nextMaintenance: "2026-02-09" },
            { id: "F-4491", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2023-10-29", nextMaintenance: "2026-02-10" },
            { id: "F-4501", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-01-21", nextMaintenance: "2026-02-11" },
            { id: "F-4502", name: "MOULE", ref: "3398", status: "ES", location: "MOL", lastMaintenance: "2023-12-15", nextMaintenance: "2026-02-12" },
            { id: "F-4553", name: "MOULE", ref: "3359", status: "ES", location: "MOL", lastMaintenance: "2024-04-19", nextMaintenance: "2026-02-13" },
            { id: "F-4691", name: "Moule", status: "ES", location: "MOL", lastMaintenance: "2023-09-26", nextMaintenance: "2026-02-14" },
            { id: "F-4698", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-02-17", nextMaintenance: "2026-02-15" },
            { id: "F-4700", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2023-11-08", nextMaintenance: "2026-02-16" },
            { id: "F-4701", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-05-14", nextMaintenance: "2026-02-17" },
            { id: "F-4709", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2023-10-13", nextMaintenance: "2026-02-18" },
            { id: "F-4847", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-03-27", nextMaintenance: "2026-02-19" },
            { id: "F-4848", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2023-12-02", nextMaintenance: "2026-02-20" },
            { id: "F-4850", name: "Moule", status: "ES", location: "MOL", lastMaintenance: "2024-01-28", nextMaintenance: "2026-02-21" },
            { id: "F-4850P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2023-09-14", nextMaintenance: "2026-02-22" },
            { id: "F-4851", name: "MOULE", ref: "3359", status: "ES", location: "MOL", lastMaintenance: "2024-04-24", nextMaintenance: "2026-02-23" },
            { id: "F-4853", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2023-11-22", nextMaintenance: "2026-02-24" },
            { id: "F-4879", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-02-25", nextMaintenance: "2026-02-25" },
            { id: "F-4879P", name: "PLAQUE ROBOT", status: "ES", location: "MOL", lastMaintenance: "2023-10-20", nextMaintenance: "2026-02-26" },
            { id: "F-4900", name: "MOULE", ref: "3359", status: "ES", location: "MOL", lastMaintenance: "2024-05-10", nextMaintenance: "2026-02-27" },
            { id: "F-4902", name: "Moule", status: "ES", location: "MOL", lastMaintenance: "2023-12-11", nextMaintenance: "2026-02-28" },
            { id: "F-4919", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-03-15", nextMaintenance: "2026-03-01" },
            { id: "F-50061", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2023-09-30", nextMaintenance: "2026-03-02" },
            { id: "F-5102", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2024-01-19", nextMaintenance: "2026-03-03" },
            { id: "F-5402", name: "MOULE", status: "ES", location: "MOL", lastMaintenance: "2023-11-13", nextMaintenance: "2026-03-04" },
                    
            // G-Series Equipment

            { id: "G-0002", name: "GERBEUR 1000 FAC",  status: "ES", location: "LOG", lastMaintenance: "2024-04-17", nextMaintenance: "2025-09-01" },
            { id: "G-0003", name: "GERBEUR 1200 FAC SB14012", ref: "05F00508", status: "ES", location: "LOG", lastMaintenance: "2023-10-25", nextMaintenance: "2025-09-02" },
            { id: "G-0006", name: "GERBEUR BT SPE160", ref: "6049855", status: "ES", location: "PCO", lastMaintenance: "2024-02-21", nextMaintenance: "2025-09-03" },
            { id: "G-0007", name: "CHARIOT ELEVATEUR LINDE E25-02", ref: "C1X336W00588", status: "ES", location: "LOG", lastMaintenance: "2023-12-06", nextMaintenance: "2025-09-04" },
            { id: "G-0008", name: "GERBEUR L14 LINDE", ref: "W4X372005873", status: "ES", location: "LOG", lastMaintenance: "2024-05-16", nextMaintenance: "2025-09-05" },
            { id: "G-0009", name: "CHARIOT ELEVATEUR LINDE E15 EVO", ref: "H2X386F02588", status: "ES", location: "UAP1", lastMaintenance: "2023-09-18", nextMaintenance: "2025-09-06" },
            { id: "G-0011", name: "TRANSPALETTE O MAX", ref: "14754511", status: "ES", location: "PCO", lastMaintenance: "2024-03-23", nextMaintenance: "2025-09-07" },
            { id: "G-0013", name: "TRANSPALETTE BT", ref: "3436855", status: "ES", location: "LOG", lastMaintenance: "2023-11-29", nextMaintenance: "2025-09-08" },
            { id: "G-0014", name: "TRANSPALETTE", ref: "2983839", status: "ES", location: "LOG", lastMaintenance: "2024-01-13", nextMaintenance: "2025-09-09" },
            { id: "G-0016", name: "TRANSPALETTE MIC TMX 54X115 1000KG", ref: "45A60225430", status: "ES", location: "LOG", lastMaintenance: "2023-10-16", nextMaintenance: "2025-09-10" },
            { id: "G-0017", name: "TRANSPALETTE BT", ref: "3437366", status: "ES", location: "UAP1", lastMaintenance: "2024-04-29", nextMaintenance: "2025-09-11" },
            { id: "G-0018", name: "TRANSPALETTE LOC TMHL,10 _1000Kg", ref: "32984", status: "ES", location: "LOG", lastMaintenance: "2023-12-18", nextMaintenance: "2025-09-12" },
            { id: "G-0019", name: "TRANSPALETTE BT", ref: "3436852", status: "ES", location: "LOG", lastMaintenance: "2024-02-12", nextMaintenance: "2025-09-13" },
            { id: "G-0020", name: "TRANSPALETTE BT", ref: "3472749", status: "ES", location: "LOG", lastMaintenance: "2023-09-23", nextMaintenance: "2025-09-14" },
            { id: "G-0021", name: "TRANSPALETTE BT", ref: "3436854", status: "ES", location: "LOG", lastMaintenance: "2024-05-04", nextMaintenance: "2025-09-15" },
            { id: "G-0022", name: "TRANSPALETTE BT", ref: "3436856", status: "ES", location: "FAB", lastMaintenance: "2023-11-15", nextMaintenance: "2025-09-16" },
            { id: "G-0023", name: "TRANSPALETTE BT", ref: "4020777", status: "ES", location: "FAB", lastMaintenance: "2024-03-20", nextMaintenance: "2025-09-17" },
            { id: "G-0024", name: "TRANSPALETTE BT", ref: "3724584", status: "ES", location: "UAP1", lastMaintenance: "2023-10-27", nextMaintenance: "2025-09-18" },
            { id: "G-0026", name: "TRANSPALETTE OMAX 1000KG", ref: "14754510", status: "ES", location: "LOG", lastMaintenance: "2024-01-22", nextMaintenance: "2025-09-19" },
            { id: "G-0027", name: "TRANSPALETTE TMX ELEVATRICE MECANIQUE", ref: "45A10703528", status: "ES", location: "PCO", lastMaintenance: "2023-12-13", nextMaintenance: "2025-09-20" },
            { id: "G-0029", name: "TRANSPALETTE BT", ref: "3472855", status: "ES", location: "LOG", lastMaintenance: "2024-04-15", nextMaintenance: "2025-09-21" },
            { id: "G-0031/01", name: "Cercleuse", status: "ES", location: "LOG", lastMaintenance: "2023-09-28", nextMaintenance: "2025-09-22" },
            { id: "G-0031/02", name: "Cercleuse", status: "ES", location: "PCO", lastMaintenance: "2024-02-26", nextMaintenance: "2025-09-23" },
            { id: "G-0032", name: "GERBEUR EJC 230 JUNGHEINRICH", ref: "91597547", status: "ES", location: "UAP1", lastMaintenance: "2023-11-20", nextMaintenance: "2025-09-24" },
            { id: "G-0033", name: "Transpalette élevatrice JUNGHEINRICH AMX 10", ref: "14931931", status: "ES", location: "LOG", lastMaintenance: "2024-05-11", nextMaintenance: "2025-09-25" },
            { id: "G-0034", name: "Transpalette élevatrice JUNGHEINRICH AMX 10", ref: "14828806", status: "ES", location: "UAP1", lastMaintenance: "2023-10-14", nextMaintenance: "2025-09-26" },
            { id: "G-0035", name: "Transpalette élevatrice JUNGHEINRICH AMX 10", ref: "14828789", status: "ES", location: "LOG", lastMaintenance: "2024-03-16", nextMaintenance: "2025-09-27" },
            { id: "G-0036", name: "TRACTEUR ELECTRIQUE JUNGHEINRICH", ref: "91565341", status: "ES", location: "LOG", lastMaintenance: "2023-12-01", nextMaintenance: "2025-09-28" },
            { id: "G-0037", name: "SYSTEME DE REMPLISSAGE D'EAU BATTERIE", status: "ES", location: "LOG", lastMaintenance: "2024-01-26", nextMaintenance: "2025-09-29" },
            { id: "G-0038", name: "GERBEUR L14 LINDE", ref: "W41173H00724", status: "ES", location: "FAB", lastMaintenance: "2023-09-16", nextMaintenance: "2025-09-30" },
            { id: "G-0039", name: "DISTRIBUTEUR DE PALETTES", ref: "17-0577", status: "ES", location: "LOG", lastMaintenance: "2024-04-22", nextMaintenance: "2025-10-01" },
            { id: "G-0040", name: "DISTRIBUTEUR DE PALETTES", ref: "17-0576", status: "ES", location: "LOG", lastMaintenance: "2023-11-27", nextMaintenance: "2025-10-02" },
            { id: "G-0041", name: "Compacteur carton", ref: "1710 06", status: "ES", location: "LOG", lastMaintenance: "2024-02-14", nextMaintenance: "2025-10-03" },
            { id: "G-0043", name: "Transpalette electrique JUNGHEINRICH AMX 10E", ref: "24011123", status: "ES", location: "LOG", lastMaintenance: "2023-10-21", nextMaintenance: "2025-10-04" },
            { id: "G-0044", name: "Transpalette electrique JUNGHEINRICH AMX 10E", ref: "24011135", status: "ES", location: "LOG", lastMaintenance: "2024-05-07", nextMaintenance: "2025-10-05" },
            { id: "G-0045", name: "TRANSPALETTE BT", ref: "3436857", status: "ES", location: "ZZ", lastMaintenance: "2023-12-12", nextMaintenance: "2025-10-06" },
            { id: "G-0046", name: "TRANSPALETTE BT", ref: "3472750", status: "ES", location: "LOG", lastMaintenance: "2024-03-28", nextMaintenance: "2025-10-07" },
            { id: "G-0047", name: "TRANSPALETTE PESEUSE LOC", ref: "20900426-90512", status: "ES", location: "UAP2", lastMaintenance: "2023-09-29", nextMaintenance: "2025-10-08" },
            { id: "G-0048", name: "TRANSPALETTE LOC", ref: "91746", status: "ES", location: "UAP2", lastMaintenance: "2024-01-17", nextMaintenance: "2025-10-09" },
            { id: "G-0049", name: "Transpalette élevatrice JUNGHEINRICH AMX 10", ref: "14828769", status: "ES", location: "UAP2", lastMaintenance: "2023-11-10", nextMaintenance: "2025-10-10" },
            { id: "G-0050", name: "Transpalette élevatrice JUNGHEINRICH AMX 10", ref: "14934216", status: "ES", location: "FAB", lastMaintenance: "2024-04-13", nextMaintenance: "2025-10-11" },
            { id: "G-0051", name: "Transpalette élevatrice JUNGHEINRICH AMX 10", ref: "14931930", status: "ES", location: "FAB", lastMaintenance: "2023-10-18", nextMaintenance: "2025-10-12" },
            { id: "G-0052", name: "Transpalette élevatrice JUNGHEINRICH AMX 10", ref: "14931933", status: "ES", location: "FAB", lastMaintenance: "2024-02-22", nextMaintenance: "2025-10-13" },
            { id: "G-0053", name: "Transpalette élevatrice JUNGHEINRICH AMX 10", ref: "14931932", status: "ES", location: "FAB", lastMaintenance: "2023-12-07", nextMaintenance: "2025-10-14" },
            { id: "G-0054", name: "Transpalette élevatrice JUNGHEINRICH AMX 10", ref: "14931936", status: "ES", location: "FAB", lastMaintenance: "2024-05-12", nextMaintenance: "2025-10-15" },
            { id: "G-0055", name: "Transpalette élevatrice JUNGHEINRICH AMX 10", ref: "14931934", status: "ES", location: "FAB", lastMaintenance: "2023-09-24", nextMaintenance: "2025-10-16" },
            { id: "G-0056", name: "Transpalette élevatrice JUNGHEINRICH AMX 10", ref: "14934217", status: "ES", location: "FAB", lastMaintenance: "2024-03-17", nextMaintenance: "2025-10-17" },
            { id: "G-0057", name: "Transpalette élevatrice JUNGHEINRICH AMX 10", ref: "14828768", status: "ES", location: "FAB", lastMaintenance: "2023-11-28", nextMaintenance: "2025-10-18" },
            { id: "G-0058", name: "Transpalette élevatrice JUNGHEINRICH AMX 10", ref: "14931935", status: "ES", location: "UAP2", lastMaintenance: "2024-01-23", nextMaintenance: "2025-10-19" },
            { id: "G-0059", name: "Transpalette élevatrice JUNGHEINRICH AMX 10", ref: "14931937", status: "ES", location: "ZZ", lastMaintenance: "2023-10-29", nextMaintenance: "2025-10-20" },
            { id: "G-0060", name: "TRANSPALETTE BT", ref: "3472750", status: "ES", location: "ZZ", lastMaintenance: "2024-04-18", nextMaintenance: "2025-10-21" },
            { id: "G-0061", name: "TRANSPALETTE BT", ref: "3472750", status: "ES", location: "ZZ", lastMaintenance: "2023-12-14", nextMaintenance: "2025-10-22" },
            { id: "G-0062", name: "TRANSPALETTE BT", ref: "3472750", status: "ES", location: "LOG", lastMaintenance: "2024-02-27", nextMaintenance: "2025-10-23" },
            { id: "G-0063", name: "FILMEUSE", status: "ES", location: "CQL", lastMaintenance: "2023-09-17", nextMaintenance: "2025-10-24" },
            { id: "G-0064", name: "Transpalette électrique motorisé LHE130", ref: "210900761", status: "ES", location: "LOG", lastMaintenance: "2024-05-08", nextMaintenance: "2025-10-25" },
            { id: "G-0065", name: "Gerbeur linde L14", ref: "P21173L00799", status: "ES", location: "FAB", lastMaintenance: "2023-11-21", nextMaintenance: "2025-10-26" },
            { id: "G-0066", name: "Gerbeur BT SWE160", ref: "6870628", status: "ES", location: "LOG", lastMaintenance: "2024-03-14", nextMaintenance: "2025-10-27" },
            { id: "G-0067", name: "DISTRIBUTEUR DE PALETTES", ref: "18-0589", status: "ES", location: "LOG", lastMaintenance: "2023-10-26", nextMaintenance: "2025-10-28" },
            { id: "G-0068", name: "GERBEUR L14 2023", ref: "P21173L06483", status: "ES", location: "UAP2", lastMaintenance: "2024-01-29", nextMaintenance: "2025-10-29" },
            { id: "G-0070", name: "Transpalette élevatrice JUNGHEINRICH AMX 10", ref: "15147629", status: "ES", location: "LOG", lastMaintenance: "2023-12-08", nextMaintenance: "2025-10-30" },
            { id: "G-0071", name: "Robot appro ligne", status: "ES", location: "LOG", lastMaintenance: "2024-04-23", nextMaintenance: "2025-10-31" },
            { id: "G-0072", name: "GERBEUR L14 2023", ref: "P21173M03496", status: "ES", location: "PCO", lastMaintenance: "2023-09-22", nextMaintenance: "2025-11-01" },
            { id: "G-0073", name: "GERBEUR L14 2023", ref: "P21173M03583", status: "ES", location: "PCO", lastMaintenance: "2024-02-19", nextMaintenance: "2025-11-02" },
            { id: "G-0074", name: "GERBEUR L14 2023", ref: "P21173M03493", status: "ES", location: "UAP2", lastMaintenance: "2023-11-30", nextMaintenance: "2025-11-03" },
            { id: "G-0075", name: "Transpalette électrique motorisé", ref: "08015JEK437", status: "ES", location: "UAP1", lastMaintenance: "2024-05-15", nextMaintenance: "2025-11-04" },
            { id: "G-0076", name: "Transpalette électrique motorisé", ref: "08015JX3008", status: "ES", location: "LOG", lastMaintenance: "2023-10-19", nextMaintenance: "2025-11-05" },
            { id: "G-0077", name: "Transpalette électrique T16L", ref: "W41152N01612", status: "ES", location: "UAP2", lastMaintenance: "2024-03-25", nextMaintenance: "2025-11-06" },
            
            // IN-Series Equipment

            { id: "IN-0011/01", name: "IMPRIMANTE Z4Mplus", ref: "02C04240576", status: "ES", location: "LOG", lastMaintenance: "2023-12-14", nextMaintenance: "2025-11-07" },
            { id: "IN-0011/02", name: "IMPRIMANTE Z4M PLUS", status: "REBUS", location: "LOG", lastMaintenance: "2024-01-27", nextMaintenance: "2025-11-08" },
            { id: "IN-0011/03", name: "ZEBRA ZM4PLUS", status: "ES", location: "UAP2", lastMaintenance: "2023-09-18", nextMaintenance: "2025-11-09" },
            { id: "IN-0011/04", name: "ZEBRA Z4M PLUS", ref: "3354786", status: "REBUS", location: "ZZ", lastMaintenance: "2024-04-19", nextMaintenance: "2025-11-10" },
            { id: "IN-0012/01", name: "IMPRIMANTE Z110Xi III plus 600dpi", ref: "91C08010272", status: "REBUS", location: "IFS", lastMaintenance: "2023-11-24", nextMaintenance: "2025-11-11" },
            { id: "IN-0012/02", name: "ZEBRA 110Xi III plus 600dpi", status: "REBUS", location: "IFS", lastMaintenance: "2024-02-28", nextMaintenance: "2025-11-12" },
            { id: "IN-0012/03", name: "ZEBRA 110Xi III plus 600dpi", status: "REBUS", location: "IFS", lastMaintenance: "2023-10-13", nextMaintenance: "2025-11-13" },
            { id: "IN-0013", name: "ZEBRA 110X14 600 DPI", status: "ES", location: "IFS", lastMaintenance: "2024-05-09", nextMaintenance: "2025-11-14" },
            { id: "IN-0015/02", name: "IMPRIMENTE S4M STRIPE", ref: "03J105000798", status: "ES", location: "IFS", lastMaintenance: "2023-12-19", nextMaintenance: "2025-11-15" },
            { id: "IN-0017/01", name: "IMPRIMANTE ZEBRA", status: "REBUS", location: "ZZ", lastMaintenance: "2024-03-13", nextMaintenance: "2025-11-16" },
            { id: "IN-0017/02", name: "IMPRIMANTE Z4MPLUS", ref: "3316714", status: "REBUS", location: "LOG", lastMaintenance: "2023-09-27", nextMaintenance: "2025-11-17" },
            { id: "IN-0018/01", name: "ZEBRA ZM400", status: "ES", location: "IFS", lastMaintenance: "2024-01-28", nextMaintenance: "2025-11-18" },
            { id: "IN-0018/02", name: "IMPRIMANTE ZM400", ref: "08J122500693", status: "ES", location: "FAB", lastMaintenance: "2023-11-17", nextMaintenance: "2025-11-19" },
       
            // K-Series Equipment
           
            { id: "K-0024", name: "Groupe glacee carrier", ref: "M2013034420", status: "ES", location: "IFS", lastMaintenance: "2024-04-24", nextMaintenance: "2025-11-20" },
            { id: "K-0030", name: "Groupe électrogène (SDMO)", status: "ES", location: "IFS", lastMaintenance: "2023-10-30", nextMaintenance: "2025-11-21" },
            { id: "K-0033", name: "CLIMATISEUR LABORATOIRE 1", status: "ES", location: "IFS", lastMaintenance: "2024-02-15", nextMaintenance: "2025-11-22" },
            { id: "K-0048", name: "Autolaveuse", status: "ES", location: "IFS", lastMaintenance: "2023-12-09", nextMaintenance: "2025-11-23" },
            { id: "K-0050", name: "POSTE TRANSFORMATEUR GENERAL", status: "ES", location: "IFS", lastMaintenance: "2024-05-13", nextMaintenance: "2025-11-24" },
            { id: "K-0058", name: "CENTRALE INCENDIE DAI ET DETECTEUR DE FUMEE", status: "ES", location: "IFS", lastMaintenance: "2023-09-19", nextMaintenance: "2025-11-25" },
            { id: "K-0059", name: "AFFICHEUR ENTREE ATELIER", status: "ES", location: "IFS", lastMaintenance: "2024-03-26", nextMaintenance: "2025-11-26" },
            { id: "K-0062", name: "GROUPE CARRIER POMPE A CHALEUR", ref: "M2014023494", status: "ES", location: "IFS", lastMaintenance: "2023-11-22", nextMaintenance: "2025-11-27" },
            { id: "K-0064", name: "Agrafeuse pneumatique JK35-590", status: "ES", location: "IFS", lastMaintenance: "2024-01-18", nextMaintenance: "2025-11-28" },
            { id: "K-0065", name: "GROUPE CARRIER POMPE A CHALEUR", ref: "B2018019014", status: "ES", location: "IFS", lastMaintenance: "2023-10-24", nextMaintenance: "2025-11-29" },
            { id: "K-0066", name: "GROUPE CARRIER POMPE A CHALEUR", ref: "B2018019013", status: "ES", location: "IFS", lastMaintenance: "2024-04-20", nextMaintenance: "2025-11-30" },
            { id: "K-0067", name: "Autolaveuse à CONDUCTEUR", status: "ES", location: "IFS", lastMaintenance: "2023-12-15", nextMaintenance: "2025-12-01" },
            { id: "K-0068", name: "BACHE A EAU", status: "ES", location: "IFS", lastMaintenance: "2024-02-29", nextMaintenance: "2025-12-02" },
            { id: "K-0069", name: "Groupe electrogéne", status: "ES", location: "IFS", lastMaintenance: "2023-09-25", nextMaintenance: "2025-12-03" },
            { id: "K-0070", name: "NIVLEUR QUAI IMPORT", status: "ES", location: "IFS", lastMaintenance: "2024-05-05", nextMaintenance: "2025-12-04" },
            { id: "K-0071", name: "NIVELEUR QUAI EXPORT 1", status: "ES", location: "IFS", lastMaintenance: "2023-11-13", nextMaintenance: "2025-12-05" },
            { id: "K-0072", name: "NIVELEUR QUAI EXPORT 2", status: "ES", location: "IFS", lastMaintenance: "2024-03-18", nextMaintenance: "2025-12-06" },
            { id: "K-0074", name: "CLIMATISSEUR INFORMATIQUE 1", status: "ES", location: "IFS", lastMaintenance: "2023-10-20", nextMaintenance: "2025-12-07" },
            { id: "K-0075", name: "CLIMATISSEUR INFORMATIQUE 2", status: "ES", location: "IFS", lastMaintenance: "2024-01-24", nextMaintenance: "2025-12-08" },
            { id: "K-0076", name: "CLIMATISEUR MAGASIN MATIERE", status: "ES", location: "IFS", lastMaintenance: "2023-12-10", nextMaintenance: "2025-12-09" },
            { id: "K-0077", name: "CLIMATISEUR LABORATOIRE 2", status: "ES", location: "IFS", lastMaintenance: "2024-04-25", nextMaintenance: "2025-12-10" },
            { id: "K-0078", name: "CLIMATISEUR ADM 1", status: "ES", location: "IFS", lastMaintenance: "2023-09-30", nextMaintenance: "2025-12-11" },
            { id: "K-0079", name: "CLIMATISEUR ADM 2", status: "ES", location: "IFS", lastMaintenance: "2024-02-16", nextMaintenance: "2025-12-12" },
            { id: "K-0080", name: "CLIMATISEUR CTRL RECEPTION", status: "ES", location: "IFS", lastMaintenance: "2023-11-25", nextMaintenance: "2025-12-13" },
            { id: "K-0081", name: "CLIMATISEUR MEZZANINE 1", status: "ES", location: "IFS", lastMaintenance: "2024-05-10", nextMaintenance: "2025-12-14" },
            { id: "K-0082", name: "CLIMATISEUR MEZZANINE 2", status: "ES", location: "IFS", lastMaintenance: "2023-10-15", nextMaintenance: "2025-12-15" },
            { id: "K-0083", name: "CLIMATISEUR MEZZANINE 3", status: "ES", location: "IFS", lastMaintenance: "2024-03-22", nextMaintenance: "2025-12-16" },
            { id: "K-0084", name: "CLIMATISEUR REFECTOIRE 1", status: "ES", location: "IFS", lastMaintenance: "2023-12-17", nextMaintenance: "2025-12-17" },
            { id: "K-0085", name: "CLIMATISEUR REFECTOIRE 2", status: "ES", location: "IFS", lastMaintenance: "2024-01-29", nextMaintenance: "2025-12-18" },
            { id: "K-0086", name: "CLIMATISEUR LOCAL ETIQUETTE", status: "ES", location: "IFS", lastMaintenance: "2023-09-21", nextMaintenance: "2025-12-19" },
            { id: "K-0087", name: "EXTRACTEUR 1", status: "ES", location: "IFS", lastMaintenance: "2024-04-27", nextMaintenance: "2025-12-20" },
            { id: "K-0088", name: "EXTRACTEUR 2", status: "ES", location: "IFS", lastMaintenance: "2023-11-19", nextMaintenance: "2025-12-21" },
            { id: "K-0089", name: "EXTRACTEUR 3", status: "ES", location: "IFS", lastMaintenance: "2024-02-24", nextMaintenance: "2025-12-22" },
            { id: "K-0093", name: "COMPRESSEUR ATLAS COPCO GA26VSD+FF", ref: "API840065", status: "ES", location: "IFS", lastMaintenance: "2023-10-28", nextMaintenance: "2025-12-23" },
            { id: "K-0094", name: "COMPRESSEUR ATLAS COPCO GA30VSD+FF", ref: "API831569", status: "ES", location: "IFS", lastMaintenance: "2024-05-14", nextMaintenance: "2025-12-24" },
            { id: "K-0095", name: "Groupe armoires éléctriques", status: "ES", location: "IFS", lastMaintenance: "2023-12-12", nextMaintenance: "2025-12-25" },
            { id: "K-0096", name: "CTA", status: "ES", location: "IFS", lastMaintenance: "2024-03-19", nextMaintenance: "2025-12-26" },
            { id: "K-0097", name: "Groupe ectincteurs ,RIA", status: "ES", location: "IFS", lastMaintenance: "2023-09-26", nextMaintenance: "2025-12-27" },
            { id: "K-0098", name: "Meule à touret", status: "ES", location: "IFS", lastMaintenance: "2024-01-30", nextMaintenance: "2025-12-28" },
            { id: "K-0099", name: "Meule à touret", status: "ES", location: "IFS", lastMaintenance: "2023-11-14", nextMaintenance: "2025-12-29" },
            { id: "K-0100", name: "SCIE CIRCULAIRE", status: "ES", location: "IFS", lastMaintenance: "2024-04-25", nextMaintenance: "2025-12-30" },
            { id: "K-0101", name: "SCIE CIRCULAIRE", status: "ES", location: "IFS", lastMaintenance: "2023-10-19", nextMaintenance: "2025-12-31" },
            { id: "K-0102", name: "Onduleur MODULYS GP 200 KVA 3/3", ref: "P277323001", status: "ES", location: "IFS", lastMaintenance: "2024-02-17", nextMaintenance: "2026-01-01" },
            { id: "K-0103", name: "Agrafeuse pneumatique JK207779L", status: "ES", location: "IFS", lastMaintenance: "2023-12-08", nextMaintenance: "2026-01-02" },
            { id: "K-0104", name: "Cuisinière 4 plaques carrées", status: "ES", location: "IFS", lastMaintenance: "2024-05-09", nextMaintenance: "2026-01-03" },
            { id: "K-0105", name: "Four Combi électrique", status: "ES", location: "IFS", lastMaintenance: "2023-09-30", nextMaintenance: "2026-01-04" },
            { id: "K-0106", name: "Friteuse", status: "ES", location: "IFS", lastMaintenance: "2024-03-15", nextMaintenance: "2026-01-05" },
            { id: "K-0107", name: "Grillade FME 94 GF", status: "ES", location: "IFS", lastMaintenance: "2023-11-20", nextMaintenance: "2026-01-06" },
            { id: "K-0108", name: "Hachoir TC-22E", status: "ES", location: "IFS", lastMaintenance: "2024-01-24", nextMaintenance: "2026-01-07" },
            { id: "K-0109", name: "Machine coupe légumes TM", status: "ES", location: "IFS", lastMaintenance: "2023-10-25", nextMaintenance: "2026-01-08" },
            { id: "K-0110", name: "Machine Epluche pommes de terre", status: "ES", location: "IFS", lastMaintenance: "2024-04-30", nextMaintenance: "2026-01-09" },
            { id: "K-0111", name: "Machine lave vaisselle PL 1300", status: "ES", location: "IFS", lastMaintenance: "2023-12-14", nextMaintenance: "2026-01-10" },
            { id: "K-0112", name: "Malaxeur planétaire", status: "ES", location: "IFS", lastMaintenance: "2024-02-28", nextMaintenance: "2026-01-11" },
            { id: "K-0113", name: "Sauteuse électrique BE 94 CM", status: "ES", location: "IFS", lastMaintenance: "2023-09-19", nextMaintenance: "2026-01-12" },
            { id: "K-0114", name: "Sterilisateur UV 16 W", status: "ES", location: "IFS", lastMaintenance: "2024-05-15", nextMaintenance: "2026-01-13" },
            { id: "K-0115", name: "CTA", status: "ES", location: "IFS", lastMaintenance: "2023-11-26", nextMaintenance: "2026-01-14" },
            { id: "K-0116", name: "CTA", status: "ES", location: "IFS", lastMaintenance: "2024-03-21", nextMaintenance: "2026-01-15" },
            { id: "K-0117", name: "CIRCUIT D'AIR COMPRIME USINE", status: "ES", location: "IFS", lastMaintenance: "2023-10-17", nextMaintenance: "2026-01-16" },
            { id: "K-0118", name: "Regards de pulvérisation", status: "ES", location: "IFS", lastMaintenance: "2024-01-29", nextMaintenance: "2026-01-17" },
            { id: "K-0119", name: "Porte rideau métallique EXTERIEUR TD", status: "ES", location: "IFS", lastMaintenance: "2023-12-09", nextMaintenance: "2026-01-18" },
            { id: "K-0120", name: "Porte rideau métallique LOCAL ENVIRONNEMENT", status: "ES", location: "IFS", lastMaintenance: "2024-04-24", nextMaintenance: "2026-01-19" },
            { id: "K-0121", name: "Porte rideau métallique LOCAL GERBEUR", status: "ES", location: "IFS", lastMaintenance: "2023-09-30", nextMaintenance: "2026-01-20" },
            { id: "K-0122", name: "Porte rideau métallique IMPORT 1", status: "ES", location: "IFS", lastMaintenance: "2024-02-17", nextMaintenance: "2026-01-21" },
            { id: "K-0123", name: "Porte rideau métallique IMPORT 2", status: "ES", location: "IFS", lastMaintenance: "2023-11-21", nextMaintenance: "2026-01-22" },
            { id: "K-0124", name: "Porte rideau métallique EXPORT 1", status: "ES", location: "IFS", lastMaintenance: "2024-05-10", nextMaintenance: "2026-01-23" },
            { id: "K-0125", name: "Porte rideau métallique EXPORT 2", status: "ES", location: "IFS", lastMaintenance: "2023-10-26", nextMaintenance: "2026-01-24" },
            { id: "K-0126", name: "Porte rideau rapide et souple ZONE DECHETS TD", status: "ES", location: "IFS", lastMaintenance: "2024-03-22", nextMaintenance: "2026-01-25" },
            { id: "K-0127", name: "Porte rideau rapide et souple CHAMBRE MATIERE", status: "ES", location: "IFS", lastMaintenance: "2023-12-15", nextMaintenance: "2026-01-26" },
            { id: "K-0128", name: "Porte rideau rapide et souple VERS LOCAUX EXTERIEUR", status: "ES", location: "IFS", lastMaintenance: "2024-01-30", nextMaintenance: "2026-01-27" },
            { id: "K-0129", name: "Porte rideau rapide et souple ZONE électronique vers magasin", status: "ES", location: "IFS", lastMaintenance: "2023-09-24", nextMaintenance: "2026-01-28" },
            { id: "K-0130", name: "Porte rideau rapide et souple DEVANT LOCAL ETIQUETTE", status: "ES", location: "IFS", lastMaintenance: "2024-04-28", nextMaintenance: "2026-01-29" },
            { id: "K-0131", name: "Porte rideau rapide et souple VERS MAGASIN", status: "ES", location: "IFS", lastMaintenance: "2023-11-18", nextMaintenance: "2026-01-30" },
            { id: "K-0132", name: "Porte rideau rapide et souple VERS ATYS M", status: "ES", location: "IFS", lastMaintenance: "2024-02-25", nextMaintenance: "2026-01-31" },
            { id: "K-0133", name: "Porte rideau rapide et souple LOCAL GERBEUR", status: "ES", location: "IFS", lastMaintenance: "2023-10-20", nextMaintenance: "2026-02-01" },
            { id: "K-0134", name: "Porte rideau rapide et souple LOCAL ENVIRONNEMENT", status: "ES", location: "FAB", lastMaintenance: "2024-03-21", nextMaintenance: "2026-02-02" },
            { id: "K-0135", name: "Convoyeur déchets TD N1", status: "ES", location: "FAB", lastMaintenance: "2023-10-25", nextMaintenance: "2026-02-03" },
            { id: "K-0136", name: "COMPRESSEUR BALMA POUR LABO", ref: "ITR1.133388", status: "ES", location: "IFS", lastMaintenance: "2024-05-12", nextMaintenance: "2026-02-04" },
            // L-Series Equipment

            { id: "L27D", name: "CASSETTE LAERAL DROITE", status: "ES", location: "IFS", lastMaintenance: "2023-11-30", nextMaintenance: "2026-02-05" },
            { id: "L27G", name: "CASSETTE LAERAL GAUCHE", status: "ES", location: "IFS", lastMaintenance: "2024-02-14", nextMaintenance: "2026-02-06" },
            { id: "L32D", name: "CASSETTE LAERAL DROITE", status: "ES", location: "IFS", lastMaintenance: "2023-09-18", nextMaintenance: "2026-02-07" },
            { id: "L32G", name: "CASSETTE LAERAL GAUCHE", status: "ES", location: "IFS", lastMaintenance: "2024-04-19", nextMaintenance: "2026-02-08" },
            { id: "L36-2D", name: "CASSETTE LAERAL DROITE", status: "ES", location: "IFS", lastMaintenance: "2023-12-08", nextMaintenance: "2026-02-09" },
            { id: "L36-2G", name: "CASSETTE LAERAL GAUCHE", status: "ES", location: "IFS", lastMaintenance: "2024-03-15", nextMaintenance: "2026-02-10" },
            { id: "L400C/D", name: "CASSETTE LAERAL DROITE", status: "ES", location: "IFS", lastMaintenance: "2023-10-20", nextMaintenance: "2026-02-11" },
            { id: "L400C/G", name: "CASSETTE LAERAL GAUCHE", status: "ES", location: "IFS", lastMaintenance: "2024-05-09", nextMaintenance: "2026-02-12" },
            { id: "L50D", name: "CASSETTE LAERAL DROITE", status: "ES", location: "IFS", lastMaintenance: "2023-11-24", nextMaintenance: "2026-02-13" },
            { id: "L50G", name: "CASSETTE LAERAL GAUCHE", status: "ES", location: "IFS", lastMaintenance: "2024-02-28", nextMaintenance: "2026-02-14" },
            { id: "L81-2D", name: "CASSETTE LAERAL DROITE", status: "ES", location: "IFS", lastMaintenance: "2023-09-22", nextMaintenance: "2026-02-15" },
            { id: "L81-2G", name: "CASSETTE LAERAL GAUCHE", status: "ES", location: "UAP2", lastMaintenance: "2024-04-24", nextMaintenance: "2026-02-16" },
            { id: "L81D", name: "CASSETTE LAERAL DROITE", status: "ES", location: "UAP2", lastMaintenance: "2023-12-14", nextMaintenance: "2026-02-17" },
            { id: "L81G", name: "CASSETTE LAERAL GAUCHE", status: "ES", location: "UAP2", lastMaintenance: "2024-03-19", nextMaintenance: "2026-02-18" },
            
            // M-Series Equipment

            { id: "M-0001/01", name: "VISSEUSE PNEUMATIQUE", ref: "1", status: "ES", location: "UAP2", lastMaintenance: "2023-10-27", nextMaintenance: "2026-02-19" },
            { id: "M-0002/01", name: "VISSEUSE PNEUMATIQUE", ref: "4", status: "ES", location: "UAP2", lastMaintenance: "2024-01-22", nextMaintenance: "2026-02-20" },
            { id: "M-0003/01", name: "VISSEUSE PNEUMATIQUE", ref: "11", status: "ES", location: "UAP2", lastMaintenance: "2023-11-17", nextMaintenance: "2026-02-21" },
            { id: "M-0003/02", name: "VISSEUSE PNEUMATIQUE", ref: "9", status: "ES", location: "UAP2", lastMaintenance: "2024-05-05", nextMaintenance: "2026-02-22" },
            { id: "M-0004/01", name: "VISSEUSE PNEUMATIQUE", ref: "13", status: "ES", location: "UAP2", lastMaintenance: "2023-09-29", nextMaintenance: "2026-02-23" },
            { id: "M-0004/03", name: "VISSEUSE PNEUMATIQUE", ref: "14", status: "ES", location: "UAP2", lastMaintenance: "2024-02-16", nextMaintenance: "2026-02-24" },
            { id: "M-0005/01", name: "VISSEUSE PNEUMATIQUE", ref: "15", status: "ES", location: "UAP2", lastMaintenance: "2023-12-09", nextMaintenance: "2026-02-25" },
            { id: "M-0006/01", name: "VISSEUSE PNEUMATIQUE", ref: "22", status: "ES", location: "UAP2", lastMaintenance: "2024-04-18", nextMaintenance: "2026-02-26" },
            { id: "M-0008", name: "VISSEUSE PNEUMATIQUE", ref: "25", status: "ES", location: "UAP2", lastMaintenance: "2023-10-24", nextMaintenance: "2026-02-27" },
            { id: "M-0013/04", name: "VISSEUSE PNEUMATIQUE", ref: "1611080002", status: "ES", location: "UAP2", lastMaintenance: "2024-03-26", nextMaintenance: "2026-02-28" },
            { id: "M-0026/01", name: "VISSEUSE PNEUMATIQUE", status: "ES", location: "UAP2", lastMaintenance: "2023-11-20", nextMaintenance: "2026-03-01" },
            { id: "M-0029", name: "VISSEUSE ELECTRIQUE", status: "ES", location: "UAP2", lastMaintenance: "2024-01-29", nextMaintenance: "2026-03-02" },
            { id: "M-0042", name: "VISSEUSE ELECTRIQUE", status: "ES", location: "UAP2", lastMaintenance: "2023-09-24", nextMaintenance: "2026-03-03" },
            { id: "M-0045", name: "VISSEUSE PNEUMATIQUE", ref: "1611080002", status: "ES", location: "UAP2", lastMaintenance: "2024-05-10", nextMaintenance: "2026-03-04" },
            { id: "M-0057", name: "VISSEUSE PNEUMATIQUE", status: "ES", location: "UAP2", lastMaintenance: "2023-12-15", nextMaintenance: "2026-03-05" },
            { id: "M-0063", name: "VISSEUSE ELECTRIQUE DELVO DLV7333", status: "ES", location: "UAP2", lastMaintenance: "2024-02-24", nextMaintenance: "2026-03-06" },
            { id: "M-0064", name: "VISSEUSE ELECTRIQUE DELVO DLV7333", status: "ES", location: "UAP2", lastMaintenance: "2023-10-19", nextMaintenance: "2026-03-07" },
            { id: "M-0065", name: "VISSEUSE ELECTRIQUE", status: "ES", location: "UAP2", lastMaintenance: "2024-04-27", nextMaintenance: "2026-03-08" },
            { id: "M-0066", name: "VISSEUSE ELECTRIQUE SUMAKE EA-BN210L/C6", ref: "1410234", status: "ES", location: "UAP2", lastMaintenance: "2023-11-26", nextMaintenance: "2026-03-09" },
            { id: "M-0067", name: "VISSEUSE ELECTRIQUE", ref: "24", status: "ES", location: "UAP2", lastMaintenance: "2024-03-20", nextMaintenance: "2026-03-10" },
            { id: "M-0068", name: "VISSEUSE ELECTRIQUE GX 150-A-G", ref: "1605080069", status: "ES", location: "UAP2", lastMaintenance: "2023-09-30", nextMaintenance: "2026-03-11" },
            { id: "M-0070", name: "VISSEUSE ELECTRIQUE SUMAKE", ref: "24", status: "ES", location: "UAP2", lastMaintenance: "2024-01-24", nextMaintenance: "2026-03-12" },
            { id: "M-0105", name: "VISSEUSE PNEUMATIQUE", status: "ES", location: "UAP2", lastMaintenance: "2023-12-10", nextMaintenance: "2026-03-13" },
            { id: "M-0107", name: "VISSEUSE PNEUMATIQUE", ref: "1157368/10", status: "ES", location: "UAP2", lastMaintenance: "2024-04-25", nextMaintenance: "2026-03-14" },
            { id: "M-0108", name: "VISSEUSE PNEMATIQUE", ref: "1188279/12", status: "ES", location: "UAP2", lastMaintenance: "2023-11-19", nextMaintenance: "2026-03-15" },
            { id: "M-0117", name: "VISSEUSE PNEUMATIQUE", status: "ES", location: "UAP2", lastMaintenance: "2024-02-28", nextMaintenance: "2026-03-16" },
            { id: "M-0119", name: "VISSEUSE PNEUMATIQUE", status: "ES", location: "UAP2", lastMaintenance: "2023-10-26", nextMaintenance: "2026-03-17" },
            { id: "M-0123", name: "VISSEUSE PNEUMATIQUE", status: "ES", location: "UAP2", lastMaintenance: "2024-05-14", nextMaintenance: "2026-03-18" },
            { id: "M-0124", name: "VISSEUSE PNEUMATIQUE", status: "ES", location: "UAP2", lastMaintenance: "2023-12-15", nextMaintenance: "2026-03-19" },
            { id: "M-0125", name: "VISSEUSE PNEMATIQUE", status: "ES", location: "UAP2", lastMaintenance: "2024-03-22", nextMaintenance: "2026-03-20" },
            { id: "M-0126", name: "VISSEUSE PNEMATIQUE", status: "ES", location: "UAP2", lastMaintenance: "2023-09-27", nextMaintenance: "2026-03-21" },
            { id: "M-0127", name: "VISSEUSE ELECTRIQUE GX50BT", ref: "1810270002", status: "ES", location: "UAP2", lastMaintenance: "2024-01-29", nextMaintenance: "2026-03-22" },
            { id: "M-0128", name: "VISSEUSE PNEMATIQUE", status: "ES", location: "UAP2", lastMaintenance: "2023-11-21", nextMaintenance: "2026-03-23" },
            { id: "M-0129", name: "VISSEUSE PNEMATIQUE", status: "ES", location: "UAP2", lastMaintenance: "2024-04-20", nextMaintenance: "2026-03-24" },
            { id: "M-0130", name: "VISSEUSE PNEMATIQUE", status: "ES", location: "UAP2", lastMaintenance: "2023-10-19", nextMaintenance: "2026-03-25" },
            { id: "M-0131", name: "VISSEUSE PNEMATIQUE", status: "ES", location: "UAP2", lastMaintenance: "2024-02-25", nextMaintenance: "2026-03-26" },
            { id: "M-0132", name: "VISSEUSE PNEMATIQUE", ref: "06Y0282", status: "ES", location: "UAP2", lastMaintenance: "2023-12-09", nextMaintenance: "2026-03-27" },
            { id: "M-0133", name: "VISSEUSE ELECTRIQUE DELVO 7333", ref: "1320577", status: "ES", location: "UAP2", lastMaintenance: "2024-05-08", nextMaintenance: "2026-03-28" },
            { id: "M-0134", name: "VISSEUSE PNEUMATIQUE DEPRAG", ref: "1194192/12", status: "ES", location: "UAP2", lastMaintenance: "2023-11-27", nextMaintenance: "2026-03-29" },
            { id: "M-0135", name: "VISSEUSE PNEUMATIQUE DEPRAG", ref: "1194178/12", status: "ES", location: "UAP2", lastMaintenance: "2024-03-15", nextMaintenance: "2026-03-30" },
            { id: "M-0136", name: "VISSEUSE ELECTRIQUE DLV 7333", ref: "1320635", status: "ES", location: "UAP2", lastMaintenance: "2023-10-24", nextMaintenance: "2026-03-31" },
            { id: "M-0140", name: "VISSEUSE PNEUMATIQUE DEPRAG", status: "ES", location: "UAP2", lastMaintenance: "2024-01-30", nextMaintenance: "2026-04-01" },
            { id: "M-0142", name: "Visseuse Electrique 1,26 Nm±0,3", status: "ES", location: "UAP2", lastMaintenance: "2023-09-19", nextMaintenance: "2026-04-02" },
            { id: "M-0145", name: "VISSEUSE ELECTRIQUE GX120FSP", ref: "24", status: "ES", location: "UAP2", lastMaintenance: "2024-04-27", nextMaintenance: "2026-04-03" },
            { id: "M-0146", name: "Visseuse Electrique 1 Nm +/-0,3", status: "ES", location: "UAP2", lastMaintenance: "2023-11-22", nextMaintenance: "2026-04-04" },
            { id: "M-0148", name: "Visseuse Pneumatique (±0,3) 1,45 N.m", status: "ES", location: "UAP2", lastMaintenance: "2024-02-29", nextMaintenance: "2026-04-05" },
            { id: "M-0149", name: "Visseuse Electrique 1,05 Nm +/-0,3", status: "ES", location: "UAP2", lastMaintenance: "2023-10-20", nextMaintenance: "2026-04-06" },
            { id: "M-0150", name: "Visseuse Electrique 1 Nm +/- 0,1", status: "ES", location: "UAP1", lastMaintenance: "2024-05-15", nextMaintenance: "2026-04-07" },
            { id: "M-0153", name: "Visseuse Pneumatique 2,15 Nm +/- 0,1", status: "ES", location: "UAP2", lastMaintenance: "2023-12-14", nextMaintenance: "2026-04-08" },
            { id: "M-0161", name: "Visseuse Pneumatique 0 / 1,75 N.m", ref: "1411002", status: "ES", location: "UAP2", lastMaintenance: "2024-03-22", nextMaintenance: "2026-04-09" },
            { id: "M-0174", name: "VISSEUSE ELECTRIQUE GX450P", ref: "24", status: "ES", location: "UAP2", lastMaintenance: "2023-09-26", nextMaintenance: "2026-04-10" },
            { id: "M-0175", name: "VISSEUSE ELECTRIQUE", ref: "24", status: "ES", location: "UAP2", lastMaintenance: "2024-01-29", nextMaintenance: "2026-04-11" },
            { id: "M-0176", name: "VISSEUSE ELECTRIQUE GX450P-A", ref: "1512080056", status: "ES", location: "UAP1", lastMaintenance: "2023-11-20", nextMaintenance: "2026-04-12" },
            { id: "M-0178", name: "VISSEUSE ELECTRIQUE GX450", ref: "1512080388", status: "ES", location: "UAP2", lastMaintenance: "2024-04-25", nextMaintenance: "2026-04-13" },
            { id: "M-0179", name: "VISSEUSE ELECTRIQUE GX450", ref: "1512080393", status: "ES", location: "UAP2", lastMaintenance: "2023-10-27", nextMaintenance: "2026-04-14" },
            { id: "M-0181", name: "VISSEUSE ELECTRIQUE GX450", ref: "1512080387", status: "ES", location: "UAP2", lastMaintenance: "2024-02-28", nextMaintenance: "2026-04-15" },
            { id: "M-0182", name: "VISSEUSE ELECTRIQUE GX50BT", ref: "1512270016", status: "ES", location: "UAP2", lastMaintenance: "2023-12-15", nextMaintenance: "2026-04-16" },
            { id: "M-0184", name: "VISSEUSE ELECTRIQUE DLV 7333", status: "ES", location: "UAP2", lastMaintenance: "2024-03-20", nextMaintenance: "2026-04-17" },
            { id: "M-0185", name: "VISSEUSE PNEUMATIQUE DEPRAG 347-528U", ref: "1194178/12", status: "ES", location: "UAP1", lastMaintenance: "2023-09-30", nextMaintenance: "2026-04-18" },
            { id: "M-0186", name: "VISSEUSE ELECTRIQUE GX450P", ref: "24", status: "ES", location: "UAP2", lastMaintenance: "2024-01-24", nextMaintenance: "2026-04-19" },
            { id: "M-0187", name: "VISSEUSE ELECTRIQUE GX450", ref: "1512080384", status: "ES", location: "UAP2", lastMaintenance: "2023-11-26", nextMaintenance: "2026-04-20" },
            { id: "M-0189", name: "VISSEUSE ELECTRIQUE GX50BT", ref: "1603270016", status: "ES", location: "UAP2", lastMaintenance: "2024-04-27", nextMaintenance: "2026-04-21" },
            { id: "M-0190", name: "VISSEUSE ELECTRIQUE GX50BT", ref: "1603270015", status: "ES", location: "UAP2", lastMaintenance: "2023-10-19", nextMaintenance: "2026-04-22" },
            { id: "M-0192", name: "VISSEUSE ELECTRIQUE GX150P-A", status: "ES", location: "UAP1", lastMaintenance: "2024-02-25", nextMaintenance: "2026-04-23" },
            { id: "M-0200", name: "VISSEUSE ELECTRIQUE GX450", ref: "0123456789", status: "ES", location: "UAP2", lastMaintenance: "2023-12-09", nextMaintenance: "2026-04-24" },
            { id: "M-0206", name: "VISSEUSE ELECTRIQUE GX220", ref: "1712080091", status: "ES", location: "UAP2", lastMaintenance: "2024-05-15", nextMaintenance: "2026-04-25" },
            { id: "M-0209", name: "GX450P-A", ref: "1711080092", status: "ES", location: "UAP2", lastMaintenance: "2023-11-21", nextMaintenance: "2026-04-26" },
            { id: "M-0212", name: "VISSEUSE ELECTRIQUE GX50BT", ref: "16122700", status: "ES", location: "UAP2", lastMaintenance: "2024-03-22", nextMaintenance: "2026-04-27" },
            { id: "M-0214", name: "VISSEUSE ELECTRIQUE GX 220P-H", ref: "2310080021", status: "ES", location: "UAP2", lastMaintenance: "2023-09-27", nextMaintenance: "2026-04-28" },
            { id: "M-0218", name: "VISSEUSE ELECTRIQUE SUMAKE EA-BN210/C6", ref: "1410328", status: "ES", location: "UAP1", lastMaintenance: "2024-01-29", nextMaintenance: "2026-04-29" },
            { id: "M-0220", name: "VISSEUSE", status: "ES", location: "UAP2", lastMaintenance: "2023-10-24", nextMaintenance: "2026-04-30" },
            { id: "M-0224", name: "VISSEUSE PNEUMATIQUE", status: "ES", location: "UAP2", lastMaintenance: "2024-04-20", nextMaintenance: "2026-05-01" },
            { id: "M-0228", name: "VISSEUSE ELECTRIQUE GX220P-A", ref: "1804080064", status: "ES", location: "UAP2", lastMaintenance: "2023-12-15", nextMaintenance: "2026-05-02" },
            { id: "M-0231", name: "VISSEUSE ELECTRIQUE GX450AESD", ref: "1901080038", status: "ES", location: "UAP2", lastMaintenance: "2024-02-28", nextMaintenance: "2026-05-03" },
            { id: "M-0233", name: "VISSEUSE ELECTRIQUE SUMAKE EA-BN210L/C6", ref: "1410330", status: "ES", location: "UAP2", lastMaintenance: "2023-11-20", nextMaintenance: "2026-05-04" },
            { id: "M-0235", name: "VISSEUSE ELECTRIQUE GX150", ref: "2011080212", status: "ES", location: "UAP2", lastMaintenance: "2024-05-09", nextMaintenance: "2026-05-05" },
            { id: "M-0236", name: "VISSEUSE ELECTRIQUE GX150", status: "ES", location: "UAP2", lastMaintenance: "2023-10-27", nextMaintenance: "2026-05-06" },
            { id: "M-0241", name: "VISSEUSE ELECTRIQUE GX450P-A", ref: "1910080180", status: "ES", location: "UAP2", lastMaintenance: "2024-03-22", nextMaintenance: "2026-05-07" },
            { id: "M-0243", name: "VISSEUSE ELECTRIQUE GX-220-A", ref: "1712080095", status: "ES", location: "UAP2", lastMaintenance: "2023-09-30", nextMaintenance: "2026-05-08" },
            { id: "M-0244", name: "VISSEUSE ELECTRIQUE GX450P", ref: "1910080179", status: "ES", location: "UAP2", lastMaintenance: "2024-01-29", nextMaintenance: "2026-05-09" },
            { id: "M-0247", name: "VISSEUSE ELECTRIQUE GX50BT", ref: "1811270013", status: "ES", location: "UAP2", lastMaintenance: "2023-11-26", nextMaintenance: "2026-05-10" },
            { id: "M-0252", name: "VISSEUSE ELECTRIQUE GX-220P", ref: "2308080155", status: "ES", location: "UAP2", lastMaintenance: "2024-04-25", nextMaintenance: "2026-05-11" },
            { id: "M-0255", name: "VISSEUSE ELECTRIQUE GX150P", ref: "2011080212", status: "ES", location: "UAP2", lastMaintenance: "2023-10-19", nextMaintenance: "2026-05-12" },
            { id: "M-0259", name: "VISSEUSE ELECTRIQUE GX220P", ref: "2103080255", status: "ES", location: "UAP2", lastMaintenance: "2024-02-28", nextMaintenance: "2026-05-13" },
            { id: "M-0261", name: "Visseuse électrique GX220", status: "ES", location: "UAP2", lastMaintenance: "2023-12-15", nextMaintenance: "2026-05-14" },
            { id: "M-0263", name: "VISSEUSE electrique", status: "ES", location: "UAP2", lastMaintenance: "2024-03-22", nextMaintenance: "2026-05-15" },
            { id: "M-0268", name: "VISSEUSE ELECTRIQUE", status: "ES", location: "UAP2", lastMaintenance: "2023-09-27", nextMaintenance: "2026-05-16" },
            { id: "M-0269", name: "VISSEUSE ELECTRIQUE GX450P-H", ref: "2106080161", status: "ES", location: "UAP2", lastMaintenance: "2024-01-29", nextMaintenance: "2026-05-17" },
            { id: "M-0274", name: "VISSEUSE ELECTRIQUE GX 220", ref: "1806080058", status: "ES", location: "UAP2", lastMaintenance: "2023-11-20", nextMaintenance: "2026-05-18" },
            { id: "M-0278", name: "VISSEUSE ELECTRIQUE GX150", ref: "1803080212", status: "ES", location: "UAP2", lastMaintenance: "2024-04-27", nextMaintenance: "2026-05-19" },
            { id: "M-0281", name: "VISSEUSE ELECTRIQUE GX450AESD", status: "ES", location: "UAP2", lastMaintenance: "2023-10-24", nextMaintenance: "2026-05-20" },
            { id: "M-0294", name: "VISSEUSE GX450", status: "STOCK", location: "UAP2", lastMaintenance: "2024-02-28", nextMaintenance: "2026-05-21" },
            { id: "M-0298", name: "VISSEUSE", status: "ES", location: "UAP2", lastMaintenance: "2023-12-15", nextMaintenance: "2026-05-22" },
            { id: "M-0300", name: "VISSEUSE ELECTRIQUE", status: "ES", location: "UAP2", lastMaintenance: "2024-03-22", nextMaintenance: "2026-05-23" },
            { id: "M-0301", name: "VISSEUSE ELECTRIQUE GX-220", ref: "2305080028", status: "ES", location: "UAP2", lastMaintenance: "2023-09-27", nextMaintenance: "2026-05-24" },
            { id: "M-0302", name: "VISSEUSE ELECTRIQUE GX150P-H", ref: "2308080065", status: "ES", location: "UAP2", lastMaintenance: "2024-01-29", nextMaintenance: "2026-05-25" },
            { id: "M-0303", name: "VISSEUSE ELECTRIQUE", status: "ES", location: "UAP2", lastMaintenance: "2023-11-20", nextMaintenance: "2026-05-26" },
            { id: "M-0308", name: "VISSEUSE ELECTRIQUE GX-220",status: "ES", location: "UAP 1", lastMaintenance: "2023-11-20", nextMaintenance: "2026-05-26" },
            { id: "M-0312", name: "VISSEUSE GX450", status: "ES", location: "UAP1", lastMaintenance: "2023-10-24", nextMaintenance: "2025-02-19" },
            { id: "M-0313", name: "VISSEUSE ELECTRIQUE GX 450P", status: "ES", location: "UAP1", lastMaintenance: "2024-02-28", nextMaintenance: "2025-07-25" },
            { id: "M-0314", name: "VISSEUSE ELECTRIQUE GX22OP-H", status: "ES", location: "UAP1", lastMaintenance: "2023-12-15", nextMaintenance: "2025-05-11" },
            { id: "M-0315", name: "VISSEUSE ELECTRIQUE GX22OP-H", status: "ES", location: "UAP1", lastMaintenance: "2024-03-22", nextMaintenance: "2025-09-17" },
            { id: "M-0334", name: "VISSEUSE ELECTRIQUE GX220", status: "ES", location: "UAP1", lastMaintenance: "2023-09-27", nextMaintenance: "2025-01-22" },
            { id: "M-0335", name: "VISSEUSE ELECTRIQUE GX-220-A", status: "ES", location: "UAP1", lastMaintenance: "2024-01-29", nextMaintenance: "2025-06-25" },
            { id: "M-0337", name: "VISSEUSE ELECTRIQUE GX-450P", status: "ES", location: "UAP1", lastMaintenance: "2023-11-20", nextMaintenance: "2025-04-16" },
            { id: "M-0340", name: "VISSEUSE ELECTRIQUE GX-220", status: "ES", location: "UAP1", lastMaintenance: "2024-04-27", nextMaintenance: "2025-10-23" },
            { id: "M-0341", name: "VISSEUSE ELECTRIQUE GX220", status: "ES", location: "UAP1", lastMaintenance: "2023-10-24", nextMaintenance: "2025-02-19" },
            { id: "M-0352", name: "VISSEUSE electrique", status: "ES", location: "UAP1", lastMaintenance: "2024-02-28", nextMaintenance: "2025-07-25" },
            { id: "M-0226", name: "VISSEUSE", status: "ES", location: "UAP1", lastMaintenance: "2023-12-15", nextMaintenance: "2025-05-11" },

             // P-Series Equipment

            { id: "P-0001", name: "PALAN TECMAN 2 T", status: "ES", location: "MOL", lastMaintenance: "2024-03-22", nextMaintenance: "2025-09-17" },
            { id: "P-0002", name: "PALAN TECMAN 2 T", status: "ES", location: "MOL", lastMaintenance: "2023-09-27", nextMaintenance: "2025-01-22" },
            { id: "PROJET0001", name: "Gabarit test mécanisme P54", status: "ES", location: "UAP2", lastMaintenance: "2024-01-29", nextMaintenance: "2025-06-25" },
            { id: "PROJET0005", name: "Gabarit test écrou", status: "ES", location: "UAP2", lastMaintenance: "2023-11-20", nextMaintenance: "2025-04-16" },
            
            // R-Series Equipment

            { id: "R-0001", name: "CUISINIERE 4 PLAQUES CARREES", status: "ES", location: "IFS", lastMaintenance: "2024-04-27", nextMaintenance: "2025-10-23" },
            { id: "R-0002", name: "FOUR ELECTRIQUE", status: "ES", location: "IFS", lastMaintenance: "2023-10-24", nextMaintenance: "2025-02-19" },
            { id: "R-0003", name: "FRITEUSE", status: "ES", location: "IFS", lastMaintenance: "2024-02-28", nextMaintenance: "2025-07-25" },
            { id: "R-0004", name: "GRILLADE FME 94 GF", status: "ES", location: "IFS", lastMaintenance: "2023-12-15", nextMaintenance: "2025-05-11" },
            { id: "R-0005", name: "HACHOIR TC-22E", status: "ES", location: "IFS", lastMaintenance: "2024-03-22", nextMaintenance: "2025-09-17" },
            { id: "R-0006", name: "MACHINE COUPE LEGUME TM", status: "ES", location: "IFS", lastMaintenance: "2023-09-27", nextMaintenance: "2025-01-22" },
            { id: "R-0007", name: "EPULUCHE POMMES DE TERRE", status: "ES", location: "IFS", lastMaintenance: "2024-01-29", nextMaintenance: "2025-06-25" },
            { id: "R-0008", name: "LAVE VAISSELLE PL 1300", status: "ES", location: "IFS", lastMaintenance: "2023-11-20", nextMaintenance: "2025-04-16" },
            { id: "R-0009", name: "MALAXEUR PLANETAIRE", status: "ES", location: "IFS", lastMaintenance: "2024-04-27", nextMaintenance: "2025-10-23" },
            { id: "R-0010", name: "SAUTEUSE ELECTRIQUE BE 94 CM", status: "ES", location: "IFS", lastMaintenance: "2023-10-24", nextMaintenance: "2025-02-19" },
            { id: "R-0011", name: "STERILISATEUR UV 16W", status: "ES", location: "IFS", lastMaintenance: "2024-02-28", nextMaintenance: "2025-07-25" },
             
            // S-Series Equipment

            { id: "S27D", name: "CASSETTE SUPERIEUR DROITE", status: "ES", location: "UAP2", lastMaintenance: "2023-12-15", nextMaintenance: "2025-05-11" },
            { id: "S27G", name: "CASSETTE SUPERIEUR GAUCHE", status: "ES", location: "UAP2", lastMaintenance: "2024-03-22", nextMaintenance: "2025-09-17" },
            { id: "S32D", name: "CASSETTE SUPERIEUR DROITE", status: "ES", location: "UAP2", lastMaintenance: "2023-09-27", nextMaintenance: "2025-01-22" },
            { id: "S32G", name: "CASSETTE SUPERIEUR GAUCHE", status: "ES", location: "UAP2", lastMaintenance: "2024-01-29", nextMaintenance: "2025-06-25" },
            { id: "S36D", name: "CASSETTE SUPERIEUR DROITE", status: "ES", location: "UAP2", lastMaintenance: "2023-11-20", nextMaintenance: "2025-04-16" },
            { id: "S36G", name: "CASSETTE SUPERIEUR GAUCHE", status: "ES", location: "UAP2", lastMaintenance: "2024-04-27", nextMaintenance: "2025-10-23" },
            { id: "S50D", name: "CASSETTE SUPERIEUR DROITE", status: "ES", location: "UAP2", lastMaintenance: "2023-10-24", nextMaintenance: "2025-02-19" },
            { id: "S50G", name: "CASSETTE SUPERIEUR GAUCHE", status: "ES", location: "UAP2", lastMaintenance: "2024-02-28", nextMaintenance: "2025-07-25" },
            { id: "S81D", name: "CASSETTE SUPERIEUR DROITE", status: "ES", location: "UAP2", lastMaintenance: "2023-12-15", nextMaintenance: "2025-05-11" },
            { id: "S81G", name: "CASSETTE SUPERIEUR GAUCHE", status: "ES", location: "UAP2", lastMaintenance: "2024-03-22", nextMaintenance: "2025-09-17" }
  ]);
const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [isOpen, setIsOpen] = useState(false);
  const [newEquipment, setNewEquipment] = useState({
    id: '',
    name: '',
    status: '',
    location: '',
    lastMaintenance: '',
    nextMaintenance: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEquipment(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (newEquipment.id && newEquipment.name && newEquipment.status && newEquipment.location && newEquipment.lastMaintenance && newEquipment.nextMaintenance) {
      setEquipmentData(prev => [...prev, newEquipment]);
      setIsOpen(false);
      setNewEquipment({
        id: '',
        name: '',
        status: '',
        location: '',
        lastMaintenance: '',
        nextMaintenance: ''
      });
    }
  };

  const filteredData = equipmentData.filter((item) => {
    const matchesSearch = item.id.toLowerCase().includes(searchTerm.toLowerCase()) || item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'all' || item.location === selectedLocation;
    const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus;
    return matchesSearch && matchesLocation && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "ES": return "bg-success/10 text-success border-success/20";
      case "REBUS": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <div className="min-h-screen bg-dashboard-content">
      <div className="bg-dashboard-header border-b p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Équipements</h1>
            <p className="text-muted-foreground">Gérez et surveillez tous vos équipements industriels</p>
          </div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="w-fit">
                <Plus className="h-4 w-4 mr-2" />
                Ajouter Équipement
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Ajouter un nouvel équipement</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Input
                  name="id"
                  placeholder="ID"
                  value={newEquipment.id}
                  onChange={handleChange}
                />
                <Input
                  name="name"
                  placeholder="Nom"
                  value={newEquipment.name}
                  onChange={handleChange}
                />
                <Select onValueChange={(value) => setNewEquipment(prev => ({ ...prev, status: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Statut" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ES">ES</SelectItem>
                    <SelectItem value="REBUS">REBUS</SelectItem>
                  </SelectContent>
                </Select>
                <Select onValueChange={(value) => setNewEquipment(prev => ({ ...prev, location: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Zone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="UAP1">UAP1</SelectItem>
                    <SelectItem value="UAP2">UAP2</SelectItem>
                    <SelectItem value="MPC3">MPC3</SelectItem>
                    <SelectItem value="LOG">LOG</SelectItem>
                    <SelectItem value="ZZ">ZZ</SelectItem>
                    <SelectItem value="MPF">MPF</SelectItem>
                    <SelectItem value="LAB">LAB</SelectItem>
                    <SelectItem value="FAB">FAB</SelectItem>
                    <SelectItem value="MOL">MOL</SelectItem>
                    <SelectItem value="PCO">PCO</SelectItem>
                    <SelectItem value="IFS">IFS</SelectItem>
                    <SelectItem value="CQL">CQL</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  name="lastMaintenance"
                  placeholder="Dernière Maintenance (YYYY-MM-DD)"
                  value={newEquipment.lastMaintenance}
                  onChange={handleChange}
                />
                <Input
                  name="nextMaintenance"
                  placeholder="Prochaine Maintenance (YYYY-MM-DD)"
                  value={newEquipment.nextMaintenance}
                  onChange={handleChange}
                />
              </div>
              <DialogFooter>
                <Button onClick={handleSubmit}>Ajouter</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Équipements</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{equipmentData.length}</div>
              <p className="text-xs text-muted-foreground">
                +8 ce mois
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">En service </CardTitle>
              <Activity className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{equipmentData.filter(e => e.status === "ES").length}</div>
              <p className="text-xs text-muted-foreground">
                {((equipmentData.filter(e => e.status === "ES").length / equipmentData.length) * 100).toFixed(2)}% du total
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hors service</CardTitle>
              <Settings className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{equipmentData.filter(e => e.status === "REBUS").length}</div>
              <p className="text-xs text-muted-foreground">
                {((equipmentData.filter(e => e.status === "REBUS").length / equipmentData.length) * 100).toFixed(2)}% du total
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Filtres et Recherche</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Rechercher par ID ou nom..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Zone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les zones</SelectItem>
                  <SelectItem value="UAP1">UAP1</SelectItem>
                  <SelectItem value="UAP2">UAP2</SelectItem>
                  <SelectItem value="MPC3">MPC3</SelectItem>
                  <SelectItem value="LOG">LOG</SelectItem>
                  <SelectItem value="ZZ">ZZ</SelectItem>
                  <SelectItem value="MPF">MPF</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les statuts</SelectItem>
                  <SelectItem value="ES">ES</SelectItem>
                  <SelectItem value="REBUS">REBUS</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Liste des Équipements</CardTitle>
            <CardDescription>
              Gérez vos équipements et suivez leur état de maintenance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nom</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Zone</TableHead>
                    <TableHead>Dernière Maintenance</TableHead>
                    <TableHead>Prochaine Maintenance</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((equipment) => (
                    <TableRow key={equipment.id}>
                      <TableCell className="font-medium">{equipment.id}</TableCell>
                      <TableCell>{equipment.name}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(equipment.status)}>
                          {equipment.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          {equipment.location}
                        </div>
                      </TableCell>
                      <TableCell>{equipment.lastMaintenance}</TableCell>
                      <TableCell>{equipment.nextMaintenance}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-3 w-3 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
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