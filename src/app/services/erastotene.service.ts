import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErastoteneService {

  constructor() { }

  calcola(n:number) : (number | boolean)[]
  {
    let numeri = [];
    for(let i=0; i<=n; i++) numeri.push(i);
    numeri[0]=false;
    numeri[1]=false;

    for(let i=2; i*i<=n; i++)
    {
        if( numeri[i]!=false )
        {
            for(let j=i*2; j<=n; j+=i)
            {
                if( numeri[j]!=false) numeri[j]=false;    
            }
        }
    }

    return numeri;
  }
}
