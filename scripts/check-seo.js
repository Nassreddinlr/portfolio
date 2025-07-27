#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('\n🔍 Running SEO Check\n');

// Define paths
const rootDir = process.cwd();
const publicDir = path.join(rootDir, 'public');
const appDir = path.join(rootDir, 'app');

// Check for essential SEO files
const essentialFiles = [
  { path: path.join(publicDir, 'robots.txt'), name: 'Robots.txt' },
  { path: path.join(publicDir, 'sitemap.xml'), name: 'Sitemap.xml' },
  { path: path.join(publicDir, 'site.webmanifest'), name: 'Web Manifest' },
  { path: path.join(appDir, 'not-found.tsx'), name: '404 Page' },
];

let issues = 0;

console.log('Checking essential SEO files:');
essentialFiles.forEach(file => {
  if (fs.existsSync(file.path)) {
    console.log(`✅ ${file.name} exists`);
  } else {
    console.log(`❌ ${file.name} is missing`);
    issues++;
  }
});

// Check for structured data
const structuredDataPath = path.join(appDir, 'structured-data.tsx');
if (fs.existsSync(structuredDataPath)) {
  console.log('\n✅ Structured data implementation exists');
} else {
  console.log('\n❌ Structured data implementation is missing');
  issues++;
}

// Check for metadata in layout.tsx
const layoutPath = path.join(appDir, 'layout.tsx');
if (fs.existsSync(layoutPath)) {
  const layoutContent = fs.readFileSync(layoutPath, 'utf8');
  if (layoutContent.includes('metadata')) {
    console.log('✅ Metadata in layout.tsx exists');
  } else {
    console.log('❌ Metadata in layout.tsx is missing');
    issues++;
  }
} else {
  console.log('❌ layout.tsx file is missing');
  issues++;
}

// Check for metadata in page.tsx
const pagePath = path.join(appDir, 'page.tsx');
if (fs.existsSync(pagePath)) {
  const pageContent = fs.readFileSync(pagePath, 'utf8');
  if (pageContent.includes('generateMetadata')) {
    console.log('✅ Metadata in page.tsx exists');
  } else {
    console.log('❌ Metadata in page.tsx is missing');
    issues++;
  }
} else {
  console.log('❌ page.tsx file is missing');
  issues++;
}

// Summary
console.log('\n📊 SEO Check Summary:');
if (issues === 0) {
  console.log('🎉 No SEO issues found! Your site is well-optimized.');
} else {
  console.log(`⚠️ Found ${issues} SEO issue${issues === 1 ? '' : 's'} that need${issues === 1 ? 's' : ''} attention.`);
  console.log('📘 Check SEO_OPTIMIZATION.md for guidance on fixing these issues.');
}

console.log('\n');