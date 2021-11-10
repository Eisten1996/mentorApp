import { Component, Input, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Mentor } from 'src/app/core/models/mentor.model';
import { MentorService } from 'src/app/core/services/mentor.service';

@Component({
  selector: 'app-edit-mentor',
  templateUrl: './edit-mentor.page.html',
  styleUrls: ['./edit-mentor.page.scss'],
})
export class EditMentorPage implements OnInit {
   @Input() mentorID: string;
   mentor:Mentor;
  constructor(private mentorService: MentorService,
    private modalController: ModalController,
    public alertController: AlertController,
    public loadingController: LoadingController) { }

  ngOnInit() {
    this.mentorService.getOne(this.mentorID).subscribe(o=>{
      this.mentor=o;
    });
  }
  editar(){
    const MEN:Mentor = {
       name: this.mentor.name,
       last_name: this.mentor.last_name,
       dni : this.mentor.dni,
       email:this.mentor.email
    }
    this.mentorService.editMentor(this.mentor._id,MEN).subscribe(o=>{
        this.loadingController.dismiss();
        this.mentor={};
        console.log("editado");  
    })
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.presentLoadingWithOptions();
             this.editar();
             this.dismiss();
          }
        }
      ]
    });
    await alert.present();
}
    async presentLoadingWithOptions() {
      const loading = await this.loadingController.create({
       /*  spinner: null,*/
        /* duration: 10000, */
        message: 'Guardando Cambios',
        /* translucent: true,
        cssClass: 'custom-class custom-loading',
        backdropDismiss: true */
      });
      await loading.present();
    }


}