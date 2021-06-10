import {
  FieldResolver,
  Resolver,
  Mutation,
  Arg,
  Query,
  Root,
} from "type-graphql";
import { Donation, DonationModel } from "../entities/Donation";
import { DonationInput } from "./types/donation-input";
import { v4 as uuid } from "uuid";
import { User, UserModel } from "../entities/User";

@Resolver((_of) => Donation)
export class DonationResolver {
  @Query((_returns) => Donation, { nullable: false })
  async returnSingleDonation(@Arg("id") id: string) {
    return await DonationModel.findById(id);
  }

  @Query(() => [Donation])
  async returnAllDonations() {
    return await DonationModel.find();
  }

  @Mutation(() => Donation)
  async createDonation(
    @Arg("data") { amount, tip, userId }: DonationInput
  ): Promise<Donation> {
    const Donation = (
      await DonationModel.create({
        id: uuid(),
        amount,
        tip,
        userId,
      })
    ).save();
    return Donation;
  }

  @Mutation(() => Boolean)
  async deleteDonation(@Arg("id") id: string) {
    await DonationModel.deleteOne(id);
    return true;
  }

  @FieldResolver((_type) => User)
  async user(@Root() donation: Donation): Promise<User> {
    const users = await UserModel.findById(donation.userId);
    //Assuming here that there will always be a user for the donation.
    return users[0];
  }
}
