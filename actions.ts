import authorsData from "./assets/authors.json";
import gamesData from "./assets/games.json";
import reviewsData from "./assets/reviews.json";

export const resolvers = {
	Query: {
		/**
		 * get all authors
		 */
		authors(parent, args, context) {
			return authorsData;
		},

		/**
		 * CRUD operation
		 *
		 * Get a single author by ID.
		 * @param _ - Parent object (unused).
		 * @param id - The ID of the author to retrieve.
		 */
		author(_, { id }) {
			return authorsData.find((author) => author.id === (id as ID));
		},

		/* :::::::::::::::::: */

		/**
		 * get all games
		 */
		games() {
			return gamesData;
		},

		/**
		 * CRUD operation
		 *
		 * Get a single game by ID.
		 * @param _ - Parent object (unused).
		 * @param id - The ID of the game to retrieve.
		 */
		game(_, { id }) {
			return gamesData.find((game) => game.id === (id as ID));
		},

		/* :::::::::::::::::: */

		/**
		 * get all reviews
		 */
		reviews() {
			return reviewsData;
		},

		/**
		 * CRUD operation
		 *
		 * Get a single review by ID.
		 * @param _ - Parent object (unused).
		 * @param id - The ID of the review to retrieve.
		 */
		review(_, { id }) {
			return reviewsData.find((review) => review.id === (id as ID));
		},
	},

	/**
	 * handling relationships
	 */

	Author: {
		/**
		 * Get all reviews written by a specific author.
		 * @param id - The ID of the author.
		 */
		reviews({ id }) {
			return reviewsData.filter((review) => review.authorId === (id as ID));
		},
	},

	Game: {
		/**
		 * Get all reviews for a specific game.
		 * @param id - The ID of the game.
		 */
		reviews({ id }) {
			return reviewsData.filter((review) => review.gameId === (id as ID));
		},
	},

	Review: {
		/**
		 * Get the author of a specific review.
		 * @param authorId - The ID of the author.
		 */
		author({ authorId }) {
			return authorsData.find((author) => author.id === (authorId as ID));
		},

		/**
		 * Get the game associated with a specific review.
		 * @param gameId - The ID of the game.
		 */
		game({ gameId }) {
			return gamesData.find((game) => game.id === (gameId as ID));
		},
	},
};
