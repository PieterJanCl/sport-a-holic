export class User {
    private _username: String;
    private _passwoord: String;

    constructor(name: String, passwd: String) {
        this._username = name;
        this._passwoord = passwd;
    }

    get username() {
        return this._username;
    }

    set username(name: String) {
        this._username = name;
    }

    get passwoord() {
        return this._passwoord;
    }

    set passwoord(passwd: String) {
        this._passwoord = passwd;
    }
}
