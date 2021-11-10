import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMentorPageRoutingModule } from './list-mentor-routing.module';

import { ListMentorPage } from './list-mentor.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMentorPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ListMentorPage]
})
export class ListMentorPageModule {}
