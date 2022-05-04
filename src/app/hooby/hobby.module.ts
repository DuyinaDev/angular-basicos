import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HobbiesComponent } from "./hobbies/hobbies.component";
import { FormsModule } from "@angular/forms";
import { HobbiesListComponent } from './hobbies-list/hobbies-list.component';
import { AddComponent } from './add/add.component';


@NgModule({
    declarations:[
        HobbiesComponent,
        HobbiesListComponent,
        AddComponent
    ],
    exports:[
        HobbiesComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class HobbyModule {

}