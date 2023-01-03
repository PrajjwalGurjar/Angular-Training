// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ServiceService } from '../service.service';
// @Component({
//   selector: 'app-register-form',
//   templateUrl: './register-form.component.html',
//   styleUrls: ['./register-form.component.css']
// })
// export class RegisterFormComponent implements OnInit{

//   registerForm!: FormGroup;
//   hide=true;
//   selected="";
// constructor(private fb:FormBuilder, private cs:ServiceService){}

// ngOnInit(){

//   this.registerForm=this.fb.group({
//       name:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
//       email:['',[Validators.required]],
//       password:['', Validators.required],
//       dob:['',Validators.required],
//       gender:['',Validators.required],
//       mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
//       skills:['', Validators.required],
//       })
// }
 
// onSubmit()
// {
// this.cs.saveData(this.registerForm.value).subscribe();
// console.log(this.registerForm.value);
// window.location.reload();
// }

// }
import { Component,OnInit } from '@angular/core';



import { ThemePalette } from '@angular/material/core';



import {MatDialog} from '@angular/material/dialog';



import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ServiceService } from '../service.service';





@Component({

  selector: 'app-register-form',

  templateUrl: './register-form.component.html',

  styleUrls: ['./register-form.component.css']

})



export class RegisterFormComponent implements OnInit {

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

  isLinear=true;


  constructor(private formBuilder:FormBuilder, private cs:ServiceService){}


  ngOnInit(): void {

    
    this.firstFormGroup=this.formBuilder.group({





      id:[''],
      name:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],

        email:['',[Validators.required]],

        fname:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],

        mname:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],

        dob:['',Validators.required],

        gender:['',Validators.required],

        mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]

 
    })


    this.secondFormGroup=this.formBuilder.group({

 
          id:[''],
          fullname:['',Validators.required],
    
          bno:['',Validators.required],
    
          bname:['',Validators.required],
    
          ifsc:['',Validators.required],
    
          mb:['',Validators.required],
    
          ib:['',Validators.required]
    
     
    
        })
    
    
    
      this.thirdFormGroup=this.formBuilder.group({

        id:[''],
    
        presentAddrs:['',Validators.required],
    
        permanentAddrs:['',Validators.required],
    
      })
    
  
  }

  onSubmit(){
    if(this.firstFormGroup.valid && this.secondFormGroup.valid && this.thirdFormGroup.valid)
    {
      console.log(this.firstFormGroup.value);
      console.log(this.secondFormGroup.value);
      console.log(this.thirdFormGroup.value);
      this.cs.firstInfo(this.firstFormGroup.value).subscribe();
      this.cs.secondInfo(this.secondFormGroup.value).subscribe();
      this.cs.thirdInfo(this.thirdFormGroup.value).subscribe();
      alert("Data saved");
    }
  }

}

