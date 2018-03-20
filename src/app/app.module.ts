import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Ch1Component } from './ch1/ch1.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, Ch1Component, Ch1Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
