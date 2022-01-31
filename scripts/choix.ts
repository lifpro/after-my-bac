export class Choix {

    id: number;
    etab: string;
    filiere: string;
    selected: boolean = false;

    list: string[] = []

    constructor() {

    }
    add(_filiere: string) {
        this.list.push(_filiere)
    }
    show() {
        console.table(this.list)
    }
}