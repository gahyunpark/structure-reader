const similarSitesByType = {
  포털: [
    { name: 'Daum', url: 'https://www.daum.net' },
    { name: 'Yahoo', url: 'https://www.yahoo.com' },
  ],
  포털형: [
    { name: 'Daum', url: 'https://www.daum.net' },
    { name: 'Yahoo', url: 'https://www.yahoo.com' },
  ],
  커머스: [
    { name: 'MUSINSA', url: 'https://www.musinsa.com' },
    { name: 'Amazon', url: 'https://www.amazon.com' },
  ],
  '콘텐츠 커머스형': [
    { name: 'MUSINSA', url: 'https://www.musinsa.com' },
    { name: 'SSG.COM', url: 'https://www.ssg.com' },
  ],
  '종합 커머스형': [
    { name: 'Amazon', url: 'https://www.amazon.com' },
    { name: 'SSG.COM', url: 'https://www.ssg.com' },
  ],
  '브랜드 사이트': [
    { name: 'Apple', url: 'https://www.apple.com' },
    { name: 'Aesop', url: 'https://www.aesop.com' },
  ],
  '패션 브랜드몰형': [
    { name: 'COS', url: 'https://www.cos.com' },
    { name: 'ZARA', url: 'https://www.zara.com' },
  ],
  랜딩페이지: [
    { name: 'Linear', url: 'https://linear.app' },
    { name: 'Stripe', url: 'https://stripe.com' },
  ],
  '대학/기관 사이트': [
    { name: '서울대학교', url: 'https://www.snu.ac.kr' },
    { name: 'MIT', url: 'https://www.mit.edu' },
  ],
  매거진: [
    { name: 'Wired', url: 'https://www.wired.com' },
    { name: 'The Verge', url: 'https://www.theverge.com' },
  ],
  대시보드: [
    { name: 'Vercel Dashboard', url: 'https://vercel.com/dashboard' },
    { name: 'Stripe Dashboard', url: 'https://dashboard.stripe.com' },
  ],
};

export function getSimilarSites(siteType) {
  return similarSitesByType[siteType] ?? similarSitesByType.랜딩페이지;
}
