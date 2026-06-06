import { CheckCircle2, Clipboard } from 'lucide-react';
import { useState } from 'react';

function tokenizeHtml(code) {
  return code.split(/(<!--[\s\S]*?-->|<\/?[A-Za-z][\w-]*|\/?>|[\w:-]+(?==)|"[^"]*"|'[^']*')/g);
}

function tokenizeCss(code) {
  return code.split(
    /(\/\*[\s\S]*?\*\/|@[A-Za-z-]+|[.#]?[A-Za-z_][\w-]*(?=\s*\{)|[A-Za-z-]+(?=\s*:)|#[0-9a-fA-F]{3,8}|:[A-Za-z-]+|\b\d+(?:\.\d+)?(?:px|rem|vh|vw|fr|%)?\b|[{}:;(),/]|"[^"]*"|'[^']*')/g,
  );
}

function getHtmlTokenClass(token) {
  if (!token) return '';
  if (token.startsWith('<!--')) return 'syntax-comment';
  if (/^<\/?[A-Za-z]/.test(token)) return 'syntax-tag';
  if (token === '>' || token === '/>') return 'syntax-punctuation';
  if (/^["']/.test(token)) return 'syntax-string';
  if (/^[\w:-]+$/.test(token)) return 'syntax-attribute';
  return '';
}

function getCssTokenClass(token) {
  if (!token) return '';
  if (token.startsWith('/*')) return 'syntax-comment';
  if (token.startsWith('@')) return 'syntax-keyword';
  if (/^[.#]?[A-Za-z_][\w-]*$/.test(token)) return token.startsWith('.') || token.startsWith('#') ? 'syntax-selector' : 'syntax-property';
  if (/^#[0-9a-fA-F]{3,8}$/.test(token) || /^\d/.test(token) || /^["']/.test(token)) return 'syntax-value';
  if (token.startsWith(':') && token.length > 1) return 'syntax-pseudo';
  if (/^[{}:;(),/]$/.test(token)) return 'syntax-punctuation';
  return '';
}

function renderHighlightedCode(code, label) {
  const language = label.toLowerCase();
  const tokens = language === 'html' ? tokenizeHtml(code) : tokenizeCss(code);
  const getClassName = language === 'html' ? getHtmlTokenClass : getCssTokenClass;

  return tokens.map((token, index) => {
    const className = getClassName(token);

    return className ? (
      <span className={className} key={`${token}-${index}`}>
        {token}
      </span>
    ) : (
      <span key={`${token}-${index}`}>{token}</span>
    );
  });
}

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

export default function CodeBlock({ code, label }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await writeClipboardText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <figure className="code-block">
      <figcaption>
        <span>{label}</span>
        <button className="code-copy-button" type="button" onClick={copyCode}>
          {copied ? <CheckCircle2 size={15} aria-hidden="true" /> : <Clipboard size={15} aria-hidden="true" />}
          {copied ? '복사됨' : '복사'}
        </button>
      </figcaption>
      <pre>
        <code>{renderHighlightedCode(code, label)}</code>
      </pre>
    </figure>
  );
}
