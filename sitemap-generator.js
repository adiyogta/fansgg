const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

async function generateSitemap() {
  try {
    const sitemapStream = new SitemapStream({ 
      hostname: 'https://mcgogo.fansgame.site' 
    });

    // Daftar URL statis
    const staticUrls = [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      { url: '/home', changefreq: 'daily', priority: 0.9 },
      { url: '/about', changefreq: 'weekly', priority: 0.7 }
    ];

    // Generate URL dinamis dari route Angular (contoh)
    const dynamicUrls = [
      '/game',
      '/profile',
      '/leaderboard'
    ].map(url => ({
      url, 
      changefreq: 'weekly', 
      priority: 0.6
    }));

    // Kombinasi URL
    const allUrls = [...staticUrls, ...dynamicUrls];

    // Tambahkan URL ke sitemap
    allUrls.forEach(url => sitemapStream.write(url));
    sitemapStream.end();

    // Konversi dan simpan
    const sitemapXml = await streamToPromise(sitemapStream);
    fs.writeFileSync('./sitemap.xml', sitemapXml);

    console.log('✅ Sitemap berhasil dibuat!');
  } catch (error) {
    console.error('❌ Gagal membuat sitemap:', error);
  }
}

generateSitemap();