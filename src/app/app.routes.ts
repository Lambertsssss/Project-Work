import { Routes } from '@angular/router';
import { ErastoteneComponent } from './components/erastotene/erastotene.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    { path:'', component:HomeComponent },
    { path:'erastotene', component:ErastoteneComponent },
    { path:'**', component:NotfoundComponent }
];
