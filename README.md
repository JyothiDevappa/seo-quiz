# SEO IQ — The SEO Challenge

An interactive, modern 30-question multiple-choice quiz designed to test and elevate Search Engine Optimization (SEO) knowledge for web developers, digital marketers, SEO beginners, students, and LinkedIn professionals.

---

## 🌟 Features

- **30 High-Quality Questions**: Original, accurate, beginner-friendly questions covering current search engine best practices.
- **Six Comprehensive Categories** (5 questions each):
  1. SEO Fundamentals
  2. Keyword Research & Search Intent
  3. On-Page SEO
  4. Technical SEO
  5. Off-Page SEO & Backlinks
  6. Practical SEO & Performance
- **Visual Design & Branding**:
  - Color palette: Forest Green (`#103D32`), Warm Cream (`#F7F5EF`), Pure White (`#FFFFFF`), with subtle Mint accents (`#2ECC71`, `#D8F3DC`).
  - Typography: Editorial serif headings (*Fraunces*) paired with clean UI sans-serif (*Plus Jakarta Sans*).
  - Rounded cards, generous whitespace, smooth micro-interactions.
- **Interactive Quiz Flow**:
  - One question at a time with category badges and visual progress bar.
  - Four selectable options (A, B, C, D) with keyboard shortcuts (`1-4` or `A-D`, and `Enter`).
  - Instant submission feedback showing correct answer highlight and an in-depth SEO explanation.
  - Navigation controls to review previously answered questions without losing progress.
  - Quick question dots strip to jump across questions.
- **Results & Personalization**:
  - Final score (e.g. 26/30) and percentage with animated radial score gauge and counter.
  - Four personalized skill tiers:
    - `0–10`: 🌱 **SEO Beginner** (Building the Foundation)
    - `11–20`: 🧭 **SEO Explorer** (Navigating Search Mechanics)
    - `21–26`: ⚡ **SEO Pro** (Strategic Search Practitioner)
    - `27–30`: 👑 **SEO Master** (Elite Search Authority)
  - Full category-wise performance breakdown with visual progress bars.
  - "Review My Answers" view with filter pills (*All*, *Correct*, *Incorrect*).
  - LinkedIn share integration (`https://www.linkedin.com/sharing/share-offsite/?url=...`) and instant "Copy Result" clipboard button with toast notification.
  - Persistent local state via `localStorage` so refreshing the page preserves attempts.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Vanilla CSS with custom CSS variables (Design System)
- **Effects**: canvas-confetti (lightweight celebration)
- **Deployment**: Static SPA ready for Netlify (includes `public/_redirects`)

---

## 🚀 Getting Started Locally

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Clone / Open the Project
```bash
git clone <repo-url>
cd seo-quiz
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

### 5. Run Linter
```bash
npm run lint
```

### 6. Create Production Build
```bash
npm run build
```
The optimized production files will be output to the `dist/` folder.

To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Deploying to Netlify

### Option A: Deploy via Netlify CLI
1. Install Netlify CLI globally:
   ```bash
   npm install -g netlify-cli
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy the `dist` directory:
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Option B: Deploy via Netlify Git Integration
1. Push this repository to GitHub or GitLab.
2. In the Netlify Dashboard, click **Add new site** → **Import an existing project**.
3. Select your repository.
4. Set the build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy SEO IQ**.
*(Note: A `public/_redirects` file is already included so client-side routing works seamlessly.)*

---

## 📁 Project Structure

```
seo-quiz/
├── public/
│   ├── _redirects         # Netlify SPA redirect rule
│   └── favicon.svg        # Custom SEO IQ SVG favicon
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Site navigation and branding
│   │   ├── LandingPage.jsx    # Hero, stats, category previews & CTA
│   │   ├── QuizScreen.jsx     # Question card, options, submit & explanation
│   │   ├── ResultsScreen.jsx  # Score reveal, tier, category breakdown, LinkedIn share
│   │   ├── ReviewScreen.jsx   # Detailed question review with filters
│   │   └── Footer.jsx         # Site footer
│   ├── data/
│   │   └── questions.js       # 30 curated SEO questions, categories, & tier definitions
│   ├── App.jsx            # State management & screen routing
│   ├── index.css          # Design system & responsive styles
│   └── main.jsx           # React DOM root
├── index.html             # SEO metadata, Open Graph tags & Google fonts
├── package.json           # Dependencies and build scripts
└── README.md              # Documentation
```

---

## 📄 License
MIT License. Created for educators, web developers, and SEO practitioners.
