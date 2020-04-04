import { Pokemon } from './models/pokedex/pokemon';
import { getTestBed } from '@angular/core/testing';
import { PokedexService } from './services/pokedex/pokedex.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  pokemon = {} as Pokemon;
  title = 'Pokedex';


  constructor(private pokedexService: PokedexService) {

   }

   ngOnInit() {
    this.getPokemon()
  }

  getPokemon(){
      this.pokedexService.getCarById().subscribe((pokemon: Pokemon) => {
      this.pokemon = pokemon;
      alert(this.pokemon.name)
    });
   
  }

  
}

