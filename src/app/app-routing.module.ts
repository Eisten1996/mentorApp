import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mentors',
    loadChildren: () =>
      import('./pages/mentors/mentors.module').then((m) => m.MentorsPageModule),
  },
  {
    path: '',
    redirectTo: 'mentors',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
