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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonationResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Donation_1 = require("../entities/Donation");
const donation_input_1 = require("./types/donation-input");
const uuid_1 = require("uuid");
const User_1 = require("../entities/User");
let DonationResolver = class DonationResolver {
    returnSingleDonation(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Donation_1.DonationModel.findById(id);
        });
    }
    ;
    returnAllDonations() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Donation_1.DonationModel.find();
        });
    }
    ;
    createDonation({ amount, tip, userId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const Donation = (yield Donation_1.DonationModel.create({
                id: uuid_1.v4(),
                amount, tip, userId
            })).save();
            return Donation;
        });
    }
    ;
    deleteDonation(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Donation_1.DonationModel.deleteOne(id);
            return true;
        });
    }
    user(donation) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield User_1.UserModel.findById(donation.userId);
            //Assuming here that there will always be a user for the donation.
            return users[0];
        });
    }
};
__decorate([
    type_graphql_1.Query(_returns => Donation_1.Donation, { nullable: false }),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DonationResolver.prototype, "returnSingleDonation", null);
__decorate([
    type_graphql_1.Query(() => [Donation_1.Donation]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DonationResolver.prototype, "returnAllDonations", null);
__decorate([
    type_graphql_1.Mutation(() => Donation_1.Donation),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [donation_input_1.DonationInput]),
    __metadata("design:returntype", Promise)
], DonationResolver.prototype, "createDonation", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DonationResolver.prototype, "deleteDonation", null);
__decorate([
    type_graphql_1.FieldResolver(_type => (User_1.User)),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Donation_1.Donation]),
    __metadata("design:returntype", Promise)
], DonationResolver.prototype, "user", null);
DonationResolver = __decorate([
    type_graphql_1.Resolver(_of => Donation_1.Donation)
], DonationResolver);
exports.DonationResolver = DonationResolver;
//# sourceMappingURL=Donation.js.map