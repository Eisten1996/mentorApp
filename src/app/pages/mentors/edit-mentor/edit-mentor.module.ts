import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMentorPageRoutingModule } from './edit-mentor-routing.module';

import { EditMentorPage } from './edit-mentor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMentorPageRoutingModule,
    FormsModule
  ],
  declarations: [EditMentorPage]
})
export class EditMentorPageModule {}
