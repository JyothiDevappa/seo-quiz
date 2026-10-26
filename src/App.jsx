import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';
import ReviewScreen from './components/ReviewScreen';
import Footer from './components/Footer';
import { QUESTIONS } from './data/questions';

const STORAGE_KEY = 'seo_iq_quiz_progress_v1';

function getStoredQuizState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed.currentIndex === 'number' && parsed.userAnswers) {
        return {
          screen: parsed.screen === 'results' || parsed.screen === 'review' ? parsed.screen : 'landing',
          currentIndex: parsed.currentIndex,
          userAnswers: parsed.userAnswers,
          hasSavedProgress: Object.keys(parsed.userAnswers).length > 0
        };
      }
    }
  } catch {
    // ignore
  }
  return {
    screen: 'landing',
    currentIndex: 0,
    userAnswers: {},
    hasSavedProgress: false
  };
}

export default function App() {
  const [initialData] = useState(() => getStoredQuizState());
  const [screen, setScreen] = useState(initialData.screen);
  const [currentIndex, setCurrentIndex] = useState(initialData.currentIndex);
  const [userAnswers, setUserAnswers] = useState(initialData.userAnswers);

  const hasSavedProgress = Object.keys(userAnswers).length > 0;

  // Save progress to localStorage whenever state changes
  useEffect(() => {
    if (screen === 'quiz' || screen === 'results' || screen === 'review') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          screen,
          currentIndex,
          userAnswers
        }));
      } catch {
        // localStorage quota or private mode fallback
      }
    }
  }, [screen, currentIndex, userAnswers]);

  // Start fresh quiz
  const handleStartFresh = () => {
    setUserAnswers({});
    setCurrentIndex(0);
    setScreen('quiz');
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Resume quiz
  const handleResumeQuiz = () => {
    setScreen('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigate back to Landing Home
  const handleNavigateHome = () => {
    setScreen('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Select an option (before submitting)
  const handleSelectOption = (questionId, optionId) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: {
        ...(prev[questionId] || {}),
        selectedOption: optionId
      }
    }));
  };

  // Submit answer
  const handleSubmitAnswer = (questionId, selectedOption) => {
    const question = QUESTIONS.find(q => q.id === questionId);
    if (!question) return;

    const isCorrect = selectedOption === question.correctAnswer;
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: {
        selectedOption,
        isSubmitted: true,
        isCorrect
      }
    }));
  };

  // Navigate between questions
  const handleNavigateQuestion = (newIndex) => {
    if (newIndex >= 0 && newIndex < QUESTIONS.length) {
      setCurrentIndex(newIndex);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  // Complete quiz
  const handleCompleteQuiz = () => {
    setScreen('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Review answers
  const handleReviewAnswers = () => {
    setScreen('review');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Back to results from review
  const handleBackToResults = () => {
    setScreen('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Restart quiz with user confirmation if in the middle of active quiz
  const handleRestartQuiz = () => {
    if (screen === 'quiz') {
      const confirmRestart = window.confirm('Are you sure you want to restart the quiz? Your current progress will be reset.');
      if (!confirmRestart) return;
    }
    handleStartFresh();
  };

  return (
    <div className="app-layout">
      <Header
        currentScreen={screen}
        currentQuestionIndex={currentIndex}
        totalQuestions={QUESTIONS.length}
        onNavigateHome={handleNavigateHome}
        onRestart={handleRestartQuiz}
      />

      {screen === 'landing' && (
        <LandingPage
          onStartQuiz={handleStartFresh}
          onResumeQuiz={handleResumeQuiz}
          hasSavedProgress={hasSavedProgress}
          savedQuestionIndex={currentIndex}
        />
      )}

      {screen === 'quiz' && (
        <QuizScreen
          questions={QUESTIONS}
          currentIndex={currentIndex}
          userAnswers={userAnswers}
          onSelectOption={handleSelectOption}
          onSubmitAnswer={handleSubmitAnswer}
          onNavigateQuestion={handleNavigateQuestion}
          onCompleteQuiz={handleCompleteQuiz}
        />
      )}

      {screen === 'results' && (
        <ResultsScreen
          questions={QUESTIONS}
          userAnswers={userAnswers}
          onReviewAnswers={handleReviewAnswers}
          onRestartQuiz={handleStartFresh}
        />
      )}

      {screen === 'review' && (
        <ReviewScreen
          questions={QUESTIONS}
          userAnswers={userAnswers}
          onBackToResults={handleBackToResults}
          onRestartQuiz={handleStartFresh}
        />
      )}

      <Footer
        onRestart={handleRestartQuiz}
        onGoHome={handleNavigateHome}
      />
    </div>
  );
}
