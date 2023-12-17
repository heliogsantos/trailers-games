import { Component } from '@angular/core';

import { CardTrailerComponent } from '../../components/card-trailer/card-trailer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardTrailerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
