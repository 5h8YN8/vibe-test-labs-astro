import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { products } from "@/data/products";
import { VerdictBadge } from "@/components/VerdictBadge";
import { OrgSchema } from "@/components/OrgSchema";

function getScoreColor(score: number) {
  if (score >= 85) return "text-gradient-score-high";
  if (score >= 70) return "text-gradient-score-mid";
  return "text-gradient-score-low";
}

export default function Products() {
  return (
    <>
    <OrgSchema />
    <Helmet>
      <title>All Products — Honest Scores & Verdicts | Vibe Test Lab</title>
      <meta name="description" content="Every product we've tested, with honest scores and verdicts." />
      <meta property="og:title" content="All Products — Honest Scores & Verdicts" />
      <meta property="og:description" content="Every product we've tested, with honest scores and verdicts." />
    </Helmet>
    <div className="min-h-screen bg-background pt-14">
      <SiteHeader />

      <section className="px-6 md:px-16 py-16">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary font-bold mb-2">
            Product Index
          </p>
          <h1 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-3">
            All Products
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl">
            Every product we've tested, with honest scores and verdicts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/review/${product.slug}`}
              className="group border border-border bg-card rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary">
                    {product.category}
                  </span>
                  <VerdictBadge verdict={product.verdictBadge} />
                </div>
                <h2 className="font-mono text-base font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {product.name}
                </h2>
                <p className="font-sans text-sm text-muted-foreground line-clamp-2 mb-3">
                  {product.verdict}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-2xl font-bold ${getScoreColor(product.vibeScore)}`}>
                    {product.vibeScore}
                  </span>
                  <span className="font-mono text-sm font-bold text-foreground">{product.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
    </>
  );
}
