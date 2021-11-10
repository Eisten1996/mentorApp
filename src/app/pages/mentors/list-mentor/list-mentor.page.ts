import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mentor } from 'src/app/core/models/mentor.model';
import { MentorService } from 'src/app/core/services/mentor.service';

@Component({
  selector: 'app-list-mentor',
  templateUrl: './list-mentor.page.html',
  styleUrls: ['./list-mentor.page.scss'],
})
export class ListMentorPage implements OnInit {
  constructor(private mentorService: MentorService, private router: Router) {}
  mentors: Mentor[];

  ngOnInit() {
    this.mentorService.getAll().subscribe((a) => {
      this.mentors = a;
    });
  }
  deleteMentor(id) {
    this.mentorService.deleteMentor(id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['mentors/list-mentor']).then(() => {
          window.location.reload();
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
