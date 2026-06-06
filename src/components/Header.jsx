import { BookOpen, LibraryBig } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="app-header">
      <Link className="brand-link" to="/" aria-label="Structure Reader Home">
        <BookOpen size={24} aria-hidden="true" />
        <span>Structure Reader</span>
      </Link>
      <nav className="header-nav" aria-label="주요 메뉴">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/samples">
          <LibraryBig size={17} aria-hidden="true" />
          Samples
        </NavLink>
      </nav>
    </header>
  );
}
