export const NODE_ENV = process.env.NODE_ENV;

export const IS_PRODUCTION = NODE_ENV === 'production';

let GRAPHQL_HTTP_LINK_URL = 'http://localhost:4000/graphql';
switch (NODE_ENV) {
  case 'development':
    GRAPHQL_HTTP_LINK_URL = 'http://localhost:4000/graphql';
    break;
  case 'production':
    GRAPHQL_HTTP_LINK_URL = 'http://localhost:4000/graphql';
    break;
}

export { GRAPHQL_HTTP_LINK_URL };
