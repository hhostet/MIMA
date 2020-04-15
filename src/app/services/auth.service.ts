import { UserService } from './user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core'
import {Router, CanActivate} from '@angular/router'

@Injectable()
export class AuthService implements CanActivate{
    private currentUser: firebase.User = null;
    constructor(private router: Router, private user: UserService, private afAuth: AngularFireAuth) {

    }
    
    async canActivate(route) {
        if(await this.user.isAuthenticated()) {
            return true
        }
        this.router.navigate(['/login'])
        return false
    }

    logout(){
        this.afAuth.auth.signOut();
     }

     isLoggedIn() {
        if (this.currentUser == null) {
          return false;
        }
        return true;
      }
}

