import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<h1>Welcome to {{ pokemons[0] }}!</h1>`
})


export class AppComponent implements OnInit {
 
  pokemons = ['Bulbizarre', 'Salamèche', 'Carapuce'];

  ngOnInit(): void {
    console.log(this.pokemons);
    this.selectPokemon('bulbizarre');
  }

  selectPokemon(pokemonName: string) {
    console.log(`vous avez cliqué sur le pokemon ${pokemonName}`);
    
}

}
