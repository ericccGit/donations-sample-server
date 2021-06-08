"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.User = void 0;
const MockModel_1 = require("../MockModel");
const type_graphql_1 = require("type-graphql");
//import { prop as Property, getModelForClass } from "@typegoose/typegoose";
//import { Ref } from "../types";
//import {Cart} from "./Cart";
let User = class User {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
User = __decorate([
    type_graphql_1.ObjectType({ description: "The User model" })
], User);
exports.User = User;
const initialData = [{ id: '4699519a-733e-466c-9473-3da5808a3293', firstName: 'Testy', lastName: 'McTesterson', email: 'testyt@gmail.com' }];
const UserModel = new MockModel_1.MockModel(initialData);
exports.UserModel = UserModel;
//# sourceMappingURL=User.js.map