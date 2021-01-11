

export class Demande {
    id: number;
    status: string;
    dateCreation;
    dateDebut;
    dateFin;
    user;

    constructor(id: number, status: string, dateCreation :any, dateDebut: any, dateFin:any, user: any){
        this.id = id;
        this.status = status;
        this.dateCreation = dateCreation;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.user = user;
    }
}