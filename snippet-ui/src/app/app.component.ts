import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component"
import { SnippetListComponent } from './components/snippet-list/snippet-list.component';
// import { RouterOutlet } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, SnippetListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
