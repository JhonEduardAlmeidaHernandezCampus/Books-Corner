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
export class dtoAdministrator {
    constructor(name_User, tel_User, email_User, direccion_User) {
        this.name_User = name_User;
        this.tel_User = tel_User;
        this.email_User = email_User;
        this.direccion_User = direccion_User;
    }
}
__decorate([
    Expose({ name: 'Name' }),
    Transform(({ value }) => { if (/^[a-z-A-Z\s]+$/.test(value))
        return value;
    else
        throw { status: 400, message: "Error en los parametros" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoAdministrator.prototype, "name_User", void 0);
__decorate([
    Expose({ name: 'Phone' }),
    Transform(({ value }) => { if (/^[0-9\s\W]+$/.test(value))
        return value;
    else
        throw { status: 400, message: "Error en los parametros" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoAdministrator.prototype, "tel_User", void 0);
__decorate([
    Expose({ name: 'Email' }),
    Transform(({ value }) => { if (/\S+@\S+\.\S+/.test(value))
        return value;
    else
        throw { status: 400, message: `Los datos no cumplen con los parametros de entrada` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoAdministrator.prototype, "email_User", void 0);
__decorate([
    Expose({ name: 'Address' }),
    Transform(({ value }) => { if (/^[a-zA-Z0-9\s\W]+$/.test(value))
        return value;
    else
        throw { status: 400, message: "Error en los parametros" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoAdministrator.prototype, "direccion_User", void 0);
