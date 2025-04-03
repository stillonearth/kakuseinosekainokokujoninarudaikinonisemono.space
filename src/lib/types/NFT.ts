export interface Story {
  description: string;
  image: string;
  name: string,
  poster: string;
  scenario: string;
}

export interface Character {
  id: string;
  name: string;
  imageUrl: string;
  traits: string[];
  tokenId: string;
}

export interface NarrativeCard {
  id: string;
  type: 'event' | 'decision' | 'outcome';
  content: string;
  imageUrl: string;
  tokenId: string;
}