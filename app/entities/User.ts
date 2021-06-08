import { ObjectType, Field, ID } from "type-graphql";
//import { prop as Property, getModelForClass } from "@typegoose/typegoose";

//import { Ref } from "../types";

//import {Cart} from "./Cart";


@ObjectType({ description: "The User model" })
export class User {
  [x: string]: any;
    @Field(() => ID)
    id!: number;  

    @Field()
    firstName!: String;

    @Field()
    lastName!: String;


    @Field()
    email!: String;

}
