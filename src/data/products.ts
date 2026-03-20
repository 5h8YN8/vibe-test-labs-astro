export interface TestResult {
  category: string;
  score: number;
  summary: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  vibeScore: number;
  verdict: string;
  verdictBadge: "Worth It" | "Overhyped" | "Hidden Gem";
  price: string;
  priceRange: string;
  image: string;
  images: string[];
  trending: boolean;
  date: string;
  affiliateUrl: string;
  // Detailed review fields
  questionHeadline: string;
  answerSnippet: string;
  problemSection: string;
  solutionSection: string;
  howToUse: string[];
  testResults: TestResult[];
  pros: string[];
  cons: string[];
  finalVerdictSummary: string;
  faq: { question: string; answer: string }[];
  viralReason: string;
}

export const products: Product[] = [];
