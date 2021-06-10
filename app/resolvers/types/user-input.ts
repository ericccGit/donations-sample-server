import { InputType, Field } from "type-graphql";
import { Length, IsEmail } from "class-validator";

@InputType()
export class UserInput {
  @Field()
  @Length(1, 255)
  firstName!: string;

  @Field()
  @Length(1, 255)
  lastName!: string;

  @Field()
  @IsEmail()
  email!: string;
}
