import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from "@angular/common/http"
import { Snippet } from "../snippet"
import { SNIPPETS } from "../mock-snippets"
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {
  private apiUrl = "http://localhost:3000/snippets"

  constructor(private http:HttpClient) { }

  getSnippets(): Observable<Snippet[]> {
    return this.http.get<Snippet[]>(this.apiUrl)
  }
}
