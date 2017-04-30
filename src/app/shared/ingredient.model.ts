export class Ingredient {
    constructor(private _name: string, private _amount: number) {}

    public get name(): string {
        return this._name;
    }

    public get amount(): number {
        return this._amount;
    }
}