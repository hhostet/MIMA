import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, ProjectServiceService } from './../../services/project-service.service';
import { UserService } from './../../services/user.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.page.html',
  styleUrls: ['./admin-users.page.scss'],
})
export class AdminUsersPage implements OnInit {
  private users: Observable<User[]>;
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private afstore: AngularFirestore,
    private user: UserService,
    private ps: ProjectServiceService
  ) { }

  ngOnInit() {
    this.users = this.ps.getUsers();
  }

}
