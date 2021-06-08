  
import { InputType, Field} from "type-graphql";
import { Donation } from "../../entities/Donation";


@InputType()
export class DonationInput implements Partial<Donation> {

  @Field()
  amount!: number;

  @Field()
  tip!: number;

  @Field()
  userId!: String;
  
}