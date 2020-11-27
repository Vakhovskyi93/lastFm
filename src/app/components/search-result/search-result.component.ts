import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input() searchList;
  collectionSize: number;
  page: number;
  pageSize = 21;
  constructor() { }

  ngOnInit(): void {
    this.page = 1;
    this.collectionSize = this.searchList.length;
  }

}
