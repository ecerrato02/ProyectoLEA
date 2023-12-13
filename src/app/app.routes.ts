import { Routes } from '@angular/router';
import {CondicionesComponent } from "./condiciones/condiciones.component";
import {MenuComponent} from "./menu/menu.component";
import {PreguntesFrecuentsComponent} from "./preguntes-frecuents/preguntes-frecuents.component";
export const routes: Routes = [
  {path: 'condiciones', component:CondicionesComponent},
  {path: '', component:MenuComponent},
  {path: 'faq', component:PreguntesFrecuentsComponent}



];
