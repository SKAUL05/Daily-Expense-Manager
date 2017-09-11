import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  first_name: String;
  last_name: String;
  email: String;
  dob: String;
  gender: String;
  phone: String;
  username: String;
  password: String;
  constructor(
  private validateService: ValidateService,
  private flashMessage: FlashMessagesService,
  private authService: AuthService,
  private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
     const user = {
        first_name: this.first_name,
       last_name: this.last_name,
        email: this.email,
       dob: this.dob,
       gender: this.gender,
       phone: this.phone,
        username: this.username,
        password: this.password
     };



  if (this.validateService.validateRegister(user)) {
    this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
    return false;
  }


  if (!this.validateService.validateEmail(user.email)) {
    this.flashMessage.show('Please fill correct email', {cssClass: 'alert-danger', timeout: 3000});
    return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
        if (data.success) {
          this.flashMessage.show('You are now Registerd and can log in', {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['/login']);
        } else {
          this.flashMessage.show('Something Wrong', {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/register']);
        }
    });
  }
}
