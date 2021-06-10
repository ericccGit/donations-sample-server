import { MockModel } from "../util/MockModel";
import { ObjectType, Field, ID, Float } from "type-graphql";
import { Min, IsNumber } from "class-validator";

@ObjectType({ description: "The Donation model" })
export class Donation {
  [x: string]: any;
  @Field(() => ID)
  id: string;

  @Field()
  userId: string;

  //Would probably want define a custom type for money in the real world
  //ex - https://shopify.dev/docs/admin-api/graphql/reference/common-objects/moneyv2
  @Field((_type) => Float)
  @Min(0)
  @IsNumber({ maxDecimalPlaces: 2 })
  amount: number;

  @Field((_type) => Float)
  @Min(0)
  @IsNumber({ maxDecimalPlaces: 2 })
  tip: number;
}

const initialData: Donation[] = [
  {
    id: "8699519a-723e-466c-9473-3da5808a5293",
    amount: 5.5,
    tip: 2.2,
    userId: "4699519a-733e-466c-9473-3da5808a3293",
  },
  {
    id: "2239519a-723e-466c-9473-3da5808a5293",
    amount: 4990.67,
    tip: 3.0,
    userId: "6a1c519a-733e-496c-9473-3da5808a3293",
  },
];

const DonationModel = new MockModel<Donation>(initialData);
export { DonationModel };
