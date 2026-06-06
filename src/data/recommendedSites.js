const recommendedSitesByType = {
  portal: {
    '검색 영역이 있는 헤더': [
      { name: 'NAVER', url: 'https://www.naver.com' },
      { name: 'Daum', url: 'https://www.daum.net' },
    ],
    '2열 포털 본문 grid': [
      { name: 'Yahoo', url: 'https://www.yahoo.com' },
      { name: 'MSN', url: 'https://www.msn.com' },
    ],
    '뉴스 리스트 카드': [
      { name: 'BBC', url: 'https://www.bbc.com' },
      { name: 'Google News', url: 'https://news.google.com' },
    ],
    '로그인/날씨 보조 패널': [
      { name: 'NAVER', url: 'https://www.naver.com' },
      { name: 'MSN Weather', url: 'https://www.msn.com/weather' },
    ],
    '모바일 1열 전환': [
      { name: 'Daum', url: 'https://www.daum.net' },
      { name: 'Yahoo', url: 'https://www.yahoo.com' },
    ],
  },
  commerce: {
    '상품 카드 grid': [
      { name: '29CM', url: 'https://www.29cm.co.kr' },
      { name: 'SSG.COM', url: 'https://www.ssg.com' },
    ],
    '필터 aside와 목록 main': [
      { name: 'MUSINSA', url: 'https://www.musinsa.com' },
      { name: 'Amazon', url: 'https://www.amazon.com' },
    ],
    '프로모션 배너': [
      { name: 'SSG.COM', url: 'https://www.ssg.com' },
      { name: 'ZARA', url: 'https://www.zara.com' },
    ],
    '가격/혜택 텍스트 위계': [
      { name: '29CM', url: 'https://www.29cm.co.kr' },
      { name: 'Amazon', url: 'https://www.amazon.com' },
    ],
    '모바일 필터 접힘 구조': [
      { name: 'MUSINSA', url: 'https://www.musinsa.com' },
      { name: 'SSG.COM', url: 'https://www.ssg.com' },
    ],
  },
  brand: {
    '큰 hero 섹션': [
      { name: 'Apple', url: 'https://www.apple.com' },
      { name: 'Nike', url: 'https://www.nike.com' },
    ],
    '스토리 텍스트 블록': [
      { name: 'Aesop', url: 'https://www.aesop.com' },
      { name: 'Patagonia', url: 'https://www.patagonia.com' },
    ],
    '3열 컬렉션 grid': [
      { name: 'COS', url: 'https://www.cos.com' },
      { name: 'SSF SHOP', url: 'https://www.ssfshop.com' },
    ],
    '이미지 비율 유지': [
      { name: 'Aesop', url: 'https://www.aesop.com' },
      { name: 'Nike', url: 'https://www.nike.com' },
    ],
    '섹션 간 여백 리듬': [
      { name: 'Apple', url: 'https://www.apple.com' },
      { name: 'Patagonia', url: 'https://www.patagonia.com' },
    ],
  },
  landing: {
    'hero와 CTA': [
      { name: 'Stripe', url: 'https://stripe.com' },
      { name: 'Linear', url: 'https://linear.app' },
    ],
    '3개 기능 카드': [
      { name: 'Notion', url: 'https://www.notion.com' },
      { name: 'Slack', url: 'https://slack.com' },
    ],
    '단계형 사용 흐름': [
      { name: 'Webflow', url: 'https://webflow.com' },
      { name: 'Figma', url: 'https://www.figma.com' },
    ],
    '신뢰 지표 영역': [
      { name: 'Stripe', url: 'https://stripe.com' },
      { name: 'Vercel', url: 'https://vercel.com' },
    ],
    '마지막 CTA 섹션': [
      { name: 'Linear', url: 'https://linear.app' },
      { name: 'Notion', url: 'https://www.notion.com' },
    ],
  },
  institution: {
    '기관형 글로벌 nav': [
      { name: '서울대학교', url: 'https://www.snu.ac.kr' },
      { name: 'MIT', url: 'https://www.mit.edu' },
    ],
    '공지사항 리스트': [
      { name: '서울대학교', url: 'https://www.snu.ac.kr' },
      { name: 'Harvard', url: 'https://www.harvard.edu' },
    ],
    '빠른 링크 grid': [
      { name: 'GOV.UK', url: 'https://www.gov.uk' },
      { name: 'MIT', url: 'https://www.mit.edu' },
    ],
    '자료실 카드': [
      { name: 'GOV.UK', url: 'https://www.gov.uk' },
      { name: 'Harvard', url: 'https://www.harvard.edu' },
    ],
    '하단 정보 footer': [
      { name: '서울대학교', url: 'https://www.snu.ac.kr' },
      { name: 'GOV.UK', url: 'https://www.gov.uk' },
    ],
  },
  magazine: {
    '대표 기사 영역': [
      { name: 'The New York Times', url: 'https://www.nytimes.com' },
      { name: 'Wired', url: 'https://www.wired.com' },
    ],
    '기사 카드 grid': [
      { name: 'Wired', url: 'https://www.wired.com' },
      { name: 'The Verge', url: 'https://www.theverge.com' },
    ],
    '카테고리 nav': [
      { name: 'The Verge', url: 'https://www.theverge.com' },
      { name: 'BBC', url: 'https://www.bbc.com' },
    ],
    '이미지 썸네일 비율': [
      { name: 'Wired', url: 'https://www.wired.com' },
      { name: 'The New York Times', url: 'https://www.nytimes.com' },
    ],
    '추천 콘텐츠 aside': [
      { name: 'The Verge', url: 'https://www.theverge.com' },
      { name: 'BBC', url: 'https://www.bbc.com' },
    ],
  },
  dashboard: {
    'sidebar app shell': [
      { name: 'Stripe Dashboard', url: 'https://dashboard.stripe.com' },
      { name: 'Vercel Dashboard', url: 'https://vercel.com/dashboard' },
    ],
    'sticky topbar': [
      { name: 'GitHub', url: 'https://github.com' },
      { name: 'Vercel Dashboard', url: 'https://vercel.com/dashboard' },
    ],
    'KPI 카드 grid': [
      { name: 'Stripe Dashboard', url: 'https://dashboard.stripe.com' },
      { name: 'Google Analytics', url: 'https://analytics.google.com' },
    ],
    '데이터 패널': [
      { name: 'GitHub', url: 'https://github.com' },
      { name: 'Google Analytics', url: 'https://analytics.google.com' },
    ],
    '모바일 sidebar 전환': [
      { name: 'Vercel Dashboard', url: 'https://vercel.com/dashboard' },
      { name: 'GitHub', url: 'https://github.com' },
    ],
  },
};

const typeKeyByLabel = {
  포털: 'portal',
  포털형: 'portal',
  커머스: 'commerce',
  콘텐츠커머스형: 'commerce',
  콘텐츠_커머스형: 'commerce',
  '콘텐츠 커머스형': 'commerce',
  종합커머스형: 'commerce',
  '종합 커머스형': 'commerce',
  '브랜드 사이트': 'brand',
  패션브랜드몰형: 'brand',
  '패션 브랜드몰형': 'brand',
  랜딩페이지: 'landing',
  '대학/기관 사이트': 'institution',
  매거진: 'magazine',
  대시보드: 'dashboard',
};

function resolveTypeKey(siteType) {
  return recommendedSitesByType[siteType] ? siteType : typeKeyByLabel[siteType] ?? 'landing';
}

function findSitesForStructure(siteType, structure) {
  const typeKey = resolveTypeKey(siteType);
  const typedSites = recommendedSitesByType[typeKey]?.[structure];

  if (typedSites) return typedSites;

  const matchingMap = Object.values(recommendedSitesByType).find((siteMap) => siteMap[structure]);
  return matchingMap?.[structure] ?? [];
}

export function attachRecommendedSites(siteType, structures) {
  return structures.map((structure) => ({
    title: structure,
    recommendedSites: findSitesForStructure(siteType, structure),
  }));
}

export function normalizePracticeStructures(siteType, structures) {
  return structures.map((item) => {
    if (typeof item === 'string') {
      return {
        title: item,
        recommendedSites: findSitesForStructure(siteType, item),
      };
    }

    return {
      ...item,
      recommendedSites: item.recommendedSites?.length
        ? item.recommendedSites
        : findSitesForStructure(siteType, item.title),
    };
  });
}
