const typeKeyByLabel = {
  포털: 'portal',
  포털형: 'portal',
  커머스: 'commerce',
  콘텐츠커머스형: 'commerce',
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
  '사용자 추가': 'landing',
};

const actualHtmlByType = {
  portal: (siteName) => `<body>
  <div class="page ${siteName.toLowerCase()}-portal">
    <header class="site-header">
      <div class="top-util">로그인 / 알림 / 설정</div>
      <div class="search-area">
        <h1 class="logo">${siteName}</h1>
        <form class="search-form">
          <input type="search" aria-label="검색어" />
          <button type="submit">검색</button>
        </form>
      </div>
      <nav class="service-nav">메일 카페 블로그 쇼핑 뉴스</nav>
    </header>

    <main class="page-layout">
      <div class="content-column">
        <section class="ad-banner">메인 배너</section>
        <section class="news-area">뉴스 리스트</section>
        <section class="shopping-area">쇼핑 카드</section>
        <section class="recommend-area">추천 콘텐츠</section>
      </div>
      <aside class="side-column">
        <section class="login-box">로그인</section>
        <section class="weather-widget">날씨</section>
        <section class="stock-widget">증시</section>
      </aside>
    </main>
  </div>
</body>`,
  commerce: (siteName) => `<body>
  <div class="page ${siteName.toLowerCase()}-commerce">
    <header class="shop-header">
      <h1 class="logo">${siteName}</h1>
      <form class="search-form">상품 검색</form>
      <nav class="category-nav">신상품 베스트 브랜드 세일</nav>
    </header>

    <main class="shop-layout">
      <aside class="filter-panel">
        <section class="filter-group">카테고리</section>
        <section class="filter-group">가격</section>
        <section class="filter-group">브랜드</section>
      </aside>
      <section class="product-section">
        <div class="promo-banner">프로모션 배너</div>
        <div class="sort-toolbar">추천순 / 최신순 / 가격순</div>
        <div class="product-grid">
          <article class="product-card">상품 카드</article>
          <article class="product-card">상품 카드</article>
        </div>
      </section>
    </main>
  </div>
</body>`,
  brand: (siteName) => `<body>
  <div class="page ${siteName.toLowerCase()}-brand">
    <header class="brand-header">
      <h1 class="logo">${siteName}</h1>
      <nav class="brand-nav">스토리 컬렉션 캠페인 매장</nav>
    </header>

    <main>
      <section class="brand-hero">
        <div class="hero-media">대표 이미지</div>
        <div class="hero-copy">브랜드 메시지</div>
      </section>
      <section class="brand-story">브랜드 스토리</section>
      <section class="collection-grid">
        <article class="collection-card">컬렉션</article>
        <article class="collection-card">컬렉션</article>
        <article class="collection-card">컬렉션</article>
      </section>
    </main>
  </div>
</body>`,
  landing: (siteName) => `<body>
  <div class="page ${siteName.toLowerCase()}-landing">
    <header class="landing-header">
      <h1 class="logo">${siteName}</h1>
      <nav class="landing-nav">Features Pricing Docs</nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-copy">핵심 제안과 설명</div>
        <div class="hero-action">CTA 버튼</div>
      </section>
      <section class="features">
        <article class="feature-card">기능 1</article>
        <article class="feature-card">기능 2</article>
        <article class="feature-card">기능 3</article>
      </section>
      <section class="workflow">사용 흐름</section>
      <section class="trust">고객/지표/후기</section>
      <section class="final-cta">마지막 행동 유도</section>
    </main>
  </div>
</body>`,
  institution: (siteName) => `<body>
  <div class="page ${siteName.toLowerCase()}-institution">
    <header class="institution-header">
      <div class="top-util">언어 / 로그인 / 검색</div>
      <h1 class="logo">${siteName}</h1>
      <nav class="global-nav">소개 공지 자료실 신청</nav>
    </header>

    <main>
      <section class="notice-hero">주요 안내</section>
      <section class="notice-list">
        <article class="notice-item">공지사항</article>
        <article class="notice-item">공지사항</article>
      </section>
      <section class="quick-links">빠른 링크</section>
      <section class="service-cards">기관 서비스</section>
    </main>
  </div>
</body>`,
  magazine: (siteName) => `<body>
  <div class="page ${siteName.toLowerCase()}-magazine">
    <header class="magazine-header">
      <h1 class="logo">${siteName}</h1>
      <nav class="category-nav">Culture Design Tech Life</nav>
    </header>

    <main class="magazine-layout">
      <section class="featured-article">
        <article class="hero-article">대표 기사</article>
      </section>
      <section class="article-grid">
        <article class="article-card">기사 카드</article>
        <article class="article-card">기사 카드</article>
        <article class="article-card">기사 카드</article>
      </section>
      <aside class="recommend-area">추천 콘텐츠</aside>
    </main>
  </div>
</body>`,
  dashboard: (siteName) => `<body>
  <div class="dashboard-shell ${siteName.toLowerCase()}-dashboard">
    <aside class="sidebar">
      <h1 class="product-logo">${siteName}</h1>
      <nav class="sidebar-nav">Overview Reports Settings</nav>
    </aside>
    <div class="dashboard-main">
      <header class="topbar">검색 / 필터 / 사용자 메뉴</header>
      <main>
        <section class="metric-grid">
          <article class="metric-card">KPI</article>
          <article class="metric-card">KPI</article>
        </section>
        <section class="chart-panel">차트</section>
        <section class="data-panel">데이터 테이블</section>
      </main>
    </div>
  </div>
</body>`,
};

const actualCssByType = {
  portal: `body {
  background: #f5f6f8;
}

.site-header {
  display: grid;
  gap: 12px;
  padding: 20px 0;
}

.search-area,
.service-nav {
  display: flex;
  align-items: center;
  gap: 12px;
}

.page-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 24px;
}

.content-column,
.side-column {
  display: grid;
  gap: 16px;
}`,
  commerce: `.shop-header {
  display: grid;
  gap: 14px;
}

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

.product-card {
  display: grid;
  gap: 10px;
}`,
  brand: `.brand-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-hero {
  min-height: 72vh;
  display: grid;
  align-items: end;
}

.collection-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}`,
  landing: `.landing-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

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

.final-cta {
  text-align: center;
  padding: 64px 0;
}`,
  institution: `.institution-header {
  display: grid;
  gap: 12px;
}

.notice-list {
  display: grid;
  gap: 10px;
}

.notice-item {
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
}

.quick-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 14px;
}`,
  magazine: `.magazine-layout {
  display: grid;
  gap: 32px;
}

.featured-article {
  display: grid;
  min-height: 420px;
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 22px;
}

.article-card {
  display: grid;
  gap: 10px;
}`,
  dashboard: `.dashboard-shell {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
}

.metric-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}`,
};

function resolveTypeKey(siteType) {
  return actualHtmlByType[siteType] ? siteType : typeKeyByLabel[siteType] ?? 'landing';
}

export function getActualHtmlStructure(siteType, siteName) {
  return actualHtmlByType[resolveTypeKey(siteType)](siteName);
}

export function getActualCssStructure(siteType) {
  return actualCssByType[resolveTypeKey(siteType)];
}
