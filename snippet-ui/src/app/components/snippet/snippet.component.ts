import { Component, Input } from '@angular/core';
import { Snippet } from '../../snippet';

@Component({
  selector: 'app-snippet',
  imports: [],
  templateUrl: './snippet.component.html',
  styleUrl: './snippet.component.css'
})
export class SnippetComponent {
  @Input() snippet : Snippet

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
