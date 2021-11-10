import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mentor } from '../models/mentor.model';

@Injectable({
  providedIn: 'root',
})
export class MentorService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Mentor[]> {
    return this.http.get<Mentor[]>(environment.API + 'mentors');
  }
  getOne(id):Observable<Mentor>{
    return this.http.get(environment.API+'mentors/'+id);
  }
  addMentor(data): Observable<any> {
    return this.http.post(environment.API + 'mentors', data);
  }
  deleteMentor(id): Observable<any> {
    return this.http.delete(environment.API + 'mentors/' + id);
  }
  editMentor(id,mentor):Observable<any>{
    return this.http.put(environment.API+'mentors/'+id,mentor);
  }
}
