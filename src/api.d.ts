interface apiCard {
  cmc: number;
  flavor: string;
  id: string;
  imageUrl: string;
  name: string;
  power: string;
  rarity: string;
  toughness: string;
  type: string;
}

interface response {
  cards: apiCard[];
}

export { apiCard, response };
