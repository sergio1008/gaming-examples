import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { DesafiosComponent } from './components/desafios/desafios.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RoutingModule],
  declarations: [
    AppComponent,
    ProfileComponent,
    DesafiosComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
