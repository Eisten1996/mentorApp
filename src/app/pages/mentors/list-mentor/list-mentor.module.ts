import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMentorPageRoutingModule } from './list-mentor-routing.module';

import { ListMentorPage } from './list-mentor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMentorPageRoutingModule
  ],
  declarations: [ListMentorPage]
})
export class ListMentorPageModule {}
