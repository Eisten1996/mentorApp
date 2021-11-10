import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMentorPageRoutingModule } from './detail-mentor-routing.module';

import { DetailMentorPage } from './detail-mentor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailMentorPageRoutingModule
  ],
  declarations: [DetailMentorPage]
})
export class DetailMentorPageModule {}
