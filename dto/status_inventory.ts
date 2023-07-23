import { Expose, Type, Transform} from 'class-transformer';

export class dtoStatusInventory {

    @Expose({name: 'Name'})
    @Transform(({value}) => {if(/^[a-z-A-Z\s]+$/.test(value)) return value; else throw {status:400, message:'Error en los parametros'};}, {toClassOnly:true})
    name_Status: string;

    constructor(name_Status: string){
        this.name_Status = name_Status;
    }
}