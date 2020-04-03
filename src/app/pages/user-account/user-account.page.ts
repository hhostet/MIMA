
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.page.html',
  styleUrls: ['./user-account.page.scss'],
})
export class UserAccountPage implements OnInit {

  userPosts
  posts

  constructor(
    private afs: AngularFirestore,
    private user: UserService,
    private router: Router
  ) {
    const posts = afs.doc(`users/${user.getUID()}`)
    this.userPosts = posts.valueChanges()

   }

   goTo(postID: string){
     this.router.navigate(['/log-post/' + postID])
   }

  ngOnInit() {
  }

}
