import { Component, OnInit } from '@angular/core';
import { Mentor } from 'src/app/core/models/mentor.model';
import { MentorService } from 'src/app/core/services/mentor.service';

@Component({
  selector: 'app-list-mentor',
  templateUrl: './list-mentor.page.html',
  styleUrls: ['./list-mentor.page.scss'],
})
export class ListMentorPage implements OnInit {
  constructor(private mentorService: MentorService) {}
  mentors: Mentor[];

  ngOnInit() {
    this.mentorService.getAll().subscribe((a) => {
      console.log(a);
      this.mentors = a;
    });
  }
}
