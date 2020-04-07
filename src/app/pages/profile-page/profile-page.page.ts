import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})
export class ProfilePagePage implements OnInit {
  userPosts
  mainuser: AngularFirestoreDocument
  sub
  username: string
  profilePic: string
  posts

  constructor(
    private afs: AngularFirestore,
    private user: UserService,
    private router: Router
  ) {
    this.mainuser  = afs.doc(`users/${user.getUID()}`)
    this.userPosts = this.mainuser.valueChanges().subscribe(event=>{
      this.posts = event.posts
      this.username = event.username
      this.profilePic = event.profilePic
    })

   }

  /*  ngOnDestroy(){
    this.sub.unsubscribe()
   } */

   goTo(postID: string){
     this.router.navigate(['/log-post/' + postID])
   }
  ngOnInit() {
  }

}
