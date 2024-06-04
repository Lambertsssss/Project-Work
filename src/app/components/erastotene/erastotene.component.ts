import { Component } from '@angular/core';
import { ErastoteneService } from '../../services/erastotene.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-erastotene',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './erastotene.component.html',
  styleUrl: './erastotene.component.css'
})
export class ErastoteneComponent {

  numeri : (number | boolean)[] = [];

  constructor(private service: ErastoteneService)
  {
    this.numeri = service.calcola(123);
  }
}
