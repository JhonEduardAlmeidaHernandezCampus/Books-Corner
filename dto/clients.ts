import { Expose, Type, Transform} from 'class-transformer';

export class dtoClients {
    @Expose({name: 'Cc'})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_Client: number;

    @Expose({name: 'ID_Admin'})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_User_fk: number;

    @Expose({name: 'Name'})
    @Transform(({value}) => {if(/^[a-z-A-Z\s]+$/.test(value)) return value; else throw {status:400, message:'Error en los parametros'};}, {toClassOnly:true})
    name_Client: string;

    @Expose({name: 'Phone'})
    @Transform(({value}) => {if(/^[0-9\s\W]+$/.test(value)) return value; else throw {status:400, message:"Error en los parametros"};}, {toClassOnly:true})
    tel_Client: string;

    @Expose({name: 'Email'})
    @Transform(({value}) => { if(/\S+@\S+\.\S+/.test(value)) return value; else throw {status: 400, message: "Error en los parametros"}}, {toClassOnly: true})    
    email_Client: string;

    @Expose({name: 'Address'})
    @Transform(({value}) => {if(/^[a-zA-Z0-9\s\W]+$/.test(value)) return value; else throw {status:400, message:"Error en los parametros"};}, {toClassOnly:true})
    direccion_Client: string;

    constructor(id_Client: number, id_User_fk: number, name_Client: string, tel_Client: string, email_Client: string, direccion_Client: string){
        this.id_Client = id_Client;
        this.id_User_fk = id_User_fk;
        this.name_Client = name_Client;
        this.tel_Client = tel_Client;
        this.email_Client = email_Client;
        this.direccion_Client = direccion_Client;
    }
}