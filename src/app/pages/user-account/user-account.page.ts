
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.page.html',
  styleUrls: ['./user-account.page.scss'],
})
export class UserAccountPage implements OnInit {

  mainuser: AngularFirestoreDocument
	userPosts
	sub
	posts
	username: string
	profilePic: string

  constructor(
    private afs: AngularFirestore,
    private user: UserService,
    private router: Router
  ) {
    this.mainuser = afs.doc(`users/${user.getUID()}`)
		this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.posts = event.posts
			this.username = event.username
			this.profilePic = event.profilePic
		})
   }

   ngOnDestroy() {
		this.sub.unsubscribe()
	  }

   goTo(postID: string){
     this.router.navigate(['/log-post/' + postID])
   }

  ngOnInit() {
  }

}
