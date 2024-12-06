import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() snippet : Snippet;
  @Output() onDeleteSnippet: EventEmitter<Snippet> = new EventEmitter();
  faTimes = faTimes;

  constructor() {
    this.snippet = {
      id: 0,
      user: "default",
      name: "test",
      day: "test",
      audio: "test",
    }
  }

  onDelete(snippet: Snippet) {
    this.onDeleteSnippet.emit(snippet)
  }
}
