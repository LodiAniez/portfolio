export interface ISupportingVerses {
	text: string;
	verse: string;
}

export interface IGospel {
	description: string;
	verses: ISupportingVerses[];
	imagePath: string;
	imageAlt: string;
	imagePosition?: "left" | "right";
}