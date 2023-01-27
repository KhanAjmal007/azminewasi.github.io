const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'চলছে গাড়ি যাত্রাবাড়ি',
    image: '/avatar.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'Kaggle Grandmaster | ML Researcher',
    bio: 'An idealist with distinguished experience, and expertise in Programming (Machine Learning), IT Automation, Research, Project & Product Management..',
    email: 'azminetoushik.wasi@gmail.com',
    linkedin: 'azmine-toushik-wasi',
    github: 'azminewasi',
    instagram: '_cholche_gari_zatrabari_',
  },
  projects: [
    {
      name: `চলছে গাড়ি যাত্রাবাড়ি`,
      href: 'https://azminewasi.github.io/'
    }
  ],
  // blog setting (required)
  blog: {
    title: 'চলছে গাড়ি যাত্রাবাড়ি - Azmine Toushik Wasi',
    description: 'Read চলছে গাড়ি যাত্রাবাড়ি by Azmine Toushik Wasi!',
    theme: 'dark' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://azminewasi.github.io/blog',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.e3b3925315ca4275808f9c0a785a95fa,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'morethanmin/morethan-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
