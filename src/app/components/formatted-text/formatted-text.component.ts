import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formatted-text',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container [ngSwitch]="true">
      <strong *ngSwitchCase="segment?.annotations?.bold">{{ segment?.plain_text }}</strong>
      <em *ngSwitchCase="segment?.annotations?.italic">{{ segment?.plain_text }}</em>
      <u *ngSwitchCase="segment?.annotations?.underline">{{ segment?.plain_text }}</u>
      <s *ngSwitchCase="segment?.annotations?.strikethrough">{{ segment?.plain_text }}</s>
      <span *ngSwitchDefault>{{ segment?.plain_text }}</span>
    </ng-container>
  `
})
export class FormattedTextComponent {
  @Input() segment: any;
}