import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http"
import {User} from "../../../../AuthForArticles/iterfaces";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
@Injectable({
    providedIn:'root'
})
export class AuthService {

    private token =null
    constructor(private http:HttpClient){

    }

    register(user: User): Observable<User> {
        return this.http.post<User>('/auth2/register', user)
    }

    login(user:User) : Observable<{token: string}>  {
        return this.http.post<{token:string}>('/auth2/login', user)
            .pipe(
                tap(
                    ({token}) => {
                        localStorage.setItem('auth-token', token)
                        this.setToken(token)
                    }
                )
            )
    }
    setToken(token: string){
        this.token = token
    }
    getToken():string{
        return this.token
    }
    isAuthenticated():boolean{
        return !! this.token
    }
    logout(){

        this.setToken(null)
        localStorage.clear()
    }
}