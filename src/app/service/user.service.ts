import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginDto, LoginResultDto } from '../model/dto';
import { Observable } from 'rxjs';
import { WS_LOGIN } from '../utils/ws_utils';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {

    }

    login(loginData: LoginDto): Observable<LoginResultDto> {
        return this.http.post<LoginResultDto>(WS_LOGIN, loginData)
    }

}