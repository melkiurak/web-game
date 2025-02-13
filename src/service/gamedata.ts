import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://parseapi.back4app.com/graphql', 
    cache: new InMemoryCache(),
    headers: {
      "X-Parse-Application-Id": process.env.REACT_APP_PARSE_APP_ID,
      "X-Parse-REST-API-Key": process.env.REACT_APP_PARSE_API_KEY, 
    }
});
  

const GET_GAMES = gql `
  query {
    games {
      count
      edges {
        node {
          objectId
          name
          BackgroundTop {
            url
          }
        }
      }
    }
  }
`
export {client, GET_GAMES}