import { generateAnalysis } from './generateAnalysis.js';

const STORAGE_KEY = 'structure-reader-custom-samples';

export function getCustomSamples() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function saveCustomSamples(samples) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(samples));
}

export function createCustomSample({ siteName, siteUrl }) {
  const analysis = generateAnalysis({ siteUrl });

  return {
    ...analysis,
    id: `custom-${Date.now()}`,
    siteName: siteName.trim() || analysis.siteName,
    siteUrl: analysis.siteUrl,
    siteType: '사용자 추가',
    overview: `${siteName.trim() || analysis.siteName}은(는) 사용자가 추가한 샘플 사이트입니다. 기본 랜딩페이지형 템플릿을 바탕으로 구조를 읽고, 필요하면 이후 자동 분석 로직으로 더 정밀하게 확장할 수 있습니다.`,
    isCustom: true,
  };
}

export function updateCustomSample(sample, { siteName, siteUrl }) {
  const updated = generateAnalysis({ siteUrl });

  return {
    ...updated,
    id: sample.id,
    siteName: siteName.trim() || updated.siteName,
    siteUrl: updated.siteUrl,
    siteType: sample.siteType || '사용자 추가',
    overview: `${siteName.trim() || updated.siteName}은(는) 사용자가 추가한 샘플 사이트입니다. 기본 랜딩페이지형 템플릿을 바탕으로 구조를 읽고, 필요하면 이후 자동 분석 로직으로 더 정밀하게 확장할 수 있습니다.`,
    isCustom: true,
  };
}
