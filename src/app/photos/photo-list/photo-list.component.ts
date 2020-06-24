import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit, OnDestroy {
  public photos: Photo[] = [];

  filter: string;
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = false;
  currentPage: number = 1;
  username: string;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.params.username;
    this.photos = this.route.snapshot.data.photos;
    this.debounce
      .pipe(debounceTime(300))
      .subscribe((filter) => (this.filter = filter));
    this.hasMore = this.photos && this.photos.length > 0;
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }

  load() {
    this.photoService
      .listFromUserPaginated(this.username, ++this.currentPage)
      .subscribe((photos) => {
        this.photos = this.photos.concat(photos);
        if (!photos.length) this.hasMore = false;
      });
  }
}
