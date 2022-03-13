import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticComponent } from "./authentic/authentic.component";
import { ClassicComponent } from "./classic/classic.component";
import { UrbanComponent } from "./urban/urban.component";

const routes: Routes = [
    { path: 'classic', component: ClassicComponent },
    { path: 'urban', component: UrbanComponent },
    { path: 'authentic', component: AuthenticComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CollectionsRoutingModule { }