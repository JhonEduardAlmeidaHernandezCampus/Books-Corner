import { Expose, Type, Transform } from 'class-transformer';

export class dtoLoan {
    @Expose({name: 'Cc_Client'})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_Client_fk: number;

    @Expose({name: 'End_Date'})
    @Transform(({value}) => {if(/^[0-9\W\-]+$/.test(value)) return value; else throw {status:400, message:"Error en los parametros"};}, {toClassOnly:true})
    end_Loan: string;

    @Expose({name: 'Status_Loan'})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_Status_Loan_fk: number;

    @Expose({name: 'ID_Inventory'})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_Inventory_fk: number;

    @Expose({name: 'Description'})
    @Transform(({value}) => {if(/^[a-zA-Z0-9\s\W]+$/.test(value)) return value; else throw {status:400, message:"Error en los parametros"};}, {toClassOnly:true})
    description: string;

    @Expose({name: 'Penalthy'})
    @Transform(({value}) => {if(/^[0-9]+$/.test(value)) return value; else throw {status:400, message:"Error en los parametros"};}, {toClassOnly:true})
    penalthy_Cost: number;

    constructor(id_Client_fk: number, end_Loan: string, id_Status_Loan_fk: number, id_Inventory_fk: number, description: string, penalthy_Cost: number){
        this.id_Client_fk = id_Client_fk;
        this.end_Loan = end_Loan;
        this.id_Status_Loan_fk = id_Status_Loan_fk;
        this.id_Inventory_fk = id_Inventory_fk;
        this.description = description;
        this.penalthy_Cost = penalthy_Cost;
    }
}