import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component'
import { EditPortfolioComponent } from './edit-portfolio/edit-portfolio.component'

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'edit', component: EditPortfolioComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }