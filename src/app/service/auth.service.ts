import { Injectable } from '@angular/core';
import { LoginResultDto } from '../model/dto';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private loginResult: LoginResultDto

    constructor() { 
        this.loadUser()
    }

    registerAuth(loginResult: LoginResultDto) {
        this.loginResult = loginResult
        sessionStorage.setItem('user-auth', JSON.stringify(loginResult))
    }

    isUserAuth(): Boolean {
        return this.loginResult != null
    }

    getUserToken(): String {
        if (this.isUserAuth()) {
            return this.loginResult.token
        } else {
            return null
        }
    }

    getUserId(): Number {
        if (this.isUserAuth()) {
            return this.loginResult.userId
        } else {
            return null
        }
    }

    private loadUser() {
        let user = sessionStorage.getItem('user-auth')
        if (user != null) {
            this.loginResult = JSON.parse(user)
        }
    }
}