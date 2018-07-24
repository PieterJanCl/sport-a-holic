export class Sport {
    readonly _name: string;

    constructor(name: string) {
        this._name = name;
    }

    toJSON() {
        return {
            name: this._name
        };
    }
}
