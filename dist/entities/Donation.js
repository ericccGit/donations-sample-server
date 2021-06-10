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
exports.DonationModel = exports.Donation = void 0;
const MockModel_1 = require("../util/MockModel");
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
let Donation = class Donation {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], Donation.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Donation.prototype, "userId", void 0);
__decorate([
    type_graphql_1.Field(_type => type_graphql_1.Float),
    class_validator_1.Min(0),
    class_validator_1.IsNumber({ maxDecimalPlaces: 2 }),
    __metadata("design:type", Number)
], Donation.prototype, "amount", void 0);
__decorate([
    type_graphql_1.Field(_type => type_graphql_1.Float),
    class_validator_1.Min(0),
    class_validator_1.IsNumber({ maxDecimalPlaces: 2 }),
    __metadata("design:type", Number)
], Donation.prototype, "tip", void 0);
Donation = __decorate([
    type_graphql_1.ObjectType({ description: "The Donation model" })
], Donation);
exports.Donation = Donation;
const initialData = [{ id: '8699519a-723e-466c-9473-3da5808a5293', amount: 5.50, tip: 2.20, userId: '4699519a-733e-466c-9473-3da5808a3293' }];
const DonationModel = new MockModel_1.MockModel(initialData);
exports.DonationModel = DonationModel;
//# sourceMappingURL=Donation.js.map