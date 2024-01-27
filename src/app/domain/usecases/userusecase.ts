import { Observable } from "rxjs";
import { UserGateway } from "../models/User/gateway/user-gateway";
import { Token } from "../models/User/token";
import { User } from "../models/User/user";
import { UserResponse } from "../models/User/user-response";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class Userusecase {
    constructor(private _userGateway:UserGateway){}
    login(email:String, password: String): Observable<Token>{
        //aqui va todo lo relacionado con logica
        // if(email.includes('gmail') || email.includes('hotmail')){
        //     return throwError('El usuario no cuenta con un mail valido para acceder a la herrmienta')
        // }
        return this._userGateway.login(email,password);
    }
    signup(user:User):Observable<UserResponse>{
        // aqui aplico la logica
        return this._userGateway.signup(user);
    }
}
