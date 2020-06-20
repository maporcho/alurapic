import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form/photo-form.component';

@NgModule({
  declarations: [PhotoComponent, PhotoListComponent, PhotoFormComponent],
  imports: [HttpClientModule, CommonModule],
  exports: [PhotoListComponent],
})
export class PhotosModule {}
