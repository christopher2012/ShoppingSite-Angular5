import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() onSearch = new EventEmitter<any>();
  @Input() searchString: string;
  constructor() { }

  ngOnInit() {
  }

  search(event: string): void {
    this.onSearch.emit(event);
  }

}
