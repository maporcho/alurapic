import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit {
  public photos: any[] = [];

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const username = this.route.snapshot.params['username'];

    console.log('Listando fotos de ' + username);

    this.photoService
      .listFromUser(username)
      .subscribe((photos) => (this.photos = photos));
  }
}
