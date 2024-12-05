import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnippetListComponent } from './components/snippet-list/snippet-list.component';
import { SnippetDetailComponent } from './components/snippet-detail/snippet-detail.component';
import { UploadSnippetComponent } from './components/upload-snippet/upload-snippet.component';

const routes: Routes = [
  { path: '', component: SnippetListComponent },
  { path: 'snippet/:id', component: SnippetDetailComponent },
  { path: 'upload', component: UploadSnippetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}