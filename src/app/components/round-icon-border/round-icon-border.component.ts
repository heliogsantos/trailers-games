import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-round-icon-border',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './round-icon-border.component.html',
  styleUrl: './round-icon-border.component.scss'
})
export class RoundIconBorderComponent {
  @Input() width = 30;
  @Input() height = 30;
  @Input() alt?: string;
  @Input() icon?: string;
}
