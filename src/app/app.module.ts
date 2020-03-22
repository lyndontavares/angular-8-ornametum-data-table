import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DataTableModule } from 'ornamentum';

import { AppComponent } from './app.component';
import { BasicUsageDetailViewComponent } from './components/basic-usage/basic-usage-detail-view/basic-usage-detail-view.component';
import { BasicUsageComponent } from './components/basic-usage/basic-usage.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule, 
    DataTableModule.forRoot() // Import data table module with root configuration. 
  ],
  declarations: [ 
    AppComponent, 
    BasicUsageComponent,
    BasicUsageDetailViewComponent
  ],
  bootstrap: [
    AppComponent 
  ]
})
export class AppModule { }
