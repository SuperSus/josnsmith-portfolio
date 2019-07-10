import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DataService } from './data.service';

import { environment } from './environment';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { EditPortfolioComponent } from './edit-portfolio/edit-portfolio.component';

@NgModule({
  imports: [ 
      BrowserModule, 
      FormsModule,
      AppRoutingModule, 
      HttpClientModule,
      AngularFireModule.initializeApp(environment.firebase),  
      AngularFireDatabaseModule,
      ReactiveFormsModule 
    ],
  declarations: [ AppComponent, HelloComponent, PortfolioComponent, EditPortfolioComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
