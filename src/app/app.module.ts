import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollbarComponent } from './scrollbar/scrollbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimplebarAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
