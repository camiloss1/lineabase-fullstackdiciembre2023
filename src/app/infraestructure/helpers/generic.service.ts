import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError, concat, concatMap, delay, of, retryWhen, take, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GenericService {
    constructor(private http: HttpClient, private router:Router) { }
    public get<T>(url?: string, endpoint?: string, params?: string, headers?: HttpHeaders): Observable<any> {
        const endpointUri = params ? `${endpoint}/` : `${endpoint}`;
        return this.http.get<T>(`${url}/${endpointUri}` + (params ?? ''), { headers }).pipe(
            retryWhen(errors => errors.pipe(
                concatMap((result: any) => {
                    if (result.code == 504) {
                        return of(result);
                    }
                    return throwError(result);
                }),
                delay(1000),
                take(4),
                o => concat(o, throwError(`No fue posible conectarse al servidor`))
            )),
            catchError((err:HttpErrorResponse) => {
                return this.handleError(err);
            }),
        );
    }
    public post<T>(){

    }

    public put<T>(){

    }
    public delete <T>(){

    }
    public patch<T>(){
        
    }
    handleError(error: HttpErrorResponse): any {
        if(error.error != null && error.error.message === 'No Auth') {
            this.router.navigate(['/']);
            localStorage.clear();
        }
        let messageError = error.error != null ? `El Servicio presenta el siguiente error: ${error.message}`: '';
        console.log(messageError);
        return throwError(error);
    }
}