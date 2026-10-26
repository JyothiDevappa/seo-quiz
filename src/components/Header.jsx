import React from 'react';

export default function Header({ currentScreen, currentQuestionIndex, totalQuestions, onNavigateHome, onRestart }) {
  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <button 
          className="brand-link" 
          onClick={onNavigateHome} 
          title="Return to SEO IQ Home"
          aria-label="SEO IQ Homepage"
        >
          <div className="brand-icon-wrapper" aria-hidden="true">
            IQ
          </div>
          <div className="brand-text">
            <span className="brand-title">SEO IQ</span>
            <span className="brand-tagline">The SEO Challenge</span>
          </div>
        </button>

        <div className="header-actions">
          {currentScreen === 'quiz' && (
            <>
              <div className="header-status-badge">
                <span className="status-dot"></span>
                <span>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
              </div>
              <button 
                className="btn btn-ghost" 
                onClick={onRestart}
                title="Restart quiz from the beginning"
              >
                Start Over
              </button>
            </>
          )}

          {currentScreen === 'results' && (
            <button 
              className="btn btn-secondary" 
              onClick={onRestart}
            >
              Try Again
            </button>
          )}

          {currentScreen === 'review' && (
            <button 
              className="btn btn-secondary" 
              onClick={onNavigateHome}
            >
              Back to Home
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
