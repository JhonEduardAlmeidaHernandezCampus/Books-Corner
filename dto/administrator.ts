import { Expose, Type, Transform} from 'class-transformer';

export class dtoAdministrator {
    @Expose({name: 'Name'})
    @Transform(({value}) => {if(/^[a-z-A-Z\s]+$/.test(value)) return value; else throw {status:400, message:"Error en los parametros"};}, {toClassOnly:true})
    name_User: string;

    @Expose({name: 'Phone'})
    @Transform(({value}) => {if(/^[0-9\s\W]+$/.test(value)) return value; else throw {status:400, message:"Error en los parametros"};}, {toClassOnly:true})
    tel_User: string;

    @Expose({name: 'Email'})
    @Transform(({value}) => { if(/\S+@\S+\.\S+/.test(value)) return value; else throw {status: 400, message: `Los datos no cumplen con los parametros de entrada`}}, {toClassOnly: true})    
    email_User: string;

    @Expose({name: 'Address'})
    @Transform(({value}) => {if(/^[a-zA-Z0-9\s\W]+$/.test(value)) return value; else throw {status:400, message:"Error en los parametros"};}, {toClassOnly:true})
    direccion_User: string;

    constructor(name_User: string, tel_User: string, email_User: string, direccion_User: string){
        this.name_User = name_User;
        this.tel_User = tel_User;
        this.email_User = email_User;
        this.direccion_User = direccion_User;
    }
}