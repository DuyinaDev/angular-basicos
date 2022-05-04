import { Component, Input } from '@angular/core';
import { Hobby } from '../interfaces/hobby.interface';

@Component({
  selector: 'app-hobbies-list',
  templateUrl: './hobbies-list.component.html',
  styleUrls: ['./hobbies-list.component.css']
})
export class HobbiesListComponent {

  @Input() number:number = 0;
  @Input() hobbies:Hobby[] = [];

}
