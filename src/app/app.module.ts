import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BioComponent } from './components/bio/bio.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  { path: '', redirectTo: 'bio', pathMatch: 'full' },
  { path: 'bio', component: BioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ProfileComponent,
    BioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
