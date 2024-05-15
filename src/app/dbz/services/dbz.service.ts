import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  public character: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }
];

  addCharacter(character: Character): void{
    const newCharacter: Character = {...character, id: uuid()};
    this.character.push(character);
    console.log(newCharacter)
  }

  deleteCharacterById(id:string){
    this.character = this.character.filter( character => character.id !== id);
  }
  // onDeleteCharacter(indice: number){
  //   console.log('Main Page Delete');
  //   this.character.splice(indice,1);
  // }

}
