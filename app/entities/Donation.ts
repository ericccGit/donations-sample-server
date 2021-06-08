import { MockModel } from "../MockModel";
import { ObjectType, Field, ID, Int } from "type-graphql";
import { prop as Property } from "@typegoose/typegoose";
import { User } from "./User";

//import { Ref } from "../types";

//import {Cart} from "./Cart";


@ObjectType({ description: "The User model" })
export class Donation {
  [x: string]: any;
    @Field(() => ID)
    id!: string;  

    @Field()
    userId!: String;

    @Field()
    @Property({ref: User})
    userId!: String;

    @Field(_type => Int)
    @Property()
    amount: number;

    @Field(_type => Int)
    @Property()
    tip: number;

}

const initialData : Donation[] = [{id: '8699519a-723e-466c-9473-3da5808a5293', amount: 5, tip: 2, userId: '4699519a-733e-466c-9473-3da5808a3293' }]
const DonationModel = new MockModel<Donation>(initialData);
export {DonationModel};