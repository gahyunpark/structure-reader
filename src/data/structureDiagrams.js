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
};

const menuStructureDiagrams = {
  portal: `<body>
└─ .page
   ├─ header.site-header
   │  ├─ .top-util
   │  ├─ .search-area
   │  │  ├─ h1.logo
   │  │  └─ form.search-form
   │  └─ nav.service-nav
   │
   ├─ main.page-layout
   │  ├─ .content-column
   │  │  ├─ section.ad-banner
   │  │  ├─ section.news-area
   │  │  ├─ section.shopping-area
   │  │  └─ section.recommend-area
   │  │
   │  └─ aside.side-column
   │     ├─ section.login-box
   │     ├─ section.side-ad
   │     ├─ section.weather-widget
   │     └─ section.stock-widget
   │
   └─ footer.site-footer`,
  commerce: `<body>
└─ .page
   ├─ header.shop-header
   │  ├─ h1.logo
   │  ├─ form.search-form
   │  └─ nav.category-nav
   │
   ├─ main.shop-layout
   │  ├─ aside.filter-panel
   │  │  ├─ section.category-filter
   │  │  ├─ section.price-filter
   │  │  └─ section.brand-filter
   │  │
   │  └─ section.product-section
   │     ├─ .promo-banner
   │     ├─ .sort-toolbar
   │     └─ .product-grid
   │        └─ article.product-card
   │
   └─ footer.shop-footer`,
  brand: `<body>
└─ .page
   ├─ header.brand-header
   │  ├─ h1.logo
   │  └─ nav.brand-nav
   │
   ├─ main
   │  ├─ section.brand-hero
   │  │  ├─ .hero-media
   │  │  └─ .hero-copy
   │  ├─ section.brand-story
   │  ├─ section.collection-grid
   │  │  └─ article.collection-card
   │  └─ section.campaign-link
   │
   └─ footer.brand-footer`,
  landing: `<body>
└─ .page
   ├─ header.landing-header
   │  ├─ h1.logo
   │  └─ nav.landing-nav
   │
   ├─ main
   │  ├─ section.hero
   │  │  ├─ .hero-copy
   │  │  └─ .hero-action
   │  ├─ section.features
   │  │  └─ article.feature-card
   │  ├─ section.workflow
   │  │  └─ ol.step-list
   │  ├─ section.trust
   │  └─ section.final-cta
   │
   └─ footer.landing-footer`,
  institution: `<body>
└─ .page
   ├─ header.institution-header
   │  ├─ .top-util
   │  ├─ h1.logo
   │  └─ nav.global-nav
   │
   ├─ main
   │  ├─ section.notice-hero
   │  ├─ section.notice-list
   │  │  └─ article.notice-item
   │  ├─ section.quick-links
   │  └─ section.service-cards
   │
   └─ footer.institution-footer`,
  magazine: `<body>
└─ .page
   ├─ header.magazine-header
   │  ├─ h1.logo
   │  └─ nav.category-nav
   │
   ├─ main.magazine-layout
   │  ├─ section.featured-article
   │  │  └─ article.hero-article
   │  ├─ section.article-grid
   │  │  └─ article.article-card
   │  └─ aside.recommend-area
   │     └─ article.recommend-card
   │
   └─ footer.magazine-footer`,
  dashboard: `<body>
└─ .dashboard-shell
   ├─ aside.sidebar
   │  ├─ h1.product-logo
   │  └─ nav.sidebar-nav
   │
   └─ .dashboard-main
      ├─ header.topbar
      │  ├─ form.search-form
      │  └─ .user-actions
      │
      └─ main
         ├─ section.metric-grid
         │  └─ article.metric-card
         ├─ section.chart-panel
         └─ section.data-panel`,
};

const visualBoxDiagrams = {
  portal: `┌──────────────────────────────────────────────┐
│ Header                                       │
│  ┌────────────────────────────────────────┐  │
│  │ Logo + Search Form                     │  │
│  └────────────────────────────────────────┘  │
│  Mail Cafe Blog Shopping News ...            │
└──────────────────────────────────────────────┘

┌──────────────────────────────┬───────────────┐
│ Left Content Column           │ Right Aside   │
│                               │               │
│ ┌──────────────────────────┐  │ ┌───────────┐ │
│ │ Ad / Main Banner          │  │ │ Login     │ │
│ └──────────────────────────┘  │ └───────────┘ │
│ ┌──────────────────────────┐  │ ┌───────────┐ │
│ │ News Section              │  │ │ Ad        │ │
│ └──────────────────────────┘  │ └───────────┘ │
│ ┌──────────────────────────┐  │ ┌───────────┐ │
│ │ Shopping Section          │  │ │ Weather   │ │
│ └──────────────────────────┘  │ └───────────┘ │
│ ┌──────────────────────────┐  │ ┌───────────┐ │
│ │ Recommended Contents      │  │ │ Stock     │ │
│ └──────────────────────────┘  │ └───────────┘ │
└──────────────────────────────┴───────────────┘`,
  commerce: `┌──────────────────────────────────────────────┐
│ Shop Header                                  │
│ Logo | Search | Cart | User                  │
│ Category Navigation                          │
└──────────────────────────────────────────────┘

┌───────────────┬──────────────────────────────┐
│ Filter Aside  │ Product Area                 │
│ ┌───────────┐ │ ┌──────────────────────────┐ │
│ │ Category  │ │ │ Promotion Banner         │ │
│ └───────────┘ │ └──────────────────────────┘ │
│ ┌───────────┐ │ Sort / View Options          │
│ │ Price     │ │ ┌──────┐ ┌──────┐ ┌──────┐ │
│ └───────────┘ │ │Card  │ │Card  │ │Card  │ │
│ ┌───────────┐ │ └──────┘ └──────┘ └──────┘ │
│ │ Brand     │ │ ┌──────┐ ┌──────┐ ┌──────┐ │
│ └───────────┘ │ │Card  │ │Card  │ │Card  │ │
└───────────────┴──────────────────────────────┘`,
  brand: `┌──────────────────────────────────────────────┐
│ Brand Header: Logo + Navigation              │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ Full Hero Image / Campaign Message           │
│ CTA                                          │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ Brand Story Text                             │
└──────────────────────────────────────────────┘

┌──────────────┬──────────────┬──────────────┐
│ Collection   │ Collection   │ Collection   │
│ Card         │ Card         │ Card         │
└──────────────┴──────────────┴──────────────┘`,
  landing: `┌──────────────────────────────────────────────┐
│ Landing Header: Logo + Short Nav             │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ Hero                                         │
│ Headline / Supporting Copy / CTA             │
└──────────────────────────────────────────────┘

┌──────────────┬──────────────┬──────────────┐
│ Feature 1    │ Feature 2    │ Feature 3    │
└──────────────┴──────────────┴──────────────┘

┌──────────────────────────────────────────────┐
│ Workflow Steps → Trust Signals → Final CTA   │
└──────────────────────────────────────────────┘`,
  institution: `┌──────────────────────────────────────────────┐
│ Institution Header                            │
│ Top Utility | Logo | Global Navigation        │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ Notice Hero / Main Announcement               │
└──────────────────────────────────────────────┘

┌──────────────────────────────┬───────────────┐
│ Notice List                   │ Quick Links   │
│ ┌──────────────────────────┐ │ ┌───────────┐ │
│ │ Notice Item              │ │ │ Shortcut  │ │
│ └──────────────────────────┘ │ └───────────┘ │
│ ┌──────────────────────────┐ │ ┌───────────┐ │
│ │ Notice Item              │ │ │ Service   │ │
└──────────────────────────────┴───────────────┘`,
  magazine: `┌──────────────────────────────────────────────┐
│ Magazine Header: Logo + Category Nav          │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ Featured Article                              │
│ Large Image + Title + Summary                 │
└──────────────────────────────────────────────┘

┌──────────────┬──────────────┬──────────────┐
│ Article Card │ Article Card │ Article Card │
└──────────────┴──────────────┴──────────────┘

┌──────────────────────────────┬───────────────┐
│ Latest Articles               │ Recommendations│
└──────────────────────────────┴───────────────┘`,
  dashboard: `┌───────────────┬──────────────────────────────┐
│ Sidebar       │ Topbar                       │
│ Navigation    │ Search / Filter / User       │
│               ├──────────────────────────────┤
│               │ KPI Card | KPI Card | KPI    │
│               ├──────────────────────────────┤
│               │ Chart Panel                  │
│               ├──────────────────────────────┤
│               │ Data Table / Activity List   │
└───────────────┴──────────────────────────────┘`,
};

function resolveTypeKey(siteType) {
  return menuStructureDiagrams[siteType] ? siteType : typeKeyByLabel[siteType] ?? 'landing';
}

export function getMenuStructureDiagram(siteType) {
  return menuStructureDiagrams[resolveTypeKey(siteType)];
}

export function getVisualBoxDiagram(siteType) {
  return visualBoxDiagrams[resolveTypeKey(siteType)];
}
