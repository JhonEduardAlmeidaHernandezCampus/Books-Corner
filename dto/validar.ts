import { Expose, Type, Transform} from 'class-transformer';
import {IsInt} from "class-validator";

export class validarID {

    @IsInt()
    @Expose({name: 'id'})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_Book: number;

    @IsInt()
    @Expose({name: 'id'})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_User: number;

    @IsInt()
    @Expose({name: 'id'})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_Categorie: number;

    @IsInt()
    @Expose({name: 'id'})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_Client: number;

    @IsInt()
    @Expose({name: 'id'})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_Inventory: number;

    @IsInt()
    @Expose({name: 'id'})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_Loan: number;

    @IsInt()
    @Expose({name: 'id'})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_Status: number;

    constructor(id_Book: number, id_User: number, id_Categorie: number, id_Client: number, id_Inventory: number, id_Loan: number, id_Status: number){
        this.id_Book = id_Book;   // Books Description
        this.id_User = id_User;   // Administrator
        this.id_Categorie = id_Categorie;   // Categorie Books
        this.id_Client = id_Client;   // Clients
        this.id_Inventory = id_Inventory;   // Inventory
        this.id_Loan = id_Loan;   // Loan
        this.id_Status = id_Status;   // Status Inventory - Loan
    }
}