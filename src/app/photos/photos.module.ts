import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { PhotoDetailsModule } from './photo-details/photo-details.module';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule,
    PhotoFormModule,
    PhotoListModule,
    PhotoDetailsModule,
  ],

  // exports: [PhotoListComponent],
})
export class PhotosModule {}
