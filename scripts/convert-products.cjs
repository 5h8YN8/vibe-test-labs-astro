#!/usr/bin/env node
/**
 * convert-products.cjs
 * Reads src/data/products.ts from the vibe-check-reviews repo and generates
 * one Astro page per product at src/pages/review/[slug].astro
 *
 * Usage:
 *   REACT_SOURCE_PATH=/tmp/vibe-check-reviews node scripts/convert-products.cjs
 */

const fs = require('fs');
const path = require('path');

const { execSync } = require('child_process');

// Products file: prefer explicit env var, then workspace root, then legacy path
const WORKSPACE_ROOT = path.resolve(__dirname, '..');
const PRODUCTS_FILE = process.env.PRODUCTS_FILE
  || (fs.existsSync(path.join(WORKSPACE_ROOT, 'products.ts')) ? path.join(WORKSPACE_ROOT, 'products.ts') : null)
  || path.join(process.env.REACT_SOURCE_PATH || '/tmp/vibe-check-reviews', 'src/data/products.ts');

const OUT_DIR = path.resolve(__dirname, '../src/pages/review');
const SITE_URL = 'https://vibe-test-labs.pages.dev';
const SHOPIFY_URL = 'https://vibe-test-lab.myshopify.com';

fs.mkdirSync(OUT_DIR, { recursive: true });

// ── Parse products.ts via Node --experimental-strip-types ─────────────────────

function parseProducts(filePath) {
  const absPath = path.resolve(filePath);
  const helperPath = '/tmp/_vibe_dump_products.mts';

  // Write a tiny TypeScript helper that imports the products and prints JSON
  fs.writeFileSync(helperPath,
    `import { products } from '${absPath}';\nprocess.stdout.write(JSON.stringify(products));\n`
  );

  try {
    const json = execSync(`node --experimental-strip-types "${helperPath}"`, {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe']
    });
    return JSON.parse(json);
  } catch (e) {
    const detail = e.stderr ? e.stderr.toString().slice(0, 500) : e.message;
    throw new Error('Failed to parse products.ts:\n' + detail);
  }
}

// ── Astro page generator ──────────────────────────────────────────────────────

function renderStars(score) {
  const filled = Math.round(score / 20);
  return '★'.repeat(filled) + '☆'.repeat(5 - filled);
}

function generateProductPage(product) {
  const canonical = `${SITE_URL}/review/${product.slug}`;
  const shopifyUrl = `${SHOPIFY_URL}/products/${product.slug}?utm_source=aeo&utm_medium=content&utm_campaign=${product.slug}`;

  const reviewSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Review",
    "name": product.questionHeadline,
    "reviewBody": product.answerSnippet,
    "author": { "@type": "Organization", "name": "Vibe Test Lab" },
    "datePublished": product.date,
    "url": canonical,
    "itemReviewed": {
      "@type": "Product",
      "name": product.name,
      "brand": { "@type": "Brand", "name": product.brand },
      "offers": {
        "@type": "Offer",
        "price": product.price.replace('$', ''),
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "image": product.image
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": product.vibeScore,
      "bestRating": 100,
      "worstRating": 0
    }
  }, null, 2);

  const faqSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": product.faq.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  }, null, 2);

  const howToUseHtml = product.howToUse
    .map((step, i) => `    <li><strong>${i + 1}.</strong> ${step}</li>`)
    .join('\n');

  const testResultsHtml = product.testResults
    .map(r => `
    <div class="test-result">
      <div class="test-header">
        <span class="test-category">${r.category}</span>
        <span class="test-score">${r.score}/100</span>
      </div>
      <div class="score-bar"><div class="score-fill" style="width:${r.score}%"></div></div>
      <p>${r.summary}</p>
    </div>`).join('\n');

  const prosHtml = product.pros
    .map(p => `    <li>✅ ${p}</li>`)
    .join('\n');

  const consHtml = product.cons
    .map(c => `    <li>❌ ${c}</li>`)
    .join('\n');

  const faqHtml = product.faq
    .map(f => `
    <div class="faq-item">
      <h3>${f.question}</h3>
      <p>${f.answer}</p>
    </div>`).join('\n');

  const verdictClass = product.verdictBadge === 'Worth It' ? 'worth-it' : product.verdictBadge === 'Hidden Gem' ? 'hidden-gem' : 'overhyped';
  const scoreClass = product.vibeScore >= 85 ? '' : product.vibeScore >= 70 ? ' mid' : ' low';

  return `---
import BaseLayout from '../../layouts/BaseLayout.astro';
---
<BaseLayout
  title="${product.questionHeadline} | Vibe Test Lab"
  description="${product.answerSnippet.slice(0, 155).replace(/"/g, "'")}"
  canonical="${canonical}"
>

<script type="application/ld+json">
${reviewSchema}
</script>

<script type="application/ld+json">
${faqSchema}
</script>

<nav class="breadcrumb">
  <a href="/">Vibe Test Lab</a> ›
  <a href="/">Reviews</a> ›
  ${product.name}
</nav>

<img
  src="${product.image}"
  alt="${product.name}"
  style="width:100%;height:320px;object-fit:cover;border-radius:var(--radius);margin-bottom:1.5rem;"
  loading="eager"
/>

<div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.75rem;flex-wrap:wrap;">
  <span style="font-size:.7rem;font-family:var(--font-mono);text-transform:uppercase;letter-spacing:.12em;color:var(--muted-foreground);">${product.category}</span>
  <span style="color:var(--border);">·</span>
  <span style="font-size:.7rem;font-family:var(--font-mono);color:var(--muted-foreground);">${product.brand}</span>
  <span style="color:var(--border);">·</span>
  <span style="font-size:.7rem;font-family:var(--font-mono);color:var(--muted-foreground);">Tested ${product.date}</span>
</div>

<h1>${product.questionHeadline}</h1>

<div class="answer-box">
  <span class="verdict-badge verdict-badge-${verdictClass}">${product.verdictBadge}</span>
  <div class="vibe-score${scoreClass}">${product.vibeScore}<span style="font-size:1.5rem;font-weight:400;color:var(--muted-foreground);">/100</span></div>
  <p class="lead">${product.answerSnippet}</p>
</div>

<a class="cta-button" href="${shopifyUrl}">
  Buy ${product.name} — ${product.price} →
</a>

<h2>Why People Are Buying ${product.name}</h2>
<p>${product.problemSection}</p>

<h2>What Is ${product.name}?</h2>
<p>${product.solutionSection}</p>
<p><strong>Why it went viral:</strong> ${product.viralReason}</p>

<h2>How to Use ${product.name}</h2>
<ol>
${howToUseHtml}
</ol>

<h2>Our Vibe Test Results</h2>
${testResultsHtml}

<h2>Pros & Cons</h2>
<div class="pros-cons">
  <div class="pros-cons-box">
    <h3>Pros</h3>
    <ul>${prosHtml}</ul>
  </div>
  <div class="pros-cons-box">
    <h3>Cons</h3>
    <ul>${consHtml}</ul>
  </div>
</div>

<h2>Final Verdict</h2>
<div class="answer-box">
  <div class="vibe-score${scoreClass}">${product.vibeScore}<span style="font-size:1.5rem;font-weight:400;color:var(--muted-foreground);">/100</span></div>
  <span class="verdict-badge verdict-badge-${verdictClass}">${product.verdictBadge}</span>
  <p>${product.finalVerdictSummary}</p>
</div>

<h2>Frequently Asked Questions</h2>
<div class="faq">
${faqHtml}
</div>

<h2>Where to Buy ${product.name}</h2>
<div class="buy-box">
  <div>
    <strong>${product.name}</strong><br/>
    <span style="font-size:.85rem;color:var(--muted-foreground);">${product.priceRange} · ${product.brand}</span>
  </div>
  <a class="cta-button" href="${shopifyUrl}" style="margin:0;">
    Check Price →
  </a>
</div>
<p class="disclaimer">Vibe Test Lab may earn a commission from affiliate links. This does not influence our testing or scores.</p>

</BaseLayout>
`;
}

// ── Main ──────────────────────────────────────────────────────────────────────

function main() {
  const productsFile = PRODUCTS_FILE;

  if (!productsFile || !fs.existsSync(productsFile)) {
    console.error('Products file not found:', productsFile);
    console.error('Place products.ts in the workspace root or set PRODUCTS_FILE env var.');
    process.exit(1);
  }

  console.log('\nVibe Test Labs — Product Page Generator');
  console.log('Source:', productsFile);
  console.log('Output:', OUT_DIR, '\n');

  let products;
  try {
    products = parseProducts(productsFile);
    console.log('Found', products.length, 'products\n');
  } catch (e) {
    console.error('Failed to parse products.ts:', e.message);
    process.exit(1);
  }

  let converted = 0, skipped = 0;

  for (const product of products) {
    if (!product.slug) { console.warn('Skipping product with no slug'); continue; }

    const outFile = path.join(OUT_DIR, product.slug + '.astro');
    if (fs.existsSync(outFile)) {
      console.log('  skip (exists):', product.slug);
      skipped++;
      continue;
    }

    fs.writeFileSync(outFile, generateProductPage(product));
    console.log('  ✅', product.slug + '.astro', '—', product.name);
    converted++;
  }

  console.log('\nDone:', converted, 'pages created,', skipped, 'skipped');
  console.log('Next: npm run build\n');
}

main();
