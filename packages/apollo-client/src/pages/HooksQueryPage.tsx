import React from 'react';
import { useGetRecipesQuery } from 'graphql-documents/testQuery/testQuery.gen';
export default function() {
  const { loading, error, data } = useGetRecipesQuery();
  console.log({ loading, error, data } ) 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data || !data.recipes ) return <p>Data Uncorrected :(</p>;
  return <p>Complete With Size {data.recipes.map(item => JSON.stringify(item))}</p>;
}
