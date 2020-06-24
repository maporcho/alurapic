import { Component, OnInit } from '@angular/core';
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

  filter: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.photos = this.route.snapshot.data.photos;
  }
}
