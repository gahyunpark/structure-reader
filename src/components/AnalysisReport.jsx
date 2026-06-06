import { CheckCircle2, Clipboard, Download, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import CodeBlock from './CodeBlock.jsx';
import DiagramBlock from './DiagramBlock.jsx';
import KeywordCard from './KeywordCard.jsx';
import ReportSection from './ReportSection.jsx';
import { analysisToText } from '../utils/generateAnalysis.js';
import { normalizePracticeStructures } from '../data/recommendedSites.js';
import { getMenuStructureDiagram, getVisualBoxDiagram } from '../data/structureDiagrams.js';
import { getSimilarSites } from '../data/similarSites.js';
import { getActualCssStructure, getActualHtmlStructure } from '../data/actualStructures.js';

export default function AnalysisReport({ analysis }) {
  const [copied, setCopied] = useState(false);
  const practiceStructures = normalizePracticeStructures(analysis.siteType, analysis.repeatPracticeStructure);
  const menuStructure = analysis.menuStructure ?? getMenuStructureDiagram(analysis.siteType);
  const visualBoxBlueprint = analysis.visualBoxBlueprint ?? getVisualBoxDiagram(analysis.siteType);
  const similarSites = analysis.similarSites ?? getSimilarSites(analysis.siteType);
  const actualHtmlStructure = analysis.actualHtmlStructure ?? getActualHtmlStructure(analysis.siteType, analysis.siteName);
  const actualCssStructure = analysis.actualCssStructure ?? getActualCssStructure(analysis.siteType);

  async function writeClipboardText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.top = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  }

  function getReportText() {
    return analysisToText(analysis);
  }

  function getSafeFileName() {
    return `${analysis.siteName || 'structure-reader'}-structure-report`
      .toLowerCase()
      .replace(/[^a-z0-9가-힣_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  async function copyReport() {
    await writeClipboardText(getReportText());
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  function downloadReport() {
    const blob = new Blob([getReportText()], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = `${getSafeFileName()}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <article className="analysis-report">
      <div className="report-cover">
        <div>
          <h1>{analysis.siteName} 구조 분석</h1>
          <p>{analysis.siteUrl}</p>
        </div>
        <div className="report-actions">
          <button className="secondary-button" type="button" onClick={copyReport}>
            {copied ? <CheckCircle2 size={18} aria-hidden="true" /> : <Clipboard size={18} aria-hidden="true" />}
            {copied ? '복사됨' : '리포트 복사'}
          </button>
          <button className="secondary-button" type="button" onClick={downloadReport}>
            <Download size={18} aria-hidden="true" />
            파일 다운로드
          </button>
        </div>
      </div>

      <ReportSection eyebrow="A" title="사이트 개요">
        <p>{analysis.overview}</p>
      </ReportSection>

      <ReportSection eyebrow="A-1" title="비슷한 구조의 참고 사이트">
        <div className="similar-site-list">
          {similarSites.map((site) => (
            <a key={site.url} href={site.url} target="_blank" rel="noreferrer">
              <span>{site.name}</span>
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          ))}
        </div>
      </ReportSection>

      <ReportSection eyebrow="B" title="HTML 구조와 CSS 구조">
        <p>{analysis.htmlCssStructure}</p>
      </ReportSection>

      <ReportSection eyebrow="C" title="화면 박스 설계">
        <p>{analysis.boxBlueprint}</p>
      </ReportSection>

      <ReportSection eyebrow="C-1" title="사이트 메뉴/DOM 구성">
        <DiagramBlock label="Structure Tree" diagram={menuStructure} />
      </ReportSection>

      <ReportSection eyebrow="C-2" title="화면 박스 설계도">
        <DiagramBlock label="Box Blueprint" diagram={visualBoxBlueprint} />
      </ReportSection>

      <ReportSection eyebrow="D-1" title="페이지 분석 HTML 구조">
        <p className="section-note">현재 단계에서는 자동 크롤링이 아닌 사이트 유형 기반 분석 구조입니다.</p>
        <CodeBlock label="HTML" code={actualHtmlStructure} />
      </ReportSection>

      <ReportSection eyebrow="E" title="학습용 CSS 뼈대">
        <CodeBlock label="CSS" code={analysis.cssSkeleton} />
      </ReportSection>

      <ReportSection eyebrow="E-1" title="페이지 분석 CSS 구조">
        <p className="section-note">실제 구현에서 우선 확인할 레이아웃 선택자와 CSS 규칙의 흐름입니다.</p>
        <CodeBlock label="CSS" code={actualCssStructure} />
      </ReportSection>

      <ReportSection eyebrow="F" title="학습 키워드">
        <div className="keyword-grid">
          {analysis.learningKeywords.map((item) => (
            <KeywordCard key={item.keyword} item={item} />
          ))}
        </div>
      </ReportSection>

      <ReportSection eyebrow="H" title="반복 연습할 구조">
        <ol className="practice-list">
          {practiceStructures.map((item) => (
            <li key={item.title}>
              <span className="practice-title">{item.title}</span>
              {item.recommendedSites?.length > 0 ? (
                <div className="practice-links" aria-label={`${item.title} 추천 사이트`}>
                  {item.recommendedSites.map((site) => (
                    <a key={site.url} href={site.url} target="_blank" rel="noreferrer">
                      {site.name}
                      <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              ) : null}
            </li>
          ))}
        </ol>
      </ReportSection>

      <ReportSection eyebrow="I" title="구현 순서">
        <ol className="step-list">
          {analysis.implementationSteps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </ReportSection>
    </article>
  );
}
