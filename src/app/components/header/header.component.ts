import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {fromEvent, Subscription} from "rxjs";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Output() resetData: EventEmitter<any> = new EventEmitter<any>();
  post: string;
  sub: Subscription;
  constructor() { }

  ngOnInit(): void {
    const inputValue$ = fromEvent(document.querySelector('input'), 'keyup');
    this.sub = inputValue$.subscribe(() => {
      this.emit();
    });
  }
  emit(): void{
    this.search.emit(this.post);
  }
  searchinng(): void{
    if ( this.post.length > 3){
      this.emit();
    }
  }
  reset(): void {
    this.resetData.emit();
    this.sub.unsubscribe()
  }


}
