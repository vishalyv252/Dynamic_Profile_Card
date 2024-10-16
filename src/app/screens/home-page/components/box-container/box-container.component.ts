import { Component, ViewEncapsulation } from '@angular/core';
import { ProfileAvatarComponent } from "../profile-avatar/profile-avatar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-box-container',
  standalone: true,
  imports: [ProfileAvatarComponent, CommonModule],
  templateUrl: './box-container.component.html',
  styleUrl: './box-container.component.css',
  encapsulation:ViewEncapsulation.None
})
export class BoxContainerComponent {
  image_component = "images/image-victor.jpg"

  first_name : string = "Victor";
  last_name : string = "Crest";
  full_name = this.first_name+" "+this.last_name;

  age : number = 26;

  location : string = "London";

  summary = [
    {
      count: "80K",
      title: "Followers"
    },
    {
      count: "803K",
      title: "Likes"
    },
    {
      count: "1.4K",
      title: "Photos"
    },
  ]
}
