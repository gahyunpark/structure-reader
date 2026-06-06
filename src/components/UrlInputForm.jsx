import { Search } from 'lucide-react';
import { useState } from 'react';

export default function UrlInputForm({ onSubmit }) {
  const [siteUrl, setSiteUrl] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ siteUrl });
  }

  return (
    <form className="url-form" onSubmit={handleSubmit}>
      <label className="field search-field">
        <input
          type="text"
          inputMode="url"
          aria-label="사이트 URL"
          placeholder="분석할 웹사이트 주소를 붙여넣으세요"
          value={siteUrl}
          onChange={(event) => setSiteUrl(event.target.value)}
          required
        />
      </label>
      <button className="primary-button" type="submit">
        <Search size={18} aria-hidden="true" />
        분석 시작
      </button>
    </form>
  );
}
