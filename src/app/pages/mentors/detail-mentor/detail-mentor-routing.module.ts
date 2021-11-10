import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailMentorPage } from './detail-mentor.page';

const routes: Routes = [
  {
    path: '',
    component: DetailMentorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMentorPageRoutingModule {}
