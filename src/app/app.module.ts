import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeatMapComponent } from './heat-map/heat-map.component';
import { HeatMapService } from './heat-map/heat-map.service';
import { StatusPanelComponent } from './status-panel/status-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeatMapComponent,
    StatusPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    HeatMapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
