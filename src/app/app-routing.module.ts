import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './pages/company/company.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MensCollectionComponent } from './pages/mens-collection/mens-collection.component';
import { RepresentativesComponent } from './pages/representatives/representatives.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'masculine', component: MensCollectionComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'representatives', component: RepresentativesComponent },
  { path: 'collections', loadChildren: './pages/collections/collections.module#CollectionsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
