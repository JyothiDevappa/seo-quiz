import React, { useState } from 'react';

export default function ReviewScreen({
  questions,
  userAnswers,
  onBackToResults,
  onRestartQuiz
}) {
  const [filter, setFilter] = useState('all'); // 'all' | 'correct' | 'incorrect'

  const total = questions.length;
  let correctCount = 0;
  questions.forEach(q => {
    const ans = userAnswers[q.id];
    if (ans && ans.isSubmitted && ans.isCorrect) {
      correctCount += 1;
    }
  });
  const incorrectCount = total - correctCount;

  const filteredQuestions = questions.filter(q => {
    const ans = userAnswers[q.id];
    const isCorrect = ans && ans.isSubmitted && ans.isCorrect;
    if (filter === 'correct') return isCorrect;
    if (filter === 'incorrect') return !isCorrect;
    return true;
  });

  return (
    <div className="review-wrapper">
      <div className="container container-narrow">
        
        {/* Header Bar */}
        <div className="review-header-bar">
          <div>
            <h2 className="font-serif" style={{ fontSize: '1.75rem', color: 'var(--color-forest)', marginBottom: '0.25rem' }}>
              Review Your Answers
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-slate)' }}>
              Detailed breakdown of all 30 questions, your choices, and SEO explanations.
            </p>
          </div>

          <div className="review-filters" role="group" aria-label="Filter Answers">
            <button
              type="button"
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All ({total})
            </button>
            <button
              type="button"
              className={`filter-btn ${filter === 'correct' ? 'active' : ''}`}
              onClick={() => setFilter('correct')}
            >
              Correct ({correctCount})
            </button>
            <button
              type="button"
              className={`filter-btn ${filter === 'incorrect' ? 'active' : ''}`}
              onClick={() => setFilter('incorrect')}
            >
              Incorrect ({incorrectCount})
            </button>
          </div>
        </div>

        {/* Question Review List */}
        <div className="review-list">
          {filteredQuestions.map((q) => {
            const ans = userAnswers[q.id];
            const isSubmitted = ans && ans.isSubmitted;
            const isCorrect = isSubmitted && ans.isCorrect;
            const userPick = ans ? ans.selectedOption : null;

            return (
              <article key={q.id} className="review-item-card">
                <div className="review-item-header">
                  <div>
                    <span className="review-item-category">{q.categoryName}</span>
                    <div className="review-item-number">Question {q.id} of {total}</div>
                  </div>

                  <div>
                    {isCorrect ? (
                      <span className="review-status-pill correct">
                        ✓ Correct
                      </span>
                    ) : isSubmitted ? (
                      <span className="review-status-pill incorrect">
                        ✕ Incorrect
                      </span>
                    ) : (
                      <span className="review-status-pill skipped">
                        Unanswered
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="review-question-text">
                  {q.question}
                </h3>

                {/* Answers list */}
                <div className="review-answers-grid">
                  {q.options.map((opt) => {
                    const isTarget = opt.id === q.correctAnswer;
                    const isChosenByUser = userPick === opt.id;

                    let rowClass = 'review-answer-row';
                    let marker = opt.id;

                    if (isTarget) {
                      rowClass += ' correct-target';
                      marker = `${opt.id} (Correct Answer)`;
                    } else if (isChosenByUser && !isCorrect) {
                      rowClass += ' user-pick-incorrect';
                      marker = `${opt.id} (Your Choice)`;
                    }

                    return (
                      <div key={opt.id} className={rowClass}>
                        <span style={{ fontWeight: 700, minWidth: isTarget || (isChosenByUser && !isCorrect) ? '120px' : '26px' }}>
                          {marker}:
                        </span>
                        <span>{opt.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                <div className="review-explanation">
                  <strong>Why: </strong>
                  <span>{q.explanation}</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Actions */}
        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="btn btn-secondary btn-lg"
            onClick={onBackToResults}
          >
            ← Back to Results
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={onRestartQuiz}
          >
            Retake Quiz ↺
          </button>
        </div>

      </div>
    </div>
  );
}
