import authorsData from "./assets/authors.json";
import gamesData from "./assets/games.json";
import reviewsData from "./assets/reviews.json";

export const resolvers = {
	Query: {
		authors() {
			return authorsData;
		},
		games() {
			return gamesData;
		},
		reviews() {
			return reviewsData;
		},
	},
};
