import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMentorPage } from './edit-mentor.page';

const routes: Routes = [
  {
    path: '',
    component: EditMentorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMentorPageRoutingModule {}
