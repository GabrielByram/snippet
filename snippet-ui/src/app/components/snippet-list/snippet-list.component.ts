import { Component } from '@angular/core';
import { Snippet } from '../../snippet';
import { SnippetService } from "../../services/snippet.service"
import { SnippetComponent } from "../snippet/snippet.component"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-snippet-list',
  standalone: true,
  imports: [SnippetComponent, CommonModule],
  templateUrl: './snippet-list.component.html',
  styleUrl: './snippet-list.component.css'
})
export class SnippetListComponent {
  snippets: Snippet[] = []

  constructor(private snippetService: SnippetService) {}

  ngOnInit(): void {
    this.snippetService.getSnippets().subscribe((snippets) => this.snippets = snippets);
  }
}
