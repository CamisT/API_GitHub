import { Component, OnInit } from '@angular/core';
import { GhRepos } from '../../models/ghRepos';
import { GhUser } from '../../models/ghUser';
import { GhApiService } from '../../services/gh-api.service';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {

  username: string = ''
  repos: string = ''

  user:GhUser|null=null
  repository:GhRepos[]|undefined

  constructor(
    private ghService: GhApiService
  ) { }

  ngOnInit(): void {
    this.ghService.findUser(this.username).subscribe(
      (gUser)=>{
        
        this.user=gUser
      }
    )
      this.ghService.findRepos(this.username).subscribe(
        (ghRepo)=>{
          this.repository=ghRepo
        }
      )
  }

}
