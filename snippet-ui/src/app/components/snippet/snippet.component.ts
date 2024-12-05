import { Component, Input } from '@angular/core';
import { Snippet } from '../../snippet';
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-snippet',
  imports: [FontAwesomeModule],
  templateUrl: './snippet.component.html',
  styleUrl: './snippet.component.css'
})
export class SnippetComponent {
  @Input() snippet : Snippet
  faTimes = faTimes

  constructor() {
    this.snippet = {
      id: 0,
      user: "default",
      name: "test",
      day: "test",
      audio: "test",
    }
  }
}
