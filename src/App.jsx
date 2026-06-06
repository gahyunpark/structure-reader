import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import AnalysisResult from './pages/AnalysisResult.jsx';
import Samples from './pages/Samples.jsx';

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<AnalysisResult />} />
          <Route path="/samples" element={<Samples />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
