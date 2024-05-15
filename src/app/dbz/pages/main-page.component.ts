import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainComponent{

  constructor(private dbzService: DbzService){}

  get characters(): Character[] {
    return[...this.dbzService.character];
  };

  onDeleteCharacter(id: string): void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character:Character){
    this.dbzService.addCharacter(character);
  }
}
