const fs = require('fs');
const path = require('path');

// Configuration
const domain = 'https://web01.tech';
const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

// Define your routes here
const routes = [
  { url: '/', changefreq: 'monthly', priority: '1.0' },
  // Add more routes as needed
];

// Generate sitemap XML
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${domain}${route.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  fs.writeFileSync(outputPath, sitemap, 'utf8');
  console.log(`Sitemap generated at ${outputPath}`);
};

// Execute
generateSitemap();