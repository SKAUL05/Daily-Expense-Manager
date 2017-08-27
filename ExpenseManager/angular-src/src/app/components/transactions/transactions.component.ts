import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from '../../services/validate.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  user: Object;
   transactions: Array<any>;
  _id: String;
  first_name: String;
  last_name: String;
  amount: String;
  nature: String;
  category: String;
  date: String;
  note: String;
  constructor(private validateService: ValidateService,
              private flashMessage: FlashMessagesService,
              private authService: AuthService,
              private route2: ActivatedRoute,
              private router: Router) { this.refresh();}
  refresh() {
    this._id = null;
    this.first_name = this.last_name = this.amount = this.nature = this.category  = this.note = this.date = null;
  }
  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
      },
      err => {
        console.log(err);
        return false;
      });
     this.authService.getTransactions().subscribe(transact => {
       this.transactions = transact;
     }, err => {
         console.log(err);
         return false;
       });
    }

    deleteTransaction(id: any) {
      const transactions1 = this.transactions;
    this.authService.deleteTransact(id).subscribe(data => {
       if (data.n === 1 ) {
         for (let i = 0 ; i < transactions1.length ; i++) {
           if (transactions1[i]._id === id) {
             transactions1.splice(i, 1);
             this.flashMessage.show('Delete success', {cssClass: 'alert-success', timeout: 3000});
           }
         }
       }
    });
  }

    addTransaction(user) {
       const transact = {
         first_name : user.first_name,
         last_name : user.last_name,
         amount: this.amount,
         nature : this.nature,
         category : this.category,
         date : this.date,
         note : this.note
       };
      /*if (!this.validateService.validateRegister(transact)) {
        this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
        return false;
      }*/
      this.authService.registerTransact(transact).subscribe(data => {
        if (data.success) {
          this.flashMessage.show('Transaction Added', {cssClass: 'alert-success', timeout: 3000});
          this.refresh();
          window.location.reload();
        } else {
          this.flashMessage.show('Something GOING Wrong', {cssClass: 'alert-danger', timeout: 3000});
        }
      });
    }

}
