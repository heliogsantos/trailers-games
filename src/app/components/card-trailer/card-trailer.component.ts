import { Component, Input } from '@angular/core';

import { RoundIconBorderComponent } from '../round-icon-border/round-icon-border.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-trailer',
  standalone: true,
  imports: [
    RoundIconBorderComponent,
    CommonModule
  ],
  templateUrl: './card-trailer.component.html',
  styleUrl: './card-trailer.component.scss'
})
export class CardTrailerComponent {
  @Input() image?: string;
}
