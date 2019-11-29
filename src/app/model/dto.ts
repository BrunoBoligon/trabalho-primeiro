export class LoginDto {
    public login: String
    public password: String
}

export class LoginResultDto {
    public userId: Number
    public login: String
    public name: String
    public token: String
}

export class DocumentsDto {
    public title: String
    public url: String
}

export class ActivitiesDto {
    public title: String
}