import { Injectable } from "@angular/core";
import { Projet } from "../models/projet";

@Injectable({
    providedIn: 'root'
})

export class ProjetsService {
    private projets: Projet[] = [
        new Projet(
            "États de paie",
            "UX/UI Design",
            "Refonte ergonomique et graphique de la fonctionnalité des États de paie pour Sage Business Cloud Paie.",
            'etat+de+paie+banner.png',
            "etats-de-paie"
        ),
        new Projet(
            "États de paie",
            "UX/UI Design",
            "Refonte ergonomique et graphique de la fonctionnalité des États de paie pour Sage Business Cloud Paie.",
            'etat+de+paie+banner.png',
            "etats-de-paie"
        ),
        new Projet(
            "États de paie",
            "UX/UI Design",
            "Refonte ergonomique et graphique de la fonctionnalité des États de paie pour Sage Business Cloud Paie.",
            'etat+de+paie+banner.png',
            "etats-de-paie"
        ),
        new Projet(
            "États de paie",
            "UX/UI Design",
            "Refonte ergonomique et graphique de la fonctionnalité des États de paie pour Sage Business Cloud Paie.",
            'etat+de+paie+banner.png',
            "etats-de-paie"
        )
    ];

    getProjets(): Projet[] {
        return [...this.projets];
    }

    getFaceSnapById(projetId: string): Projet {
        const foundProjet = this.projets.find(projet => projet.id === projetId);
        if (!foundProjet) {
            throw new Error('Projet not found !');
        }
        return foundProjet;
    }
}