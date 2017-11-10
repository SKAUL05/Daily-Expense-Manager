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
   transactInfo = {
  _id : String,
  first_name: String,
  last_name: String,
  amount : Number,
  nature : String,
  category : String,
  acc_no : Number,
  date : String
};

  user: Object;
  balances: Object;
   transactions: Array<any>;
   accounts: Array<any>;
  _id: String;
  first_name: String;
  last_name: String;
  amount: number;
  nature: String;
  category: String;
  date: String;
  acc_no: Number;
  transcs: Array<any>;
  constructor(private validateService: ValidateService,
              private flashMessage: FlashMessagesService,
              private authService: AuthService,
              private route2: ActivatedRoute,
              private router: Router) { this.refresh();}
  refresh() {
    this._id = null;
    this.first_name = this.last_name = this.amount = this.nature = this.category  = this.acc_no = this.date = null;
   // document.getElementById('update_button').style.display = 'none';
console.log('Hiii');
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
    this.authService.getAccounts().subscribe(transacts => {
      this.accounts = transacts;
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

  update() {
    console.log(this.transactInfo._id);
    const transacts = {
      first_name : this.first_name,
      last_name : this.last_name,
      amount: this.amount,
      nature : this.nature,
      category : this.category,
      date : this.date,
      acc_no : this.acc_no
    };
    console.log(transacts.date);
    this.authService.update(this._id, transacts).subscribe(res => {
      console.log(res);
      this.flashMessage.show('Update  success', {cssClass: 'alert-success', timeout: 3000});
      window.location.reload();
    });

  }
   editTransaction(id) {
     console.log(id);
     this.authService.editTransact(id).subscribe(res => {
       console.log('data to be edited is' + res.first_name);
       this.flashMessage.show('Edit Success', {cssClass: 'alert-success', timeout: 3000});
       this.transactInfo = res;
        this.amount = res.amount;
        this.nature = res.nature;
        this.date = res.date;
        this.category = res.category;
        this.acc_no = res.acc_no;
        this._id = res._id;
     });
     document.getElementById('update_button').style.display = 'inline';
     document.getElementById('submit_button').style.display = 'none';
   }

    addTransaction(user) {
       const transact = {
         first_name : user.first_name,
         last_name : user.last_name,
         amount: this.amount,
         nature : this.nature,
         category : this.category,
         date : this.date,
         acc_no : this.acc_no
       };
      /*if (!this.validateService.validateRegister(transact)) {
        this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
        return false;
      }*/
      this.authService.registerTransact(transact).subscribe(data => {
        if (data.success) {
          this.flashMessage.show('Transaction Added', {cssClass: 'alert-success', timeout: 3000});
           //this.refresh();
          // window.location.reload();
          this.addx(user);
        } else {
          this.flashMessage.show('Something GOING Wrong', {cssClass: 'alert-danger', timeout: 3000});
        }
      });
    }
    addx(user) {
     /* const map = new Map<number, number>();
      const transacd = this.transactions;
      for (let i = 0; i < transacd.length; i++) {
        map.set(transacd[i].acc_no, transacd[i].amount);
      }
      console.log('HIIIIIIIIIIIIIIIIIIIII');
      map.forEach((value: number, key: number) => {
        console.log(key, value);
      });
     */

      const maps = this.accounts;
      console.log(this.acc_no);
      for (let i = 0; i < maps.length; i++) {
        console.log(maps[i].acc_no);
          if (maps[i].acc_no == this.acc_no) {
            console.log('HIIIIIIIX');
            const x: number = this.amount;
            maps[i].balance = maps[i].balance - x;
            const accounts1 = this.accounts;
            this.authService.deleteAccountss(maps[i]._id).subscribe(data => {
              if (data.n === 1 ) {
                for (let i = 0 ; i < accounts1.length ; i++) {
                  if (accounts1[i]._id == maps[i]._id) {
                    accounts1.splice(i, 1);
                   this.flashMessage.show('Delete success', {cssClass: 'alert-success', timeout: 3000});
                  }
                }
              }
            });
            console.log(maps[i].acc_no);
            const a = {
              first_name: user.first_name,
              last_name: user.last_name,
              acc_no: maps[i].acc_no,
              acc_type: maps[i].acc_type,
              balance: maps[i].balance,
            };
            this.authService.registerAccount(a).subscribe(data => {
              if (data.success) {
                this.flashMessage.show('Account Added', {cssClass: 'alert-success', timeout: 3000});
                this.refresh();
                window.location.reload();
              } else {
                this.flashMessage.show('Something GOING Wrong', {cssClass: 'alert-danger', timeout: 3000});
              }
            });
            break;
          }
      }
      for (let i = 0; i < maps.length; i++) {
       console.log(maps[i].balance);
      }
}
}
