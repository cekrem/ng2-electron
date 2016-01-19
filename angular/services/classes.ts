export class UserData {
    public tournaments: any;
    public settings: any;
    
    constructor(data = {tournaments: {}, settings: {}}) {
        this.tournaments = data.tournaments;
        this.settings = data.settings;
    }
    
    get tournamentsArray(): Array<Tournament> {
        let array = [];
        for (let tournament in this.tournaments) {
            array.push(this.tournaments[tournament]);
        }

        return array;
    }   
}

export class Tournament {
    public id: string;
    public name: string;
    public created: number;
    public rounds: Array<Array<any>>;
    public info: any;
    
    constructor(name: string = 'New tournament') {
        this.name = name;
        this.created = Date.now();
        this.id = this.created.toString(32);
    }
}