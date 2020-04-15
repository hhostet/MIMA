import { Observable } from 'rxjs';
import { Post, ProjectServiceService } from './../../services/project-service.service';
import { UserService } from './../../services/user.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-admin-log-page',
  templateUrl: './admin-log-page.page.html',
  styleUrls: ['./admin-log-page.page.scss'],
})
export class AdminLogPagePage implements OnInit {
  private posts: Observable<Post[]>;
  constructor(    
    private route: ActivatedRoute, 
    private router: Router,
    private afstore: AngularFirestore,
    private user: UserService,
    private ps: ProjectServiceService
    ) {
      
    }

  ngOnInit() {
    this.posts = this.ps.getPosts();
  }

 


}
