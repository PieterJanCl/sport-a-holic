export class User {
    private _username: String;
    private _userpasswd: String;

    constructor(name: String, passwd: String) {
        this._username = name;
        this._userpasswd = passwd;
    }

    get username() {
        return this._username;
    }

    set username(name: String) {
        this._username = name;
    }

    get userpasswd() {
        return this._userpasswd;
    }

    set userpasswd(passwd: String) {
        this._userpasswd = passwd;
    }
}
