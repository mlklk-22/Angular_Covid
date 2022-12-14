import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  constructor(private user:UserService) { }
  createForm:FormGroup= new FormGroup({
 
    fullname:new FormControl('',Validators.required),
    username:new FormControl('',Validators.required),
    phonenumber:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    age:new FormControl('',Validators.required),
    roleid:new FormControl('',Validators.required),
    image:new FormControl(),
    Numberofvaccines:new FormControl()
  
  })
  ngOnInit(): void 
  {
  }

  savedata()
  {
    debugger
    this.user.createUser(this.createForm.value)

  }

  uploadfile(file:any)
  {
    if(file.length==0)
    return;
    let fileToUpload=<File>file[0]
    const formdata =new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    this.user.uploadAttachment(formdata);
  }

}
