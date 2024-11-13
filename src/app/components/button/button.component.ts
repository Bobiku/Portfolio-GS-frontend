import { Router } from '@angular/router';
import { Component, inject, input, InputSignal, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  textLabel: InputSignal<String> = input.required();
  link: InputSignal<String> = input.required();

  private router = inject(Router);
  
  Navigate(link: String) {
    this.router.navigateByUrl('/' + link);
  }

}
