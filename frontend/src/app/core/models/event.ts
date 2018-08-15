export class Event {
    readonly _sportName: string;
    readonly _date: string;
    readonly _uur: string;
    readonly _user: string;

    constructor(name: string, date: string, uur: string, user: string) {
        this._sportName = name;
        this._date = date;
        this._uur = uur;
        this._user = user;
    }

    toJSON() {
        return {
            sportName: this._sportName,
            date: this._date,
            uur: this._uur,
            user: this._user
        };
    }
}
