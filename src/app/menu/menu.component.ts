import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {NavComponent} from "../nav/nav.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    FooterComponent,
    NavComponent,
    RouterOutlet
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
