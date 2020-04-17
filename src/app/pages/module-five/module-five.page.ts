import { Component, OnInit } from '@angular/core';
import { AngularFirestore,  AngularFirestoreDocument } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ModalController } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-module-five',
  templateUrl: './module-five.page.html',
  styleUrls: ['./module-five.page.scss'],
})
export class ModuleFivePage implements OnInit {

  exFive_One: string;

  hideMe1: boolean = false;
  hideMe2: boolean = false;
  hideMe3: boolean = false;
  hideMe4: boolean = false;
  hideMe5: boolean = false;

  constructor(
    public afstore: AngularFirestore,
    public user: UserService,
    private router: Router,
    private toastCtrl: ToastController,
    private activatedRoute:ActivatedRoute,
    public modalController: ModalController,
    private auth: AuthService,
  ) { }

  submitExFive() {
    try{
      const exFive_One= this.exFive_One
 
      const timeStamp = firestore.FieldValue.serverTimestamp()

      console.log("clicked")

      this.afstore.doc(`users/${this.user.getUID()}`).update({
        module05_timestamp: timeStamp
      })

      this.afstore.doc(`exercises/${this.user.getUID()}`).update({
        module05: firestore.FieldValue.arrayUnion(
          `Action Plan for Suturing: ${this.exFive_One}`),
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

  hide1() {
    this.hideMe1 = !this.hideMe1;
  }

  hide2() {
    this.hideMe2 = !this.hideMe2;
  }

  hide3() {
    this.hideMe3 = !this.hideMe3;
  }

  hide4() {
    this.hideMe4 = !this.hideMe4;
  }

  hide5() {
    this.hideMe5 = !this.hideMe5;
  }

  showToast(message) {
    this.toastCtrl.create({
      message:message,
      duration: 3000
    }).then(toast => toast.present());
  }

  ngOnInit() {
  }

}
