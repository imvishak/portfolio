export default function manifest() {
    return {
      name: 'Stecome Engineering W.L.L',
      short_name: 'Stecome',
      description: 'Stecome Contracting - Excellence in Engineering, Procurement, and Construction',
      start_url: '/',
      display: 'standalone',
      background_color: '#FFFFFF',
      theme_color: '#FFFFFF',
      icons: [
        {
          src: `${process.env.PUBLIC_DOMAIN_URL}/favicon/favicon-16x16.png`,
          sizes: "16x16",
          type: "image/png",
        },
        {
          src: `${process.env.PUBLIC_DOMAIN_URL}/favicon/favicon-32X32.png`,
          sizes: "32x32",
          type: "image/png",
        },
        {
          src: `${process.env.PUBLIC_DOMAIN_URL}/favicon/favicon-96x96.png`,
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: `${process.env.PUBLIC_DOMAIN_URL}/favicon/android-icon-192x192.png`,
          sizes: "192x192",
          type: "image/png",  
          purpose:'maskable'        
        },
        {
          src: `${process.env.PUBLIC_DOMAIN_URL}/favicon/favicon.ico`,
          sizes: "96x96",
          type: "image/x-icon",
        },
        {
          src: `${process.env.PUBLIC_DOMAIN_URL}/favicon/apple-icon-57x57.png`,
          sizes: "57x57",
          type: "image/png",
        },
        {
          src: `${process.env.PUBLIC_DOMAIN_URL}/favicon/apple-icon-60x60.png`,
          sizes: "60x60",
          type: "image/png",
        },
        {
          src: `${process.env.PUBLIC_DOMAIN_URL}/favicon/apple-icon-72x72.png`,
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: `${process.env.PUBLIC_DOMAIN_URL}/favicon/apple-icon-76x76.png`,
          sizes: "76x76",
          type: "image/png",
        },
        {
          src: `${process.env.PUBLIC_DOMAIN_URL}/favicon/apple-icon-114x114.png`,
          sizes: "114x114",
          type: "image/png",
        },
        {
          src: `${process.env.PUBLIC_DOMAIN_URL}/favicon/apple-icon-120x120.png`,
          sizes: "120x120",
          type: "image/png",
        },
        {
          src: `${process.env.PUBLIC_DOMAIN_URL}/favicon/apple-icon-144x144.png`,
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: `${process.env.PUBLIC_DOMAIN_URL}/favicon/apple-icon-152x152.png`,
          sizes: "152x152",
          type: "image/png",
        },
        {
          src: `${process.env.PUBLIC_DOMAIN_URL}/favicon/apple-icon-180x180.png`,
          sizes: "180x180",
          type: "image/png",
          purpose:'maskable'
        },
        {
          src: `${process.env.PUBLIC_DOMAIN_URL}/favicon/apple-icon-180x180.png`,
          sizes: "180x180",
          type: "image/png",        
        },
        {
          src: `${process.env.PUBLIC_DOMAIN_URL}/favicon/ms-icon-310x310.png`,
          sizes: "310x310",
          type: "image/png",          
        },        
        {
          src: `${process.env.PUBLIC_DOMAIN_URL}/favicon/android-chrome-512x512.png`,
          sizes: "512x512",
          type: "image/png",         
        }     
      ],
    }
  }