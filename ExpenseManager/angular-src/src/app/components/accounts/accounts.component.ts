import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from '../../services/validate.service';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accountInfo = {
    _id : String,
    first_name: String,
    last_name: String,
    acc_no : String,
    acc_type : String
    };
  user: Object;
  accounts: Array<any>;
  _id: String;
  first_name: String;
  last_name: String;
  acc_no: String;
  acc_type: String;
  constructor(private validateService: ValidateService,
              private flashMessage: FlashMessagesService,
              private authService: AuthService,
              private route2: ActivatedRoute,
              private router: Router) { }
  refresh() {
    this._id = null;
    this.first_name = this.last_name = this.acc_no = this.acc_type = null;
    // document.getElementById('update_button').style.display = 'none';
  }
  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
      },
      err => {
        console.log(err);
        return false;
      });
  }

    addAccount(user) {
      const account = {
        first_name : user.first_name,
        last_name : user.last_name,
        acc_no : this.acc_no,
        acc_type: this.acc_type
      };
      /*if (!this.validateService.validateRegister(transact)) {
       this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
       return false;
       }*/
      this.authService.registerAccount(account).subscribe(data => {
        if (data.success) {
          this.flashMessage.show('Account Added', {cssClass: 'alert-success', timeout: 3000});
          this.refresh();
          window.location.reload();
        } else {
          this.flashMessage.show('Something GOING Wrong', {cssClass: 'alert-danger', timeout: 3000});
        }
      });
    }
  }


