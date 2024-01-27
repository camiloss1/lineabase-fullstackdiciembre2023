import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Userusecase } from '../../../domain/usecases/userusecase';
import { User } from '../../../domain/models/User/user';
import { UserResponse } from '../../../domain/models/User/user-response';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  public validationMessages = {
    name: [
      { type: 'pattern', message: 'Solo se permiten letras y espacios' },
      { type: 'required', message: 'Este campo es requerido' }
    ],
    phone: [
      { type: 'required', message: 'Este campo es requerido' }
    ],
    identification: [
      { type: 'required', message: 'Este campo es requerido' }
    ],
    email: [
      { type: 'email', message: 'Solo se permiten campos de tipo email' },
      { type: 'required', message: 'Este campo es requerido' }
    ],
    password: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'pattern', message: 'La contraseña debe tener por lo menos 8 caracteres, una minuscula, una mayuscula y un caracter especial' },
    ],
    terms: [
      { type: 'required', message: 'Se deben aceptar los terminos y condiciones' }
    ]
  }
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private _userUseCase: Userusecase) { }

  public get getControls() {
    return this.registerForm.controls
  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[a-zA-Z\s]+$/)
          ]
        ],
        identification: [
          '',
          [
            Validators.required,
          ]
        ],
        phone: [
          '',
          [
            Validators.required,
          ]
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.email

          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-]).{8,}$/)
          ]
        ],
        terms: [
          '',
          [
            Validators.requiredTrue,
          ]
        ]
      }
    )
  }
  register() {
    if (this.registerForm.valid) {
      var user: User = {
        email: this.registerForm.controls['email'].value,
        name: this.registerForm.controls['name'].value,
        password: this.registerForm.controls['password'].value,
        phone: this.registerForm.controls['phone'].value,
        identification: this.registerForm.controls['identification'].value
      }
      // this.http.post('http://localhost:3000/users/signup', { email, name, password, phone, identification }).subscribe(
      //   (data: any) => {
      //     if (data) {
      //       alert(`El usuario ${data.user.name} fue creado con exito`)
      //       this.router.navigate(['/fullscreen/login'])
      //       return;
      //     }
      //   },
      //   (error) => {
      //     alert(error.error.message)
      //     return;
      //   }
      // );
      this._userUseCase.signup(user).subscribe(
        (data: UserResponse) => {
          if (data) {
            alert(`El usuario ${data.user.name} fue creado con exito`)
            this.router.navigate(['/fullscreen/login'])
            return;
          }
        }
      )
    }
    else {
      alert('Formulario no valido')
      return;
    }
  }
}
