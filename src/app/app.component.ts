import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'Angular 6 Project!';
   todaydate;
   componentproperty;
   name;
   date;
   emailid;
   passwd;
   address;
   mobile;
   city;
   formdata;
   ngOnInit() {
      this.formdata = new FormGroup({
         emailid: new FormControl("", Validators.compose([
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
         ])),
         name: new FormControl(""),
         date: new FormControl(""),
         passwd: new FormControl(""),
         address: new FormControl(""),
         mobile: new FormControl(""),
         city: new FormControl(""),
         
      });
   }
   onClickSubmit(data) {this.emailid = data.emailid; this.passwd = data.passwd; this.address = data.address; this.mobile = data.mobile; this.city = data.city; this.name = data.name; this.date = data.date;}
  
}