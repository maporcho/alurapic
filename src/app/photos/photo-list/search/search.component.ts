import { Component, OnInit, OnDestroy, Output, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit, OnDestroy {
  debounce: Subject<string> = new Subject<string>();
  @Output() filterTextEntered: Subject<string> = new Subject<string>();
  @Input() value: string = '';

  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe((filter) => this.filterTextEntered.next(filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
