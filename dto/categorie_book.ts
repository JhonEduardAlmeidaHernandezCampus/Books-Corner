import { Expose, Type, Transform } from 'class-transformer';

export class dtoCategorieBooks {
    
    @Expose({name: 'Name_Categorie'})
    @Transform(({value}) => {if(/^[a-zA-Z\s]+$/.test(value)) return value; else throw {status:400, message:"Error en los parametros"};}, {toClassOnly:true})
    name_Categorie: string;

    constructor(name_Categorie: string){
        this.name_Categorie = name_Categorie;
    }
}