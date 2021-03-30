import { Component } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginForm=new FormGroup({
    email:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
    lname:new FormControl('',Validators.required),
    fname:new FormControl('',Validators.required),
    lamount:new FormControl('',Validators.required),
    ltype:new FormControl('',Validators.required),
    ldate:new FormControl('',Validators.required),
    lrate:new FormControl('',Validators.required)
  })
}
