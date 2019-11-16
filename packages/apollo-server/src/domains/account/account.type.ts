import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export default class Account {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  phone?: string;
}
