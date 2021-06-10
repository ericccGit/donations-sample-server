import { MockModel } from "../util/MockModel";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType({ description: "The User model" })
export class User {
  [x: string]: any;
  @Field(() => ID)
  id!: string;

  @Field()
  firstName!: string;

  @Field()
  lastName!: string;

  @Field()
  email!: string;
}

const initialData = [
  {
    id: "4699519a-733e-466c-9473-3da5808a3293",
    firstName: "Testy",
    lastName: "McTesterson",
    email: "testy_mctesterson@test.com",
  },
  {
    id: "6a1c519a-733e-496c-9473-3da5808a3293",
    firstName: "Nat",
    lastName: "Skaf",
    email: "nathalieeee_skaf@gmail.com",
  },
];
const UserModel = new MockModel<User>(initialData);
export { UserModel };
