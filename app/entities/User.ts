import { MockModel } from "../MockModel";
import { ObjectType, Field, ID } from "type-graphql";
//import { prop as Property, getModelForClass } from "@typegoose/typegoose";

//import { Ref } from "../types";

//import {Cart} from "./Cart";


@ObjectType({ description: "The User model" })
export class User {
  [x: string]: any;
    @Field(() => ID)
    id!: string;  

    @Field()
    firstName!: String;

    @Field()
    lastName!: String;


    @Field()
    email!: String;

}

const initialData = [{id: '4699519a-733e-466c-9473-3da5808a3293', firstName: 'Testy', lastName: 'McTesterson', email: 'testyt@gmail.com'}]
const UserModel = new MockModel<User>(initialData);
export {UserModel};