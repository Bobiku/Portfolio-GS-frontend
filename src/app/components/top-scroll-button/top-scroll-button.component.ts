import { Component, Inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { DOCUMENT, CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-scroll-button',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './top-scroll-button.component.html',
  styleUrl: './top-scroll-button.component.scss'
})
export class TopScrollButtonComponent extends ButtonComponent{

  constructor(
    @Inject(DOCUMENT) protected override document: Document,
    protected override router: Router
  ) {
    super(document, router);
  }

  getRouterLink() {
    throw new Error('Method not implemented.');
    }

}
