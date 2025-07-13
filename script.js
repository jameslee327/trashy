  <style>
    :root {
      --primary-bg: #000000;
      --light-bg: #ffffff;
      --glass-bg: rgba(255, 255, 255, 0.02);
      --glass-bg-light: rgba(0, 0, 0, 0.02);
      --glass-border: rgba(255, 255, 255, 0.1);
      --glass-border-light: rgba(0, 0, 0, 0.1);
      --text-primary: #ffffff;
      --text-primary-light: #000000;
      --text-secondary: #a1a1a6;
      --text-secondary-light: #6e6e73;
      --text-tertiary: #86868b;
      --accent-blue: #007aff;
      --accent-purple: #5856d6;
      --accent-gradient: linear-gradient(135deg, #007aff 0%, #5856d6 100%);
      --shadow-premium: 0 20px 60px rgba(0, 122, 255, 0.1);
      --border-radius: 16px;
      --transition-smooth: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    }

    [data-theme="light"] {
      --primary-bg: #ffffff;
      --glass-bg: rgba(0, 0, 0, 0.02);
      --glass-border: rgba(0, 0, 0, 0.1);
      --text-primary: #000000;
      --text-secondary: #6e6e73;
      --text-tertiary: #86868b;
      --shadow-premium: 0 20px 60px rgba(0, 0, 0, 0.1);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: var(--primary-bg);
      color: var(--text-primary);
      overflow-x: hidden;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      transition: background-color 0.6s ease, color 0.6s ease;
    }



    /* Performance Monitor */
    .performance-monitor {
      position: fixed;
      top: 1rem;
      right: 1rem;
      padding: 0.5rem 1rem;
      background: var(--glass-bg);
      backdrop-filter: blur(20px);
      border: 2px solid var(--glass-border);
      border-radius: 50px;
      color: var(--text-secondary);
      font-size: 0.8rem;
      font-weight: 500;
      font-family: 'IBM Plex Mono', monospace;
      z-index: 2000;
      opacity: 0.7;
      transition: var(--transition-smooth);
      overflow: hidden;
      cursor: pointer;
    }

    .performance-monitor::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--accent-gradient);
      opacity: 0;
      transition: var(--transition-smooth);
      z-index: -1;
    }

    .performance-monitor:hover {
      opacity: 1;
      transform: translateY(-2px);
      color: white;
      border-color: transparent;
      box-shadow: var(--shadow-premium);
    }

    .performance-monitor:hover::before {
      opacity: 1;
    }

    /* Analytics Counter */
    .analytics-counter {
      position: fixed;
      bottom: 1rem;
      right: 1rem;
      padding: 0.5rem 1rem;
      background: var(--glass-bg);
      backdrop-filter: blur(20px);
      border: 2px solid var(--glass-border);
      border-radius: 50px;
      color: var(--text-secondary);
      font-size: 0.8rem;
      font-weight: 500;
      z-index: 2000;
      opacity: 0;
      animation: counterReveal 1s ease-out 3s forwards;
      transition: var(--transition-smooth);
      overflow: hidden;
      cursor: pointer;
    }

    .analytics-counter::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--accent-gradient);
      opacity: 0;
      transition: var(--transition-smooth);
      z-index: -1;
    }

    .analytics-counter:hover {
      transform: translateY(-2px);
      color: white;
      border-color: transparent;
      box-shadow: var(--shadow-premium);
    }

    .analytics-counter:hover::before {
      opacity: 1;
    }

    /* Theme Toggle */
    .theme-toggle {
      position: fixed !important;
      bottom: 1rem !important;
      right: 150px !important;
      padding: 0.5rem 1rem;
      background: var(--glass-bg);
      backdrop-filter: blur(20px);
      border: 2px solid var(--glass-border);
      border-radius: 50px;
      display: flex !important;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      cursor: pointer;
      transition: var(--transition-smooth);
      z-index: 2000;
      opacity: 0;
      animation: themeToggleReveal 1s ease-out 2.5s forwards;
      color: var(--text-secondary);
      font-size: 0.8rem;
      font-weight: 500;
      text-decoration: none;
      overflow: hidden;
      visibility: visible !important;
    }

    .theme-toggle::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--accent-gradient);
      opacity: 0;
      transition: var(--transition-smooth);
      z-index: -1;
    }

    .theme-toggle:hover {
      transform: translateY(-2px);
      color: white;
      border-color: transparent;
      box-shadow: var(--shadow-premium);
    }

    .theme-toggle:hover::before {
      opacity: 1;
    }

    .theme-icon {
      font-size: 0.8rem;
      transition: var(--transition-smooth);
    }

    /* Three.js Background */
    #threejs-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }



    /* Navigation */
    .nav {
      position: fixed;
      top: 2rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
      padding: 1rem 2rem;
      background: var(--glass-bg);
      backdrop-filter: blur(20px);
      border: 1px solid var(--glass-border);
      border-radius: 50px;
      box-shadow: var(--shadow-premium);
      opacity: 0;
    }

    .logo {
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 1.1rem;
      font-weight: 600;
      text-decoration: none;
      color: var(--text-primary);
      letter-spacing: 0.5px;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .logo-icon {
      width: 24px;
      height: 24px;
    }



    /* Hero Section */
    .hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 2rem;
      position: relative;
    }

    .hero-content {
      max-width: 800px;
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .monogram-container {
      position: relative;
      margin: 0 auto 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .monogram {
      width: 120px;
      height: 120px;
      background: var(--accent-gradient);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 3rem;
      font-weight: 700;
      color: white;
      box-shadow: var(--shadow-premium);
      position: relative;
      overflow: hidden;
      cursor: pointer;
      transition: var(--transition-smooth);
      margin: 0 auto;
    }

    .monogram:hover {
      transform: scale(1.05) rotate(5deg);
    }

    .lottie-icon {
      position: absolute;
      top: -10px;
      right: -10px;
      width: 40px;
      height: 40px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .monogram:hover .lottie-icon {
      opacity: 1;
    }

    .hero-title {
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: clamp(3.5rem, 10vw, 7rem);
      font-weight: 200;
      margin-bottom: 1.5rem;
      background: linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: -0.02em;
    }

    .hero-subtitle {
      font-size: 1.5rem;
      color: var(--text-secondary);
      margin-bottom: 3rem;
      font-weight: 300;
    }

    .cta-container {
      margin-bottom: 2rem;
    }

    .cta-primary {
      display: inline-block;
      padding: 1rem 2.5rem;
      background: var(--glass-bg);
      color: var(--text-primary);
      text-decoration: none;
      border: 2px solid var(--glass-border);
      border-radius: 50px;
      font-weight: 600;
      font-size: 1.1rem;
      transition: var(--transition-smooth);
      backdrop-filter: blur(20px);
      position: relative;
      overflow: hidden;
    }

    .cta-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--accent-gradient);
      opacity: 0;
      transition: var(--transition-smooth);
      z-index: -1;
    }

    .cta-primary:hover {
      transform: translateY(-3px);
      color: white;
      border-color: transparent;
      box-shadow: var(--shadow-premium);
    }

    .cta-primary:hover::before {
      opacity: 1;
    }

    /* Footer */
    .footer {
      padding: 4rem 2rem 2rem;
      text-align: center;
      position: relative;
    }

    .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 1px;
      background: var(--accent-gradient);
      opacity: 0.3;
    }

    .footer-text {
      color: var(--text-tertiary);
      font-size: 0.9rem;
      font-weight: 300;
    }

    /* Scroll Indicator */
    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 40px;
      background: linear-gradient(to bottom, var(--accent-blue), transparent);
      opacity: 0.6;
    }

    .scroll-indicator::before {
      content: '';
      position: absolute;
      top: 0;
      left: -8px;
      width: 14px;
      height: 14px;
      border: 2px solid var(--accent-blue);
      border-radius: 50%;
      animation: scrollPulse 2s ease-in-out infinite;
    }

    /* Animations */
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }

    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }

    @keyframes counterReveal {
      to { opacity: 0.8; }
    }

    @keyframes themeToggleReveal {
      to { opacity: 1; }
    }

    @keyframes greetingReveal {
      to { opacity: 0.9; }
    }

    @keyframes scrollPulse {
      0%, 100% { transform: scale(1); opacity: 0.5; }
      50% { transform: scale(1.2); opacity: 1; }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-title {
        font-size: 3rem;
      }

      .hero-subtitle {
        font-size: 1.2rem;
      }

      .monogram {
        width: 100px;
        height: 100px;
        font-size: 2.5rem;
      }

      .nav {
        top: 1rem;
        padding: 0.8rem 1.5rem;
      }

      .cta-primary {
        padding: 0.9rem 2rem;
        font-size: 1rem;
      }

      .theme-toggle,
      .time-greeting,
      .weather-indicator {
        display: none;
      }

      .performance-monitor,
      .analytics-counter,
      .theme-toggle {
        font-size: 0.7rem;
        padding: 0.3rem 0.6rem;
      }

      .theme-toggle {
        right: 130px;
        gap: 0.3rem;
      }
    }

    /* Accessibility */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }

    /* Screen Reader Only */
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    /* Focus Styles */
    .cta-primary:focus,
    .theme-toggle:focus {
      outline: 2px solid var(--accent-blue);
      outline-offset: 2px;
    }
  </style>
</head>
<body data-theme="dark">


  <!-- Performance Monitor -->
  <div class="performance-monitor" id="performanceMonitor">
    <div>FPS: <span id="fpsCounter">60</span></div>
    <div>GPU: <span id="gpuInfo">WebGL</span></div>
  </div>

  <!-- Analytics Counter -->
  <div class="analytics-counter" id="analyticsCounter">
    <div>👁️ <span id="visitorCount">1,247</span> visitors</div>
  </div>

  <!-- Theme Toggle -->
  <div class="theme-toggle" id="themeToggle" role="button" tabindex="0" aria-label="Toggle dark/light mode">
    <div class="theme-icon" id="themeIcon">🌙</div>
    <span id="themeText">Dark</span>
  </div>





  <!-- Three.js Background -->
  <canvas id="threejs-canvas"></canvas>



  <!-- Hero Section -->
  <main class="hero" id="hero">
    <div class="hero-content">
      <div class="monogram-container">
        <div class="monogram" id="monogram" role="button" tabindex="0" aria-label="Animated logo">
          SL
          <div class="lottie-icon" id="lottieIcon"></div>
        </div>
      </div>
      <h1 class="hero-title" id="heroTitle">Seongjun Lee</h1>
      <p class="hero-subtitle" id="heroSubtitle">Building things that matter</p>
      <div class="cta-container">
        <a href="mailto:james@seongjunl.ee" class="cta-primary" id="ctaButton">Contact</a>
      </div>
    </div>
    <div class="scroll-indicator" aria-hidden="true"></div>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <p class="footer-text">&copy; 2025 Seongjun Lee</p>
  </footer>
