import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosModules } from './photos/photos.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PhotosModules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
