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
export class dtoClients {
    constructor(id_Client, id_User_fk, name_Client, tel_Client, email_Client, direccion_Client) {
        this.id_Client = id_Client;
        this.id_User_fk = id_User_fk;
        this.name_Client = name_Client;
        this.tel_Client = tel_Client;
        this.email_Client = email_Client;
        this.direccion_Client = direccion_Client;
    }
}
__decorate([
    Expose({ name: 'Cc' }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en los parametros` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoClients.prototype, "id_Client", void 0);
__decorate([
    Expose({ name: 'ID_Admin' }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en los parametros` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoClients.prototype, "id_User_fk", void 0);
__decorate([
    Expose({ name: 'Name' }),
    Transform(({ value }) => { if (/^[a-z-A-Z\s]+$/.test(value))
        return value;
    else
        throw { status: 400, message: 'Error en los parametros' }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoClients.prototype, "name_Client", void 0);
__decorate([
    Expose({ name: 'Phone' }),
    Transform(({ value }) => { if (/^[0-9\s\W]+$/.test(value))
        return value;
    else
        throw { status: 400, message: "Error en los parametros" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoClients.prototype, "tel_Client", void 0);
__decorate([
    Expose({ name: 'Email' }),
    Transform(({ value }) => { if (/\S+@\S+\.\S+/.test(value))
        return value;
    else
        throw { status: 400, message: `Los datos no cumplen con los parametros de entrada` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoClients.prototype, "email_Client", void 0);
__decorate([
    Expose({ name: 'Address' }),
    Transform(({ value }) => { if (/^[a-zA-Z0-9\s\W]+$/.test(value))
        return value;
    else
        throw { status: 400, message: "Error en los parametros" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoClients.prototype, "direccion_Client", void 0);
