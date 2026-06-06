import { Plus, Save, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import SampleCard from '../components/SampleCard.jsx';
import { sampleAnalyses } from '../data/sampleAnalyses.js';
import { createCustomSample, getCustomSamples, saveCustomSamples, updateCustomSample } from '../utils/customSamples.js';

const emptyForm = {
  siteName: '',
  siteUrl: '',
};

export default function Samples() {
  const [customSamples, setCustomSamples] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    setCustomSamples(getCustomSamples());
  }, []);

  function persistSamples(nextSamples) {
    setCustomSamples(nextSamples);
    saveCustomSamples(nextSamples);
  }

  function resetForm() {
    setForm(emptyForm);
    setEditingId(null);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (editingId) {
      const nextSamples = customSamples.map((sample) =>
        sample.id === editingId ? updateCustomSample(sample, form) : sample,
      );
      persistSamples(nextSamples);
      resetForm();
      return;
    }

    persistSamples([createCustomSample(form), ...customSamples]);
    resetForm();
  }

  function handleEdit(sample) {
    setEditingId(sample.id);
    setForm({
      siteName: sample.siteName,
      siteUrl: sample.siteUrl,
    });
  }

  function handleDelete(sampleId) {
    persistSamples(customSamples.filter((sample) => sample.id !== sampleId));
    if (editingId === sampleId) resetForm();
  }

  const allSamples = [...customSamples, ...sampleAnalyses];

  return (
    <div className="page-shell">
      <section className="samples-page">
        <div className="page-title">
          <p className="kicker">Sample Library</p>
          <h1>샘플 분석 관리</h1>
          <p>자주 보고 싶은 사이트를 샘플로 추가하면 동일한 분석 리포트로 다시 열어볼 수 있습니다.</p>
        </div>

        <form className="sample-manager" onSubmit={handleSubmit}>
          <label className="field">
            <span>사이트 이름</span>
            <input
              type="text"
              placeholder="예: A24"
              value={form.siteName}
              onChange={(event) => setForm({ ...form, siteName: event.target.value })}
              required
            />
          </label>
          <label className="field">
            <span>사이트 URL</span>
            <input
              type="text"
              inputMode="url"
              placeholder="https://example.com"
              value={form.siteUrl}
              onChange={(event) => setForm({ ...form, siteUrl: event.target.value })}
              required
            />
          </label>
          <div className="sample-manager-actions">
            <button className="primary-button" type="submit">
              {editingId ? <Save size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
              {editingId ? '수정 저장' : '샘플 추가'}
            </button>
            {editingId ? (
              <button className="secondary-button" type="button" onClick={resetForm}>
                <X size={18} aria-hidden="true" />
                취소
              </button>
            ) : null}
          </div>
        </form>

        <div className="sample-grid">
          {allSamples.map((sample) => (
            <SampleCard key={sample.id} sample={sample} onEdit={handleEdit} onDelete={handleDelete} />
          ))}
        </div>
      </section>
    </div>
  );
}
