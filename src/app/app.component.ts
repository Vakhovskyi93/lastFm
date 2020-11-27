import {Component, OnInit} from '@angular/core';
import { MainService} from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lastFm';
  itemsList;
  searchResult;

  constructor(
    public service: MainService
  ) {
  }
  async ngOnInit(): Promise<any>{
      this.getTopTracks();
  }
  async getTopTracks(): Promise<any> {
    this.searchResult = undefined;
    await this.service.getTop().subscribe( data => {
      this.itemsList = data;
      }, error => {
      console.log(error);
    });
  }
  emmitsearch(e): void{

    this.itemsList = undefined;
    this.searchTrack(e);


  }
  searchTrack(e): void {
    this.service.searchTrack(e).subscribe( data => {
      this.searchResult = data;
    }, error => {
      console.log(error);
    });
  }

}
