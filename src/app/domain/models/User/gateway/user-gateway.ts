import { Observable } from "rxjs";
import { Token } from "../token";
import { User } from "../user";
import { UserResponse } from "../user-response";

export abstract class UserGateway {
    abstract login(email: String, password: String): Observable<Token>;
    abstract signup(user: User): Observable<UserResponse>
}