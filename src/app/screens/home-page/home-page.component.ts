import { Component, ViewEncapsulation } from '@angular/core';
import { BoxContainerComponent } from "./components/box-container/box-container.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BoxContainerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  encapsulation:ViewEncapsulation.None
})
export class HomePageComponent {}
