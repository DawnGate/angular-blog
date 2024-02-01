import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AVATAR_ORIGIN } from '../../constants';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.scss'
})
export class AuthorsComponent {
  avatarOrigin = AVATAR_ORIGIN

  @Input() showName = true;

  @Input() authors: {real: string, vercel: string}[] = []

  @Input() date = (new Date()).toUTCString()

  getNames = () => {
    this.authors.map(item => item.real).join(", ")
  }

}
