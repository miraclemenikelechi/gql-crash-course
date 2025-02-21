type ID = string;

interface Author {
	name: string;
	verified: boolean;

	id: ID;
}

interface Game {
	platform: string[];
	title: string;

	id: ID;
}

interface Review {
	content: string;
	rating: number;

	id: ID;
}

declare const authorsData: Author;
declare const gamesData: Game;
declare const reviewsData: Review;
