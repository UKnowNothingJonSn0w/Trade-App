import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesService } from './pages.service';
import { NewsComponent } from './news/news.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    NewsComponent,
  ],


  imports: [
    ModalModule.forRoot(),
    PagesRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbModule,
    MatListModule,
    MatCardModule,
    MatSelectModule
  ],

  providers: [PagesService],
  bootstrap: [PagesComponent],
})
export class PagesModule {}
