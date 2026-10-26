import React from 'react';
import { CATEGORIES, SEO_LEVELS } from '../data/questions';

export default function LandingPage({ onStartQuiz, onResumeQuiz, hasSavedProgress, savedQuestionIndex }) {
  return (
    <main className="landing-wrapper">
      {/* Hero Section */}
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="container container-narrow">

          <h1 id="hero-title" className="hero-headline">
            How SEO Smart Are You?
          </h1>

          <p className="hero-subheading">
            30 questions. One challenge. Discover your SEO level.
          </p>

          <p className="hero-supporting">
            Test your SEO knowledge, learn something new, and challenge your network.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-wrapper">
            {hasSavedProgress ? (
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button 
                  id="resume-quiz-btn"
                  className="btn btn-primary btn-lg" 
                  onClick={onResumeQuiz}
                >
                  <span>Resume Challenge</span>
                  <span style={{ opacity: 0.85, fontSize: '0.85em', fontWeight: 500 }}>
                    (Q{savedQuestionIndex + 1} of 30)
                  </span>
                  <span aria-hidden="true">→</span>
                </button>
                <button 
                  id="start-fresh-btn"
                  className="btn btn-secondary btn-lg" 
                  onClick={onStartQuiz}
                >
                  Start Fresh
                </button>
              </div>
            ) : (
              <button 
                id="start-challenge-btn"
                className="btn btn-primary btn-lg" 
                onClick={onStartQuiz}
              >
                <span>Start the Challenge</span>
                <span aria-hidden="true">→</span>
              </button>
            )}

            <div className="hero-meta-note">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span>No account or sign-up required • 100% Free & Immediate</span>
            </div>
          </div>

          {/* Details / Stats Strip */}
          <div className="stats-strip" role="region" aria-label="Quiz Quick Facts">
            <div className="stat-pill">
              <span className="stat-number">30</span>
              <span className="stat-label">Curated Questions</span>
            </div>
            <div className="stat-pill">
              <span className="stat-number">5–8 min</span>
              <span className="stat-label">Estimated Time</span>
            </div>
            <div className="stat-pill">
              <span className="stat-number">Beginner</span>
              <span className="stat-label">To Intermediate Friendly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="categories-preview" aria-labelledby="categories-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="categories-heading" className="section-title">
              What You'll Be Tested On
            </h2>
            <p className="section-subtitle">
              Six essential pillars covering modern search engine optimization principles.
            </p>
          </div>

          <div className="categories-grid">
            {CATEGORIES.map((cat, idx) => (
              <article key={cat.id} className="category-card">
                <div className="category-card-header">
                  <div className="category-icon-bubble" aria-hidden="true">
                    {idx + 1}
                  </div>
                  <h3 className="category-card-title">{cat.name}</h3>
                </div>
                <p className="category-card-desc">{cat.description}</p>
                <div className="category-card-footer">
                  <span>5 Questions</span>
                  <span>Modern Standards</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Levels Preview */}
      <section className="container" aria-labelledby="levels-heading">
        <div className="levels-preview">
          <div className="levels-header">
            <h2 id="levels-heading">Four Personalized Rank Tiers</h2>
            <p>Your final score unlocks your official SEO IQ rank with actionable recommendations.</p>
          </div>

          <div className="levels-grid">
            {SEO_LEVELS.map((lvl) => (
              <div key={lvl.title} className="level-card">
                <div className="level-badge" aria-hidden="true">{lvl.badge}</div>
                <div className="level-title">{lvl.title}</div>
                <div className="level-range">{lvl.min}–{lvl.max} points</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
