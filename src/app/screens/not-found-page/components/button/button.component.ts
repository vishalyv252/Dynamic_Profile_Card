import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  encapsulation:ViewEncapsulation.None
})
export class ButtonComponent {
  @Input() route_button : string | undefined;
}
