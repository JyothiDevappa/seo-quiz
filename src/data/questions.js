export const CATEGORIES = [
  {
    id: "fundamentals",
    name: "SEO Fundamentals",
    description: "Core concepts of search engines, organic vs. paid traffic, and search mechanics.",
    icon: "compass"
  },
  {
    id: "keywords",
    name: "Keyword Research & Search Intent",
    description: "Understanding queries, search intent, long-tail terms, and keyword strategies.",
    icon: "search"
  },
  {
    id: "onpage",
    name: "On-Page SEO",
    description: "Title tags, meta descriptions, heading structure, alt text, and internal links.",
    icon: "file-text"
  },
  {
    id: "technical",
    name: "Technical SEO",
    description: "Robots.txt, XML sitemaps, canonical tags, redirects, and crawlability.",
    icon: "cpu"
  },
  {
    id: "offpage",
    name: "Off-Page SEO & Backlinks",
    description: "Backlinks, domain authority, anchor text, link relevance, and search guidelines.",
    icon: "link"
  },
  {
    id: "performance",
    name: "Practical SEO & Performance",
    description: "Mobile-first indexing, Core Web Vitals, Google Search Console, and analytics.",
    icon: "bar-chart"
  }
];

export const QUESTIONS = [
  // ==========================================
  // Category 1: SEO Fundamentals (Questions 1 - 5)
  // ==========================================
  {
    id: 1,
    categoryId: "fundamentals",
    categoryName: "SEO Fundamentals",
    question: "What does SEO stand for?",
    options: [
      { id: "A", text: "Social Engine Optimization" },
      { id: "B", text: "Search Engine Optimization" },
      { id: "C", text: "Site Efficiency Operations" },
      { id: "D", text: "Sponsored Entry Options" }
    ],
    correctAnswer: "B",
    explanation: "SEO stands for Search Engine Optimization. Unlike paid advertising (PPC), SEO focuses on optimizing your site's structure, technical health, content, and authority to earn organic, non-paid visibility and qualified visitors from search engines."
  },
  {
    id: 2,
    categoryId: "fundamentals",
    categoryName: "SEO Fundamentals",
    question: "What is the difference between organic search results and paid ads on Google?",
    options: [
      { id: "A", text: "Organic results appear naturally, while paid ads require payment for clicks." },
      { id: "B", text: "Both organic results and paid ads require payment for clicks." },
      { id: "C", text: "Organic results require payment, while paid ads are free." },
      { id: "D", text: "Both organic results and paid ads appear without payment." }
    ],
    correctAnswer: "A",
    explanation: "Organic results appear naturally based on relevance and quality without paying for clicks. Paid ads require payment every time someone clicks on them."
  },
  {
    id: 3,
    categoryId: "fundamentals",
    categoryName: "SEO Fundamentals",
    question: "In what order does Google process web pages?",
    options: [
      { id: "A", text: "Ranking → Indexing → Crawling" },
      { id: "B", text: "Advertising → Publishing → Archiving" },
      { id: "C", text: "Crawling → Indexing → Ranking" },
      { id: "D", text: "Designing → Linking → Monetizing" }
    ],
    correctAnswer: "C",
    explanation: "Google works in three basic steps: Crawling (finding the page), Indexing (saving and understanding the page), and Ranking (deciding where to show it in search results)."
  },
  {
    id: 4,
    categoryId: "fundamentals",
    categoryName: "SEO Fundamentals",
    question: "What does 'SERP' stand for in SEO?",
    options: [
      { id: "A", text: "Search Engine Results Page" },
      { id: "B", text: "Site Evaluation & Ranking Protocol" },
      { id: "C", text: "Search Entity Recognition Platform" },
      { id: "D", text: "Standard Electronic Retrieval Program" }
    ],
    correctAnswer: "A",
    explanation: "SERP stands for Search Engine Results Page. It is simply the page of results you see after typing a search into Google."
  },
  {
    id: 5,
    categoryId: "fundamentals",
    categoryName: "SEO Fundamentals",
    question: "Why can no SEO company guarantee the #1 spot on Google?",
    options: [
      { id: "A", text: "Google only allows non-profit websites to be #1." },
      { id: "B", text: "The top spot is randomly chosen every day." },
      { id: "C", text: "Only Google controls its ranking algorithms, and they constantly change." },
      { id: "D", text: "You must sign a secret contract with Google to be #1." }
    ],
    correctAnswer: "C",
    explanation: "Nobody controls Google's ranking system except Google. Because algorithms and competitors change constantly, no one can honestly guarantee a #1 rank."
  },

  // ==========================================
  // Category 2: Keyword Research & Search Intent (Questions 6 - 10)
  // ==========================================
  {
    id: 6,
    categoryId: "keywords",
    categoryName: "Keyword Research & Search Intent",
    question: "What is 'Search Intent'?",
    options: [
      { id: "A", text: "How fast a user types into the search box." },
      { id: "B", text: "The reason or goal behind a person's search." },
      { id: "C", text: "The total number of words on a webpage." },
      { id: "D", text: "The web browser a person is using." }
    ],
    correctAnswer: "B",
    explanation: "Search intent is the goal someone has when searching—such as learning something, finding a specific website, or buying a product."
  },
  {
    id: 7,
    categoryId: "keywords",
    categoryName: "Keyword Research & Search Intent",
    question: "Which search shows that someone is ready to buy something?",
    options: [
      { id: "A", text: "'What is cold brew coffee?'" },
      { id: "B", text: "'History of espresso machines'" },
      { id: "C", text: "'Buy coffee beans online discount'" },
      { id: "D", text: "'Cold brew vs iced coffee differences'" }
    ],
    correctAnswer: "C",
    explanation: "Searches with words like 'buy', 'discount', or 'order' show transactional intent, meaning the user wants to purchase something right now."
  },
  {
    id: 8,
    categoryId: "keywords",
    categoryName: "Keyword Research & Search Intent",
    question: "What is a 'long-tail keyword'?",
    options: [
      { id: "A", text: "A single broad word like 'shoes'." },
      { id: "B", text: "A specific multi-word phrase like 'best running shoes for flat feet'." },
      { id: "C", text: "A broken keyword that Google cannot read." },
      { id: "D", text: "A keyword used only on pet websites." }
    ],
    correctAnswer: "B",
    explanation: "Long-tail keywords are longer, more specific search phrases. They have lower competition and usually attract visitors who know exactly what they want."
  },
  {
    id: 9,
    categoryId: "keywords",
    categoryName: "Keyword Research & Search Intent",
    question: "What is 'keyword stuffing'?",
    options: [
      { id: "A", text: "Using helpful synonyms in your headings." },
      { id: "B", text: "Repeating the same keyword unnaturally many times to try to trick Google." },
      { id: "C", text: "Saving keywords in a folder on your computer." },
      { id: "D", text: "Translating your content into multiple languages." }
    ],
    correctAnswer: "B",
    explanation: "Keyword stuffing means cramming repetitive words into your content. Google considers this spam and will lower your ranking for it."
  },
  {
    id: 10,
    categoryId: "keywords",
    categoryName: "Keyword Research & Search Intent",
    question: "What does 'Search Volume' mean in keyword research?",
    options: [
      { id: "A", text: "How loud the video plays on your website." },
      { id: "B", text: "How many times a keyword is searched per month." },
      { id: "C", text: "The total number of images on your website." },
      { id: "D", text: "The size of your website's database." }
    ],
    correctAnswer: "B",
    explanation: "Search volume is the estimated number of times people search for a specific keyword in Google every month."
  },

  // ==========================================
  // Category 3: On-Page SEO (Questions 11 - 15)
  // ==========================================
  {
    id: 11,
    categoryId: "onpage",
    categoryName: "On-Page SEO",
    question: "What is the HTML `<title>` tag used for?",
    options: [
      { id: "A", text: "It sets the copyright notice in the footer." },
      { id: "B", text: "It is the clickable headline in Google search results and browser tabs." },
      { id: "C", text: "It replaces the need to write any text on the webpage." },
      { id: "D", text: "It sets the font size of the first paragraph." }
    ],
    correctAnswer: "B",
    explanation: "The title tag is the clickable headline displayed on Google search results and on browser tabs. It tells visitors and Google what the page is about."
  },
  {
    id: 12,
    categoryId: "onpage",
    categoryName: "On-Page SEO",
    question: "Why is a good Meta Description important for a webpage?",
    options: [
      { id: "A", text: "Google automatically puts you at #1 if you have one." },
      { id: "B", text: "It hides your website code from competitors." },
      { id: "C", text: "It provides a short summary under your link, encouraging people to click." },
      { id: "D", text: "It automatically creates social media accounts for your site." }
    ],
    correctAnswer: "C",
    explanation: "A meta description is the short summary snippet under your link in Google. An interesting summary convinces more people to click your link."
  },
  {
    id: 13,
    categoryId: "onpage",
    categoryName: "On-Page SEO",
    question: "What is Image Alt Text (`alt` attribute) used for?",
    options: [
      { id: "A", text: "To password protect images on your site." },
      { id: "B", text: "To describe images for visually impaired users and help Google understand them." },
      { id: "C", text: "To automatically make photos brighter and clearer." },
      { id: "D", text: "To make images load in 3D." }
    ],
    correctAnswer: "B",
    explanation: "Alt text describes what an image shows. Screen readers read it aloud for visually impaired users, and search engines use it to index images."
  },
  {
    id: 14,
    categoryId: "onpage",
    categoryName: "On-Page SEO",
    question: "What is the best way to organize headings (H1, H2, H3) on a page?",
    options: [
      { id: "A", text: "Use only H1 tags for all text on the entire page." },
      { id: "B", text: "Use one H1 for the main title, with H2 and H3 tags for sections and sub-topics." },
      { id: "C", text: "Avoid headings completely and use only bold text." },
      { id: "D", text: "Put all heading tags at the very bottom of the page." }
    ],
    correctAnswer: "B",
    explanation: "Headings work like an outline: one main H1 title at the top, followed by H2 and H3 tags for smaller sections and sub-topics."
  },
  {
    id: 15,
    categoryId: "onpage",
    categoryName: "On-Page SEO",
    question: "Why are internal links (links between your own pages) helpful?",
    options: [
      { id: "A", text: "They help visitors and Google easily explore other pages on your site." },
      { id: "B", text: "They stop visitors from ever closing their browser." },
      { id: "C", text: "They are legally required by domain registrars." },
      { id: "D", text: "They convert your pages into paid advertisements." }
    ],
    correctAnswer: "A",
    explanation: "Internal links connect pages within your website. They help people navigate easily and help Google discover and rank all your content."
  },

  // ==========================================
  // Category 4: Technical SEO (Questions 16 - 20)
  // ==========================================
  {
    id: 16,
    categoryId: "technical",
    categoryName: "Technical SEO",
    question: "What does a `robots.txt` file do?",
    options: [
      { id: "A", text: "It protects your server from power outages." },
      { id: "B", text: "It tells search engine bots which pages they can or cannot visit." },
      { id: "C", text: "It writes articles using artificial intelligence." },
      { id: "D", text: "It stores secret passwords for site administrators." }
    ],
    correctAnswer: "B",
    explanation: "A `robots.txt` file tells search engine bots which parts of your website they are allowed to crawl and which private areas (like admin pages) to avoid."
  },
  {
    id: 17,
    categoryId: "technical",
    categoryName: "Technical SEO",
    question: "What is an XML Sitemap?",
    options: [
      { id: "A", text: "A popup map showing your physical business address." },
      { id: "B", text: "A list of all important pages on your website to help Google find them." },
      { id: "C", text: "A styling file that changes your button colors." },
      { id: "D", text: "A terms of service legal document." }
    ],
    correctAnswer: "B",
    explanation: "An XML Sitemap is a roadmap of your website's important pages made specifically for search engines so they can easily find and crawl them."
  },
  {
    id: 18,
    categoryId: "technical",
    categoryName: "Technical SEO",
    question: "What does a canonical tag (`rel='canonical'`) do?",
    options: [
      { id: "A", text: "It tells Google which version of a page is the main original one when copies exist." },
      { id: "B", text: "It forces the website to open in full screen mode." },
      { id: "C", text: "It prevents users from copying text on your site." },
      { id: "D", text: "It deletes duplicate pages from your server." }
    ],
    correctAnswer: "A",
    explanation: "When you have similar or duplicate pages, a canonical tag tells Google: 'This is the main original version you should rank.'"
  },
  {
    id: 19,
    categoryId: "technical",
    categoryName: "Technical SEO",
    question: "What is the difference between a 301 redirect and a 302 redirect?",
    options: [
      { id: "A", text: "301 is permanent, while 302 is temporary." },
      { id: "B", text: "301 is for images, while 302 is for text." },
      { id: "C", text: "301 is temporary, while 302 is permanent." },
      { id: "D", text: "301 is for phones, while 302 is for computers." }
    ],
    correctAnswer: "A",
    explanation: "A 301 redirect tells Google that a page has moved permanently to a new URL, transferring its SEO ranking power. A 302 redirect is only temporary."
  },
  {
    id: 20,
    categoryId: "technical",
    categoryName: "Technical SEO",
    question: "How do you stop a specific webpage from showing in Google search results?",
    options: [
      { id: "A", text: "Change the text font color to white." },
      { id: "B", text: "Add a 'noindex' tag to the page." },
      { id: "C", text: "Put the word 'hidden' in the website URL." },
      { id: "D", text: "Turn off your computer's internet connection." }
    ],
    correctAnswer: "B",
    explanation: "Adding a `noindex` tag (`<meta name='robots' content='noindex'>`) instructs Google directly not to show that page in search results."
  },

  // ==========================================
  // Category 5: Off-Page SEO & Backlinks (Questions 21 - 25)
  // ==========================================
  {
    id: 21,
    categoryId: "offpage",
    categoryName: "Off-Page SEO & Backlinks",
    question: "What is a 'backlink' in SEO?",
    options: [
      { id: "A", text: "The 'Back' button in your web browser." },
      { id: "B", text: "A link on another website that points to your website." },
      { id: "C", text: "A backup copy of your website files." },
      { id: "D", text: "A link from your header to your footer." }
    ],
    correctAnswer: "B",
    explanation: "A backlink is when another website adds a link pointing to your site. Google views quality backlinks like votes of trust in your content."
  },
  {
    id: 22,
    categoryId: "offpage",
    categoryName: "Off-Page SEO & Backlinks",
    question: "Which kind of backlink is most valuable for SEO?",
    options: [
      { id: "A", text: "A link from a trusted, relevant website in your industry." },
      { id: "B", text: "Thousands of spam comments on random forums." },
      { id: "C", text: "An invisible link hidden at the bottom of a page." },
      { id: "D", text: "A link from an unrelated casino website." }
    ],
    correctAnswer: "A",
    explanation: "Quality is far more important than quantity. One link from an honest, respected, and relevant website helps your SEO much more than thousands of spam links."
  },
  {
    id: 23,
    categoryId: "offpage",
    categoryName: "Off-Page SEO & Backlinks",
    question: "What does a 'nofollow' link attribute do?",
    options: [
      { id: "A", text: "It prevents visitors from clicking on the link." },
      { id: "B", text: "It tells Google not to pass ranking credit or endorsement to the linked page." },
      { id: "C", text: "It crashes the linked external website." },
      { id: "D", text: "It sends an automated email to the site owner." }
    ],
    correctAnswer: "B",
    explanation: "A 'nofollow' tag tells search engines: 'Don't pass SEO ranking power to this link.' It is commonly used for paid ads, sponsorships, and user comments."
  },
  {
    id: 24,
    categoryId: "offpage",
    categoryName: "Off-Page SEO & Backlinks",
    question: "What is 'anchor text'?",
    options: [
      { id: "A", text: "The clickable text words inside a hyperlink." },
      { id: "B", text: "The physical weight of the computer hosting the website." },
      { id: "C", text: "A watermark placed on copyrighted images." },
      { id: "D", text: "A navigation bar fixed to the top of the screen." }
    ],
    correctAnswer: "A",
    explanation: "Anchor text is the clickable text of a link (e.g., 'Learn SEO here'). It helps both users and Google understand what the linked page is about."
  },
  {
    id: 25,
    categoryId: "offpage",
    categoryName: "Off-Page SEO & Backlinks",
    question: "Why is buying fake links or spamming links bad for your website?",
    options: [
      { id: "A", text: "It violates Google's rules and can get your site penalized or banned from search." },
      { id: "B", text: "It uses up too much electricity on visitors' phones." },
      { id: "C", text: "It deletes your domain name within 24 hours." },
      { id: "D", text: "It prevents visitors from using credit cards." }
    ],
    correctAnswer: "A",
    explanation: "Buying links or using link spam breaks Google's rules. If caught, Google can punish your website by dropping your rank or removing you from search entirely."
  },

  // ==========================================
  // Category 6: Practical SEO & Performance (Questions 26 - 30)
  // ==========================================
  {
    id: 26,
    categoryId: "performance",
    categoryName: "Practical SEO & Performance",
    question: "What does Google's 'Mobile-First Indexing' mean?",
    options: [
      { id: "A", text: "Google only shows search results to people on mobile phones." },
      { id: "B", text: "Google primarily uses the mobile version of your website to evaluate and rank it." },
      { id: "C", text: "Websites must build an app store app to be on Google." },
      { id: "D", text: "Desktop computers are blocked from searching Google." }
    ],
    correctAnswer: "B",
    explanation: "Mobile-First Indexing means Google looks at how your website performs and looks on mobile devices first when deciding where to rank it."
  },
  {
    id: 27,
    categoryId: "performance",
    categoryName: "Practical SEO & Performance",
    question: "What do Google's 'Core Web Vitals' measure?",
    options: [
      { id: "A", text: "How much money a website earns each month." },
      { id: "B", text: "Real-world user experience like loading speed, responsiveness, and visual stability." },
      { id: "C", text: "Spelling and grammar errors in your blog posts." },
      { id: "D", text: "The physical temperature of the web server." }
    ],
    correctAnswer: "B",
    explanation: "Core Web Vitals measure user experience: how fast the page loads (LCP), how quickly it reacts when clicked (INP), and whether elements jump around while loading (CLS)."
  },
  {
    id: 28,
    categoryId: "performance",
    categoryName: "Practical SEO & Performance",
    question: "What is Google Search Console used for?",
    options: [
      { id: "A", text: "Playing video games directly inside Google Chrome." },
      { id: "B", text: "Tracking your site's Google search performance, clicks, and indexing issues." },
      { id: "C", text: "Processing credit card payments for online shops." },
      { id: "D", text: "Managing company email accounts." }
    ],
    correctAnswer: "B",
    explanation: "Google Search Console is a free Google tool that shows which keywords bring visitors to your site, how many people click your links, and any crawl errors."
  },
  {
    id: 29,
    categoryId: "performance",
    categoryName: "Practical SEO & Performance",
    question: "What is 'Organic Traffic' in website analytics?",
    options: [
      { id: "A", text: "Visitors who arrived from free, unpaid search engine results." },
      { id: "B", text: "Visitors who clicked on paid Google Ads." },
      { id: "C", text: "Visitors who purchased organic food products." },
      { id: "D", text: "Automated spam bots crawling the website." }
    ],
    correctAnswer: "A",
    explanation: "Organic traffic refers to visitors who find your website naturally through unpaid search results on Google, Bing, or Yahoo."
  },
  {
    id: 30,
    categoryId: "performance",
    categoryName: "Practical SEO & Performance",
    question: "What is 'Keyword Cannibalization'?",
    options: [
      { id: "A", text: "When search bots consume too much network bandwidth." },
      { id: "B", text: "When multiple pages on your own website compete against each other for the same keyword." },
      { id: "C", text: "When a hacker changes the headings on your website." },
      { id: "D", text: "When you translate your keywords into another language." }
    ],
    correctAnswer: "B",
    explanation: "Keyword cannibalization happens when two or more pages on your site target the exact same keyword, competing against each other and hurting both pages' rankings."
  }
];

export const SEO_LEVELS = [
  {
    min: 0,
    max: 10,
    title: "SEO Beginner",
    badge: "🌱",
    tagline: "Building the Foundation",
    summary: "You've taken your first steps into search optimization! The fundamentals are clicking, and you're ready to build real-world momentum.",
    advice: "Focus on understanding search intent and getting comfortable with on-page basics like title tags, descriptive headings, and image alt text."
  },
  {
    min: 11,
    max: 20,
    title: "SEO Explorer",
    badge: "🧭",
    tagline: "Navigating Search Mechanics",
    summary: "Solid foundation! You understand core concepts, keyword dynamics, and how search engines crawl and evaluate web pages.",
    advice: "Dive deeper into technical fundamentals like canonicals, 301 redirects, robots.txt, and understanding Google's Core Web Vitals."
  },
  {
    min: 21,
    max: 26,
    title: "SEO Pro",
    badge: "⚡",
    tagline: "Strategic Search Practitioner",
    summary: "Impressive! You have a strong, practical grasp of modern SEO across technical, on-page, and off-page optimization strategies.",
    advice: "Sharpen advanced technical SEO, mobile-first performance budgets, and high-impact topical authority content architectures."
  },
  {
    min: 27,
    max: 30,
    title: "SEO Master",
    badge: "👑",
    tagline: "Elite Search Authority",
    summary: "Exceptional mastery! You think like a top-tier SEO strategist with deep intuition across ranking algorithms, intent, and technical architecture.",
    advice: "Keep experimenting with cutting-edge search developments, AI search overviews, programmatic SEO, and leading industry audits."
  }
];

export function getSeoLevel(score) {
  return SEO_LEVELS.find(lvl => score >= lvl.min && score <= lvl.max) || SEO_LEVELS[0];
}
