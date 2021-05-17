import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { PlaceContainerModule } from 'src/app/shared/place-container/place-container.module';
import { RatingsModule } from 'src/app/shared/ratings/ratings.module';
import { RecommendationsComponent } from './recommendations.component';
import { CountToModule } from 'angular-count-to';

const routes: Routes = [
    {path: '', component: RecommendationsComponent}
  ]
@NgModule({
  declarations: [RecommendationsComponent],
  imports: [
    SharedModule,
    RatingsModule,
    CountToModule,
    PlaceContainerModule,
    RouterModule.forChild(routes)
  ],
    exports: [RecommendationsComponent]
})
export class RecommendationsModule { }