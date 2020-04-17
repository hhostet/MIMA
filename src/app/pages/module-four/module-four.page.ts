import { Component, OnInit } from '@angular/core';
import { AngularFirestore,  AngularFirestoreDocument } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ModalController } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-module-four',
  templateUrl: './module-four.page.html',
  styleUrls: ['./module-four.page.scss'],
})
export class ModuleFourPage implements OnInit {

  exFour_Negative: string;
  exFour_Counter: string;
  timeStamp: Date;

  hideMe1: boolean = false;
  hideMe2: boolean = false;
  hideMe3: boolean = false;

  constructor(
    public afstore: AngularFirestore,
    public user: UserService,
    private router: Router,
    private toastCtrl: ToastController,
    private activatedRoute:ActivatedRoute,
    public modalController: ModalController,
    private auth: AuthService,
  ) { }

  ngOnInit() {
  }

  submitExFour() {
    try{
      const exFour_Negative = this.exFour_Negative
      const exFour_Counter = this.exFour_Counter
      const timeStamp = firestore.FieldValue.serverTimestamp()

      console.log("clicked")

      this.afstore.doc(`users/${this.user.getUID()}`).update({
        module04_timestamp: timeStamp
      })

      this.afstore.doc(`exercises/${this.user.getUID()}`).update({
        module04: firestore.FieldValue.arrayUnion(
          `Negative Thoughts: ${this.exFour_Negative}`),
      }) 
    
      this.afstore.doc(`exercises/${this.user.getUID()}`).update({
        module04: firestore.FieldValue.arrayUnion(
          `Counter: ${exFour_Counter}`),
      }) 

      this.showToast("This exercise has been submitted!");

    } catch (err) {
      console.dir(err)
        if(err.message === "Cannot read property 'uid' of undefined") {
          console.dir("Error")
          this.showToast("Please login to submit this exercise.");
          this.router.navigateByUrl('/login');
        }
        else {
          console.dir("Error")
          this.showToast("Sorry, there was an error processing this request.");
        } 
      } 
  }

  showToast(message) {
    this.toastCtrl.create({
      message:message,
      duration: 3000
    }).then(toast => toast.present());
  }

  hide1() {
    this.hideMe1 = !this.hideMe1;
  }

  hide2() {
    this.hideMe2 = !this.hideMe2;
  }

  hide3() {
    this.hideMe3 = !this.hideMe3;
  }
}
