import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { FootComponent } from './foot/foot.component';
import { IndustryComponent } from './industry/industry.component';
import { ThreatModelsComponent } from './threat-models/threat-models.component';
import { DataComponent } from './data/data.component';
import { OpIntelComponent } from './op-intel/op-intel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    TeamPageComponent,
    FootComponent,
    IndustryComponent,
    ThreatModelsComponent,
    DataComponent,
    OpIntelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
