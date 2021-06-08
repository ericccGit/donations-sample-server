  
import { InputType, Field} from "type-graphql";
import { Length, IsEmail } from "class-validator";
import { User } from "../../entities/User";



@InputType()
export class UserInput implements Partial<User> {

  @Field()
  @Length(1, 255)
  firstName!: String;

  @Field()
  @Length(1, 255)
  lastName!: String;

  @Field()
  @IsEmail()
  email!: String;
  
}