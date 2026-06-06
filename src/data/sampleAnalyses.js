import { generateAnalysis } from '../utils/generateAnalysis.js';

export const sampleAnalyses = [
  {
    ...generateAnalysis({ siteUrl: 'https://www.naver.com', siteType: 'portal' }),
    id: 'sample-naver',
    siteName: 'NAVER',
    siteType: '포털형',
    overview: 'NAVER는 검색 폼, 서비스 바로가기, 뉴스/콘텐츠 피드, 로그인과 생활 정보 패널이 촘촘히 결합된 포털형 구조로 읽을 수 있습니다. 학습 포인트는 한 화면 안에 여러 종류의 정보 박스를 배치하면서도 카드 규칙과 grid 흐름을 유지하는 것입니다.',
  },
  {
    ...generateAnalysis({ siteUrl: 'https://www.29cm.co.kr', siteType: 'commerce' }),
    id: 'sample-29cm',
    siteName: '29CM',
    siteType: '콘텐츠 커머스형',
    overview: '29CM는 상품 판매와 브랜드 콘텐츠가 함께 보이는 콘텐츠 커머스형 구조로 읽을 수 있습니다. 상품 grid뿐 아니라 기획전, 브랜드 스토리, 큰 이미지 중심 카드의 흐름을 함께 분석하는 것이 좋습니다.',
  },
  {
    ...generateAnalysis({ siteUrl: 'https://www.ssg.com', siteType: 'commerce' }),
    id: 'sample-ssg',
    siteName: 'SSG.COM',
    siteType: '종합 커머스형',
    overview: 'SSG.COM은 검색, 카테고리, 프로모션, 상품 목록, 혜택 정보가 결합된 종합 커머스형 구조입니다. 필터와 상품 카드 grid, 배너 영역의 반복 패턴을 중심으로 읽기 좋습니다.',
  },
  {
    ...generateAnalysis({ siteUrl: 'https://www.ssfshop.com', siteType: 'brand' }),
    id: 'sample-ssf',
    siteName: 'SSF SHOP',
    siteType: '패션 브랜드몰형',
    overview: 'SSF SHOP은 브랜드몰과 패션 커머스가 결합된 구조입니다. 브랜드 이미지, 시즌 컬렉션, 상품 카드, 룩북성 콘텐츠를 어떤 박스 단위로 나누는지 관찰하기 좋습니다.',
  },
];
