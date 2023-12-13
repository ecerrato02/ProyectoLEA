import { Routes } from '@angular/router';
import {CondicionesComponent } from "./condiciones/condiciones.component";
import {MenuComponent} from "./menu/menu.component";
export const routes: Routes = [
  {path: 'condiciones', component:CondicionesComponent},
  {path: '', component:MenuComponent},


];
