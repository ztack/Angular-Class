import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public CharacterList: Character[] = []


  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacterById(id?:string){
    if (!id) return;

    this.onDelete.emit(id);
  }


  // onDeleteCharacter(indice: number): void{
  //   console.log({indice});
  //   this.onDelete.emit(indice);
  // }


  // onDeleteCharacter(indice: number): void{
  //   // TODO Emitir el ID del persona
  //   console.log(indice);

  // }

}
