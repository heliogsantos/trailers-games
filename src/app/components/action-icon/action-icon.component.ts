import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-icon',
  standalone: true,
  imports: [],
  templateUrl: './action-icon.component.html',
  styleUrl: './action-icon.component.scss'
})
export class ActionIconComponent {
  @Input() router?: string;
}
