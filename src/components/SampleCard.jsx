import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SampleCard({ sample, onEdit, onDelete }) {
  return (
    <article className="sample-card">
      <div>
        <p className="sample-type">{sample.siteType}</p>
        <h3>{sample.siteName}</h3>
        <p>{sample.overview}</p>
      </div>
      <div className="sample-card-actions">
        <Link to={`/analysis?sample=${sample.id}`} aria-label={`${sample.siteName} 샘플 분석 보기`}>
          분석 보기
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
        {sample.isCustom ? (
          <div className="sample-edit-actions">
            <button type="button" onClick={() => onEdit(sample)}>
              수정
            </button>
            <button type="button" onClick={() => onDelete(sample.id)}>
              삭제
            </button>
          </div>
        ) : null}
      </div>
    </article>
  );
}
