var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
import { IsInt } from "class-validator";
export class validarID {
    constructor(id_Book, id_User, id_Categorie, id_Client, id_Inventory, id_Loan, id_Status) {
        this.id_Book = id_Book; // Books Description
        this.id_User = id_User; // Administrator
        this.id_Categorie = id_Categorie; // Categorie Books
        this.id_Client = id_Client; // Clients
        this.id_Inventory = id_Inventory; // Inventory
        this.id_Loan = id_Loan; // Loan
        this.id_Status = id_Status; // Status Inventory - Loan
    }
}
__decorate([
    IsInt(),
    Expose({ name: 'id' }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en los parametros` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], validarID.prototype, "id_Book", void 0);
__decorate([
    IsInt(),
    Expose({ name: 'id' }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en los parametros` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], validarID.prototype, "id_User", void 0);
__decorate([
    IsInt(),
    Expose({ name: 'id' }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en los parametros` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], validarID.prototype, "id_Categorie", void 0);
__decorate([
    IsInt(),
    Expose({ name: 'id' }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en los parametros` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], validarID.prototype, "id_Client", void 0);
__decorate([
    IsInt(),
    Expose({ name: 'id' }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en los parametros` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], validarID.prototype, "id_Inventory", void 0);
__decorate([
    IsInt(),
    Expose({ name: 'id' }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en los parametros` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], validarID.prototype, "id_Loan", void 0);
__decorate([
    IsInt(),
    Expose({ name: 'id' }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en los parametros` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], validarID.prototype, "id_Status", void 0);
