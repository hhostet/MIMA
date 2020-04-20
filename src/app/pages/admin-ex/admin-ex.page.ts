import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercise, ProjectServiceService } from './../../services/project-service.service';
import { UserService } from './../../services/user.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-ex',
  templateUrl: './admin-ex.page.html',
  styleUrls: ['./admin-ex.page.scss'],
})
export class AdminExPage implements OnInit {
  private exercises: Observable<Exercise[]>;
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private afstore: AngularFirestore,
    private user: UserService,
    private ps: ProjectServiceService
  ) { 

  }

  ngOnInit() {
    this.exercises = this.ps.getExercises();
  }

}
