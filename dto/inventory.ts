import { Expose, Type, Transform} from 'class-transformer';

export class dtoInventory {
    @Expose({name: 'ID_Book'})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_Book_fk: number;

    @Expose({name: 'ID_Status_Inventory'})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_Status_Inventory: number;

    @Expose({name: 'Count'})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    quantity_Book: number;

    constructor(id_Book_fk: number, id_Status_Inventory: number, quantity_Book: number){
        this.id_Book_fk = id_Book_fk;
        this.id_Status_Inventory = id_Status_Inventory;
        this.quantity_Book = quantity_Book;
    }
}