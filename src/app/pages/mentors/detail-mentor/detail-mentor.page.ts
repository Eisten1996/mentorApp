import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Mentor } from 'src/app/core/models/mentor.model';
import { MentorService } from 'src/app/core/services/mentor.service';
import { EditMentorPage } from '../edit-mentor/edit-mentor.page';

@Component({
  selector: 'app-detail-mentor',
  templateUrl: './detail-mentor.page.html',
  styleUrls: ['./detail-mentor.page.scss'],
})
export class DetailMentorPage implements OnInit {
   mentor : Mentor;
   id:any;
  constructor(private mentorService: MentorService,private routerActivated: ActivatedRoute,
  public modalController: ModalController) { }

  ngOnInit() {
   this.id= this.routerActivated.snapshot.paramMap.get("id");
   this.mentorService.getOne(this.id).subscribe(o=>{
     this.mentor=o;
     console.log(o);
   })
  }
  async presentModal() {
    const modal = await this.modalController.create({ 
      component:  EditMentorPage,
      cssClass: 'my-custom-class',
      componentProps:{
        'mentorID': this.mentor._id
      }
    });
    return await modal.present();
  }
}
