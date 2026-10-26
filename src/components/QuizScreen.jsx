import React, { useEffect, useCallback } from 'react';

export default function QuizScreen({
  questions,
  currentIndex,
  userAnswers,
  onSelectOption,
  onSubmitAnswer,
  onNavigateQuestion,
  onCompleteQuiz
}) {
  const currentQ = questions[currentIndex];
  const total = questions.length;
  
  // userAnswer object format: { selectedOption: 'A', isSubmitted: true, isCorrect: true }
  const currentAnswerState = userAnswers[currentQ.id] || { selectedOption: null, isSubmitted: false };
  const selectedOption = currentAnswerState.selectedOption;
  const isSubmitted = currentAnswerState.isSubmitted;

  // Handle option selection
  const handleOptionClick = useCallback((optionId) => {
    if (isSubmitted) return; // Prevent changing after submission
    onSelectOption(currentQ.id, optionId);
  }, [isSubmitted, onSelectOption, currentQ.id]);

  // Handle submit answer
  const handleSubmit = useCallback(() => {
    if (!selectedOption || isSubmitted) return;
    onSubmitAnswer(currentQ.id, selectedOption);
  }, [selectedOption, isSubmitted, onSubmitAnswer, currentQ.id]);

  // Handle Next
  const handleNext = useCallback(() => {
    if (currentIndex < total - 1) {
      onNavigateQuestion(currentIndex + 1);
    } else {
      onCompleteQuiz();
    }
  }, [currentIndex, total, onNavigateQuestion, onCompleteQuiz]);

  // Handle Previous
  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      onNavigateQuestion(currentIndex - 1);
    }
  }, [currentIndex, onNavigateQuestion]);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if modifier keys are pressed
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const key = e.key.toUpperCase();
      const optionMap = {
        'A': 'A', '1': 'A',
        'B': 'B', '2': 'B',
        'C': 'C', '3': 'C',
        'D': 'D', '4': 'D'
      };

      if (!isSubmitted && optionMap[key]) {
        handleOptionClick(optionMap[key]);
      } else if (e.key === 'Enter') {
        if (!isSubmitted && selectedOption) {
          handleSubmit();
        } else if (isSubmitted) {
          handleNext();
        }
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        handlePrevious();
      } else if (e.key === 'ArrowRight' && (isSubmitted || userAnswers[questions[currentIndex + 1]?.id])) {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, selectedOption, isSubmitted, handleOptionClick, handleSubmit, handleNext, handlePrevious, userAnswers, questions]);

  const progressPercent = Math.round(((currentIndex + 1) / total) * 100);
  const isLastQuestion = currentIndex === total - 1;

  return (
    <div className="quiz-wrapper">
      <div className="container container-narrow">
        
        {/* Top Info Bar */}
        <div className="quiz-top-bar">
          <div className="quiz-category-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
            </svg>
            <span>{currentQ.categoryName}</span>
          </div>

          <div className="question-counter-badge">
            Question <strong>{currentIndex + 1}</strong> of <strong>{total}</strong>
          </div>
        </div>

        {/* Progress Bar */}
        <div 
          className="progress-track" 
          role="progressbar" 
          aria-valuenow={progressPercent} 
          aria-valuemin="0" 
          aria-valuemax="100"
          aria-label={`Quiz progress: ${progressPercent}% completed`}
        >
          <div 
            className="progress-fill" 
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Fast Question Navigation Strip */}
        <nav 
          className="question-dots-strip" 
          aria-label="Question Navigator"
        >
          {questions.map((q, idx) => {
            const ans = userAnswers[q.id];
            let statusClass = '';
            if (idx === currentIndex) {
              statusClass = 'active';
            } else if (ans && ans.isSubmitted) {
              statusClass = ans.isCorrect ? 'answered-correct' : 'answered-incorrect';
            }

            return (
              <button
                key={q.id}
                type="button"
                className={`question-dot-btn ${statusClass}`}
                onClick={() => onNavigateQuestion(idx)}
                title={`Go to Question ${idx + 1}: ${q.categoryName}`}
                aria-label={`Question ${idx + 1}`}
                aria-current={idx === currentIndex ? 'step' : undefined}
              >
                {idx + 1}
              </button>
            );
          })}
        </nav>

        {/* Main Question Card */}
        <main className="question-card" key={currentQ.id}>
          <h2 className="question-title">
            {currentQ.question}
          </h2>

          {/* Options List */}
          <div className="options-list" role="radiogroup" aria-labelledby="question-text">
            {currentQ.options.map((option) => {
              const isSelected = selectedOption === option.id;
              const isCorrectTarget = isSubmitted && option.id === currentQ.correctAnswer;
              const isWrongChoice = isSubmitted && isSelected && !currentAnswerState.isCorrect;

              let optionClasses = 'option-card';
              if (isSelected) optionClasses += ' selected';
              if (isCorrectTarget) optionClasses += ' state-correct';
              if (isWrongChoice) optionClasses += ' state-incorrect';
              if (isSubmitted && !isCorrectTarget && !isWrongChoice) optionClasses += ' state-faded';

              return (
                <button
                  key={option.id}
                  type="button"
                  id={`option-${option.id}`}
                  className={optionClasses}
                  onClick={() => handleOptionClick(option.id)}
                  disabled={isSubmitted}
                  role="radio"
                  aria-checked={isSelected}
                  aria-disabled={isSubmitted}
                >
                  <span className="option-letter" aria-hidden="true">
                    {option.id}
                  </span>
                  <span className="option-text">
                    {option.text}
                  </span>

                  {/* Feedback Icon if submitted */}
                  {isSubmitted && isCorrectTarget && (
                    <span className="option-feedback-icon" aria-label="Correct answer">
                      ✓
                    </span>
                  )}
                  {isSubmitted && isWrongChoice && (
                    <span className="option-feedback-icon" aria-label="Your incorrect answer">
                      ✕
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Banner (Only shown after user submits) */}
          {isSubmitted && (
            <section 
              className={`explanation-card ${currentAnswerState.isCorrect ? 'is-correct' : 'is-incorrect'}`}
              aria-live="polite"
            >
              <div className="explanation-header">
                {currentAnswerState.isCorrect ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>Correct! Well done.</span>
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                    <span>Incorrect. The correct answer is Option {currentQ.correctAnswer}.</span>
                  </>
                )}
              </div>
              <p className="explanation-body">
                {currentQ.explanation}
              </p>
            </section>
          )}

          {/* Action Controls */}
          <footer className="quiz-controls">
            <div className="quiz-nav-left">
              <button
                type="button"
                id="prev-question-btn"
                className="btn btn-secondary"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                aria-label="Previous Question"
              >
                ← Previous
              </button>

              <div className="keyboard-hint" aria-hidden="true">
                <span className="kbd-badge">1-4</span> or <span className="kbd-badge">A-D</span> to choose
              </div>
            </div>

            <div className="quiz-nav-right">
              {!isSubmitted ? (
                <button
                  type="button"
                  id="submit-answer-btn"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  disabled={!selectedOption}
                >
                  <span>Submit Answer</span>
                  <span className="kbd-badge" style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.25)', color: '#fff' }}>↵</span>
                </button>
              ) : (
                <button
                  type="button"
                  id="next-question-btn"
                  className="btn btn-primary"
                  onClick={handleNext}
                >
                  <span>{isLastQuestion ? 'Finish & View Results' : 'Next Question'}</span>
                  <span>→</span>
                </button>
              )}
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
