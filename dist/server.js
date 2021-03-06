"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
// resolvers
const User_1 = require("./resolvers/User");
const Donation_1 = require("./resolvers/Donation");
const cors_1 = __importDefault(require("cors"));
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const schema = yield type_graphql_1.buildSchema({
        resolvers: [User_1.UserResolver, Donation_1.DonationResolver],
        emitSchemaFile: true,
        validate: false,
    });
    const server = new apollo_server_express_1.ApolloServer({ schema });
    const app = express_1.default();
    app.use(cors_1.default());
    //@ts-ignore
    server.applyMiddleware({ app });
    app.listen({ port: 3333 }, () => console.log(`🚀 Server ready and listening at ==> http://localhost:3333${server.graphqlPath}`));
});
main().catch((error) => {
    console.log(error, 'error');
});
//# sourceMappingURL=server.js.map