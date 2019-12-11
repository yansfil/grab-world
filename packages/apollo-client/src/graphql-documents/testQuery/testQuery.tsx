import gql from 'graphql-tag';

const RECIPES_TITLE = gql`
    query getRecipes {
        recipes {
            id
            title
            ingredients
            ratingsCount
        }
    }   
`;

export default RECIPES_TITLE;