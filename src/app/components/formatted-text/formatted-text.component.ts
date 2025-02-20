import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formatted-text',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="segment">
      <a *ngIf="segment.href" [href]="segment.href" target="_blank">
        <span [ngStyle]="getStyles()">{{ segment.plain_text }}</span>
      </a>
      <span *ngIf="!segment.href" [ngStyle]="getStyles()">{{ segment.plain_text }}</span>
    </ng-container>
  `
})
export class FormattedTextComponent {
  @Input() segment: any;
  @Input() blockType: string = '';

  get shouldApplyStyles(): boolean {
    return this.blockType === 'paragraph' || 
           this.blockType === 'bulleted_list_item' ||
           this.blockType === 'numbered_list_item';
  }

  getStyles() {
    if (!this.segment?.annotations || !this.shouldApplyStyles) return {};

    return {
      'font-weight': this.segment.annotations.bold ? 'bold' : 'normal',
      'font-style': this.segment.annotations.italic ? 'italic' : 'normal',
      'text-decoration': this.getTextDecoration(),
      'color': this.segment.annotations.color !== 'default' ? this.segment.annotations.color : 'inherit'
    };
  }

  private getTextDecoration(): string {
    const decorations: string[] = [];
    if (this.segment.annotations.underline) decorations.push('underline');
    if (this.segment.annotations.strikethrough) decorations.push('line-through');
    return decorations.join(' ');
  }
}