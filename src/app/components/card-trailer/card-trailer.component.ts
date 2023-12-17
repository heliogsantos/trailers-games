import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-trailer',
  standalone: true,
  imports: [],
  templateUrl: './card-trailer.component.html',
  styleUrl: './card-trailer.component.scss'
})
export class CardTrailerComponent {
  @Input() image = '';
}
