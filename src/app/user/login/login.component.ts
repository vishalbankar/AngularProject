import { Component, OnInit } from '@angular/core';
import {Route,Router,ActivatedRoute} from '@angular/router';
import {UserService} from '../../shared/shop/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user= {
    userName:"",
    userPwd:""
  };
  userArr :any= [];
  constructor(private router:Router
              , private ar:ActivatedRoute,
              private userSrv:UserService) { }

  ngOnInit() {
     this.userSrv.getUser().subscribe(data =>{
      //console.log(data);
      this.userArr = data;
    });
  }
/**
 * Function for user login 
 * @param formData 
 */  
  userLogin(formData){
   
    // if user is not registered user then move to registration page
    console.log(this.userArr)
    let userExsist:boolean;
    // this.userArr.forEach(element => {
    for( let i=0; i < this.userArr.length; i++){
      if(this.userArr[i].userName == formData.userName && this.userArr[i].userPwd == formData.userPwd){
        userExsist = true;
        break;
      }
    }
    if(userExsist){
      this.router.navigate(['']);
    } else{
      let promtVal = confirm('You wnat to Register');
      if(promtVal){
          this.router.navigate(['./register'])
        } else{
          this.router.navigate(['./login'])
        }
        this.user = {
          userName:'',
          userPwd:''
        }
    }
      
  }

}
