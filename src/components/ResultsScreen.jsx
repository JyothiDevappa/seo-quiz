import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { getSeoLevel, CATEGORIES } from '../data/questions';

export default function ResultsScreen({
  questions,
  userAnswers,
  onReviewAnswers,
  onRestartQuiz
}) {
  // Calculate score
  let correctCount = 0;
  questions.forEach(q => {
    const ans = userAnswers[q.id];
    if (ans && ans.isSubmitted && ans.isCorrect) {
      correctCount += 1;
    }
  });

  const total = questions.length;
  const percentage = Math.round((correctCount / total) * 100);
  const seoLevel = getSeoLevel(correctCount);

  // Animated score counter
  const [displayedScore, setDisplayedScore] = useState(0);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    // Trigger confetti if high score (e.g. >= 21) or moderate celebration
    try {
      if (correctCount >= 21) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#103D32', '#2E9E6D', '#D8F3DC', '#F7F5EF']
        });
      }
    } catch {
      // safe fallback if canvas not available
    }

    // Number animation
    let start = 0;
    const duration = 1200; // ms
    const increment = Math.ceil(correctCount / (duration / 25));
    const timer = setInterval(() => {
      start += increment;
      if (start >= correctCount) {
        setDisplayedScore(correctCount);
        clearInterval(timer);
      } else {
        setDisplayedScore(start);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [correctCount]);

  // Category breakdown calculation
  const categoryStats = CATEGORIES.map(cat => {
    const catQuestions = questions.filter(q => q.categoryId === cat.id);
    const catTotal = catQuestions.length;
    let catCorrect = 0;
    catQuestions.forEach(q => {
      const ans = userAnswers[q.id];
      if (ans && ans.isSubmitted && ans.isCorrect) {
        catCorrect += 1;
      }
    });
    return {
      ...cat,
      correct: catCorrect,
      total: catTotal,
      percentage: Math.round((catCorrect / catTotal) * 100)
    };
  });

  // Circular gauge circumference
  const radius = 78;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (percentage / 100) * circumference;

  // Sharing copy
  const currentUrl = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : 'https://seo-iq-challenge.netlify.app';
  const shareCopy = `I scored ${correctCount}/${total} (${seoLevel.title}) on the SEO IQ Challenge! How well do you know Search Engine Optimization? Take the challenge: ${currentUrl}`;

  const handleCopyResult = async () => {
    try {
      await navigator.clipboard.writeText(shareCopy);
      setToastMessage('Score summary copied to clipboard! Ready to paste into LinkedIn or messages.');
      setTimeout(() => setToastMessage(''), 4500);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = shareCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setToastMessage('Score summary copied to clipboard!');
      setTimeout(() => setToastMessage(''), 4500);
    }
  };

  const handleLinkedInShare = () => {
    // Official LinkedIn share URL
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    window.open(linkedInUrl, '_blank', 'noopener,noreferrer,width=650,height=600');
  };

  return (
    <div className="results-wrapper">
      <div className="container container-narrow">
        
        {/* Main Hero Score Card */}
        <div className="results-hero-card">
          <div className="results-level-pill">
            <span aria-hidden="true">{seoLevel.badge}</span>
            <span>Level: {seoLevel.title}</span>
          </div>

          {/* Radial Score Gauge */}
          <div className="score-gauge-wrapper">
            <svg className="score-svg-ring" viewBox="0 0 190 190">
              <circle
                className="score-svg-bg"
                cx="95"
                cy="95"
                r={radius}
              />
              <circle
                className="score-svg-progress"
                cx="95"
                cy="95"
                r={radius}
                strokeDasharray={circumference}
                strokeDashoffset={strokeOffset}
              />
            </svg>
            <div className="score-gauge-content">
              <div className="score-gauge-number">{displayedScore}</div>
              <div className="score-gauge-total">out of {total}</div>
              <div className="score-percentage-tag">{percentage}%</div>
            </div>
          </div>

          <h2 className="results-title">
            {seoLevel.tagline || seoLevel.title}
          </h2>

          <p className="results-summary">
            {seoLevel.summary}
          </p>

          <p className="results-advice">
            💡 Next Step: {seoLevel.advice}
          </p>

          {/* Action CTAs */}
          <div className="results-actions-grid">
            <button
              id="review-answers-btn"
              type="button"
              className="btn btn-secondary btn-lg"
              onClick={onReviewAnswers}
            >
              <span>Review My Answers</span>
              <span aria-hidden="true">📋</span>
            </button>

            <button
              id="try-again-btn"
              type="button"
              className="btn btn-primary btn-lg"
              onClick={onRestartQuiz}
            >
              <span>Try Again</span>
              <span aria-hidden="true">↺</span>
            </button>
          </div>
        </div>

        {/* Category-Wise Breakdown Card */}
        <div className="breakdown-card">
          <h3 className="breakdown-title">Category Breakdown</h3>
          <p className="breakdown-subtitle">
            See your performance across all six core areas of Search Engine Optimization.
          </p>

          <div className="category-breakdown-list">
            {categoryStats.map(cat => (
              <div key={cat.id} className="category-breakdown-item">
                <div className="category-item-header">
                  <span className="category-item-name">{cat.name}</span>
                  <span className="category-item-score">
                    {cat.correct} / {cat.total} ({cat.percentage}%)
                  </span>
                </div>
                <div className="category-bar-track">
                  <div
                    className="category-bar-fill"
                    style={{ width: `${cat.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LinkedIn Share & Copy Section */}
        <div className="share-callout-card">
          <div className="share-callout-text">
            <h4>Share Your SEO Score</h4>
            <p>Challenge your colleagues, network, and connections on LinkedIn.</p>
          </div>

          <div className="share-callout-btns">
            <button
              type="button"
              id="linkedin-share-btn"
              className="btn btn-linkedin"
              onClick={handleLinkedInShare}
              title="Open LinkedIn Share Dialog"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>Share on LinkedIn</span>
            </button>

            <button
              type="button"
              id="copy-result-btn"
              className="btn btn-secondary"
              onClick={handleCopyResult}
              title="Copy score & link to clipboard"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>Copy Result</span>
            </button>
          </div>
        </div>

        {/* Toast Notification */}
        {toastMessage && (
          <div className="toast-notice" role="status" aria-live="polite">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>{toastMessage}</span>
          </div>
        )}

      </div>
    </div>
  );
}
