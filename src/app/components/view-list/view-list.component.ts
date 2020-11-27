import {Component, Input, OnInit} from '@angular/core';
import { MainService } from '../../services/main.service';


@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
  page: number;
  pageSize = 21;
  collectionSize: number;
  @Input() list;
  constructor( public service: MainService) { }
  ngOnInit(): void   {
    this.page = 1;
    this.collectionSize = this.list.length;
  }

}
