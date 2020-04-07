import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

mainuser: AngularFirestoreDocument
sub
username: string
profilePic: string

password: string
newpassword: string


busy: boolean = false
  constructor(
    private afs: AngularFirestore,
    private user: UserService,
    private alertController: AlertController,
    private router: Router
    ) { 
    this.mainuser = afs.doc(`users/${user.getUID()}`)
    this.sub = this.mainuser.valueChanges().subscribe(event => {
      this.username = event.username
    })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  async presentAlert(title: string, content: string ){
    const alert = await this.alertController.create({
      header: title,
      message: content, 
      buttons: ["OK"]
    })
    await alert.present()
  }

  async updateDetails() {
    this.busy = true

    if (!this.password) {
      this.busy = false
      return this.presentAlert('Error', 'Please enter a password')
    }

    try{
      await this.user.reAuth(this.user.getUsername(), this.password)
    }catch(error) {
      this.busy = false
      return this.presentAlert('Error:', 'Wrong Password')
    }

    if(this.newpassword){
      await this.user.updatePassword(this.newpassword)
    }

    if(this.username !== this.user.getUsername()) {
      await this.user.updateEmail(this.username)
      this.mainuser.update({
        username: this.username
      })
    }

    this.password = ""
    this.newpassword = ""
    

    await this.presentAlert('Done!', 'Your profile was updated.')
    this.router.navigateByUrl('/profile-page');
  }

}
