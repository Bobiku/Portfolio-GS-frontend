import { Injectable } from "@angular/core";
import { Projet } from "../models/projet";

@Injectable({
    providedIn: 'root'
})

export class ProjetsService {
    private projets: Projet[] = [
        new Projet(
            "etats-de-paie",
            "États de paie",
            ["UX/UI Design"],
            "Refonte ergonomique et graphique de la fonctionnalité des États de paie pour Sage Business Cloud Paie.",
            'etat+de+paie+banner.png',
            `<div class="contentProjetDetail">
                <h2>Résumé du projet</h2>
                <p>C’est un projet pour le produit Sage Business Cloud Paie.</p>
                <p>Un gestionnaire de paie doit régulièrement éditer des documents obligatoires, les états de paie. Ce sont par exemple des livres de paie, des états de charges, des provisions de congés payés ou bien encore les cotisations à l’URSSAF.</p>
                <h2>Quel était le problème ?</h2>
                <p>La fonctionnalité des états de paie possédait une interface peu ergonomique, visuellement peu attractive et manquant de plusieurs fonctionnalités essentiels pour les utilisateurs. Un UX researcher a créé un sondage afin de comprendre le besoin légal et fonctionnel des gestionnaires de paie concernant cette fonctionnalité. Quelques mois plus tard, j’ai continué son travail afin de concevoir une nouvelle interface, reprenant les points essentiels soulevés par la précédente étude.</p>
                <h2>Quelle est la solution retenue ?</h2>
                <p>J’ai continué la démarche UX avec l’équipe produit, en particulier avec le business analyst travaillant sur cette fonctionnalité, afin de mener des ateliers d’idéation pour concevoir un prototype répondant aux attentes des utilisateurs. Une session de tests utilisateurs a permis de tester les idées des ateliers d’idéations, de sonder de nouveaux besoins pour de futures études et d’affiner le prototype à livrer à l’équipe de développement.</p>
                <h2>Quel était mon rôle dans l’équipe ?</h2>
                <ul>
                    <li>1 UX Designer (moi)</li>
                    <li>1 Business Analyst</li>
                    <li>1 Product Owner</li>
                    <li>1 Product Manager</li>
                </ul>
                <h2>Résumé de l’UX Research</h2>
                <p>Quelques mois avant d’arriver sur le projet, un sondage a été proposé par l’équipe UX au sein de l’interface du produit. Arrivé sur la page des États de paie, l’utilisateur voyait apparaître une pop-up lui proposant de répondre à ce sondage. Le but était d’obtenir des retours utilisateurs sur une fonctionnalité que l’équipe produit jugeait peu ergonomique, ainsi qu’obtenir un panel d’utilisateurs qui pourrait participer à de futurs entretiens sur ce sujet.</p>
                <p>La synthèse de sondage révèle 4 axes d’améliorations majeurs :</p>
                <ul>
                    <li>Les utilisateurs souhaitent avoir plus de filtres de données pour affiner les informations qui seront générées dans les états de paie.</li>
                    <li>Les utilisateurs souhaitent avoir un unique endroit où générer tous les états de paie. La page actuelle ne permettait que de générer certains états et les utilisateurs devaient aller à d’autres endroits dans l’application pour générer les autres états.</li>
                    <li>Les utilisateurs souhaitent pouvoir visualiser les états de paie avant de les éditer.</li>
                    <li>Les utilisateurs souhaitent exporter les états de paie dans différents formats (PDF, Excel, …)</li>
                </ul>
                <h2>Idéation et création d’un prototype testable</h2>
                <p>Pour commencer, le business analyst m’a expliqué en détail ce que sont les états de paie et à quoi ils servent pour les gestionnaires de paie.</p>
                <p>Ensuite, nous avons repris ensemble l’étude de la recherche utilisateurs pour concevoir une nouvelle interface utilisateur qui répond aux besoins recueillis. Après plusieurs ateliers d’idéations avec le business analyst, le PO et le PM, nous avons conçu un premier jet de la refonte de l’interface.</p>
                <p>Avec le business analyst et le PM, nous avons défini un ensemble de filtres manquant, comme des plages de date plus précises ou un large choix de critères de sélection de salariés par groupe, statut, ou individuellement. Un inventaire de tous les états de paie présents dans l’application a été effectué afin d’évaluer le coût pour tous les centraliser dans cette page. Une prévisualisation de l’état sélectionné est affichée, et se met à jour en temps réel en fonction du filtrage sélectionné par l’utilisateur. Enfin, l’utilisateur peut voir une liste de tous les états à gauche. Il peut en sélectionner un seul ou plusieurs en même temps. Ils peuvent appliquer le filtrage à ces états, naviguer entre eux via des onglets, avoir une vue côte à côte pour comparer facilement les données, et les exporter dans plusieurs formats. Par la suite, j’ai transformé notre vision en un prototype haute fidélité pour le faire tester à des utilisateurs.</p>
            </div>
            <img class="banner" src="etat+de+paie+filter.png" alt="États de paie - filtres">
            <div class="contentProjetDetail">
                <h2>Tests utilisateurs</h2>
                <p>Ensuite, j’ai organisé une session de tests utilisateurs. La dizaine d’utilisateurs recrutés avait répondu au sondage lancé il y a quelques mois. Les tests utilisateurs avaient 2 objectifs :</p>
                <ul>
                    <li>Évaluer si le prototype répond aux attentes des utilisateurs concernant la gestion et génération des états de paie.</li>
                    <li>Détecter de nouveaux besoins d’états de paie et de personnalisation de ces états.</li>
                </ul>
                <p>Il s’agissait de session individuelle à distance d’environ 1 heure, en utilisant la plateforme Microsoft Teams. La consigne de départ était la suivante :</p>
                <p><i>”Vous souhaitez imprimer un livre de paie et un état des charges à payer. Utiliser ce prototype pour les obtenir.”</i></p>
                <p>La perception du prototype et son utilisabilité étaient testées. Plusieurs questions ouvertes étaient posées à la fin de l’entretien afin d’explorer les besoins des utilisateurs liés au second objectif de la session de tests.</p>
                <p>Les tests utilisateurs ont apporté plusieurs enseignements :</p>
                <p>Certains points ont été confirmés par les tests. Les utilisateurs plébiscitent la centralisation de tous les états dans un seul endroit dans l’application. Ils apprécient également la plus grande personnalisation offerte par les filtres, mais ils veulent quelque chose de simple à comprendre et à utiliser. Ils apprécient également la prévisualisation des données.</p>
                <p>Cependant, la grande majorité des utilisateurs ont affirmé n’avoir besoin que du format PDF pour leurs états. D’autres se sont plaints du manque de cohérence entre les données visualisées dans l’application et le rendu de ceci dans Excel, rendant ce format quasiment inutilisable pour eux. De plus, deux profils utilisateurs ont également émergé. Ceux qui travaillent dans une agence et gérant de nombreux dossiers. Et ceux qui travaillent directement en entreprise. Leurs besoins de personnalisation et d’automatisation sont bien différents.</p>
                <div class="lien">
                    <img class="lienImage" src="icons8-pdf-48.png" alt="PDF Logo">
                    <a href="https://drive.google.com/file/d/1XYoLmY0jDYmrQJloUOWEOr-Xc07NrUlz/view?usp=sharing" target="_blank">Le rapport des tests utilisateurs</a>
                </div>
                <div class="lien">
                    <img class="lienImage" src="icons8-figma-48.png" alt="Figma Logo">
                    <a href="https://www.figma.com/proto/xS7DJxGo0xdCZsPRwH6Hp8/Guillaume-Savary-stuff?page-id=649%3A4&type=design&node-id=649-12425&viewport=9616%2C3286%2C0.83&t=QtXd7ZDhJcjItDFG-1&scaling=min-zoom&starting-point-node-id=649%3A12425&show-proto-sidebar=1&mode=design" target="_blank">Le prototype final</a>
                </div>
            </div>
            <img class="banner" src="etat+de+paie+banner.png" alt="États de paie - comparer deux documents">
            <div class="contentProjetDetail">
                <h2>Fin du projet</h2>
                <p>Le projet s’est terminé par une nouvelle itération du prototype suite à cette session de tests utilisateurs et sa présentation au product manager du produit.</p>
                <h2>Ce que j’ai appris</h2>
                <p>Avec ce projet, j’ai eu l’occasion de travailler dans une grande autonomie avec l’équipe produit. Ce projet m’a également permis de montrer la valeur de la démarche UX à une autre équipe produit avec qui nous avions peu travaillé. Enfin, j’ai travaillé en parallèle avec nos équipes UX et Design system pour travailler sur un nouveau composant de sélection de dates, qui a été intégré à ce projet (voir visuel des filtres et le prototype final).</p>
            </div>`
        ),
        new Projet(
            "aide-en-ligne-in-product",
            "Aide en ligne in-Product",
            ["UX/UI Design"],
            "Création d’un nouveau parcours d’assistance innovant pour les nouveaux produits Sage Business Cloud.",
            'get+help+banner.png',
            `<div class="contentProjetDetail">
            <h2>Résumé du projet</h2>
            <p>Historiquement, les produits Sage sont des produits Desktop et l’aide en ligne est sur un site web à part. Mais le nouveau produit <a href="https://fr.wikipedia.org/wiki/Software_as_a_service" target="_blank">SaaS (Software as a service)</a> sera sur un site web. La conception de ce nouveau produit est l’occasion de refonder l’expérience d’aide en ligne afin d’améliorer son efficacité et sa fluidité pour les utilisateurs.</p>
            <h2>Quel était le problème ?</h2>
            <p>L’aide en ligne et la documentation sont déportées du produit sur plusieurs sites web différents. Il existe plusieurs parcours utilisateur pour chercher de l’aide. Enfin, avec le nouveau produit Sage Business Cloud, il existe de nouvelles possibilités de proposer de l’aide à l’utilisateur de manière plus proactive qu’un produit Desktop.</p>
            <h2>Quelle est la solution retenue ?</h2>
            <p>Après différents ateliers sur plusieurs mois, une gouvernance regroupant des personnes issues de différents services de Sage France a été créée. Il a permis de challenger les pratiques et de créer une expérience utilisateur commune pour aller chercher de l’aide sur les différents produits de Sage. De plus, un pattern d’aide en ligne in-Product a été créé et proposé à l’équipe design system de Sage.</p>
            <h2>Quel était mon rôle dans l’équipe ?</h2>
            <ul>
                <li>1 UX Designer (moi)</li>
                <li>1 UX Researcher</li>
                <li>1 Responsable rédactionnel</li>
                <li>1 Chef de projet Formation</li>
                <li>1 Chef de projet Customer service</li>
                <li>1 Product Manager</li>
            </ul>
            <h2>L’atelier à Paris</h2>
            <p>Un atelier a été organisé au siège social de Sage France afin de travailler sur l’amélioration de 3 parcours utilisateur:</p>
            <p>Que dois-je faire quand je commence à utiliser le produit ? Que faire si j’ai besoin d’aide ? Comment je prends connaissance et appréhende les évolutions du produit ?</p>
            <p>L’atelier a duré 3 jours durant lesquels nous avons traité ces trois sujets lors de sessions de brainstorming, de maquettage et de conception d’user flows.</p>
            <p>À la fin de l’atelier, un consensus a déterminé que le sujet à traiter en priorité, afin d’apporter le plus de valeur ajoutée aux utilisateurs, était le sujet de l’aide en ligne. C’est celui que je vais continuer de traiter dans ce cas d’étude.</p>
        </div>
        <div class="gallery">
            <img class="banner" src="get+help+whiteboard.png" alt="Aide en ligne - whiteboard">
            <img class="banner" src="get+help+workshop.png" alt="États de paie - workshop">
        </div>
        <div class="contentProjetDetail">
            <h2>La création du parcours de l’aide en ligne in-Product</h2>
            <p>L’atelier à Paris a permis de déterminer un ensemble de principes que devra répondre la nouvelle expérience d’assistance de l’utilisateur :</p>
            <ul>
                <li>Centraliser les différents outils d’aide à un seul endroit (documentations, contacts, tutoriels, informations).</li>
                <li>Avoir un parcours simple, fluide et accessible à tout moment dans l’application.</li>
                <li>Suggérer des articles et des informations en fonction du parcours et des actions de l’utilisateur.</li>
            </ul>
            <p>Pour cela, on propose dans l’en-tête de l’application un bouton “Besoin d’aide ?”, accessible à tout moment. Il ouvre un panneau latéral se superposant à son application. Il peut retrouver des articles et des informations pré-filtrés en fonction de son contexte d’utilisation immédiat. Il peut aussi lancer un chat avec un conseiller via notre outil intégré ou envoyer un ticket et suivre sa demande. Enfin, il peut retrouver des tutoriels lui expliquant comment fonctionne une fonctionnalité ou lui présentant une évolution issue d’une précédente mise à jour.</p>
            <div class="lien">
                <img class="lienImage" src="icons8-figma-48.png" alt="Figma Logo">
                <a href="https://www.figma.com/proto/xS7DJxGo0xdCZsPRwH6Hp8/Guillaume-Savary-stuff?page-id=649%3A4&type=design&node-id=649-10153&viewport=8319%2C7300%2C0.61&t=ghxaWRW0nlkjWkF9-1&scaling=min-zoom&starting-point-node-id=649%3A10153&show-proto-sidebar=1&mode=design" target="_blank">Le prototype final</a>
            </div>
        </div>
        <img class="banner" src="get+help+banner.png" alt="Aide en ligne - interfaces">
        <div class="contentProjetDetail">
            <h2>Fin du projet</h2>
            <p>Le projet a été implémenté au sein des produits Sage Business Cloud Comptabilité et Paie français et sud-africains. Il a également été proposé à l’équipe design system de Sage. La gouvernance continue à géré l’expérience utilisateur liée aux parcours utilisateur transversaux au portfolio produits de Sage.</p>
            <h2>Ce que j’ai appris</h2>
            <p>Ce projet m’a permis de travailler sur un sujet bien plus transversal. J’ai pu travailler avec de nombreux services et acquérir le rôle d’interlocuteur privilégié sur l’expérience utilisateur concernant le sujet de l’aide en ligne. De nombreux ateliers d’idéation et de gouvernance ont été réalisés afin de transformer des méthodes et des outils utilisés depuis des années chez Sage.</p>
        </div>`         
        ),
        new Projet(
            "module-bancaire",
            "Module bancaire",
            ["UX/UI Design"],
            "Création d’un nouveau module de gestion automatisée des transactions bancaires pour Sage Business Cloud Comptabilité.",
            'module+bancaire+banner.png',
            ''
        ),
        new Projet(
            "defi-famille-zero-dechet",
            "Défi Famille Zéro Déchet",
            ["UX/UI Design"],
            "Création d’une application, en partenariat avec la ville de Meudon, pour aider des familles à réduire leur consommation de déchet.",
            'Eiko+banner.png',
            ''
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