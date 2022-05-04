import { Component} from '@angular/core';
import {Hobby} from '../interfaces/hobby.interface';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent {
  myName:string = "LupitaG";
  number:number = 0;
  hobbies:Hobby[] = [];

  new:Hobby = {
    name: " ",
    where: " ",
  }

  addNewHobby (hobby:Hobby){
    this.hobbies.push(hobby);
    
  }
  
}
