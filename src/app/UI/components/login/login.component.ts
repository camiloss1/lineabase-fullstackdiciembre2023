import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf,NgFor, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  public validationMessages = {
    email: [
      { type: 'pattern',message:'Solo se permiten campos de tipo email'},
      {type:'email', message:'Solo se permiten campos de tipo email'},
      {type:'required', message:'Este campo es requerido'}
    ],
    password: [
      {type:'required', message:'Este campo es requerido'},
      { type: 'pattern',message:'La contraseña debe tener por lo menos 8 caracteres, una minuscula, una mayuscula y un caracter especial'},
      {type:'minlength', message:'Este campo debe tener por lo menos 9 caracteres'}
    ]
  }
  constructor(private router: Router, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: [
          '',
          [
            Validators.pattern(/[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i),
            Validators.email,
            Validators.required
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(9),
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-]).{8,}$/)
          ]
        ]
      }
    )
  }

  public get getControls() {
    return this.loginForm.controls
  }

  login() {
    var user = this.loginForm.controls['email'].value;
    var password = this.loginForm.controls['password'].value;
    if (this.loginForm.valid) {
      if (user == 'admin@admin.com' && password == 'Colombia2023*') {
        this.router.navigate(['/home'])
        return;
      }
      alert('usuario o contraseña invalido intente de nuevo')
      return;
    }
    alert('El formulario no es valido')
    return;
  }
}
