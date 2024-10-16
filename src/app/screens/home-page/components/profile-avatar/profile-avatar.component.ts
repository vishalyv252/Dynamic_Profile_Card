import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile-avatar',
  standalone: true,
  imports: [],
  templateUrl: './profile-avatar.component.html',
  styleUrl: './profile-avatar.component.css',
  encapsulation:ViewEncapsulation.None
})
export class ProfileAvatarComponent {
  @Input() image_path: string | undefined;
}
