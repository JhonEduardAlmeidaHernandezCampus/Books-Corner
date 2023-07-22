import { Expose, Type, Transform} from 'class-transformer';

export class dtoBookDescription {
    @Expose({name: 'ID_Categorie'})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_Categorie_fk: number;

    @Expose({name: 'Name_Book'})
    @Transform(({value}) => {if(/^[a-z-A-Z\s]+$/.test(value)) return value; else throw {status:400, message:'Error en los parametros'};}, {toClassOnly:true})
    name_Book: string;

    @Expose({name: 'Description'})
    @Transform(({value}) => {if(/^[a-z-A-Z\s.]+$/.test(value)) return value; else throw {status:400, message:'Error en los parametros'};}, {toClassOnly:true})
    description: string;

    @Expose({name: 'Author'})
    @Transform(({value}) => {if(/^[a-z-A-Z\s.]+$/.test(value)) return value; else throw {status:400, message:'Error en los parametros'};}, {toClassOnly:true})
    name_Author: string;

    constructor(id_Categorie_fk: number, name_Book: string, description: string, name_Author: string){
        this.id_Categorie_fk = id_Categorie_fk;
        this.name_Book = name_Book;
        this.description = description;
        this.name_Author = name_Author;
    }
}