import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceManagmentComponent } from './pages/serviceManagment/serviceManagment.component';
import { LogsComponent } from './components/logs/logs.component';
import { MassagesComponent } from './components/messages/messages.component';
import { RoomComponent } from './components/room/room.component';
import { QueueComponent } from './components/queue/queue.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceManagmentComponent,
    LogsComponent,
    MassagesComponent,
    RoomComponent,
    QueueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
