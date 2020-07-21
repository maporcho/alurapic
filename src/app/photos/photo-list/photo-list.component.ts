import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit {
  public photos: Photo[] = [];

  filter: string = '';

  hasMore: boolean = false;
  currentPage: number = 1;
  username: string;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.username = params.username;
      this.photos = this.route.snapshot.data['photos'];
      this.hasMore = this.photos && this.photos.length > 0;
    });
  }

  load() {
    this.filter = '';
    this.photoService
      .listFromUserPaginated(this.username, ++this.currentPage)
      .subscribe((photos) => {
        this.photos = this.photos.concat(photos);
        if (!photos.length) this.hasMore = false;
      });
  }

  onFilterTextEntered(filter: string) {
    this.filter = filter;
  }
}
