import { Component } from '@angular/core';
import { ErastoteneService } from '../../services/erastotene.service';
import { CommonModule } from '@angular/common';
import { ErastoteneCellaComponent } from '../erastotene-cella/erastotene-cella.component';

@Component({
  selector: 'app-erastotene',
  standalone: true,
  imports: [CommonModule,ErastoteneCellaComponent],
  templateUrl: './erastotene.component.html',
  styleUrl: './erastotene.component.css'
})
export class ErastoteneComponent {

  numeri : (number | boolean)[] = [];
  n = 123;

  constructor(private service: ErastoteneService)
  {
    //this.numeri = service.calcola(this.n);
    service.calcolaRemoto(this.n).subscribe(r => this.numeri = r.map(e => e.primo ? e.numero : false))
  }

  click(i:number)
  {
    console.log( `Il numero ${i} è ${this.numeri[i]==false ? 'non primo' : 'primo'}` )
  }
}
