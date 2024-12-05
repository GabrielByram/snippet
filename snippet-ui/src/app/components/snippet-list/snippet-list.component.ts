import { Component } from '@angular/core';
import { Snippet } from '../../snippet';
import { SNIPPETS } from "../../mock-snippets";
import { SnippetComponent } from "../snippet/snippet.component"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-snippet-list',
  imports: [SnippetComponent, CommonModule],
  templateUrl: './snippet-list.component.html',
  styleUrl: './snippet-list.component.css'
})
export class SnippetListComponent {
  snippets: Snippet[] = SNIPPETS
}
