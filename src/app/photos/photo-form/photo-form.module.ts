import { PhotoFormComponent } from './photo-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    PhotoModule,
  ],
})
export class PhotoFormModule {}
