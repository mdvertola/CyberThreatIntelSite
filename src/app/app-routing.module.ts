import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { IndustryComponent } from './industry/industry.component';
import { IntelligenceBuyInComponent } from './intelligence-buy-in/intelligence-buy-in.component';
import { KeyInsightsComponent } from './key-insights/key-insights.component';
import { OpIntelComponent } from './op-intel/op-intel.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { ThreatModelsComponent } from './threat-models/threat-models.component';
import { VisualizationsComponent } from './visualizations/visualizations.component';


const routes: Routes = [
  {path: 'industry', component: IndustryComponent},
  {path: 'intelligencebuyin', component: IntelligenceBuyInComponent},
  {path: 'threatmodels', component: ThreatModelsComponent},
  {path: 'data', component: DataComponent},
  {path: 'operationalintelligence', component: OpIntelComponent},
  {path: 'about', component: TeamPageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'analytics', component: AnalyticsComponent},
  {path: 'visualizations', component: VisualizationsComponent},
  {path: 'keyinsights', component: KeyInsightsComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
