import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CursorAuraComponent } from './components/cursor-aura/cursor-aura.component';
import { ProjetsService } from './projets/services/projets.service';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CursorAuraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio-GS';
  pages: any[] = []; // Liste des pages récupérés

  constructor (private projetsService: ProjetsService) {}

  ngOnInit(): void {
      this.projetsService.getDatabasesPages(environment.databaseId).subscribe({
        next: (data) => {
          this.pages = data.results; // Les blocs sont dans la propriété `results`
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des blocs:', err);
        },
      });
      console.log('Voici les données des pages de la database ' + this.pages);
  }
}
