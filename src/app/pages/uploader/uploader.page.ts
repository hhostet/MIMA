
import { async } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit,  ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { firestore } from 'firebase';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})
export class UploaderPage implements OnInit {

  desc: string;
  image: string;

  constructor(
    public afstore: AngularFirestore,
    public user: UserService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {

  }

 createPost() {
    const desc = this.desc
    const image = this.image

    console.log("clicked")

    this.afstore.doc(`users/${this.user.getUID()}`).update({
      posts: firestore.FieldValue.arrayUnion(image)
    })

    this.afstore.doc(`posts/${image}`).set({
      desc,
      author: this.user.getUsername(),
		})

    this.showToast("Posted");
    
  }

  showToast(message) {
    this.toastCtrl.create({
      message:message,
      duration: 5000
    }).then(toast => toast.present());
  }

}
