import { ExternalLink } from 'lucide-react';

export default function KeywordCard({ item }) {
  return (
    <article className="keyword-card">
      <div>
        <h3>{item.keyword}</h3>
        <p>{item.description}</p>
      </div>
      <a href={item.mdnUrl} target="_blank" rel="noreferrer">
        MDN 문서
        <ExternalLink size={15} aria-hidden="true" />
      </a>
    </article>
  );
}
