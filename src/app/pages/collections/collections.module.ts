import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CollectionsRoutingModule } from "./collections-routing.module";
import { ClassicComponent } from './classic/classic.component';
import { AuthenticComponent } from './authentic/authentic.component';
import { UrbanComponent } from './urban/urban.component';
import { CoreModule } from "src/app/core/core.module";
import { RouterModule } from "@angular/router";
import { LazyLoadImageModule } from "ng-lazyload-image";

@NgModule({
    declarations: [
        ClassicComponent, 
        AuthenticComponent, 
        UrbanComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        CollectionsRoutingModule,
        LazyLoadImageModule,
        CoreModule
    ],
    exports: [
        ClassicComponent, 
        AuthenticComponent, 
        UrbanComponent
    ]
})
export class CollectionsModule { }