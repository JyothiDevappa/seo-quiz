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
    question: "What does the acronym 'SEO' stand for, and what is its primary objective?",
    options: [
      { id: "A", text: "Social Engine Optimization — maximizing shares across social media networks." },
      { id: "B", text: "Search Engine Optimization — improving organic visibility and unpaid traffic from search engines." },
      { id: "C", text: "Site Efficiency Operations — optimizing web server response times and database queries." },
      { id: "D", text: "Sponsored Entry Options — managing pay-per-click bidding campaigns on Google Ads." }
    ],
    correctAnswer: "B",
    explanation: "SEO stands for Search Engine Optimization. Unlike paid advertising (PPC), SEO focuses on optimizing your site's structure, technical health, content, and authority to earn organic, non-paid visibility and qualified visitors from search engines."
  },
  {
    id: 2,
    categoryId: "fundamentals",
    categoryName: "SEO Fundamentals",
    question: "What is the primary difference between organic search results and paid search ads?",
    options: [
      { id: "A", text: "Paid ads only show images, while organic results only display plain text." },
      { id: "B", text: "Organic rankings are earned algorithmically without paying per click, whereas paid ads incur a fee for every click." },
      { id: "C", text: "Organic search results only display on mobile devices, while ads only appear on desktop computers." },
      { id: "D", text: "Organic rankings require an active monthly contract directly with Google." }
    ],
    correctAnswer: "B",
    explanation: "Organic search listings are ranked independently by search engine algorithms based on relevance, quality, and user experience. Paid search (PPC/SEM) displays 'Sponsored' listings that require paying the advertising platform every time someone clicks."
  },
  {
    id: 3,
    categoryId: "fundamentals",
    categoryName: "SEO Fundamentals",
    question: "Which sequence correctly describes how search engines process web pages to present them in search results?",
    options: [
      { id: "A", text: "Ranking → Indexing → Crawling" },
      { id: "B", text: "Advertising → Publishing → Archiving" },
      { id: "C", text: "Crawling → Indexing → Ranking" },
      { id: "D", text: "Designing → Linking → Monetizing" }
    ],
    correctAnswer: "C",
    explanation: "Search engines follow a three-step pipeline: Crawling (discovering URLs by following links and reading sitemaps), Indexing (parsing, interpreting, and storing the page content in a massive database), and Ranking (delivering the most relevant and high-quality results when a user enters a query)."
  },
  {
    id: 4,
    categoryId: "fundamentals",
    categoryName: "SEO Fundamentals",
    question: "What does the industry term 'SERP' stand for?",
    options: [
      { id: "A", text: "Search Engine Results Page" },
      { id: "B", text: "Site Evaluation & Ranking Protocol" },
      { id: "C", text: "Search Entity Recognition Platform" },
      { id: "D", text: "Standard Electronic Retrieval Program" }
    ],
    correctAnswer: "A",
    explanation: "SERP stands for Search Engine Results Page. It is the page displayed to users after submitting a search query. Modern SERPs include traditional organic links alongside rich elements such as Featured Snippets, People Also Ask boxes, map packs, and sponsored ads."
  },
  {
    id: 5,
    categoryId: "fundamentals",
    categoryName: "SEO Fundamentals",
    question: "Why can no reputable SEO agency or consultant legitimately guarantee the #1 spot on Google?",
    options: [
      { id: "A", text: "Google only permits non-profit organizations to hold the top position." },
      { id: "B", text: "The #1 position is permanently reserved for websites that spend the most on Google Ads." },
      { id: "C", text: "Google's algorithms are proprietary, continually updated, and evaluate hundreds of dynamic competitive factors outside any third party's control." },
      { id: "D", text: "Search results are randomly shuffled every 24 hours to give all sites an equal turn." }
    ],
    correctAnswer: "C",
    explanation: "Google explicitly warns webmasters: 'Beware of SEOs that claim to guarantee rankings.' Google's complex ranking algorithms, competitor actions, and personalized search factors are completely outside any third party's direct control."
  },

  // ==========================================
  // Category 2: Keyword Research & Search Intent (Questions 6 - 10)
  // ==========================================
  {
    id: 6,
    categoryId: "keywords",
    categoryName: "Keyword Research & Search Intent",
    question: "What is 'Search Intent' (also known as user intent) in modern SEO?",
    options: [
      { id: "A", text: "The speed at which a user types their query into the search bar." },
      { id: "B", text: "The primary underlying goal or question a person wants answered when searching." },
      { id: "C", text: "The number of keywords a webmaster forces into a single blog post." },
      { id: "D", text: "The internet service provider and browser version a user is running." }
    ],
    correctAnswer: "B",
    explanation: "Search intent is the purpose behind a search query. Google prioritizes pages that best satisfy what the user actually wants to accomplish—whether that is finding information, locating a specific website, comparing products, or making a purchase."
  },
  {
    id: 7,
    categoryId: "keywords",
    categoryName: "Keyword Research & Search Intent",
    question: "Which of the following queries is a prime example of 'Transactional' search intent?",
    options: [
      { id: "A", text: "'What is cold brew coffee?'" },
      { id: "B", text: "'History of espresso machines'" },
      { id: "C", text: "'Buy whole bean arabica coffee discount free shipping'" },
      { id: "D", text: "'Cold brew vs iced coffee differences'" }
    ],
    correctAnswer: "C",
    explanation: "Transactional queries feature explicit purchasing terms like 'buy', 'discount', or 'order', signaling that the searcher is ready to complete a transaction. Queries asking 'what is' are informational, while comparison queries are commercial investigation."
  },
  {
    id: 8,
    categoryId: "keywords",
    categoryName: "Keyword Research & Search Intent",
    question: "What is a 'long-tail keyword' and why are they valuable in an SEO strategy?",
    options: [
      { id: "A", text: "A keyword that contains more than 100 characters and can only be placed in website footers." },
      { id: "B", text: "A highly specific multi-word phrase that usually has lower search volume but higher conversion intent and lower competition." },
      { id: "C", text: "An outdated keyword that has lost all search traffic over the last decade." },
      { id: "D", text: "A keyword reserved exclusively for veterinary and pet care websites." }
    ],
    correctAnswer: "B",
    explanation: "Long-tail keywords (e.g., 'best ergonomic office chair for lower back pain') are specific queries. While individual search volume is lower than broad 'head' terms ('chairs'), they account for the majority of total web searches, convert significantly better, and have clearer search intent."
  },
  {
    id: 9,
    categoryId: "keywords",
    categoryName: "Keyword Research & Search Intent",
    question: "What is 'keyword stuffing', and how do modern search engines respond to it?",
    options: [
      { id: "A", text: "Carefully placing synonyms in header tags; search engines reward it with top rankings." },
      { id: "B", text: "Artificially cramming repetitive keywords into content to manipulate rankings; it hurts user experience and can lead to search penalties." },
      { id: "C", text: "Storing keywords in a password-protected zip file on your web hosting server." },
      { id: "D", text: "Translating keywords into multiple languages to rank internationally." }
    ],
    correctAnswer: "B",
    explanation: "Keyword stuffing is an obsolete spam tactic that involves repeating target phrases unnaturally (e.g., 'We sell cheap watches. Our cheap watches are the best cheap watches...'). Modern algorithms utilize natural language processing (NLP) to understand context and will devalue or penalize stuffed content."
  },
  {
    id: 10,
    categoryId: "keywords",
    categoryName: "Keyword Research & Search Intent",
    question: "What does 'Search Volume' indicate in keyword research tools?",
    options: [
      { id: "A", text: "How loudly the audio plays when visiting a web page." },
      { id: "B", text: "The estimated average number of times a particular keyword is searched over a given time frame (typically per month)." },
      { id: "C", text: "The total number of images and videos indexed on a target domain." },
      { id: "D", text: "The physical server storage space required to host the keyword database." }
    ],
    correctAnswer: "B",
    explanation: "Monthly Search Volume (MSV) estimates how frequently users search for a specific term each month. While high volume indicates broad interest, high-performing SEO strategies balance volume with search intent, competition, and business relevance."
  },

  // ==========================================
  // Category 3: On-Page SEO (Questions 11 - 15)
  // ==========================================
  {
    id: 11,
    categoryId: "onpage",
    categoryName: "On-Page SEO",
    question: "What is the primary role and best practice for an HTML `<title>` tag?",
    options: [
      { id: "A", text: "It sets the copyright notice at the bottom of the footer." },
      { id: "B", text: "It defines the page title in browser tabs and search snippets; it should be unique, descriptive, and under ~60 characters." },
      { id: "C", text: "It replaces the need to create any visible content on the webpage." },
      { id: "D", text: "It determines the font size of the first paragraph on your page." }
    ],
    correctAnswer: "B",
    explanation: "The HTML title tag (<title>) is one of the most critical on-page SEO signals. It appears as the main clickable headline in search results and on browser tabs. Keeping it around 50–60 characters prevents truncation on SERPs."
  },
  {
    id: 12,
    categoryId: "onpage",
    categoryName: "On-Page SEO",
    question: "How does a well-crafted Meta Description primarily benefit SEO?",
    options: [
      { id: "A", text: "Google uses it as a direct mathematical ranking factor that guarantees page 1 status." },
      { id: "B", text: "It hides your webpage from competitors who view your source code." },
      { id: "C", text: "It acts as organic ad copy in search results, improving Click-Through Rate (CTR) even though it is not a direct ranking factor." },
      { id: "D", text: "It automatically generates backlinks from social media websites." }
    ],
    correctAnswer: "C",
    explanation: "Google confirmed that meta descriptions are not a direct algorithmic ranking factor. However, an accurate, compelling meta description (~150–160 characters) encourages searchers to click your link over competitors, directly boosting your organic Click-Through Rate (CTR)."
  },
  {
    id: 13,
    categoryId: "onpage",
    categoryName: "On-Page SEO",
    question: "What is the primary SEO and accessibility purpose of Image Alt Text (`alt` attribute)?",
    options: [
      { id: "A", text: "To encrypt the image file so bots cannot download high-resolution copies." },
      { id: "B", text: "To provide a text description for screen readers used by visually impaired users and help search engines understand the image content." },
      { id: "C", text: "To automatically adjust the contrast and brightness of the photograph." },
      { id: "D", text: "To compress image file sizes by 50% without quality loss." }
    ],
    correctAnswer: "B",
    explanation: "Alt text serves two vital functions: accessibility (allowing screen readers to describe images to visually impaired users) and search engine indexing (allowing search bots to understand the visual content and rank it in Google Images)."
  },
  {
    id: 14,
    categoryId: "onpage",
    categoryName: "On-Page SEO",
    question: "What is the recommended best practice for structuring heading tags (H1, H2, H3) on a webpage?",
    options: [
      { id: "A", text: "Use only H1 tags everywhere on the page to make all text rank equally." },
      { id: "B", text: "Organize content with a single, clear H1 for the primary topic, followed by H2s and H3s in a logical hierarchy for subtopics." },
      { id: "C", text: "Select heading tags solely based on font colors and avoid using regular paragraph tags." },
      { id: "D", text: "Nest H1 tags inside H6 tags for maximum keyword amplification." }
    ],
    correctAnswer: "B",
    explanation: "Heading tags provide a clear semantic outline. Using a single descriptive H1 as the page's main headline, supported by H2s for major sections and H3s for nested subtopics, helps both human readers and search engine crawlers quickly digest the structure."
  },
  {
    id: 15,
    categoryId: "onpage",
    categoryName: "On-Page SEO",
    question: "Why are internal links important for a website's on-page SEO?",
    options: [
      { id: "A", text: "They help crawlers discover content, establish topical relationships, and distribute PageRank across your own domain." },
      { id: "B", text: "They prevent visitors from ever navigating away to external websites." },
      { id: "C", text: "They are required by web hosting companies to keep server certificates valid." },
      { id: "D", text: "They count as paid advertisements in Google Ads accounts." }
    ],
    correctAnswer: "A",
    explanation: "Internal links connect pages within the same website. They guide visitors to related content, help search bots crawl new and deeper pages, establish site hierarchy, and pass ranking authority (equity/PageRank) across your pages."
  },

  // ==========================================
  // Category 4: Technical SEO (Questions 16 - 20)
  // ==========================================
  {
    id: 16,
    categoryId: "technical",
    categoryName: "Technical SEO",
    question: "What is the primary function of a `robots.txt` file?",
    options: [
      { id: "A", text: "To protect websites from hardware failures and power outages." },
      { id: "B", text: "To give instructions to web crawlers about which URL paths they are allowed or disallowed to crawl." },
      { id: "C", text: "To automatically rewrite human articles using artificial intelligence." },
      { id: "D", text: "To securely store database passwords for site administrators." }
    ],
    correctAnswer: "B",
    explanation: "A `robots.txt` file sits at the root of a domain and instructs search engine crawlers which sections of the site they should not crawl (e.g., admin dashboards, internal search result pages, shopping carts), helping conserve crawl budget."
  },
  {
    id: 17,
    categoryId: "technical",
    categoryName: "Technical SEO",
    question: "What is an XML Sitemap and why should websites have one?",
    options: [
      { id: "A", text: "A visual menu bar shown to mobile users when JavaScript is disabled." },
      { id: "B", text: "A structured file listing a website's important URLs to help search engines discover and crawl them efficiently." },
      { id: "C", text: "A CSS file that changes the layout based on the user's geographic location." },
      { id: "D", text: "A legal document outlining a website's privacy policy and terms of service." }
    ],
    correctAnswer: "B",
    explanation: "An XML Sitemap is a roadmap of your website's important URLs formatted specifically for search engines. It includes metadata like last modification dates and helps crawlers discover new, updated, or deeply buried pages."
  },
  {
    id: 18,
    categoryId: "technical",
    categoryName: "Technical SEO",
    question: "What does the `rel='canonical'` tag do when added to a webpage?",
    options: [
      { id: "A", text: "It informs search engines which URL represents the master or preferred version when duplicate or similar pages exist." },
      { id: "B", text: "It forces the browser to open the webpage in full-screen kiosk mode." },
      { id: "C", text: "It prevents other websites from taking screenshots of your content." },
      { id: "D", text: "It permanently removes the page from all internet archives." }
    ],
    correctAnswer: "A",
    explanation: "Canonical tags (`rel='canonical'`) resolve duplicate content problems. If the same content is accessible via multiple URLs (e.g., HTTP vs HTTPS, URL parameters, or product variants), the canonical tag tells Google which URL should be indexed and credited."
  },
  {
    id: 19,
    categoryId: "technical",
    categoryName: "Technical SEO",
    question: "What is the key difference between an HTTP 301 redirect and an HTTP 302 redirect in SEO?",
    options: [
      { id: "A", text: "301 is a permanent redirect that transfers link equity, whereas 302 is temporary and preserves the original URL's indexing." },
      { id: "B", text: "301 redirects are exclusively for images, while 302 redirects are exclusively for PDF files." },
      { id: "C", text: "302 redirects pass 100% of link authority, while 301 redirects penalize the website." },
      { id: "D", text: "301 redirects only work on mobile devices, while 302 redirects work on desktop." }
    ],
    correctAnswer: "A",
    explanation: "A 301 redirect signals 'Moved Permanently,' passing accumulated backlinks and ranking signals to the new destination. A 302 redirect signals 'Found / Moved Temporarily,' instructing search engines to keep indexing the original URL."
  },
  {
    id: 20,
    categoryId: "technical",
    categoryName: "Technical SEO",
    question: "What is the most reliable way to prevent a specific webpage from appearing in Google search results?",
    options: [
      { id: "A", text: "Change the page font color to white so crawlers cannot read it." },
      { id: "B", text: "Add a `<meta name='robots' content='noindex'>` tag in the `<head>` of the page." },
      { id: "C", text: "Block the page in robots.txt and delete all images on the page." },
      { id: "D", text: "Rename the URL to include the word 'secret'." }
    ],
    correctAnswer: "B",
    explanation: "The `<meta name='robots' content='noindex'>` directive is the standard, reliable method to prevent a page from showing in search results. Simply blocking in `robots.txt` is not enough because Google may still index the URL if other sites link to it."
  },

  // ==========================================
  // Category 5: Off-Page SEO & Backlinks (Questions 21 - 25)
  // ==========================================
  {
    id: 21,
    categoryId: "offpage",
    categoryName: "Off-Page SEO & Backlinks",
    question: "What is a 'backlink' (inbound link) in the context of SEO?",
    options: [
      { id: "A", text: "A button that takes a user back to their browser's previous history page." },
      { id: "B", text: "A link on an external website that points directly to a page on your website." },
      { id: "C", text: "A backup copy of your database saved to an offline external drive." },
      { id: "D", text: "A link connecting your navigation menu to your website homepage." }
    ],
    correctAnswer: "B",
    explanation: "A backlink is an external hyperlink from someone else's website pointing to yours. Search engines view high-quality backlinks as votes of confidence, signaling that third parties find your content authoritative, credible, and useful."
  },
  {
    id: 22,
    categoryId: "offpage",
    categoryName: "Off-Page SEO & Backlinks",
    question: "Which of the following characteristics makes a backlink most valuable and impactful?",
    options: [
      { id: "A", text: "Coming from a high-authority, topically relevant website with genuine editorial endorsement." },
      { id: "B", text: "Coming from a forum with 10,000 automated spam comments." },
      { id: "C", text: "Being hidden as 1-pixel invisible text at the bottom of a page." },
      { id: "D", text: "Coming from an unrelated casino site in a different language." }
    ],
    correctAnswer: "A",
    explanation: "Quality and relevance drastically outweigh raw quantity. A single backlink from an authoritative, trusted website in your specific industry carries immense weight, whereas thousands of low-quality or irrelevant links can trigger spam filters."
  },
  {
    id: 23,
    categoryId: "offpage",
    categoryName: "Off-Page SEO & Backlinks",
    question: "What does the `rel='nofollow'` attribute indicate when attached to an outbound link?",
    options: [
      { id: "A", text: "It prevents humans from being able to click on the hyperlink." },
      { id: "B", text: "It instructs search engines not to transfer endorsement or PageRank to the linked page." },
      { id: "C", text: "It immediately causes the linked external website to crash." },
      { id: "D", text: "It sends an automated email notifying the target website owner." }
    ],
    correctAnswer: "B",
    explanation: "The `rel='nofollow'` attribute signals to search engine crawlers that the publisher does not endorse or pass ranking credit (PageRank) to the target URL. It is commonly used for paid advertisements, sponsored links, and user-generated comments."
  },
  {
    id: 24,
    categoryId: "offpage",
    categoryName: "Off-Page SEO & Backlinks",
    question: "What is 'anchor text' in link building and on-page optimization?",
    options: [
      { id: "A", text: "The visible, clickable text inside a hyperlink that describes the target destination." },
      { id: "B", text: "The weight and dimensions of the computer server hosting the site." },
      { id: "C", text: "The invisible watermark placed onto copyright-protected images." },
      { id: "D", text: "The fixed header that remains anchored to the top of the browser screen." }
    ],
    correctAnswer: "A",
    explanation: "Anchor text is the clickable text snippet within a hyperlink (e.g. `<a href='...'>Keyword Research Guide</a>`). Search engines evaluate anchor text to better understand the context and subject matter of the destination page."
  },
  {
    id: 25,
    categoryId: "offpage",
    categoryName: "Off-Page SEO & Backlinks",
    question: "Why are manipulative link-building schemes (such as buying bulk links or Private Blog Networks) dangerous?",
    options: [
      { id: "A", text: "They violate Google's Search Essentials policies and can cause algorithmic penalties or manual removal from search." },
      { id: "B", text: "They consume excessive electricity on the client's laptop." },
      { id: "C", text: "They automatically delete your domain name registration within 48 hours." },
      { id: "D", text: "They prevent visitors from purchasing products with credit cards." }
    ],
    correctAnswer: "A",
    explanation: "Google's Spam Policies strictly prohibit link schemes intended to manipulate PageRank. Sites caught purchasing backlinks, exchanging links excessively, or utilizing Private Blog Networks (PBNs) face severe ranking drops or complete removal via manual actions."
  },

  // ==========================================
  // Category 6: Practical SEO & Performance (Questions 26 - 30)
  // ==========================================
  {
    id: 26,
    categoryId: "performance",
    categoryName: "Practical SEO & Performance",
    question: "What is Google's 'Mobile-First Indexing'?",
    options: [
      { id: "A", text: "Google only shows search results to users holding smartphones." },
      { id: "B", text: "Google predominantly uses the mobile version of a website's content for indexing and ranking." },
      { id: "C", text: "Websites must develop an iOS and Android app to be indexed on Google." },
      { id: "D", text: "Desktop computers are entirely blocked from searching Google." }
    ],
    correctAnswer: "B",
    explanation: "Mobile-First Indexing means Google primarily crawls and evaluates the smartphone version of a page's content, structured data, and media to determine its ranking—even when evaluating results for desktop searchers."
  },
  {
    id: 27,
    categoryId: "performance",
    categoryName: "Practical SEO & Performance",
    question: "What are Google's 'Core Web Vitals' designed to measure?",
    options: [
      { id: "A", text: "The total sales revenue and profit margin of an e-commerce website." },
      { id: "B", text: "Real-world user experience metrics including loading speed (LCP), responsiveness (INP), and visual stability (CLS)." },
      { id: "C", text: "The grammatical correctness and readability score of blog articles." },
      { id: "D", text: "The physical temperature of the web hosting data center." }
    ],
    correctAnswer: "B",
    explanation: "Core Web Vitals are user-centered performance metrics: Largest Contentful Paint (LCP for loading performance), Interaction to Next Paint (INP for interactive responsiveness), and Cumulative Layout Shift (CLS for visual stability)."
  },
  {
    id: 28,
    categoryId: "performance",
    categoryName: "Practical SEO & Performance",
    question: "What is Google Search Console (GSC) primarily used for by webmasters?",
    options: [
      { id: "A", text: "Playing video games directly inside Google Chrome." },
      { id: "B", text: "Monitoring organic search performance, inspecting URLs, checking indexing status, and reviewing crawl errors directly from Google." },
      { id: "C", text: "Processing credit card transactions for online store checkouts." },
      { id: "D", text: "Managing company email accounts and employee calendars." }
    ],
    correctAnswer: "B",
    explanation: "Google Search Console is an essential, free tool from Google. It provides firsthand data on organic search queries, impressions, click-through rates, indexing issues, mobile usability, and security notices."
  },
  {
    id: 29,
    categoryId: "performance",
    categoryName: "Practical SEO & Performance",
    question: "In web analytics (like Google Analytics 4), what does 'Organic Traffic' represent?",
    options: [
      { id: "A", text: "Visitors who arrived after clicking an unpaid search engine result." },
      { id: "B", text: "Visitors who clicked on sponsored Google Ads banner campaigns." },
      { id: "C", text: "Visitors who bought organic food and produce through your website." },
      { id: "D", text: "Traffic generated by automated spam bots scanning for open ports." }
    ],
    correctAnswer: "A",
    explanation: "Organic traffic refers to visitors who find and access your website through unpaid organic search listings (such as Google, Bing, DuckDuckGo, or Yahoo), distinguishing it from Direct, Paid, Referral, or Social traffic."
  },
  {
    id: 30,
    categoryId: "performance",
    categoryName: "Practical SEO & Performance",
    question: "What is 'Keyword Cannibalization' and why is it problematic for your website?",
    options: [
      { id: "A", text: "When search bots consume too much network bandwidth while indexing your server." },
      { id: "B", text: "When multiple pages on your own website target the exact same keyword and intent, competing against each other and splitting ranking authority." },
      { id: "C", text: "When a competitor hacks into your site and changes all your H1 tags." },
      { id: "D", text: "When you translate your keywords into Latin." }
    ],
    correctAnswer: "B",
    explanation: "Keyword cannibalization happens when two or more pages on the same domain compete for the identical search query and intent. This confuses search engines on which page to prioritize, diluting impressions, backlinks, and click-through rates across both pages."
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
