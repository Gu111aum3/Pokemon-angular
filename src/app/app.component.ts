import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<h1>Welcome to {{ pokemons[0] }}!</h1>`
})


export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
     }

  pokemons = ['Bulbizarre', 'Salamèche', 'Carapuce'];

  ngOninit() {
    console.log(this.pokemons);
    this.selectPokemon('bulbizarre');
  }

  selectPokemon(pokemonName: string) {
    console.log(`vous vaez cliqué sur le pokemon ${pokemonName}`);
    
}

}
