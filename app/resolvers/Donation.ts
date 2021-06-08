import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { Donation, DonationModel } from "../entities/Donation";
import { DonationInput } from "./types/donation-input"
import { v4 as uuid } from 'uuid';

  
@Resolver(_of => Donation)
export class DonationResolver {

    @Query(_returns => Donation, { nullable: false})
    async returnSingleDonation(@Arg("id") id: string){
      return await DonationModel.findById(id);
    };

    @Query(() => [Donation])
    async returnAllDonations(){
      return await DonationModel.find();
    };

  
    @Mutation(() => Donation)
    async createDonation(@Arg("data"){amount, tip, userId}: DonationInput): Promise<Donation> { 
      const Donation = (await DonationModel.create({     
        id: uuid(), 
        amount, tip, userId
    })).save();
      return Donation;
    };

   @Mutation(() => Boolean)
   async deleteDonation(@Arg("id") id: string) {
    DonationModel.deleteOne(id);
    return true;
  }

//todo

  //@FieldResolver(_type => (Donation))
  //async products(@Root() order: Order): Promise<Product> {
  //  console.log(order, "order!")
  //  return (await ProductModel.findById(order._doc.products))!;
  //}
}
