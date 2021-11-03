import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MentorsPage } from './mentors.page';

const routes: Routes = [
  {
    path: '',
    component: MentorsPage,
    children: [
      { path: '', redirectTo: 'list-mentor', pathMatch: 'full' },
      {
        path: 'list-mentor',
        loadChildren: () =>
          import('./list-mentor/list-mentor.module').then(
            (m) => m.ListMentorPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentorsPageRoutingModule {}
