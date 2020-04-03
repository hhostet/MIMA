import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-post',
  templateUrl: './log-post.page.html',
  styleUrls: ['./log-post.page.scss'],
})
export class LogPostPage implements OnInit {

  postID: string
  post

  constructor(private route: ActivatedRoute, private afs: AngularFirestore) { 
     
  }

  ngOnInit() {
    this.postID = this.route.snapshot.paramMap.get('id')
    this.post= this.afs.doc(`posts/${this.postID}`).valueChanges()
  }

}
