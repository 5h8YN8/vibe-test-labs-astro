#!/usr/bin/env node
/**
 * convert.js — React to Astro converter for Vibe Test Labs
 * Usage: REACT_SOURCE_PATH=/path/to/vibe-check-reviews node scripts/convert.js
 */

const fs = require('fs');
const path = require('path');

const REACT_SOURCE_PATH = process.env.REACT_SOURCE_PATH || path.resolve(__dirname, '../../vibe-check-reviews');
const ASTRO_PAGES_DIR = path.resolve(__dirname, '../src/pages');
const SITE_URL = 'https://vibe-test-labs.pages.dev';
const SHOPIFY_URL = 'https://vibe-test-lab.myshopify.com';

fs.mkdirSync(ASTRO_PAGES_DIR, { recursive: true });

function toSlug(filename) {
  return path.basename(filename, path.extname(filename))
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function extractHtml(content) {
  const templateMatch = content.match(/__html\s*:\s*`([\s\S]*?)`\s*\}/);
  if (templateMatch) return templateMatch[1].trim();
  const varMatch = content.match(/const\s+(?:pageContent|htmlContent|content)\s*=\s*`([\s\S]*?)`/);
  if (varMatch) return varMatch[1].trim();
  return null;
}

function extractProps(content) {
  const layoutMatch = content.match(/<ArticleLayout([\s\S]*?)(?:\/>|>)/);
  if (!layoutMatch) return {};
  const props = {};
  const pattern = /(\w+)\s*=\s*(?:"([^"]*?)"|'([^']*?)'|\{`([\s\S]*?)`\}|\{([^}]*?)\})/g;
  let match;
  while ((match = pattern.exec(layoutMatch[1])) !== null) {
    const [, name, a, b, c, d] = match;
    props[name] = a ?? b ?? c ?? d;
  }
  return props;
}

function extractSchema(content) {
  const scriptMatch = content.match(/<script[^>]*ld\+json[^>]*>([\s\S]*?)<\/script>/);
  if (scriptMatch) return scriptMatch[1].trim();
  const varMatch = content.match(/const\s+pageSchema\s*=\s*(\{[\s\S]*?\});?\s*\n/);
  if (varMatch) {
    try {
      return JSON.stringify(Function('"use strict"; return (' + varMatch[1] + ')')(), null, 2);
    } catch (e) {
      return varMatch[1];
    }
  }
  return null;
}

function generateAstroPage(filename, content) {
  const props = extractProps(content);
  const html = extractHtml(content);
  const schema = extractSchema(content);
  const slug = toSlug(filename);

  const title = props.title || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const description = props.description || 'Read our full review of ' + title + ' at Vibe Test Labs.';
  const canonical = props.canonical || SITE_URL + '/products/' + slug;
  const shopifyUrl = SHOPIFY_URL + '/products/' + slug + '?utm_source=aeo&utm_medium=content&utm_campaign=' + slug;

  const schemaBlock = schema
    ? '\n<script type="application/ld+json">\n' + schema + '\n</script>'
    : '';

  const htmlBlock = html
    ? '\n  <div class="content" set:html={pageHtml} />'
    : '\n  <!-- TODO: add product content here -->';

  const htmlVar = html
    ? 'const pageHtml = `' + html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${') + '`;\n'
    : '';

  return `---
import BaseLayout from '../layouts/BaseLayout.astro';
${htmlVar}---
<BaseLayout
  title="${title} — Vibe Test Labs"
  description="${description}"
  canonical="${canonical}"
>${schemaBlock}
  <nav class="breadcrumb"><a href="/">Vibe Test Labs</a> › ${title}</nav>
  <h1>${title}</h1>
  <p class="lead">${description}</p>
  <a class="cta-button" href="${shopifyUrl}">Buy ${title} →</a>${htmlBlock}
</BaseLayout>
`;
}

function main() {
  console.log('\nVibe Test Labs — React to Astro Converter');
  console.log('Source:', REACT_SOURCE_PATH);
  console.log('Output:', ASTRO_PAGES_DIR, '\n');

  const pagesDir = path.join(REACT_SOURCE_PATH, 'src', 'pages');
  if (!fs.existsSync(pagesDir)) {
    console.log('No src/pages directory found in', REACT_SOURCE_PATH);
    process.exit(0);
  }

  const files = fs.readdirSync(pagesDir).filter(f =>
    /\.(jsx|tsx)$/.test(f) && !/^index\.(jsx|tsx)$/.test(f)
  );

  console.log('Found', files.length, 'pages\n');

  let converted = 0, skipped = 0;
  for (const f of files) {
    const slug = toSlug(f);
    const outPath = path.join(ASTRO_PAGES_DIR, slug + '.astro');
    if (fs.existsSync(outPath)) {
      console.log('  skip (exists):', slug + '.astro');
      skipped++;
      continue;
    }
    const content = fs.readFileSync(path.join(pagesDir, f), 'utf8');
    fs.writeFileSync(outPath, generateAstroPage(f, content));
    console.log('  ✅', f, '→', slug + '.astro');
    converted++;
  }

  console.log('\nDone:', converted, 'converted,', skipped, 'skipped');
  console.log('Next: npm run build\n');
}

main();
