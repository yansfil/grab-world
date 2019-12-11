import * as Types from '../types';

import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type GetRecipesQueryVariables = {};


export type GetRecipesQuery = (
  { __typename?: 'Query' }
  & { recipes: Array<(
    { __typename?: 'Recipe' }
    & Pick<Types.Recipe, 'id'>
  )> }
);


export const GetRecipesDocument = gql`
    query getRecipes {
  recipes {
    id
  }
}
    `;
export type GetRecipesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetRecipesQuery, GetRecipesQueryVariables>, 'query'>;

    export const GetRecipesComponent = (props: GetRecipesComponentProps) => (
      <ApolloReactComponents.Query<GetRecipesQuery, GetRecipesQueryVariables> query={GetRecipesDocument} {...props} />
    );
    
export type GetRecipesProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetRecipesQuery, GetRecipesQueryVariables> | TChildProps;
export function withGetRecipes<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetRecipesQuery,
  GetRecipesQueryVariables,
  GetRecipesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetRecipesQuery, GetRecipesQueryVariables, GetRecipesProps<TChildProps>>(GetRecipesDocument, {
      alias: 'getRecipes',
      ...operationOptions
    });
};
export type GetRecipesQueryResult = ApolloReactCommon.QueryResult<GetRecipesQuery, GetRecipesQueryVariables>;