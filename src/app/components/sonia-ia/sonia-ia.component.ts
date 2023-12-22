import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sonia-ia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sonia-ia.component.html',
  styleUrl: './sonia-ia.component.scss'
})
export class SoniaIaComponent implements OnInit {
  dialog = true;

  closeDialog = () => this.dialog = false;

  toggleDialog = () => {
    setTimeout(() => {
      this.dialog = false;
    }, 8000);
  }

  ngOnInit() {
    this.toggleDialog();
  }
}
