export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any,
};


export type Mutation = {
   __typename?: 'Mutation',
  addRecipe: Recipe,
};


export type MutationAddRecipeArgs = {
  recipe: RecipeInput
};

export type Query = {
   __typename?: 'Query',
  recipe?: Maybe<Recipe>,
  /** Get all the recipes from around the world  */
  recipes: Array<Recipe>,
};


export type QueryRecipeArgs = {
  title: Scalars['String']
};

export type Recipe = {
   __typename?: 'Recipe',
  id: Scalars['ID'],
  title: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  creationDate: Scalars['DateTime'],
  ingredients: Array<Scalars['String']>,
  ratingsCount: Scalars['Float'],
};


export type RecipeRatingsCountArgs = {
  minRate?: Maybe<Scalars['Int']>
};

export type RecipeInput = {
  title: Scalars['String'],
  description?: Maybe<Scalars['String']>,
};
