import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { AngularFirestore,  AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../../services/user.service';
import { firestore } from 'firebase';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { timestamp } from 'rxjs/operators';
import { AuthService } from './../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-module-two',
  templateUrl: './module-two.page.html',
  styleUrls: ['./module-two.page.scss'],
})
export class ModuleTwoPage implements OnInit {
  userPosts
  mainuser: AngularFirestoreDocument
  sub
  username: string
  profilePic: string
  posts
  uid

  exTwo_Zero: string;
  exTwo_One: string;
  exTwo_Two: string;
  exTwo_Three: string;
  exTwo_Four: string;
  exTwo_Five: string;
  exTwo_Six: string;
  exTwo_Seven: string;
  exTwo_Eight: string;
  exTwo_Nine: string;
  exTwo_Ten: string;

  exTwo_Positive: string;
  exTwo_Negative: string;

  hideMe1: boolean = false;
  hideMe2: boolean = false;
  hideMe3: boolean = false;
  hideMe4: boolean = false;
  hideMe5: boolean = false;
  hideMe6: boolean = false;
  hideMe7: boolean = false;

  timeStamp: Date;

  constructor(
    public afstore: AngularFirestore,
    public user: UserService,
    private router: Router,
    private toastCtrl: ToastController,
    private activatedRoute:ActivatedRoute,
    public modalController: ModalController,
    private auth: AuthService,
    public afAuth: AngularFireAuth
  ) { 

  }

  ngOnInit() {
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

  hide6() {
    this.hideMe6 = !this.hideMe6;
  }

  hide7() {
    this.hideMe7 = !this.hideMe7;
  }

  submitEx() {
    try{
      const exTwo_Zero = this.exTwo_Zero
      const exTwo_One= this.exTwo_One
      const exTwo_Two= this.exTwo_Two
      const exTwo_Three = this.exTwo_Three
      const exTwo_Four = this.exTwo_Four
      const exTwo_Five = this.exTwo_Five
      const exTwo_Six = this.exTwo_Six
      const exTwo_Seven= this.exTwo_Seven
      const exTwo_Eight = this.exTwo_Eight
      const exTwo_Nine= this.exTwo_Nine
      const exTwo_Ten = this.exTwo_Ten
      const exTwo_Positive= this.exTwo_Positive
      const exTwo_Negative= this.exTwo_Negative

      const timeStamp = firestore.FieldValue.serverTimestamp()
          //const id = this.afstore.ref().child('exercises').push.key;
      console.log("clicked")

      this.afstore.doc(`users/${this.user.getUID()}`).update({
        module02_timestamp: timeStamp
      })

      this.afstore.doc(`exercises/${this.user.getUID()}`).set({
        module02: firestore.FieldValue.arrayUnion(
          `Exercise 2.4: ${exTwo_Zero}`),
        author: this.user.getUsername(),
      }) 
    
      this.afstore.doc(`exercises/${this.user.getUID()}`).update({
        module02: firestore.FieldValue.arrayUnion(
          `Describe the date, place and results of your BEST EVER surgical performance: ${exTwo_One}`),
      }) 

      this.afstore.doc(`exercises/${this.user.getUID()}`).update({
        module02: firestore.FieldValue.arrayUnion(
          `Provide any important details related to this event: ${exTwo_Two}`),
      }) 

      this.afstore.doc(`exercises/${this.user.getUID()}`).update({
        module02: firestore.FieldValue.arrayUnion(
          `How did you prepare for this performance mentally?: ${exTwo_Three}`),
      }) 

      this.afstore.doc(`exercises/${this.user.getUID()}`).update({
        module02: firestore.FieldValue.arrayUnion(
          `How did you prepare physically? ${exTwo_Four}`),
      }) 

      this.afstore.doc(`exercises/${this.user.getUID()}`).update({
        module02: firestore.FieldValue.arrayUnion(
          `Describe the date, place and results of your WORST EVER performance: ${exTwo_Five} `),
      }) 

      this.afstore.doc(`exercises/${this.user.getUID()}`).update({
        module02: firestore.FieldValue.arrayUnion(
          `Provide any important details related to this event and your performance during it: ${exTwo_Six}`),
      }) 

      this.afstore.doc(`exercises/${this.user.getUID()}`).update({
        module02: firestore.FieldValue.arrayUnion(
          `How did you prepare for this performance mentally?: ${exTwo_Seven}`),
      }) 

      this.afstore.doc(`exercises/${this.user.getUID()}`).update({
        module02: firestore.FieldValue.arrayUnion(
          `How did you prepare physically (e.g., nutrition, rest, practice)?: ${exTwo_Eight}`),
      }) 

      this.afstore.doc(`exercises/${this.user.getUID()}`).update({
        module02: firestore.FieldValue.arrayUnion(
          `Write down your action plan for the FLS suturing task: ${exTwo_Nine}`),
      }) 

      this.afstore.doc(`exercises/${this.user.getUID()}`).update({
        module02: firestore.FieldValue.arrayUnion(
          `Develop a SMART process goal for the FLS suturing task: ${exTwo_Ten}`),
      }) 

      this.afstore.doc(`exercises/${this.user.getUID()}`).update({
        module02: firestore.FieldValue.arrayUnion(
          `Helpful Positive Emotions: ${exTwo_Positive}`),
      })

      this.afstore.doc(`exercises/${this.user.getUID()}`).update({
        module02: firestore.FieldValue.arrayUnion(
          `Helpful Negative Emotions: ${exTwo_Negative}`),
      })

/*       [Exercise One: ${exTwo_One}]
       |
       |
       |
      |
      |
       |
       |
      Exercise Nine: ${exTwo_Nine} |
       |
       |
       */
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
}
