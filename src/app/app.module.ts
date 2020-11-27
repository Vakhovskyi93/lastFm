import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ViewListComponent } from './components/view-list/view-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor} from './interceptor/auth.interceptor';
import { MainService } from './services/main.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchResultComponent } from './components/search-result/search-result.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginationComponent,
    ViewListComponent,
    SearchResultComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbPaginationModule,

    NgbModule
  ],
  providers: [
    MainService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
