import { InputType, Field } from 'type-graphql';
import Recipe from './recipe.type';

@InputType()
export default class RecipeInput implements Partial<Recipe> {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;
}
