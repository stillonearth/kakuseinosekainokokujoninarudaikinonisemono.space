export interface Story {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  tokenId: string;
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