import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMentorPage } from './list-mentor.page';

const routes: Routes = [
  {
    path: '',
    component: ListMentorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListMentorPageRoutingModule {}
