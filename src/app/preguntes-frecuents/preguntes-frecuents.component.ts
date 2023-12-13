import { Component } from '@angular/core';
import {NavComponent} from "../nav/nav.component";
import {FooterComponent} from "../footer/footer.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-preguntes-frecuents',
  standalone: true,
  imports: [
    NavComponent,
    FooterComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './preguntes-frecuents.component.html',
  styleUrl: './preguntes-frecuents.component.css'
})
export class PreguntesFrecuentsComponent {

}
