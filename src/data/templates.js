import { enrichKeywords } from './mdnLinks.js';

const commonCss = `:root {
  color: #20242a;
  background: #f6f7f9;
}

.page {
  min-height: 100vh;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 32px 0;
}

@media (max-width: 760px) {
  .container {
    width: min(100% - 20px, 640px);
  }
}`;

export const analysisTemplates = {
  portal: {
    siteType: '포털',
    overview: '포털형 사이트는 검색, 뉴스, 로그인, 바로가기, 실시간 콘텐츠처럼 서로 다른 정보 묶음을 한 화면에 촘촘하게 배치합니다. 핵심은 화면을 큰 영역으로 나누고, 각 영역 안에서 카드와 리스트의 반복 규칙을 유지하는 것입니다.',
    htmlCssStructure: 'HTML은 header, nav, main, section, aside, footer를 명확히 나누는 것이 좋습니다. CSS는 상단 고정 폭 컨테이너, 검색 영역 flex 정렬, 본문 grid 레이아웃, 리스트형 카드 스타일을 중심으로 설계합니다.',
    boxBlueprint: '상단 헤더와 검색 박스를 먼저 두고, 본문은 좌측 주요 콘텐츠와 우측 보조 패널의 2열 grid로 나눕니다. 뉴스, 쇼핑, 날씨, 로그인 박스는 같은 카드 규칙을 공유하되 내부 정보 밀도를 다르게 둡니다.',
    htmlSkeleton: `<div class="page portal-page">
  <header class="site-header">
    <nav class="global-nav">...</nav>
    <form class="search-form">...</form>
  </header>
  <main class="portal-layout">
    <section class="content-feed">...</section>
    <aside class="side-panel">...</aside>
  </main>
  <footer class="site-footer">...</footer>
</div>`,
    cssSkeleton: `${commonCss}

.portal-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 24px;
}

.search-form,
.global-nav {
  display: flex;
  align-items: center;
  gap: 12px;
}

.content-card {
  border: 1px solid #dfe3ea;
  background: #fff;
  padding: 20px;
}`,
    learningKeywords: enrichKeywords(['HTML 기본', 'header', 'nav', 'main', 'aside', 'form', 'CSS Grid', 'flex', 'gap', 'media query']),
    repeatPracticeStructure: ['검색 영역이 있는 헤더', '2열 포털 본문 grid', '뉴스 리스트 카드', '로그인/날씨 보조 패널', '모바일 1열 전환'],
    implementationSteps: ['전체 페이지 컨테이너를 만든다.', 'header 안에 nav와 search form을 배치한다.', 'main을 2열 grid로 구성한다.', 'section과 aside 내부에 반복 카드 규칙을 만든다.', '모바일에서 grid를 1열로 바꾼다.'],
  },
  commerce: {
    siteType: '커머스',
    overview: '커머스 사이트는 상품 탐색과 구매 흐름을 중심으로 구성됩니다. 카테고리 탐색, 프로모션 배너, 상품 그리드, 필터/정렬 영역을 분리해서 읽는 연습이 중요합니다.',
    htmlCssStructure: 'HTML은 상품 목록을 section과 article의 반복으로 표현하고, CSS는 상품 카드 grid, 이미지 비율, 가격 정보의 위계, 필터 사이드바를 중심으로 잡습니다.',
    boxBlueprint: '상단에는 브랜드/검색/카테고리 내비게이션이 있고, 본문에는 큰 프로모션 배너 다음 상품 grid가 이어집니다. 넓은 화면에서는 필터 aside와 상품 목록 main을 함께 배치합니다.',
    htmlSkeleton: `<div class="page commerce-page">
  <header class="shop-header">...</header>
  <main class="shop-layout">
    <aside class="filter-panel">...</aside>
    <section class="product-section">
      <div class="promo-banner">...</div>
      <div class="product-grid">
        <article class="product-card">...</article>
      </div>
    </section>
  </main>
</div>`,
    cssSkeleton: `${commonCss}

.shop-layout {
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  gap: 28px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
}

.product-card img {
  aspect-ratio: 3 / 4;
  object-fit: cover;
}`,
    learningKeywords: enrichKeywords(['section', 'aside', 'CSS Grid', 'flex', 'gap', 'object-fit', 'media query']),
    repeatPracticeStructure: ['상품 카드 grid', '필터 aside와 목록 main', '프로모션 배너', '가격/혜택 텍스트 위계', '모바일 필터 접힘 구조'],
    implementationSteps: ['헤더와 카테고리 nav를 만든다.', '필터와 상품 영역을 2열로 나눈다.', '상품 카드를 article 반복 구조로 만든다.', '이미지 박스 비율과 object-fit을 지정한다.', '화면이 좁아지면 필터를 위쪽으로 이동한다.'],
  },
  brand: {
    siteType: '브랜드 사이트',
    overview: '브랜드 사이트는 제품보다 브랜드의 인상, 메시지, 컬렉션 흐름을 크게 보여주는 구조가 많습니다. 넓은 이미지 영역과 짧은 카피, 반복 섹션의 리듬을 읽는 것이 핵심입니다.',
    htmlCssStructure: 'HTML은 hero, story section, collection section, footer처럼 큰 의미 단위로 나누고 CSS는 이미지 채움, 여백, 타이포그래피 위계를 중심으로 구성합니다.',
    boxBlueprint: '첫 화면은 브랜드명과 대표 이미지를 강하게 배치하고, 아래로 스토리, 제품 컬렉션, 캠페인 링크가 이어지는 세로형 문서 구조가 적합합니다.',
    htmlSkeleton: `<div class="page brand-page">
  <header class="brand-header">...</header>
  <main>
    <section class="brand-hero">...</section>
    <section class="brand-story">...</section>
    <section class="collection-grid">...</section>
  </main>
  <footer class="brand-footer">...</footer>
</div>`,
    cssSkeleton: `${commonCss}

.brand-hero {
  min-height: 72vh;
  display: grid;
  align-items: end;
}

.collection-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.collection-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}`,
    learningKeywords: enrichKeywords(['header', 'main', 'section', 'footer', 'CSS Grid', 'object-fit', 'media query']),
    repeatPracticeStructure: ['큰 hero 섹션', '스토리 텍스트 블록', '3열 컬렉션 grid', '이미지 비율 유지', '섹션 간 여백 리듬'],
    implementationSteps: ['브랜드 헤더와 hero를 만든다.', 'hero 안에 대표 메시지와 CTA를 배치한다.', '스토리 섹션을 단순한 문단 구조로 만든다.', '컬렉션 카드를 grid로 배치한다.', '모바일에서 이미지와 텍스트 순서를 읽기 좋게 조정한다.'],
  },
  landing: {
    siteType: '랜딩페이지',
    overview: '랜딩페이지는 하나의 제안이나 전환 목표를 향해 사용자를 순서대로 안내합니다. hero, 문제 제기, 기능/혜택, 신뢰 요소, CTA 반복 구조를 읽어야 합니다.',
    htmlCssStructure: 'HTML은 section 단위의 스토리 흐름이 중요하고, CSS는 좁은 본문 폭, CTA 버튼, 반응형 2열 설명 블록, 시각적 강조 영역을 중심으로 설계합니다.',
    boxBlueprint: '첫 화면에는 제안과 CTA를 두고, 아래로 기능 카드, 사용 흐름, 후기 또는 지표, 마지막 CTA 섹션을 이어 붙입니다.',
    htmlSkeleton: `<div class="page landing-page">
  <header class="landing-header">...</header>
  <main>
    <section class="hero">...</section>
    <section class="features">...</section>
    <section class="workflow">...</section>
    <section class="final-cta">...</section>
  </main>
</div>`,
    cssSkeleton: `${commonCss}

.hero {
  min-height: 76vh;
  display: grid;
  align-items: center;
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}`,
    learningKeywords: enrichKeywords(['section', 'header', 'main', 'display', 'flex', 'CSS Grid', 'gap', 'media query']),
    repeatPracticeStructure: ['hero와 CTA', '3개 기능 카드', '단계형 사용 흐름', '신뢰 지표 영역', '마지막 CTA 섹션'],
    implementationSteps: ['hero에 핵심 메시지와 CTA를 배치한다.', '기능 카드를 3열 grid로 만든다.', '사용 흐름을 순서형 리스트로 표현한다.', '신뢰 요소를 짧은 카드로 배치한다.', '마지막 CTA를 독립 section으로 구성한다.'],
  },
  institution: {
    siteType: '대학/기관 사이트',
    overview: '대학/기관 사이트는 공지, 소개, 서비스, 자료실, 민원/신청 같은 정보 접근성을 우선합니다. 복잡한 메뉴와 공지 리스트를 명확히 나누는 연습에 좋습니다.',
    htmlCssStructure: 'HTML은 header nav, main section, aside quick links, footer를 안정적으로 나누고, CSS는 공지 리스트, 바로가기 grid, 기관 정보 카드의 일관성을 잡습니다.',
    boxBlueprint: '상단에는 넓은 글로벌 메뉴가 있고, 본문은 주요 안내 배너, 공지 리스트, 빠른 링크, 기관 서비스 카드 순서로 구성됩니다.',
    htmlSkeleton: `<div class="page institution-page">
  <header class="institution-header">...</header>
  <main>
    <section class="notice-hero">...</section>
    <section class="notice-list">...</section>
    <section class="quick-links">...</section>
  </main>
  <footer class="institution-footer">...</footer>
</div>`,
    cssSkeleton: `${commonCss}

.quick-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 14px;
}

.notice-item {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 14px 0;
}`,
    learningKeywords: enrichKeywords(['header', 'nav', 'main', 'section', 'footer', 'flex', 'CSS Grid', 'gap']),
    repeatPracticeStructure: ['기관형 글로벌 nav', '공지사항 리스트', '빠른 링크 grid', '자료실 카드', '하단 정보 footer'],
    implementationSteps: ['상단 메뉴 구조를 만든다.', '공지 hero와 핵심 안내를 배치한다.', '공지 리스트를 행 단위 flex로 만든다.', '빠른 링크를 grid 카드로 배치한다.', 'footer에 기관 정보를 정리한다.'],
  },
  magazine: {
    siteType: '매거진',
    overview: '매거진 사이트는 기사 카드, 카테고리, 추천 콘텐츠, 큰 이미지 썸네일의 조합으로 구성됩니다. 콘텐츠의 중요도에 따라 카드 크기와 배치를 다르게 읽는 연습이 중요합니다.',
    htmlCssStructure: 'HTML은 article 반복 구조와 카테고리 section이 핵심입니다. CSS는 대표 기사 영역, 카드 grid, 이미지 비율, 텍스트 줄 수 제어를 중심으로 만듭니다.',
    boxBlueprint: '상단에는 로고와 카테고리 nav, 본문에는 대표 기사 1개와 보조 기사 카드들, 아래에는 최신 글 grid와 추천 aside가 이어집니다.',
    htmlSkeleton: `<div class="page magazine-page">
  <header class="magazine-header">...</header>
  <main class="magazine-layout">
    <section class="featured-article">...</section>
    <section class="article-grid">
      <article class="article-card">...</article>
    </section>
  </main>
</div>`,
    cssSkeleton: `${commonCss}

.magazine-layout {
  display: grid;
  gap: 32px;
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 22px;
}

.article-card img {
  aspect-ratio: 16 / 10;
  object-fit: cover;
}`,
    learningKeywords: enrichKeywords(['header', 'nav', 'main', 'section', 'CSS Grid', 'object-fit', 'gap', 'media query']),
    repeatPracticeStructure: ['대표 기사 영역', '기사 카드 grid', '카테고리 nav', '이미지 썸네일 비율', '추천 콘텐츠 aside'],
    implementationSteps: ['카테고리 nav가 있는 header를 만든다.', '대표 기사 section을 크게 배치한다.', 'article 카드 반복 구조를 만든다.', '이미지 비율을 통일한다.', '모바일에서 카드 폭을 자연스럽게 줄인다.'],
  },
  dashboard: {
    siteType: '대시보드',
    overview: '대시보드는 탐색 사이드바, 상단 툴바, 지표 카드, 표와 차트 영역을 조합합니다. 반복 사용을 전제로 정보 밀도와 정렬 규칙을 안정적으로 유지해야 합니다.',
    htmlCssStructure: 'HTML은 app shell, sidebar, topbar, main dashboard sections로 나눕니다. CSS는 고정 sidebar, 카드 grid, table 영역, 상태 배지를 중심으로 구성합니다.',
    boxBlueprint: '왼쪽 sidebar와 오른쪽 콘텐츠 영역을 나누고, 상단에는 필터/검색 툴바, 본문에는 KPI 카드 grid와 데이터 패널을 배치합니다.',
    htmlSkeleton: `<div class="dashboard-shell">
  <aside class="sidebar">...</aside>
  <div class="dashboard-main">
    <header class="topbar">...</header>
    <main>
      <section class="metric-grid">...</section>
      <section class="data-panel">...</section>
    </main>
  </div>
</div>`,
    cssSkeleton: `${commonCss}

.dashboard-shell {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
}

.metric-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.topbar {
  position: sticky;
  top: 0;
}`,
    learningKeywords: enrichKeywords(['aside', 'header', 'main', 'section', 'CSS Grid', 'flex', 'position', 'gap', 'media query']),
    repeatPracticeStructure: ['sidebar app shell', 'sticky topbar', 'KPI 카드 grid', '데이터 패널', '모바일 sidebar 전환'],
    implementationSteps: ['전체 shell을 sidebar와 main으로 나눈다.', 'topbar를 main 상단에 배치한다.', 'KPI 카드를 grid로 만든다.', '표 또는 리스트 패널을 section으로 분리한다.', '작은 화면에서 sidebar를 상단 메뉴로 바꾼다.'],
  },
};
