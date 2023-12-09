import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

 constructor(private router : Router){}

  login(user : string, password : string){
    if (user =='admin@admin.com' && password == '123456789') {
      this.router.navigate(['/home'])
      return;
    }
    alert('usuario o contraseña invalido intente de nuevo')
  }
}
