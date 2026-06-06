import { Link, useSearchParams } from 'react-router-dom';
import AnalysisReport from '../components/AnalysisReport.jsx';
import { sampleAnalyses } from '../data/sampleAnalyses.js';
import { getCustomSamples } from '../utils/customSamples.js';

function getSavedAnalysis() {
  try {
    const saved = sessionStorage.getItem('structure-reader-analysis');
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

export default function AnalysisResult() {
  const [searchParams] = useSearchParams();
  const sampleId = searchParams.get('sample');
  const sample = [...getCustomSamples(), ...sampleAnalyses].find((item) => item.id === sampleId);
  const analysis = sample ?? getSavedAnalysis();

  if (!analysis) {
    return (
      <div className="page-shell empty-state">
        <p className="kicker">No Report</p>
        <h1>아직 생성된 분석 리포트가 없습니다.</h1>
        <p>Home 화면에서 URL을 입력하면 참고서형 리포트를 만들 수 있습니다.</p>
        <Link className="primary-link" to="/">
          분석 시작하기
        </Link>
      </div>
    );
  }

  return (
    <div className="page-shell result-page">
      <AnalysisReport analysis={analysis} />
    </div>
  );
}
