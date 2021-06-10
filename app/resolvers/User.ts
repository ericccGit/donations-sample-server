import {
  Resolver,
  Mutation,
  Arg,
  Query,
  FieldResolver,
  Root,
} from "type-graphql";
import { User, UserModel } from "../entities/User";
import { UserInput } from "./types/user-input";
import { v4 as uuid } from "uuid";
import { Donation } from "../entities/Donation";
import { DonationModel } from "../entities/Donation";

/**
 * As I had not used Type-GraphQL before I was basing a lot
 * off the code off of this tutorial:
 * https://blog.logrocket.com/integrating-typescript-graphql/
 *
 * I also wrote the server first so not all of the queries/mutations
 * are needed by the client, however for the purpose of this exercise
 * (and because it's a decoupled API anyways) I kept them around.
 *
 */
@Resolver((_of) => User)
export class UserResolver {
  @Query((_returns) => User, { nullable: false })
  async returnSingleUser(@Arg("id") id: string) {
    return await UserModel.findById(id);
  }

  @Query(() => [User])
  async returnAllUsers() {
    return await UserModel.find();
  }

  @Mutation(() => User)
  async createUser(
    @Arg("data") { firstName, lastName, email }: UserInput
  ): Promise<User> {
    const user = (
      await UserModel.create({
        id: uuid(),
        firstName,
        lastName,
        email,
      })
    ).save();
    return user;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("id") id: string) {
    await UserModel.deleteOne(id);
    return true;
  }

  @FieldResolver((_type) => [Donation])
  async donations(@Root() user: User): Promise<Donation[]> {
    return await DonationModel.findByCondition((d) => d.userId === user.id);
  }
}
