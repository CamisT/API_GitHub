import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GhRepos } from '../models/ghRepos';
import { GhUser } from '../models/ghUser';

@Injectable()
export class GhApiService {

  private readonly baseUrl:string='https://api.github.com/users'

  constructor(
    private http:HttpClient
  ) { }

  findUser(username:string):Observable<GhUser>{
    return this.http.get<GhUser>(`${this.baseUrl}/${username}`)
  }

  findRepos(username:string):Observable<GhRepos[]>{
    return this.http.get<GhRepos[]>(`${this.baseUrl}/${username}/repos`)
  }
  
}
