// Translations
const translations = {
  en: {
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.resume": "Resume",
    "hero.greeting": "Hello! 👋",
    "hero.name": "Assia El Boussanni",
    "hero.title": "Data Scientist & ML Engineer",
    "hero.description":
      "I transform data into actionable insights using machine learning, statistical analysis, and advanced analytics.",
    "hero.cta.contact": "Get in Touch",
    "hero.cta.projects": "View Projects",
    "about.title": "About Me",
    "about.description":
      "Passionate data scientist with expertise in machine learning, statistical modeling, and data visualization. I love turning complex problems into actionable insights.\n\nCurrently pursuing a Master's in Data Science and Big Data in Morocco, I explore new AI tools and trends to deliver innovative solutions.\n\nI share knowledge through blogging, create digital planners on Ko-fi, participate in hackathons, and explore creative projects, all of which fuel my curiosity and problem-solving mindset.\n\nI'm eager to contribute to impactful projects and grow as a data professional.",
    "skills.title": "Skills & Tools",
    "skills.databases": "Databases",
    "skills.visualization": "Visualization",
    "skills.ml": "Machine Learning",
    "skills.programming": "Programming",
    "projects.title": "Featured Projects",
    "projects.viewDetails": "View Details",
    "projects.github": "View on GitHub",
    "blog.title": "Latest Blog Posts",
    "blog.readMore": "Read More",
    "contact.title": "Connect With Me",
    "contact.description": "Let's connect and discuss data science, machine learning, and innovative projects.",
  },
  fr: {
    "nav.projects": "Projets",
    "nav.blog": "Blog",
    "nav.about": "À Propos",
    "nav.contact": "Contact",
    "nav.resume": "CV",
    "hero.greeting": "Bonjour! 👋",
    "hero.name": "Assia El Boussanni",
    "hero.title": "Data Scientist & Ingénieur ML",
    "hero.description":
      "Je transforme les données en insights exploitables grâce au machine learning, à l'analyse statistique et à l'analytique avancée.",
    "hero.cta.contact": "Me Contacter",
    "hero.cta.projects": "Voir les Projets",
    "about.title": "À Propos de Moi",
    "about.description":
      "Data scientist passionnée avec une expertise en machine learning, modélisation statistique et visualisation de données. J'adore transformer des problèmes complexes en insights exploitables.\n\nActuellement en Master Data Science et Big Data au Maroc, j'explore de nouveaux outils IA et tendances pour fournir des solutions innovantes.\n\nJe partage mes connaissances à travers le blogging, crée des planificateurs numériques sur Ko-fi, participe aux hackathons, et explore des projets créatifs, tout cela alimente ma curiosité et mon esprit de résolution de problèmes.\n\nJe suis impatiente de contribuer à des projets impactants et grandir en tant que professionnelle des données.",
    "skills.title": "Compétences & Outils",
    "skills.databases": "Bases de Données",
    "skills.visualization": "Visualisation",
    "skills.ml": "Machine Learning",
    "skills.programming": "Programmation",
    "projects.title": "Projets Phares",
    "projects.viewDetails": "Voir les Détails",
    "projects.github": "Voir sur GitHub",
    "blog.title": "Derniers Articles",
    "blog.readMore": "Lire Plus",
    "contact.title": "Connectons-Nous",
    "contact.description": "Connectons-nous pour discuter de data science, machine learning et projets innovants.",
  },
}

// Projects Data
const projects = [
  {
    id: "1",
    title: "AI-Powered Math Tutor",
    summary:
      "Developed a multi-agent AI tutoring system for primary school students using LangChain, Gemini API, and Firebase for personalized learning experiences.",
    image: "math_tutor.jpg",
    tags: ["Python", "LangChain", "Gemini API", "Firebase", "Flask"],
    githubUrl: "https://github.com/Assia-Aissa",
    blogUrl: "https://hashnode.com/@assiaelboussanni",
    details: {
      situation:
        "Traditional primary education math lessons follow a one-size-fits-all approach, leaving many students behind with varying paces and understanding levels.",
      task: "Design and build an AI-powered tutor that provides personalized math help to primary school students, mimicking human tutor support.",
      action:
        "Developed a multi-agent AI system using Python & Flask, LangChain for workflow orchestration, Hugging Face LLMs & FAISS for content retrieval, Gemini API for explanations, and Firebase for progress tracking. Created four specialized agents: Talker, Quiz Master, Detective, and Planner.",
      result:
        "Created a fully functional, interactive AI math tutor that provides personalized learning experiences, engages children with clear explanations, and tracks progress over time with positive testing feedback.",
      keyFindings: [
        "Multi-agent architecture effectively mimics human tutoring approach",
        "Personalized learning paths significantly improve student engagement",
        "Real-time progress tracking enables continuous learning optimization",
      ],
    },
  },
  {
    id: "2",
    title: "High-Performance AI Intrusion Detection System",
    summary:
      "Engineered a real-time intrusion detection system achieving 99.59% accuracy using ensemble methods and deployed on AWS with full MLOps pipeline.",
    image: "ai_security_system.jpg",
    tags: ["Python", "AWS", "SageMaker", "Random Forest", "XGBoost", "CNN-LSTM"],
    githubUrl: "https://github.com/Assia-Aissa",
    blogUrl: "https://hashnode.com/@assiaelboussanni",
    details: {
      situation:
        "Traditional security tools are failing against escalating cloud cyber threats due to inability to adapt to new attacks in complex cloud environments.",
      task: "Architect, develop, and deploy a production-grade AI security system capable of identifying both known and novel threats in real-time.",
      action:
        "Engineered end-to-end solution: custom preprocessing pipeline for UNSW-NB15 and CICIDS2017 datasets, compared 10+ ML algorithms including CNN-LSTM hybrid and ensemble methods, built full MLOps infrastructure on AWS using S3, SageMaker, and EC2 for real-time inference.",
      result:
        "Achieved state-of-the-art 99.59% accuracy with Random Forest, solved 'long tail' problem with 85% precision on rare attacks, deployed functional real-time system processing live network streams in milliseconds.",
      keyFindings: [
        "Tree-based ensembles outperform deep learning for production IDS",
        "Ensemble methods excel at detecting rare but critical attacks",
        "Real-time AWS deployment proves practical viability for cybersecurity",
      ],
    },
  },
  {
    id: "3",
    title: "Customer Churn Prediction Model",
    summary: "Built a machine learning model to predict customer churn with 94% accuracy using ensemble methods.",
    image: "data-science-dashboard-customer-analytics.jpg",
    tags: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    githubUrl: "https://github.com/Assia-Aissa",
    blogUrl: "https://hashnode.com/@assiaelboussanni",
    details: {
      situation: "Company was experiencing high customer churn rates affecting revenue.",
      task: "Develop a predictive model to identify customers at risk of churning.",
      action: "Analyzed customer data, engineered features, and built ensemble models.",
      result: "Achieved 94% accuracy and helped reduce churn by 23%.",
      keyFindings: [
        "Customer support interactions were the strongest predictor",
        "Seasonal patterns significantly influenced churn rates",
        "Feature engineering improved model performance by 15%",
      ],
    },
  },
  {
    id: "4",
    title: "Sales Forecasting Dashboard",
    summary: "Created an interactive dashboard for sales forecasting using time series analysis and machine learning.",
    image: "sales-forecasting-dashboard-charts-graphs.jpg",
    tags: ["Python", "Streamlit", "Prophet", "Plotly"],
    githubUrl: "https://github.com/Assia-Aissa",
    blogUrl: "https://hashnode.com/@assiaelboussanni",
    details: {
      situation: "Sales team needed accurate forecasts for inventory planning.",
      task: "Build an automated forecasting system with interactive visualization.",
      action: "Implemented Prophet model with custom seasonality and built Streamlit dashboard.",
      result: "Improved forecast accuracy by 35% and reduced planning time by 60%.",
      keyFindings: [
        "Holiday effects had major impact on sales patterns",
        "Regional variations required separate models",
        "Real-time updates improved decision making",
      ],
    },
  },
  {
    id: "5",
    title: "NLP Sentiment Analysis Tool",
    summary: "Developed a sentiment analysis tool for social media monitoring using transformer models.",
    image: "nlp-sentiment-analysis-social-media-monitoring.jpg",
    tags: ["Python", "Transformers", "BERT", "Flask"],
    githubUrl: "https://github.com/Assia-Aissa",
    blogUrl: "https://hashnode.com/@assiaelboussanni",
    details: {
      situation: "Marketing team needed to monitor brand sentiment across social platforms.",
      task: "Create an automated sentiment analysis system for real-time monitoring.",
      action: "Fine-tuned BERT model and deployed via Flask API with real-time processing.",
      result: "Processed 10K+ posts daily with 91% accuracy in sentiment classification.",
      keyFindings: [
        "Domain-specific fine-tuning improved accuracy by 12%",
        "Real-time processing enabled quick response to negative sentiment",
        "Multi-language support expanded monitoring capabilities",
      ],
    },
  },
]

// Blog Posts Data
const blogPosts = [
  {
    id: "1",
    title: "Getting Started with Machine Learning in Python",
    excerpt: "A comprehensive guide to building your first ML model using scikit-learn and pandas.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Python", "Machine Learning", "Tutorial"],
    url: "https://hashnode.com/@assiaelboussanni",
    image: "machine-learning-python-code-tutorial.jpg",
  },
  {
    id: "2",
    title: "Data Visualization Best Practices",
    excerpt: "Learn how to create compelling visualizations that tell a story with your data.",
    date: "2024-01-08",
    readTime: "6 min read",
    tags: ["Visualization", "Best Practices", "Design"],
    url: "https://hashnode.com/@assiaelboussanni",
    image: "data-visualization-charts-graphs-dashboard.jpg",
  },
  {
    id: "3",
    title: "Building Scalable ML Pipelines",
    excerpt: "How to design and implement machine learning pipelines that scale with your data.",
    date: "2024-01-01",
    readTime: "10 min read",
    tags: ["MLOps", "Pipelines", "Scalability"],
    url: "https://hashnode.com/@assiaelboussanni",
    image: "ml-pipeline-architecture-data-flow.jpg",
  },
  {
    id: "4",
    title: "Deep Learning for Time Series Forecasting",
    excerpt: "Exploring LSTM and Transformer models for accurate time series predictions.",
    date: "2023-12-20",
    readTime: "12 min read",
    tags: ["Deep Learning", "Time Series", "Forecasting"],
    url: "https://hashnode.com/@assiaelboussanni",
    image: "time-series-forecasting-neural-network.jpg",
  },
]

// State
let currentLanguage = "en"

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initializeLanguage()
  renderProjects()
  renderBlogPosts()
  setupEventListeners()
})

// Language Functions
function initializeLanguage() {
  updateLanguage(currentLanguage)
}

function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "fr" : "en"
  updateLanguage(currentLanguage)
}

function updateLanguage(lang) {
  // Update all elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n")
    if (translations[lang][key]) {
      element.textContent = translations[lang][key]
    }
  })

  // Update language button text
  document.getElementById("langText").textContent = lang.toUpperCase()

  // Update about description (special case with paragraphs)
  const aboutDesc = document.getElementById("aboutDescription")
  const paragraphs = translations[lang]["about.description"].split("\n\n")
  aboutDesc.innerHTML = paragraphs.map((p) => `<p>${p}</p>`).join("")
}

// Render Projects
function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid")
  projectsGrid.innerHTML = projects
    .map(
      (project) => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-summary">${project.summary}</p>
                <div class="project-tags">
                    ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                </div>
                <div class="project-actions">
                    <button class="btn-sm btn-primary" onclick="openProjectModal('${project.id}')">
                        ${translations[currentLanguage]["projects.viewDetails"]}
                    </button>
                    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-sm btn-outline">
                        <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                    <a href="${project.blogUrl}" target="_blank" rel="noopener noreferrer" class="btn-sm btn-outline">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Render Blog Posts
function renderBlogPosts() {
  const blogGrid = document.getElementById("blogGrid")
  blogGrid.innerHTML = blogPosts
    .map(
      (post) => `
        <div class="blog-card">
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}">
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    ${new Date(post.date).toLocaleDateString()} • ${post.readTime}
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="project-tags">
                    ${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                </div>
                <a href="${post.url}" target="_blank" rel="noopener noreferrer" class="btn-sm btn-outline" style="width: 100%; margin-top: 1rem;">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                    </svg>
                    ${translations[currentLanguage]["blog.readMore"]}
                </a>
            </div>
        </div>
    `,
    )
    .join("")
}

// Modal Functions
function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId)
  if (!project) return

  const modal = document.getElementById("projectModal")
  const modalBody = document.getElementById("modalBody")

  modalBody.innerHTML = `
        <h2 class="modal-title">${project.title}</h2>
        <div class="modal-tags">
            ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title">Situation</h3>
            <p class="modal-section-content">${project.details.situation}</p>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title">Task</h3>
            <p class="modal-section-content">${project.details.task}</p>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title">Action</h3>
            <p class="modal-section-content">${project.details.action}</p>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title">Result</h3>
            <p class="modal-section-content">${project.details.result}</p>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title">Key Findings</h3>
            <ul class="modal-findings">
                ${project.details.keyFindings.map((finding) => `<li>${finding}</li>`).join("")}
            </ul>
        </div>
        
        <div class="modal-actions">
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                ${translations[currentLanguage]["projects.github"]}
            </a>
            <a href="${project.blogUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                ${translations[currentLanguage]["blog.readMore"]}
            </a>
        </div>
    `

  modal.classList.remove("hidden")
  document.body.style.overflow = "hidden"
}

function closeProjectModal() {
  const modal = document.getElementById("projectModal")
  modal.classList.add("hidden")
  document.body.style.overflow = "auto"
}

// Event Listeners
function setupEventListeners() {
  // Language toggle
  document.getElementById("langBtn").addEventListener("click", toggleLanguage)
  document.getElementById("langBtnMobile").addEventListener("click", toggleLanguage)

  // Mobile menu toggle
  const menuBtn = document.getElementById("menuBtn")
  const navMobile = document.getElementById("navMobile")
  const menuIcon = document.getElementById("menuIcon")
  const closeIcon = document.getElementById("closeIcon")

  menuBtn.addEventListener("click", () => {
    navMobile.classList.toggle("hidden")
    menuIcon.classList.toggle("hidden")
    closeIcon.classList.toggle("hidden")
  })

  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav-link-mobile").forEach((link) => {
    link.addEventListener("click", () => {
      navMobile.classList.add("hidden")
      menuIcon.classList.remove("hidden")
      closeIcon.classList.add("hidden")
    })
  })

  // Modal close
  document.getElementById("modalClose").addEventListener("click", closeProjectModal)
  document.getElementById("modalOverlay").addEventListener("click", closeProjectModal)

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const headerOffset = 80
        const elementPosition = target.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    })
  })
}
