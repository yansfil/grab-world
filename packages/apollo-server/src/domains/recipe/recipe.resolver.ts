import { Resolver, Query, FieldResolver, Arg, Root, Mutation, Int, ResolverInterface } from 'type-graphql';

import Recipe from './recipe.type';
import RecipeInput from './recipe.input';

@Resolver(of => Recipe)
export default class RecipeResolver implements ResolverInterface<Recipe> {
  private readonly items: Recipe[] = [
    { id: '1', title: 'sample', creationDate: new Date(), ratingsCount: 5, ingredients: ['pepper', 'banana'] },
  ];

  @Query(returns => Recipe, { nullable: true })
  async recipe(@Arg('title') title: string): Promise<Recipe | undefined> {
    return this.items.find(recipe => recipe.title === title);
  }

  @Query(returns => [Recipe], { description: 'Get all the recipes from around the world ' })
  async recipes(): Promise<Recipe[]> {
    return this.items;
  }

  @Mutation(returns => Recipe)
  async addRecipe(@Arg('recipe') recipeInput: RecipeInput) {
    const recipe = {};
    return this.items;
  }

  @FieldResolver()
  ratingsCount(@Root() recipe: Recipe, @Arg('minRate', type => Int, { defaultValue: 0.0 }) minRate: number): number {
    return 10;
  }
}
