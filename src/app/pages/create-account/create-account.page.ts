import { UserService } from './../../services/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { auth } from 'firebase/app';



@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

  username: string = ""
  password: string = ""
  cpassword: string = ""
  displayName: string = ""
  
  constructor(
    public afAuth: AngularFireAuth,
    public afstore: AngularFirestore,
    public user: UserService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async register() {
    const { username, password, cpassword, displayName } = this
    if(password !== cpassword) {
      this.showToast("Passwords don't match");
      return console.error("Passwords don't match");
      
    }
    
    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username, password)

      this.afstore.doc(`users/${res.user.uid}`).set({
        username
      })

      this.user.setUser({
        username, 
        uid: res.user.uid
      })

      

      console.log(res)
      console.dir("successful login")
      this.router.navigateByUrl('/modules-list');
    } catch(err) {
			console.dir(err)
			if(err.code === "auth/email-already-in-use") {
        console.dir("email in use");
        this.showToast("Sorry, this email is already in use");
      }
      if (err.code === "auth/invalid-email") {
        console.dir("invalid email");
        this.showToast("Invalid email");
      }
      if (err.code === "auth/weak-password") {
        console.dir("Weak Password");
        this.showToast("Password should be at lease 6 characters");
      }
      else {
        console.dir("There was an error creating this account");
        this.showToast("There was an error creating this account, please try again");
			}
		}
  }

  showToast(message) {
    this.toastCtrl.create({
      message:message,
      duration: 5000
    }).then(toast => toast.present());
  }
}
