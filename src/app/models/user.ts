export class User{
    id: number;
    nom: string;
    prenom: string;
    username: string;
    password: string;
    role: string;

    constructor(id: number, nom: string, prenom :string, username: string, password:string, role:string){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.username = username;
        this.password = password;
        this.role = role;
    }
}