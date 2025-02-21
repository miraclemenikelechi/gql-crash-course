export const typeDefs = `#graphql

input AddGameInput {
    title: String!
    platform: [String!]!
}

input UpdateGameInput {
    title: String
    platform: [String!]
}

# ::::::::::::::::::::::::::::::::::::

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
    game: Game!
}

# ::::::::::::::::::::::::::::::::::::

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

# ::::::::::::::::::::::::::::::::::::

type Mutation {
    addGame(game: AddGameInput!): Game
    deleteGame(id: ID!): [Game]
    updateGame(id: ID!, gameUpdate: UpdateGameInput!): Game
}
`;
