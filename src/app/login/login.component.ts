import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../model/dto';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginData = new LoginDto()

  constructor(private userService: UserService,
              private authService: AuthService, 
              private router: Router) { }

  ngOnInit() {
  }

  signIn() {
      let result = this.userService.login(this.loginData)
      result.subscribe( resultLogin => {
          this.authService.registerAuth(resultLogin)
          this.router.navigateByUrl("/home")
      })
  }
}
