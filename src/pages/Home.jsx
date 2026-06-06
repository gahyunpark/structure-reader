import { useNavigate } from 'react-router-dom';
import UrlInputForm from '../components/UrlInputForm.jsx';
import { generateAnalysis } from '../utils/generateAnalysis.js';

export default function Home() {
  const navigate = useNavigate();

  function handleAnalyze(payload) {
    const analysis = generateAnalysis(payload);
    sessionStorage.setItem('structure-reader-analysis', JSON.stringify(analysis));
    navigate('/analysis');
  }

  return (
    <div className="page-shell home-search-page">
      <section className="home-search-panel" aria-label="사이트 구조 분석 시작">
        <UrlInputForm onSubmit={handleAnalyze} />
      </section>
    </div>
  );
}
