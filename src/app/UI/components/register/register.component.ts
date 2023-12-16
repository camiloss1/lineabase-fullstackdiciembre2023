import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,NgFor],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  public validationMessages = {
    name: [
      {type:'pattern', message:'Solo se permiten letras y espacios'},
      {type:'required', message:'Este campo es requerido'}
    ],
    lastname: [
      {type:'pattern', message:'Solo se permiten letras y espacios'},
      {type:'required', message:'Este campo es requerido'}
    ],
    email: [
      {type:'email', message:'Solo se permiten campos de tipo email'},
      {type:'required', message:'Este campo es requerido'}
    ],
    password: [
      {type:'required', message:'Este campo es requerido'},
      { type: 'pattern',message:'La contraseña debe tener por lo menos 8 caracteres, una minuscula, una mayuscula y un caracter especial'},
    ],
    terms: [
      {type:'required', message:'Se deben aceptar los terminos y condiciones'}
    ]
  }
  constructor(private formBuilder: FormBuilder, private router: Router) { }

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
        lastname: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[a-zA-Z\s]+$/)
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
    if(this.registerForm.valid)
    {
      this.router.navigate(['/fullscreen/login'])
      return;
    }
    alert('Formulario no valido')
  }
}
