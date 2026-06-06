export const mdnLinks = {
  'HTML 기본': 'https://developer.mozilla.org/ko/docs/Web/HTML',
  'CSS 기본': 'https://developer.mozilla.org/ko/docs/Web/CSS',
  section: 'https://developer.mozilla.org/ko/docs/Web/HTML/Element/section',
  header: 'https://developer.mozilla.org/ko/docs/Web/HTML/Element/header',
  nav: 'https://developer.mozilla.org/ko/docs/Web/HTML/Element/nav',
  main: 'https://developer.mozilla.org/ko/docs/Web/HTML/Element/main',
  aside: 'https://developer.mozilla.org/ko/docs/Web/HTML/Element/aside',
  footer: 'https://developer.mozilla.org/ko/docs/Web/HTML/Element/footer',
  form: 'https://developer.mozilla.org/ko/docs/Web/HTML/Element/form',
  display: 'https://developer.mozilla.org/ko/docs/Web/CSS/display',
  flex: 'https://developer.mozilla.org/ko/docs/Web/CSS/flex',
  'CSS Grid': 'https://developer.mozilla.org/ko/docs/Web/CSS/CSS_grid_layout',
  position: 'https://developer.mozilla.org/ko/docs/Web/CSS/position',
  gap: 'https://developer.mozilla.org/ko/docs/Web/CSS/gap',
  'object-fit': 'https://developer.mozilla.org/ko/docs/Web/CSS/object-fit',
  'media query': 'https://developer.mozilla.org/ko/docs/Web/CSS/CSS_media_queries/Using_media_queries',
};

export const keywordDescriptions = {
  'HTML 기본': '문서의 의미 구조를 만들고 콘텐츠의 역할을 분명하게 나누는 기초입니다.',
  'CSS 기본': '색상, 간격, 배치, 반응형 흐름을 조정하는 스타일링의 출발점입니다.',
  section: '문서 안에서 주제별 영역을 나누는 시맨틱 섹션 요소입니다.',
  header: '페이지나 섹션의 제목, 탐색, 주요 도입 정보를 묶는 요소입니다.',
  nav: '사용자가 주요 페이지나 영역으로 이동할 수 있게 하는 탐색 요소입니다.',
  main: '페이지에서 가장 핵심이 되는 주요 콘텐츠 영역을 감싸는 요소입니다.',
  aside: '본문을 보조하는 사이드바, 추천, 필터, 관련 링크 영역에 적합합니다.',
  footer: '페이지나 섹션의 하단 정보, 정책, 보조 링크를 담는 요소입니다.',
  form: '검색, 로그인, 필터처럼 사용자의 입력을 받는 구조를 만드는 요소입니다.',
  display: '요소가 문서 흐름에서 어떻게 배치되는지 결정하는 CSS 속성입니다.',
  flex: '한 방향으로 정렬되는 메뉴, 카드 행, 버튼 그룹을 만들 때 유용합니다.',
  'CSS Grid': '행과 열을 동시에 다루는 2차원 레이아웃 구성 방식입니다.',
  position: '고정 헤더, 배지, 오버레이처럼 요소의 기준 위치를 조정합니다.',
  gap: 'flex와 grid 내부 항목 사이의 간격을 일관되게 관리합니다.',
  'object-fit': '이미지와 영상이 정해진 박스 안에서 자연스럽게 채워지도록 합니다.',
  'media query': '화면 크기와 기기 조건에 맞춰 레이아웃을 바꾸는 반응형 규칙입니다.',
};

export function enrichKeywords(keywords) {
  return keywords.map((keyword) => ({
    keyword,
    description: keywordDescriptions[keyword] ?? '웹 구조 분석에서 반복적으로 확인할 학습 키워드입니다.',
    mdnUrl: mdnLinks[keyword] ?? mdnLinks['HTML 기본'],
  }));
}
