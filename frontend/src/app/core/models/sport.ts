export class Sport {
    readonly _name: string;
    readonly _newSport: boolean;

    constructor(name: string, newSport: boolean) {
        this._name = name;
        this._newSport = newSport;
    }

    toJSON() {
        return {
            name: this._name,
            newSport: this._newSport
        };
    }
}
