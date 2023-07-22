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
export class dtoBookDescription {
    constructor(id_Categorie_fk, name_Book, description, name_Author) {
        this.id_Categorie_fk = id_Categorie_fk;
        this.name_Book = name_Book;
        this.description = description;
        this.name_Author = name_Author;
    }
}
__decorate([
    Expose({ name: 'ID_Categorie' }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en los parametros` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoBookDescription.prototype, "id_Categorie_fk", void 0);
__decorate([
    Expose({ name: 'Name_Book' }),
    Transform(({ value }) => { if (/^[a-z-A-Z\s]+$/.test(value))
        return value;
    else
        throw { status: 400, message: 'Error en los parametros' }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoBookDescription.prototype, "name_Book", void 0);
__decorate([
    Expose({ name: 'Description' }),
    Transform(({ value }) => { if (/^[a-z-A-Z\s.]+$/.test(value))
        return value;
    else
        throw { status: 400, message: 'Error en los parametros' }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoBookDescription.prototype, "description", void 0);
__decorate([
    Expose({ name: 'Author' }),
    Transform(({ value }) => { if (/^[a-z-A-Z\s.]+$/.test(value))
        return value;
    else
        throw { status: 400, message: 'Error en los parametros' }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoBookDescription.prototype, "name_Author", void 0);
