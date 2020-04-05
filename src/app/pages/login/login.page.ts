import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { auth } from 'firebase/app';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

username: string = ""
password:  string = ""

  constructor(
    public afAuth: AngularFireAuth,
    private toastCtrl: ToastController,
    private router: Router,
    public user: UserService
    ) { }

  ngOnInit() {

    
  }

  async login () {
    const { username, password } = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password)

      if(res.user){
        this.user.setUser({
          username,
          uid: res.user.uid
        })
        this.router.navigateByUrl('/modules-list');
      }

      console.dir("successful login")
    } catch(err) {
			console.dir(err)
			if(err.code) {
        console.dir("User not found")
        this.showToast("Incorrect username or password");
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
