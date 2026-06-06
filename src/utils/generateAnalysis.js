import { analysisTemplates } from '../data/templates.js';
import { attachRecommendedSites, normalizePracticeStructures } from '../data/recommendedSites.js';
import { getMenuStructureDiagram, getVisualBoxDiagram } from '../data/structureDiagrams.js';
import { getSimilarSites } from '../data/similarSites.js';
import { getActualCssStructure, getActualHtmlStructure } from '../data/actualStructures.js';

function extractSiteName(url) {
  try {
    const parsed = new URL(url.startsWith('http') ? url : `https://${url}`);
    return parsed.hostname.replace(/^www\./, '').split('.')[0].toUpperCase();
  } catch {
    return '입력한 사이트';
  }
}

export function generateAnalysis({ siteUrl, siteType = 'landing' }) {
  const template = analysisTemplates[siteType] ?? analysisTemplates.landing;
  const normalizedUrl = siteUrl?.trim() || 'https://example.com';
  const siteName = extractSiteName(normalizedUrl);

  return {
    id: `analysis-${Date.now()}`,
    siteName,
    siteUrl: normalizedUrl.startsWith('http') ? normalizedUrl : `https://${normalizedUrl}`,
    siteType: template.siteType,
    overview: `${siteName}은(는) 입력한 URL을 기준으로 ${template.siteType} 패턴을 적용해 읽어볼 수 있습니다. ${template.overview}`,
    htmlCssStructure: template.htmlCssStructure,
    boxBlueprint: template.boxBlueprint,
    menuStructure: getMenuStructureDiagram(siteType),
    visualBoxBlueprint: getVisualBoxDiagram(siteType),
    htmlSkeleton: template.htmlSkeleton,
    cssSkeleton: template.cssSkeleton,
    actualHtmlStructure: getActualHtmlStructure(siteType, siteName),
    actualCssStructure: getActualCssStructure(siteType),
    learningKeywords: template.learningKeywords,
    repeatPracticeStructure: attachRecommendedSites(siteType, template.repeatPracticeStructure),
    implementationSteps: template.implementationSteps,
    similarSites: getSimilarSites(template.siteType),
  };
}

export function analysisToText(analysis) {
  if (!analysis) return '';

  const keywords = analysis.learningKeywords
    .map((item) => `- ${item.keyword}: ${item.description}\n  ${item.mdnUrl}`)
    .join('\n');
  const practiceStructures = normalizePracticeStructures(analysis.siteType, analysis.repeatPracticeStructure);
  const menuStructure = analysis.menuStructure ?? getMenuStructureDiagram(analysis.siteType);
  const visualBoxBlueprint = analysis.visualBoxBlueprint ?? getVisualBoxDiagram(analysis.siteType);
  const actualHtmlStructure = analysis.actualHtmlStructure ?? getActualHtmlStructure(analysis.siteType, analysis.siteName);
  const actualCssStructure = analysis.actualCssStructure ?? getActualCssStructure(analysis.siteType);

  return [
    `# ${analysis.siteName} 구조 분석`,
    `URL: ${analysis.siteUrl}`,
    `유형: ${analysis.siteType}`,
    '',
    '## A. 사이트 개요',
    analysis.overview,
    '',
    '## A-1. 비슷한 구조의 참고 사이트',
    (analysis.similarSites ?? getSimilarSites(analysis.siteType)).map((site) => `- ${site.name}: ${site.url}`).join('\n'),
    '',
    '## B. HTML 구조와 CSS 구조',
    analysis.htmlCssStructure,
    '',
    '## C. 화면 박스 설계',
    analysis.boxBlueprint,
    '',
    '## C-1. 사이트 메뉴/DOM 구성',
    menuStructure,
    '',
    '## C-2. 화면 박스 설계도',
    visualBoxBlueprint,
    '',
    '## D-1. 페이지 분석 HTML 구조',
    actualHtmlStructure,
    '',
    '## E. 학습용 CSS 뼈대',
    analysis.cssSkeleton,
    '',
    '## E-1. 페이지 분석 CSS 구조',
    actualCssStructure,
    '',
    '## F. 학습 키워드',
    keywords,
    '',
    '## H. 반복 연습할 구조',
    practiceStructures
      .map((item, index) => {
        const links = !item.recommendedSites?.length
          ? ''
          : `\n   추천 사이트: ${item.recommendedSites.map((site) => `${site.name}(${site.url})`).join(', ')}`;

        return `${index + 1}. ${item.title}${links}`;
      })
      .join('\n'),
    '',
    '## I. 구현 순서',
    analysis.implementationSteps.map((item, index) => `${index + 1}. ${item}`).join('\n'),
  ].join('\n');
}
