import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';
import { PhotoComment } from '../photo/photo-comment';

@Component({
  templateUrl: './photo-details.component.html',
})
export class PhotoDetailsComponent implements OnInit {
  photo$: Observable<Photo>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const photoId = this.activatedRoute.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(photoId);
  }

  remove() {
    this.photoService
      .removePhoto(this.activatedRoute.snapshot.params.photoId)
      .subscribe(() => {
        this.router.navigate(['']);
      });
  }
}
