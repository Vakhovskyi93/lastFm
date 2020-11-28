import {Component, OnInit} from '@angular/core';
import { MainService} from './services/main.service';
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lastFm';
  itemsList;
  searchResult;
  error: any;
  constructor(
    public service: MainService
  ) {
  }
  async ngOnInit(): Promise<any>{
      this.getTopTracks();
  }
  async getTopTracks(): Promise<any> {
    this.searchResult = undefined;
    await this.service.getTop().subscribe(data => {
      this.itemsList = data.tracks.track;
    });


  }
  emmitsearch(e): void{
    this.itemsList = undefined;
    this.searchTrack(e);
  }

  async searchTrack(e): Promise<any> {
     await this.service.searchTrack(e).subscribe(data => {
       this.searchResult = data.results.trackmatches.track;
     });


  }

}
