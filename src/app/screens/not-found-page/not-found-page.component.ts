import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from "./components/button/button.component";

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.css',
  encapsulation:ViewEncapsulation.None
})
export class NotFoundPageComponent {

  status_code : number = 404;
  status_description : string = "This page could not be found.";
  button_name : string = "Return to Home Page";

}
