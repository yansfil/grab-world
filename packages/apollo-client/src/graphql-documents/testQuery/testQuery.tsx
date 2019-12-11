import gql from 'graphql-tag';

const RECIPES_TITLE = gql`
    query getRecipes {
        recipes {
            id
        }
    }   
`;

export default RECIPES_TITLE;