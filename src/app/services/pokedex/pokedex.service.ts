import { Pokemon } from './../../models/pokedex/pokemon';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {



  constructor(private httpClient: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  getCarById(): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/6')
  }

}
