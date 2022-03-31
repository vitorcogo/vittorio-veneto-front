import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CompanyComponent } from './pages/company/company.component';
import { CollectionsModule } from './pages/collections/collections.module';
import { CoreModule } from './core/core.module';
import { RepresentativesComponent } from './pages/representatives/representatives.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    CompanyComponent,
    RepresentativesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LazyLoadImageModule,
    CollectionsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
