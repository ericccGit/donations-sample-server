import { InputType, Field} from "type-graphql";
import { Length, IsEmail } from "class-validator";

@InputType()
export class UserInput {

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