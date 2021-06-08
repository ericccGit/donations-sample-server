import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { User, UserModel } from "../entities/User";
import { UserInput } from "./types/user-input"
import { v4 as uuid } from 'uuid';

  
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

}
