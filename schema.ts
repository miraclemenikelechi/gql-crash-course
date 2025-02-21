export const typeDefs = `#graphql

    type Author{
        id:ID!
        name:String!
        verified:Boolean!
    }

    type Game {
        id: ID!
        title: String!
        platform: [String!]!
    }

    type Review{
        id:ID!
        rating:Int!
        content:String!
    }


    type Query {
        authors:[Author]
        games:[Game]
        reviews:[Review]
    }
`;
