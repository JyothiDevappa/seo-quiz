import React from 'react';

export default function Footer({ onRestart, onGoHome }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <div>
          <div style={{ fontWeight: 700, color: 'var(--color-forest)', marginBottom: '0.2rem' }}>
            SEO IQ — The SEO Challenge
          </div>
          <div>
            Test your SEO knowledge, learn something new, and discover how search-ready you really are — no sign-up required.
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer links">
          <button 
            type="button" 
            className="btn-ghost footer-link" 
            onClick={onGoHome}
            style={{ cursor: 'pointer', border: 'none', background: 'none' }}
          >
            Home
          </button>
          <button 
            type="button" 
            className="btn-ghost footer-link" 
            onClick={onRestart}
            style={{ cursor: 'pointer', border: 'none', background: 'none' }}
          >
            Reset Quiz
          </button>
          <button 
            type="button" 
            className="btn-ghost footer-link" 
            onClick={scrollToTop}
            style={{ cursor: 'pointer', border: 'none', background: 'none' }}
          >
            Back to Top ↑
          </button>
        </nav>
      </div>
    </footer>
  );
}
