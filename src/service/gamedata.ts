import { ApolloClient, InMemoryCache, gql } from '@apollo/client';


const GET_GAMES = gql `
  query {
    games {
      count
      edges {
        node {
          name
          objectId
          description
          date
          metacriticScore
          metacriticScoreMax
          price
          genre
          platform {
            ... on Element{
              value
            }
          }
          BackgroundTop {
            url
          }
          BannerImg {
            url
          }          
        }
      }
    }
  }
`
export {client, GET_GAMES}