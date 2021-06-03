import { Injectable, OnDestroy } from '@angular/core';
import {BehaviorSubject, Observable, Subscription, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppService implements OnDestroy {
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  private readonly apiUrl = `${environment.apiUrl}api/account`;
  private timer: Subscription;
  private _user = new BehaviorSubject<ApplicationUser>(null);
  user$: Observable<ApplicationUser> = this._user.asObservable();

  private storageEventListener(event: StorageEvent) {   }

  AppService.constructor(private router: Router, private http: HttpClient) {
    window.addEventListener('storage', this.storageEventListener.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('storage', this.storageEventListener.bind(this));
  }

  // login(username: string, password: string) { }

  logout() {   }

  refreshToken() {   }

  setLocalStorage(x: LoginResult) {   }

  clearLocalStorage() {  }

  private getTokenRemainingTime() {   }

  private startTokenTimer() {  }

  private stopTokenTimer() {
    this.timer?.unsubscribe();
  }
register(strategyName:String, data?: any){
  return this.http.post('http://localhost:3000/api/sign-up',data);
}
login(strategyName:String, data?: any){
  return this.http.post('http://localhost:3000/api/login',data);
}

  secretkey(){
   return this.http.get('http://localhost:3000/api/secret-route');
  }
}

function private(_private: any, router: any, Router: any, private: any, http: any, HttpClient: typeof HttpClient) {
  throw new Error('Function not implemented.');
}


function router(_private: any, router: any, Router: any, private: any, http: any, HttpClient: typeof HttpClient) {
  throw new Error('Function not implemented.');
}


function Router(_private: any, router: any, Router: any, private: any, http: any, HttpClient: typeof HttpClient) {
  throw new Error('Function not implemented.');
}


function http(_private: any, router: any, Router: any, private: any, http: any, HttpClient: typeof HttpClient) {
  throw new Error('Function not implemented.');
}


function ngOnDestroy() {
  throw new Error('Function not implemented.');
}


function login(username: any, _string: any, password: any, string: any) {
  throw new Error('Function not implemented.');
}


function username(username: any, _string: any, password: any, string: any) {
  throw new Error('Function not implemented.');
}


function password(username: any, _string: any, password: any, string: any) {
  throw new Error('Function not implemented.');
}


function logout() {
  throw new Error('Function not implemented.');
}


function refreshToken() {
  throw new Error('Function not implemented.');
}


function setLocalStorage(x: any, LoginResult: any) {
  throw new Error('Function not implemented.');
}


function x(x: any, LoginResult: any) {
  throw new Error('Function not implemented.');
}


function LoginResult(x: any, LoginResult: any) {
  throw new Error('Function not implemented.');
}


function clearLocalStorage() {
  throw new Error('Function not implemented.');
}


function register(strategyName: any, String: StringConstructor, arg2: any) {
  throw new Error('Function not implemented.');
}


function strategyName(strategyName: any, String: StringConstructor, arg2: any) {
  throw new Error('Function not implemented.');
}


function secretkey() {
  throw new Error('Function not implemented.');
}
