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
export class dtoLoan {
    constructor(id_Client_fk, end_Loan, id_Status_Loan_fk, id_Inventory_fk, description, penalthy_Cost) {
        this.id_Client_fk = id_Client_fk;
        this.end_Loan = end_Loan;
        this.id_Status_Loan_fk = id_Status_Loan_fk;
        this.id_Inventory_fk = id_Inventory_fk;
        this.description = description;
        this.penalthy_Cost = penalthy_Cost;
    }
}
__decorate([
    Expose({ name: 'Cc_Client' }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en los parametros` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoLoan.prototype, "id_Client_fk", void 0);
__decorate([
    Expose({ name: 'End_Date' }),
    Transform(({ value }) => { if (/^[0-9\W\-]+$/.test(value))
        return value;
    else
        throw { status: 400, message: "Error en los parametros" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoLoan.prototype, "end_Loan", void 0);
__decorate([
    Expose({ name: 'Status_Loan' }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en los parametros` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoLoan.prototype, "id_Status_Loan_fk", void 0);
__decorate([
    Expose({ name: 'ID_Inventory' }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en los parametros` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoLoan.prototype, "id_Inventory_fk", void 0);
__decorate([
    Expose({ name: 'Description' }),
    Transform(({ value }) => { if (/^[a-zA-Z0-9\s\W]+$/.test(value))
        return value;
    else
        throw { status: 400, message: "Error en los parametros" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoLoan.prototype, "description", void 0);
__decorate([
    Expose({ name: 'Penalthy' }),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: "Error en los parametros" }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoLoan.prototype, "penalthy_Cost", void 0);
