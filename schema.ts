export const typeDefs = `#graphql

type Author {
    id: ID!
    # --------------------------------
    name: String!
    verified: Boolean!

    # relationship
    reviews: [Review!]
}

type Game {
    id: ID!
    # --------------------------------
    title: String!
    platform: [String!]!

    # relationship
    reviews: [Review!]
}

type Review {
    id: ID!
    # --------------------------------
    rating: Int!
    content: String!

    # relationship
    author: Author!
    # authorID: ID
    # --------------------------------
    game: Game!
    # gameID: ID
}

type Query {
    authors: [Author]
    author(id: ID!): Author
    # --------------------------------
    games: [Game]
    game(id: ID!): Game
    # --------------------------------
    reviews: [Review]
    review(id: ID!): Review
}
`;
