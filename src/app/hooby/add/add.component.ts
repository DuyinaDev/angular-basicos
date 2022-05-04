import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Hobby } from '../interfaces/hobby.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {

/*  @Input() number:number = 0;  */
  @Input() new:Hobby = {
    name: " ",
    where: " ",
  }
  @Output() onNewHobby: EventEmitter<Hobby> = new EventEmitter();

  changeName(event:any):void{
    console.log(event.target.value);  
  }

  add() { 
   if(this.new.name === ' '){return;}

    console.log(this.new);

    this.onNewHobby.emit(this.new);
    
    this.new = {
    name:"",
    where: ""
    }

    
/*    this.number = this.hobbies.length; */
 } 


}
