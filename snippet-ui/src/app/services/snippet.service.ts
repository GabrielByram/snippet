import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http"
import { Snippet } from "../snippet"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {
  private apiUrl = "http://localhost:3000/snippets"

  constructor(private http:HttpClient) { }

  getSnippets(): Observable<Snippet[]> {
    return this.http.get<Snippet[]>(this.apiUrl)
  }

  deleteSnippet(snippet: Snippet): Observable<Snippet> {
    const url = `${this.apiUrl}/${snippet.id}`
    return this.http.delete<Snippet>(url)
 }
}
