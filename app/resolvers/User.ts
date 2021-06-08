import { Resolver, Mutation, Arg, Query,  FieldResolver, Root  } from "type-graphql";
import { User, UserModel } from "../entities/User";
import { UserInput } from "./types/user-input"
import { v4 as uuid } from 'uuid';
import { Donation } from "../entities/Donation";
import { DonationModel } from "../entities/Donation";

  
@Resolver(_of => User)
export class UserResolver {

    @Query(_returns => User, { nullable: false})
    async returnSingleUser(@Arg("id") id: string){
      return await UserModel.findById(id);
    };

    @Query(() => [User])
    async returnAllUsers(){
      return await UserModel.find();
    };

  
    @Mutation(() => User)
    async createUser(@Arg("data"){firstName,lastName,email}: UserInput): Promise<User> { 
      const user = (await UserModel.create({     
        id: uuid(), 
        firstName,
        lastName,
        email
    })).save();
      return user;
    };

   @Mutation(() => Boolean)
   async deleteUser(@Arg("id") id: string) {
    UserModel.deleteOne(id);
    return true;
  }

  @FieldResolver(_type => (Donation))
  async donations(@Root() user: User): Promise<Donation[]> {
    //console.log(donation, "donation!")
    return DonationModel.findByCondition(d=> d.userId === user.id );
  }
}
