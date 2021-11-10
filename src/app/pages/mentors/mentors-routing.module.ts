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
      {
        path: 'add-mentor',
        loadChildren: () =>
          import('./add-mentor/add-mentor.module').then(
            (m) => m.AddMentorPageModule
          ),
      } ,
       {
        path: 'detail-mentor/:id',
        loadChildren: () => import('./detail-mentor/detail-mentor.module').then( m => m.DetailMentorPageModule)
      },
    ],
  },  {
    path: 'edit-mentor',
    loadChildren: () => import('./edit-mentor/edit-mentor.module').then( m => m.EditMentorPageModule)
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentorsPageRoutingModule {}
