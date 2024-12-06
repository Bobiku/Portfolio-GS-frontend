import { Injectable } from "@angular/core";
import { Projet } from "../models/projet";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'

@Injectable({
    providedIn: 'root'
})

export class ProjetsService {

    constructor(private http: HttpClient) {}

    private baseUrl = environment.backEndUrl;

    getProjets(): Observable<any> {
        return this.http.get(`${this.baseUrl}/api/notion/page/`);
    }

    getBlocksById(projetId: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/api/notion/page/${projetId}`);
    }

}

// private projets: Projet[] = [
//     new Projet(
//         "0",
//         "etats-de-paie",
//         "États de paie",
//         "Sage",
//         ["UX/UI Design"],
//         "2020-2021",
//         "Refonte ergonomique et graphique de la fonctionnalité des États de paie pour Sage Business Cloud Paie.",
//         "https://www.figma.com/proto/xS7DJxGo0xdCZsPRwH6Hp8/Guillaume-Savary-stuff?page-id=649%3A4&type=design&node-id=649-12425&viewport=9616%2C3286%2C0.83&t=QtXd7ZDhJcjItDFG-1&scaling=min-zoom&starting-point-node-id=649%3A12425&show-proto-sidebar=1&mode=design",
//         '/images/etats-de-paie/etat+de+paie+banner.png',
//         `<div class="contentProjetDetail">
//             <h2>Résumé du projet</h2>
//             <p>C’est un projet pour le produit Sage Business Cloud Paie.</p>
//             <p>Un gestionnaire de paie doit régulièrement éditer des documents obligatoires, les états de paie. Ce sont par exemple des livres de paie, des états de charges, des provisions de congés payés ou bien encore les cotisations à l’URSSAF.</p>
//             <h2>Quel était le problème ?</h2>
//             <p>La fonctionnalité des états de paie possédait une interface peu ergonomique, visuellement peu attractive et manquant de plusieurs fonctionnalités essentiels pour les utilisateurs. Un UX researcher a créé un sondage afin de comprendre le besoin légal et fonctionnel des gestionnaires de paie concernant cette fonctionnalité. Quelques mois plus tard, j’ai continué son travail afin de concevoir une nouvelle interface, reprenant les points essentiels soulevés par la précédente étude.</p>
//             <h2>Quelle est la solution retenue ?</h2>
//             <p>J’ai continué la démarche UX avec l’équipe produit, en particulier avec le business analyst travaillant sur cette fonctionnalité, afin de mener des ateliers d’idéation pour concevoir un prototype répondant aux attentes des utilisateurs. Une session de tests utilisateurs a permis de tester les idées des ateliers d’idéations, de sonder de nouveaux besoins pour de futures études et d’affiner le prototype à livrer à l’équipe de développement.</p>
//             <h2>Quel était mon rôle dans l’équipe ?</h2>
//             <ul>
//                 <li>1 UX Designer (moi)</li>
//                 <li>1 Business Analyst</li>
//                 <li>1 Product Owner</li>
//                 <li>1 Product Manager</li>
//             </ul>
//             <h2>Résumé de l’UX Research</h2>
//             <p>Quelques mois avant d’arriver sur le projet, un sondage a été proposé par l’équipe UX au sein de l’interface du produit. Arrivé sur la page des États de paie, l’utilisateur voyait apparaître une pop-up lui proposant de répondre à ce sondage. Le but était d’obtenir des retours utilisateurs sur une fonctionnalité que l’équipe produit jugeait peu ergonomique, ainsi qu’obtenir un panel d’utilisateurs qui pourrait participer à de futurs entretiens sur ce sujet.</p>
//             <p>La synthèse de sondage révèle 4 axes d’améliorations majeurs :</p>
//             <ul>
//                 <li>Les utilisateurs souhaitent avoir plus de filtres de données pour affiner les informations qui seront générées dans les états de paie.</li>
//                 <li>Les utilisateurs souhaitent avoir un unique endroit où générer tous les états de paie. La page actuelle ne permettait que de générer certains états et les utilisateurs devaient aller à d’autres endroits dans l’application pour générer les autres états.</li>
//                 <li>Les utilisateurs souhaitent pouvoir visualiser les états de paie avant de les éditer.</li>
//                 <li>Les utilisateurs souhaitent exporter les états de paie dans différents formats (PDF, Excel, …)</li>
//             </ul>
//             <h2>Idéation et création d’un prototype testable</h2>
//             <p>Pour commencer, le business analyst m’a expliqué en détail ce que sont les états de paie et à quoi ils servent pour les gestionnaires de paie.</p>
//             <p>Ensuite, nous avons repris ensemble l’étude de la recherche utilisateurs pour concevoir une nouvelle interface utilisateur qui répond aux besoins recueillis. Après plusieurs ateliers d’idéations avec le business analyst, le PO et le PM, nous avons conçu un premier jet de la refonte de l’interface.</p>
//             <p>Avec le business analyst et le PM, nous avons défini un ensemble de filtres manquant, comme des plages de date plus précises ou un large choix de critères de sélection de salariés par groupe, statut, ou individuellement. Un inventaire de tous les états de paie présents dans l’application a été effectué afin d’évaluer le coût pour tous les centraliser dans cette page. Une prévisualisation de l’état sélectionné est affichée, et se met à jour en temps réel en fonction du filtrage sélectionné par l’utilisateur. Enfin, l’utilisateur peut voir une liste de tous les états à gauche. Il peut en sélectionner un seul ou plusieurs en même temps. Ils peuvent appliquer le filtrage à ces états, naviguer entre eux via des onglets, avoir une vue côte à côte pour comparer facilement les données, et les exporter dans plusieurs formats. Par la suite, j’ai transformé notre vision en un prototype haute fidélité pour le faire tester à des utilisateurs.</p>
//         </div>
//         <img class="banner" src="images/etats-de-paie/etat+de+paie+filter.png" alt="États de paie - filtres">
//         <div class="contentProjetDetail">
//             <h2>Tests utilisateurs</h2>
//             <p>Ensuite, j’ai organisé une session de tests utilisateurs. La dizaine d’utilisateurs recrutés avait répondu au sondage lancé il y a quelques mois. Les tests utilisateurs avaient 2 objectifs :</p>
//             <ul>
//                 <li>Évaluer si le prototype répond aux attentes des utilisateurs concernant la gestion et génération des états de paie.</li>
//                 <li>Détecter de nouveaux besoins d’états de paie et de personnalisation de ces états.</li>
//             </ul>
//             <p>Il s’agissait de session individuelle à distance d’environ 1 heure, en utilisant la plateforme Microsoft Teams. La consigne de départ était la suivante :</p>
//             <p><i>”Vous souhaitez imprimer un livre de paie et un état des charges à payer. Utiliser ce prototype pour les obtenir.”</i></p>
//             <p>La perception du prototype et son utilisabilité étaient testées. Plusieurs questions ouvertes étaient posées à la fin de l’entretien afin d’explorer les besoins des utilisateurs liés au second objectif de la session de tests.</p>
//             <p>Les tests utilisateurs ont apporté plusieurs enseignements :</p>
//             <p>Certains points ont été confirmés par les tests. Les utilisateurs plébiscitent la centralisation de tous les états dans un seul endroit dans l’application. Ils apprécient également la plus grande personnalisation offerte par les filtres, mais ils veulent quelque chose de simple à comprendre et à utiliser. Ils apprécient également la prévisualisation des données.</p>
//             <p>Cependant, la grande majorité des utilisateurs ont affirmé n’avoir besoin que du format PDF pour leurs états. D’autres se sont plaints du manque de cohérence entre les données visualisées dans l’application et le rendu de ceci dans Excel, rendant ce format quasiment inutilisable pour eux. De plus, deux profils utilisateurs ont également émergé. Ceux qui travaillent dans une agence et gérant de nombreux dossiers. Et ceux qui travaillent directement en entreprise. Leurs besoins de personnalisation et d’automatisation sont bien différents.</p>
//             <div class="lien">
//                 <img class="lienImage" src="images/icons8-pdf-48.png" alt="PDF Logo">
//                 <a href="https://drive.google.com/file/d/1XYoLmY0jDYmrQJloUOWEOr-Xc07NrUlz/view?usp=sharing" target="_blank">Le rapport des tests utilisateurs</a>
//             </div>
//             <div class="lien">
//                 <img class="lienImage" src="images/icons8-figma-48.png" alt="Figma Logo">
//                 <a href="https://www.figma.com/proto/xS7DJxGo0xdCZsPRwH6Hp8/Guillaume-Savary-stuff?page-id=649%3A4&type=design&node-id=649-12425&viewport=9616%2C3286%2C0.83&t=QtXd7ZDhJcjItDFG-1&scaling=min-zoom&starting-point-node-id=649%3A12425&show-proto-sidebar=1&mode=design" target="_blank">Le prototype final</a>
//             </div>
//         </div>
//         <img class="banner" src="/images/etats-de-paie/etat+de+paie+banner.png" alt="États de paie - comparer deux documents">
//         <div class="contentProjetDetail">
//             <h2>Fin du projet</h2>
//             <p>Le projet s’est terminé par une nouvelle itération du prototype suite à cette session de tests utilisateurs et sa présentation au product manager du produit.</p>
//             <h2>Ce que j’ai appris</h2>
//             <p>Avec ce projet, j’ai eu l’occasion de travailler dans une grande autonomie avec l’équipe produit. Ce projet m’a également permis de montrer la valeur de la démarche UX à une autre équipe produit avec qui nous avions peu travaillé. Enfin, j’ai travaillé en parallèle avec nos équipes UX et Design system pour travailler sur un nouveau composant de sélection de dates, qui a été intégré à ce projet (voir visuel des filtres et le prototype final).</p>
//         </div>`
//     ),
//     new Projet(
//         "1",
//         "aide-en-ligne-in-product",
//         "Aide en ligne in-Product",
//         "Sage",
//         ["UX/UI Design"],
//         "2020-2022",
//         "Création d’un nouveau parcours d’assistance innovant pour les nouveaux produits Sage Business Cloud.",
//         "https://www.figma.com/proto/xS7DJxGo0xdCZsPRwH6Hp8/Guillaume-Savary-stuff?page-id=649%3A4&type=design&node-id=649-10153&viewport=8319%2C7300%2C0.61&t=ghxaWRW0nlkjWkF9-1&scaling=min-zoom&starting-point-node-id=649%3A10153&show-proto-sidebar=1&mode=design",
//         '/images/aide-in-product/get+help+banner.png',
//         `<div class="contentProjetDetail">
//         <h2>Résumé du projet</h2>
//         <p>Historiquement, les produits Sage sont des produits Desktop et l’aide en ligne est sur un site web à part. Mais le nouveau produit <a href="https://fr.wikipedia.org/wiki/Software_as_a_service" target="_blank">SaaS (Software as a service)</a> sera sur un site web. La conception de ce nouveau produit est l’occasion de refonder l’expérience d’aide en ligne afin d’améliorer son efficacité et sa fluidité pour les utilisateurs.</p>
//         <h2>Quel était le problème ?</h2>
//         <p>L’aide en ligne et la documentation sont déportées du produit sur plusieurs sites web différents. Il existe plusieurs parcours utilisateur pour chercher de l’aide. Enfin, avec le nouveau produit Sage Business Cloud, il existe de nouvelles possibilités de proposer de l’aide à l’utilisateur de manière plus proactive qu’un produit Desktop.</p>
//         <h2>Quelle est la solution retenue ?</h2>
//         <p>Après différents ateliers sur plusieurs mois, une gouvernance regroupant des personnes issues de différents services de Sage France a été créée. Il a permis de challenger les pratiques et de créer une expérience utilisateur commune pour aller chercher de l’aide sur les différents produits de Sage. De plus, un pattern d’aide en ligne in-Product a été créé et proposé à l’équipe design system de Sage.</p>
//         <h2>Quel était mon rôle dans l’équipe ?</h2>
//         <ul>
//             <li>1 UX Designer (moi)</li>
//             <li>1 UX Researcher</li>
//             <li>1 Responsable rédactionnel</li>
//             <li>1 Chef de projet Formation</li>
//             <li>1 Chef de projet Customer service</li>
//             <li>1 Product Manager</li>
//         </ul>
//         <h2>L’atelier à Paris</h2>
//         <p>Un atelier a été organisé au siège social de Sage France afin de travailler sur l’amélioration de 3 parcours utilisateur:</p>
//         <p>Que dois-je faire quand je commence à utiliser le produit ? Que faire si j’ai besoin d’aide ? Comment je prends connaissance et appréhende les évolutions du produit ?</p>
//         <p>L’atelier a duré 3 jours durant lesquels nous avons traité ces trois sujets lors de sessions de brainstorming, de maquettage et de conception d’user flows.</p>
//         <p>À la fin de l’atelier, un consensus a déterminé que le sujet à traiter en priorité, afin d’apporter le plus de valeur ajoutée aux utilisateurs, était le sujet de l’aide en ligne. C’est celui que je vais continuer de traiter dans ce cas d’étude.</p>
//     </div>
//     <div class="grid">
//         <img class="banner" src="/images/aide-in-product/get+help+whiteboard.png" alt="Aide en ligne - whiteboard">
//         <img class="banner" src="/images/aide-in-product/get+help+workshop.png" alt="États de paie - workshop">
//     </div>
//     <div class="contentProjetDetail">
//         <h2>La création du parcours de l’aide en ligne in-Product</h2>
//         <p>L’atelier à Paris a permis de déterminer un ensemble de principes que devra répondre la nouvelle expérience d’assistance de l’utilisateur :</p>
//         <ul>
//             <li>Centraliser les différents outils d’aide à un seul endroit (documentations, contacts, tutoriels, informations).</li>
//             <li>Avoir un parcours simple, fluide et accessible à tout moment dans l’application.</li>
//             <li>Suggérer des articles et des informations en fonction du parcours et des actions de l’utilisateur.</li>
//         </ul>
//         <p>Pour cela, on propose dans l’en-tête de l’application un bouton “Besoin d’aide ?”, accessible à tout moment. Il ouvre un panneau latéral se superposant à son application. Il peut retrouver des articles et des informations pré-filtrés en fonction de son contexte d’utilisation immédiat. Il peut aussi lancer un chat avec un conseiller via notre outil intégré ou envoyer un ticket et suivre sa demande. Enfin, il peut retrouver des tutoriels lui expliquant comment fonctionne une fonctionnalité ou lui présentant une évolution issue d’une précédente mise à jour.</p>
//         <div class="lien">
//             <img class="lienImage" src="/images/icons8-figma-48.png" alt="Figma Logo">
//             <a href="https://www.figma.com/proto/xS7DJxGo0xdCZsPRwH6Hp8/Guillaume-Savary-stuff?page-id=649%3A4&type=design&node-id=649-10153&viewport=8319%2C7300%2C0.61&t=ghxaWRW0nlkjWkF9-1&scaling=min-zoom&starting-point-node-id=649%3A10153&show-proto-sidebar=1&mode=design" target="_blank">Le prototype final</a>
//         </div>
//     </div>
//     <img class="banner" src="/images/aide-in-product/get+help+banner.png" alt="Aide en ligne - interfaces">
//     <div class="contentProjetDetail">
//         <h2>Fin du projet</h2>
//         <p>Le projet a été implémenté au sein des produits Sage Business Cloud Comptabilité et Paie français et sud-africains. Il a également été proposé à l’équipe design system de Sage. La gouvernance continue à géré l’expérience utilisateur liée aux parcours utilisateur transversaux au portfolio produits de Sage.</p>
//         <h2>Ce que j’ai appris</h2>
//         <p>Ce projet m’a permis de travailler sur un sujet bien plus transversal. J’ai pu travailler avec de nombreux services et acquérir le rôle d’interlocuteur privilégié sur l’expérience utilisateur concernant le sujet de l’aide en ligne. De nombreux ateliers d’idéation et de gouvernance ont été réalisés afin de transformer des méthodes et des outils utilisés depuis des années chez Sage.</p>
//     </div>`         
//     ),
//     new Projet(
//         "2",
//         "module-bancaire",
//         "Module bancaire",
//         "Sage",
//         ["UX/UI Design"],
//         "2020-2021",
//         "Création d’un nouveau module de gestion automatisée des transactions bancaires pour Sage Business Cloud Comptabilité.",
//         "https://www.figma.com/proto/TAErtxl5EX0xDfmArwrvre/Exp%C3%A9rience-bancaire?page-id=0%3A1&type=design&node-id=201-4869&viewport=351%2C548%2C0.07&t=uPesJckghSDW3NZO-1&scaling=min-zoom&starting-point-node-id=201%3A4869&mode=design",
//         '/images/module-bancaire/module+bancaire+banner.png',
//         `<div class="contentProjetDetail">
//         <h2>Résumé du projet</h2>
//         <p>Grâce aux nouvelles possibilités offertes par les produits sur le web, les products managers de Sage Business Cloud Comptabilité ont décidé d’améliorer les expériences de plusieurs fonctions clé. Une d’elles est l’expérience de traitement des écritures issues des relevés bancaires.</p>
//         <p>Pendant plusieurs mois, nous avons travaillé à la conception et au déploiement d’une fonctionnalité innovante afin d’automatiser la récupération, le traitement et l’enregistrement d’écritures comptables dans le journal de trésorerie.</p>
//         <h2>Quel était le problème ?</h2>
//         <p>Les utilisateurs de Sage sont plutôt frileux concernant l’automatisation du traitement de leurs tâches. Il y a plusieurs essais sur différentes tâches, mais cela n’a jamais convaincu les utilisateurs. Il nous fallait créer un parcours fluide, sécurisé, et réversible concernant les actions effectuées par les systèmes d’automatisation. Cette nouvelle fonctionnalité sera un des piliers du tout nouveau produit de comptabilité SaaS de la société.</p>
//         <p>Enfin, Sage devait travailler un acteur tiers pour récupérer les données bancaires, ce qui en fait un sujet de sécurité sensible pour les utilisateurs.</p>
//         <h2>Quelle est la solution retenue ?</h2>
//         <p>La solution est découpée en plusieurs parties. Lors de l’onBoarding, l’utilisateur est accueilli par une FAQ lui expliquant la valeur de la fonctionnalité et on le rassure quant à la sécurité de ses données et la réversibilité de ces actions. Pour des raisons techniques, une partie de la connexion est complètement déportée chez notre partenaire Bankin’. Plusieurs sessions de tests utilisateurs et de retour sur notre site de feedback user ont permis de constamment détecter les problèmes de compréhension et les solutionner avec des mises à jour.</p>
//         <p>La solution est sortie en même temps que le nouveau produit SaaS Sage Business Cloud Comptabilité</p>
//         <h2>Quel était mon rôle dans l’équipe ?</h2>
//         <ul>
//             <li>1 UX Designer (moi)</li>
//             <li>1 UX Researcher</li>
//             <li>1 Business Analyst</li>
//             <li>1 Product Owner</li>
//             <li>1 Product Manager</li>
//         </ul>
//         <h2>Première itération</h2>
//         <p>La collaboration entre le business analyst, l’UX researcher et moi-même a permis de créer un premier parcours. Il a fallu déterminer le cadre du MVP (Minimum Viable Product) pour ne pas dépasser la deadline décidée. Ce parcours a été testé, mais il n’a pas convaincu les utilisateurs. Les utilisateurs ne comprenaient pas la page de traitement des opérations bancaires. Ils ne comprenaient ni ce qu’ils voyaient, ni ce qu’ils devaient faire.</p>
//         <p>Ces entretiens utilisateurs sont une belle démonstration qu’il faut toujours tester nos designs avant de se lancer le développement. Il est toujours moins cher de corriger un prototype qu’un produit fini.</p>
//     </div>
//     <div class="grid">
//         <img class="banner" src="/images/module-bancaire/module+bancaire+onboarding.png" alt="Module bancaire - OnBoarding">
//     </div>
//     <div class="contentProjetDetail">
//         <h2>Deuxième itération</h2>
//         <p>Suite à ces tests, nous avons corrigé notre copie avec les retours des utilisateurs. Une seconde version du prototype a été conçue. Une seconde session de tests utilisateurs a été organisée et les résultats étaient bien supérieurs au premier. Les problèmes ont été en bonne partie comblés.</p>
//         <p>Après finalisation du prototype, le projet a été transmis aux développeurs et le module était présent lors de la sortie du produit Sage Business Cloud Comptabilité.</p>
//         <h2>Version 2 et refonte de l’interface</h2>
//         <p>Quelques mois après la sortie du produit, le PM a souhaité développer une partie des fonctionnalités non implémentées dans le MVP. Nous avons également pris en compte les retours des utilisateurs envoyés sur notre site de suggestion d’améliorations. Enfin, une harmonisation de l’interface du module bancaire a été décidée pour garder une cohérence avec les autres pages de l’application. De nombreuses modifications d’interface ont été faites depuis la sortie du produit.</p>
//         <p>Le prototype a été mis à jour et il a été envoyé à l’équipe de développement.</p>
//         <div class="lien">
//             <img class="lienImage" src="images/icons8-figma-48.png" alt="Figma Logo">
//             <a href="https://www.figma.com/proto/TAErtxl5EX0xDfmArwrvre/Exp%C3%A9rience-bancaire?page-id=0%3A1&type=design&node-id=201-4869&viewport=351%2C548%2C0.07&t=uPesJckghSDW3NZO-1&scaling=min-zoom&starting-point-node-id=201%3A4869&mode=design" target="_blank">Le prototype final</a>
//         </div>
//     </div>
//     <img class="banner" src="/images/module-bancaire/module+bancaire+homepage.png" alt="Aide en ligne - HomePage">
//     <div class="contentProjetDetail">
//         <h2>Fin du projet</h2>
//         <p>Ma collaboration sur ce projet s’est achevée peu avant mon départ de Sage. J’ai terminé de finaliser le prototype de la refonte de l’interface pour la version 2.</p>
//         <h2>Ce que j’ai appris</h2>
//         <p>Ce projet m’a permis de concevoir et de suivre l’évolution d’une fonctionnalité sur plusieurs années, de sa genèse à sa livraison. De plus, les nombreuses contraintes techniques du projet nous ont obligés à réfléchir et à adapter nos parcours et nos interfaces afin de convaincre les utilisateurs de la proposition de valeur de ce module bancaire.</p>
//         <p>Enfin, ce projet était l’occasion de convaincre des bienfaits de la démarche UX à des collaborateurs qui n’avaient jamais travaillé dans ces conditions.</p>
//     </div>
//     <img class="banner" src="/images/module-bancaire/module+bancaire+ope+bancaire.png" alt="Aide en ligne - Traitement des opérations bancaires">`
//     ),
//     new Projet(
//         "3",
//         "defi-famille-zero-dechet",
//         "Défi Famille Zéro Déchet",
//         "Eiko",
//         ["UX/UI Design"],
//         "2023",
//         "Création d’une application, en partenariat avec la ville de Meudon, pour aider des familles à réduire leur consommation de déchet.",
//         "https://www.figma.com/proto/xS7DJxGo0xdCZsPRwH6Hp8/Guillaume-Savary-stuff?page-id=649%3A4&type=design&node-id=663-59677&viewport=7538%2C-13588%2C0.48&t=4qfAGq9C276B67kf-1&scaling=min-zoom&starting-point-node-id=663%3A59677&show-proto-sidebar=1&mode=design",
//         '/images/defi-famille-zero-dechet/Eiko+banner.png',
//         `<div class="contentProjetDetail">
//             <h2>Résumé du projet</h2>
//             <p>Eiko est une association ayant pour but de développer des outils numériques innovants pour encourager une démocratie active et une participation citoyenne engagée. Elle met en avant les initiatives locales et en valorisant chaque engagement individuel, nous visons à transformer les petits pas en grandes avancées pour notre planète.</p>
//             <p>Eiko s’est associée avec la ville de Meudon (92) pour lancer une application pour renforcer la conscience écologique et encourager les pratiques durables : le “Défi Famille Zéro Déchet”. Cette collaboration incite les familles de Meudon à réduire de manière significative leurs déchets ménagers.</p>
//             <h2>Quel était le problème ?</h2>
//             <p>Meudon a lancé son initiative il y a deux ans. Elle demande aux familles de peser les déchets qu’elles produisent et de renvoyer les données par email. C’est chronophage pour la mairie et peu pratique pour les participants.</p>
//             <h2>Quelle est la solution retenue ?</h2>
//             <p>Dans un premier temps, le périmètre d’un MVP est décidé. L’objectif est de créer une application permettant aux participants du défi :</p>
//             <ul>
//                 <li>Enregistrer les pesées selon le type de déchet</li>
//                 <li>Suivre l’évolution de la production de déchets par mois</li>
//                 <li>Consulter l’historique de saisie</li>
//             </ul>
//             <p>Les objectifs pour la ville de Meudon sont de supprimer l’envoi des pesées par email et créer une base de données. Pour Eiko, le but est de créer une application qu’elle pourra proposer à d’autres collectivités.</p>
//             <h2>Quel était mon rôle dans l’équipe ?</h2>
//             <ul>
//                 <li>5 UX Designer (dont moi)</li>
//                 <li>3 Développeurs</li>
//                 <li>Le président de l’association</li>
//                 <li>1 Scrum master</li>
//                 <li>2 testeurs</li>
//             </ul>
//             <h2>UX Research</h2>
//             <p>Les UX Designers sont arrivés chez Eiko très récemment. Afin de mieux comprendre le contexte du projet et les futurs utilisateurs de l’application, nous avons mené des entretiens utilisateurs afin de construire le persona de l’utilisateur de l’application.</p>
//             <h3>Recrutement</h3>
//             <p>Nous avons demandé à 5 familles participant au programme de nous accorder un entretien de 30 minutes à 1 heure.</p>
//             <h3>Les entretiens</h3>
//             <p>Nous avons créé un guide d’entretien nous permettant de répondre à la question suivante :</p>
//             <p><i>Nous cherchons à répertorier les différents profils de familles sensibles à l’écologie participant, par le passé ou à présent, au programme "Défis Famille Zéro Déchet" de la ville de Meudon. Le but est de créer les personas de la future application Eiko permettant aux participants du programme de les soutenir dans leur démarche.</i></p>
//             <p>Nous avons posé des questions autour des thématiques suivantes :</p>
//             <ul>
//                 <li>Questions sociologiques</li>
//                 <li>Questions sur les habitudes de la gestion des déchets
//                     <ul>
//                         <li>Le programme "Défis Famille Zéro Déchet"</li>
//                         <li>Expérience de la pesée des déchets</li>
//                     </ul>
//                 </li>
//                 <li>Questions sur les besoins de la future application Eiko</li>
//             </ul>
//             <p>Les 5 entretiens se sont passés à distance avec la personne ou le couple interrogés, avec un animateur, un secrétaire et parfois un observateur passif.</p>
//             <h3>Persona</h3>
//             <p>Les informations récoltées étaient très homogènes d’un entretien à l’autre. Nous avons créé un seul persona de l’utilisateur. Ce persona nous servira à construire les expériences de la future application.</p>
//             <img class="banner" src="/images/defi-famille-zero-dechet/eiko+persona.jpg" alt="Persona Eiko">
//             <h2>Prototype</h2>
//             <p>Le prototype a été développé avec Figma. Différents user stories ont été incluses pour ce MVP :</p>
//             <ul>
//                 <li>Création de compte, connexion et récupération de mot de passe,</li>
//                 <li>OnBoarding, avec enregistrement du nom de la famille,</li>
//                 <li>Comparer notre production de déchet en fonction des mois précédents,</li>
//                 <li>Consulter l’historique des saisies des pesées de déchet,</li>
//                 <li>Ajouter une pesée en sélectionnant le poids, la date et le type de déchet,</li>
//                 <li>Modifier et supprimer une saisie,</li>
//                 <li>Consulter une page paramètre pour modifier le nom de la famille, changer le mot de passe, consulter les informations légales et supprimer son compte.</li>
//             </ul>
//             <div class="lien">
//                 <img class="lienImage" src="images/icons8-figma-48.png" alt="Figma Logo">
//                 <a href="https://www.figma.com/proto/xS7DJxGo0xdCZsPRwH6Hp8/Guillaume-Savary-stuff?page-id=649%3A4&type=design&node-id=663-59677&viewport=7538%2C-13588%2C0.48&t=4qfAGq9C276B67kf-1&scaling=min-zoom&starting-point-node-id=663%3A59677&show-proto-sidebar=1&mode=design" target="_blank">Le prototype final</a>
//             </div>
//             <p>Le prototype Figma a ensuite été transmis aux développeurs. L’application est développé avec React, comme une Single Page Application.</p>
//             <h2>Atelier de sensibilisation</h2>
//             <p>3 mois après la début du projet, les développeurs ont réussi à développer le MVP de l’application. En amont, un atelier de sensibilisation a été organisé par Eiko et la ville de Meudon. Le but est de  faire participer les familles au développement de l’application, en leur permettant de suggérer des propositions nouvelles grâce à un atelier d’idéation et de leur faire tester le MVP de l’application. Divers opportunités ont pu être détecter lors de cette atelier.</p>
//             <p>L’atelier a duré 2 heures et il a été organisé en 3 parties :</p>
//             <ul>
//                 <li>Un atelier de sensibilisation ludique autour de la thématique du zéro déchet</li>
//                 <li>Une session de tests utilisateurs du MVP et de l’application</li>
//                 <li>Un tri de carte en focus group pour identifier des améliorations pour l’application et mieux comprendre les participants au programme.</li>
//             </ul>
//             <h3>Opportunités pour Eiko</h3>
//             <ul>
//                 <li>Idées en vrac
//                     <ul>
//                         <li>Mutualiser des courses en vrac avec des personnes → Pouvoir voir ses voisins qui utilisent l’app Eiko</li>
//                         <li>Proposer de faire un bilan carbone</li>
//                         <li>Proposer une adaptation de la gestion de ses déchets en vacances / travail / autre lieu</li>
//                     </ul>
//                 </li>
//                 <li>Ajouter des déchets sur l’app
//                     <ul>
//                         <li>Avoir une pop up pour ajouter un déchet + pop in de validation</li>
//                         <li>Avoir une IA qui prend en photo son sac pour en connaitre le volume</li>
//                         <li>Rentrer la marque et contenant de son sac</li>
//                     </ul>
//                 </li>
//                 <li>Défis sur l’app
//                     <ul>
//                         <li>Avoir des défis perso (vs comparaison / compétition)</li>
//                         <li>Avoir des astuces concrètes sous les défis mêmes (vs sur un forum) par d’autres utilisateurs (vs Eiko)</li>
//                     </ul>
//                 </li>
//             </ul>
//             <h3>Photos de l’atelier</h3>
//         </div>
//         <div class="grid">
//             <img class="banner" src="/images/defi-famille-zero-dechet/eiko+atelier+1.jpg" alt="Atelier de sensibilisation - photo 1">
//             <img class="banner" src="/images/defi-famille-zero-dechet/eiko+atelier+2.jpg" alt="Atelier de sensibilisation - photo 2">
//             <img class="banner" src="/images/defi-famille-zero-dechet/eiko+atelier+3.jpg" alt="Atelier de sensibilisation - photo 3">
//             <img class="banner" src="/images/defi-famille-zero-dechet/eiko+atelier+4.jpg" alt="Atelier de sensibilisation - photo 4">
//         </div>
//         <div class="contentProjetDetail">
//             <h2>Prochaines fonctionnalités</h2>
//             <h3>Cartographie</h3>
//             <p>En repartant d’un ancien projet développé par Eiko, nous souhaitons développer une cartographie des lieux d’intérêt pour aider les familles dans la réalisation du programme.</p>
//             <p>Cette fonctionnalité permettra de mettre en avant des magasins faisant du vrac et de l’anti-gaspi, des lieux d’intérêt comme des composteurs ou des déchéteries, ou encore des évènements organisés par la ville autour de la thématique du Zéro déchets. Les utilisateurs pourront consulter ces éléments sous forme de listes ou sous forme d’une carte intéractive inspirée par Google Map.</p>
//             <p>Le projet est en cours de conception.</p>
//             <h3>Ludification</h3>
//             <p>Durant la recherche utilisateurs, nous avons détecté que certains utilisateurs étaient demandeurs de fonctionnalités sociales et ludiques.</p>
//             <p>Nous allons lancer un projet pour ludifier l’application. Pour cela, nous allons nous entourer d’experts en ludification afin de construire un système permettant de :</p>
//             <ul>
//                 <li>Motiver l’adoption de nouveaux comportements vertueux,</li>
//                 <li>Augmenter la participation et l’engagement</li>
//                 <li>Atténuer l’abandon d’apprentissage</li>
//                 <li>Augmenter la rétention des utilisateurs et assurer leur fidélité sur le long terme grâce aux récompenses</li>
//             </ul>
//             <p>Le projet est en cours de conception.</p>
//         </div>`
//     )
// ];

// getProjets(): Projet[] {
//     return [...this.projets];
// }

// getProjetById(projetUrl: string): Projet {
//     const foundProjet = this.projets.find(projet => projet.urlProjet === projetUrl);
//     if (!foundProjet) {
//         throw new Error('Projet not found !');
//     }
//     return foundProjet;
// }