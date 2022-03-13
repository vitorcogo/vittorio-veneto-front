import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CollectionsRoutingModule } from "./collections-routing.module";
import { ClassicComponent } from './classic/classic.component';
import { AuthenticComponent } from './authentic/authentic.component';
import { UrbanComponent } from './urban/urban.component';

@NgModule({
    declarations: [
        ClassicComponent, 
        AuthenticComponent, 
        UrbanComponent
    ],
    imports: [
        CommonModule,
        CollectionsRoutingModule
    ],
    exports: [
        ClassicComponent, 
        AuthenticComponent, 
        UrbanComponent
    ]
})
export class CollectionsModule { }