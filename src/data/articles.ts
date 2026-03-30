export interface ArticleProduct {
  name: string;
  slug: string;
  vibeScore: number;
  price: string;
  image: string;
  verdict: string;
  verdictBadge: "Worth It" | "Hidden Gem" | "Overhyped";
  affiliateUrl: string;
}

export interface Article {
  id: string;
  slug: string;
  question: string;
  shortAnswer: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  intro: string;
  sections: { heading: string; body: string }[];
  products: ArticleProduct[];
  faq: { question: string; answer: string }[];
  decision_table?: { need: string; best: string; why: string }[];
  tradeoffs?: { tradeoff: string; side_a: string; side_b: string }[];
  problem_solution?: { problem: string; solution: string }[];
}

export const articles: Article[] = [
  ];
