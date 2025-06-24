<template>
  <div class="about-view zen-fade-in">
    <!-- About Hero -->
    <section class="about-hero">
      <div class="zen-section">
        <div class="hero-content">
          <div class="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
              alt="Portrait of Jiace Zhao - a young artist and photographer with thoughtful expression"
            />
          </div>
          <div class="hero-text">
            <h1 class="about-title">Hi, I'm Jiace Zhao</h1>
            <p class="about-subtitle">
              Artist, photographer, and technologist exploring the intersection of digital innovation and visual storytelling
            </p>
            <p class="about-description">
              Based in Beijing, I capture the world through my Hasselblad X1D2, while building the future through code. 
              My work bridges the gap between artistic expression and technological innovation.
            </p>
            <div class="hero-actions">
              <a href="#contact" class="cta-button primary">Get in Touch</a>
              <a href="/gallery" class="cta-button secondary">View Work</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Two Column Content -->
    <section class="main-content">
      <div class="zen-section">
        <div class="content-grid">
          <!-- Left Column -->
          <div class="left-column">
            <!-- Artist Story -->
            <div class="story-section">
              <h2 class="section-title">My Journey</h2>
              <div class="story-text">
                <p class="story-paragraph">
                  My artistic journey began at the intersection of two seemingly different worlds: the precise logic of code 
                  and the fluid creativity of visual storytelling. Armed with my Hasselblad X1D2, I explore how technology 
                  can enhance rather than replace the human eye.
                </p>
                <p class="story-paragraph">
                  As a high school student passionate about both artificial intelligence and photography, I've discovered that 
                  the best art emerges when technical mastery meets creative vision. Whether I'm developing machine learning 
                  models or capturing the perfect light, I'm always seeking that moment where precision becomes poetry.
                </p>
                <p class="story-paragraph">
                  Through my photography portfolio and technical projects, I aim to show how the next generation 
                  can use technology as a canvas for artistic expression, creating work that is both technically sophisticated 
                  and emotionally resonant.
                </p>
              </div>
            </div>

            <!-- Philosophy Quote -->
            <div class="philosophy-quote-section">
              <blockquote class="main-quote">
                "The future of art lies not in choosing between technology and creativity, 
                but in discovering how they can amplify each other."
              </blockquote>
              <cite class="quote-attribution">— Personal philosophy, 2025</cite>
            </div>
          </div>

          <!-- Right Column -->
          <div class="right-column">
            <!-- Biography Timeline -->
            <div class="biography-section">
              <h2 class="section-title">Background</h2>
              <div class="timeline">
                <div class="timeline-item">
                  <div class="timeline-year">2025</div>
                  <div class="timeline-content">
                    <h3>Researcher</h3>
                    <p>Myshell.ai & MIT, led by Zengyi Qin</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-year">2025</div>
                  <div class="timeline-content">
                    <h3>Developer</h3>
                    <p>AdventureX, China's biggest Hackathon</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-year">2024</div>
                  <div class="timeline-content">
                    <h3>Founder</h3>
                    <p>Singularity Academy</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-year">2024</div>
                  <div class="timeline-content">
                    <h3>Current Studies</h3>
                    <p>Haidian Kaiwen Academy, Beijing</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Skills & Approach -->
            <div class="skills-overview">
              <h2 class="section-title">Expertise & Medium</h2>
              <div class="skills-list">
                <div class="skill-item">
                  <div class="skill-icon">📸</div>
                  <div>
                    <h3>Photography</h3>
                    <p>Medium format photography with Hasselblad X1D2</p>
                  </div>
                </div>
                <div class="skill-item">
                  <div class="skill-icon">🤖</div>
                  <div>
                    <h3>AI & Machine Learning</h3>
                    <p>TensorFlow, PyTorch, and computer vision applications</p>
                  </div>
                </div>
                <div class="skill-item">
                  <div class="skill-icon">💻</div>
                  <div>
                    <h3>Software Development</h3>
                    <p>Swift, Go, TypeScript, Python - building the future</p>
                  </div>
                </div>
                <div class="skill-item">
                  <div class="skill-icon">🎨</div>
                  <div>
                    <h3>Design & Engineering</h3>
                    <p>Figma, Fusion 360, bridging design and implementation</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Recognition -->
            <div class="recognition-section">
              <h2 class="section-title">Recognition & Research</h2>
              <ul class="recognition-list">
                <li>Co-author: <em>OSGym: Super-Scalable Distributed Data Engine</em> - NeurIPS 2025 submission</li>
                <li>First Author: <em>Adaptive Robust Learning Control for 6-DOF Robotic Arm</em></li>
                <li>USACO Gold Medal (2023) - Currently Platinum Division</li>
                <li>PivotHack & Moonshot48 Hackathons - 3rd Place Winner (2025)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <div class="zen-section">
        <div class="contact-content">
          <h2 class="section-title">Let's Connect</h2>
          <p class="contact-intro">
            I'm always excited to discuss the intersection of art and technology, collaborate on innovative projects, 
            or share insights about the future of creative expression. Whether you're interested in photography, 
            AI research, or just want to chat about the possibilities ahead, I'd love to hear from you.
          </p>
          <div class="contact-methods">
            <a href="mailto:krypotozhao@gmail.com" class="contact-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>krypotozhao@gmail.com</span>
            </a>
            <a href="tel:+8615566970454" class="contact-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+86 15566970454</span>
            </a>
            <a href="/collections" class="contact-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21,15 16,10 5,21"></polyline>
              </svg>
              <span>View Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// No reactive data needed for this static about page
</script>

<style lang="scss" scoped>
.about-view {
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

// About Hero
.about-hero {
  padding: clamp(4rem, 8vw, 6rem) 0;
  background: var(--zen-white);
  border-bottom: 1px solid var(--zen-light-gray);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    text-align: left;
  }
}

.hero-image {
  display: flex;
  justify-content: center;
  order: -1;

  @media (min-width: 768px) {
    order: 0;
    justify-content: flex-start;
  }

  img {
    width: clamp(200px, 35vw, 350px);
    height: clamp(200px, 35vw, 350px);
    object-fit: cover;
    border-radius: 50%;
    filter: grayscale(10%);
    transition: filter 0.3s ease, transform 0.3s ease;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);

    &:hover {
      filter: grayscale(0%);
      transform: scale(1.02);
    }
  }
}

.hero-text {
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
}

.about-title {
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 300;
  color: var(--zen-black);
  margin-bottom: 1rem;
  line-height: 1.1;
}

.about-subtitle {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: var(--zen-dark-gray);
  font-weight: 400;
  font-style: italic;
  line-height: 1.4;
  margin-bottom: 1.5rem;
}

.about-description {
  font-size: clamp(1.1rem, 2.5vw, 1.2rem);
  color: var(--zen-dark-gray);
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 500px;

  @media (max-width: 767px) {
    margin: 0 auto 2rem;
  }
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
}

.cta-button {
  padding: 12px 24px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.3s ease;
  min-width: 140px;
  text-align: center;

  &.primary {
    background: var(--zen-black);
    color: var(--zen-white);
    
    &:hover {
      background: var(--zen-dark-gray);
      transform: translateY(-2px);
    }
  }

  &.secondary {
    background: transparent;
    color: var(--zen-black);
    border: 2px solid var(--zen-black);
    
    &:hover {
      background: var(--zen-black);
      color: var(--zen-white);
      transform: translateY(-2px);
    }
  }
}

// Main Content Grid
.main-content {
  padding: clamp(4rem, 8vw, 6rem) 0;
  background: var(--zen-light-gray);
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 968px) {
    grid-template-columns: 1.2fr 1fr;
    gap: 6rem;
  }
}

.left-column,
.right-column {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

// Section Titles
.section-title {
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  font-weight: 300;
  color: var(--zen-black);
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--zen-accent);
  padding-bottom: 0.5rem;
}

// Story Section
.story-text {
  line-height: 1.7;
}

.story-paragraph {
  font-size: clamp(1.1rem, 2.5vw, 1.2rem);
  color: var(--zen-dark-gray);
  margin-bottom: 1.5rem;
  line-height: 1.7;

  &:last-child {
    margin-bottom: 0;
  }
}

// Philosophy Quote
.philosophy-quote-section {
  background: var(--zen-white);
  padding: 3rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.main-quote {
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-style: italic;
  color: var(--zen-black);
  line-height: 1.5;
  margin: 0;
  text-align: center;
  position: relative;

  &::before {
    content: '"';
    font-size: 4rem;
    color: var(--zen-accent);
    position: absolute;
    top: -1rem;
    left: -1rem;
    line-height: 1;
  }
}

.quote-attribution {
  display: block;
  margin-top: 1.5rem;
  font-size: 1rem;
  color: var(--zen-gray);
  text-align: center;
  font-style: normal;
}

// Timeline
.timeline {
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 60px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--zen-accent);
    
    @media (max-width: 480px) {
      left: 45px;
    }
  }
}

.timeline-item {
  display: flex;
  margin-bottom: 2rem;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }
}

.timeline-year {
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  font-weight: 600;
  color: var(--zen-accent);
  min-width: 60px;
  position: relative;

  @media (max-width: 480px) {
    min-width: 45px;
    font-size: 0.9rem;
  }

  &::after {
    content: '';
    position: absolute;
    right: -8px;
    top: 6px;
    width: 12px;
    height: 12px;
    background: var(--zen-accent);
    border-radius: 50%;
    
    @media (max-width: 480px) {
      right: -6px;
      width: 8px;
      height: 8px;
    }
  }
}

.timeline-content {
  flex: 1;
  margin-left: 2rem;

  @media (max-width: 480px) {
    margin-left: 1.5rem;
  }

  h3 {
    font-size: clamp(1.1rem, 2.5vw, 1.2rem);
    color: var(--zen-black);
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  p {
    font-size: clamp(0.95rem, 2vw, 1rem);
    color: var(--zen-dark-gray);
    line-height: 1.5;
  }
}

// Skills Overview
.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: var(--zen-white);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  .skill-icon {
    font-size: 1.5rem;
    margin-top: 0.25rem;
  }

  h3 {
    font-size: 1.1rem;
    color: var(--zen-black);
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  p {
    font-size: 0.95rem;
    color: var(--zen-dark-gray);
    line-height: 1.5;
    margin: 0;
  }
}

// Recognition
.recognition-list {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: clamp(1rem, 2.5vw, 1.1rem);
    color: var(--zen-dark-gray);
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.6;

    &::before {
      content: '•';
      color: var(--zen-accent);
      font-size: 1.2rem;
      position: absolute;
      left: 0;
      top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }

    em {
      color: var(--zen-black);
      font-style: normal;
      font-weight: 500;
    }
  }
}

// Contact Section
.contact-section {
  padding: clamp(4rem, 8vw, 6rem) 0;
  background: var(--zen-white);
}

.contact-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.contact-intro {
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: var(--zen-dark-gray);
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
}

.contact-methods {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    max-width: 800px;
    margin: 0 auto;
  }
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--zen-dark-gray);
  text-decoration: none;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  padding: 1.5rem 2rem;
  border: 2px solid var(--zen-light-gray);
  border-radius: 8px;
  transition: all 0.3s ease;
  justify-content: center;
  background: var(--zen-white);

  &:hover {
    color: var(--zen-black);
    border-color: var(--zen-accent);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  svg {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
  }

  span {
    font-weight: 500;
  }
}

// Mobile Optimizations
@media (max-width: 480px) {
  .hero-content,
  .content-grid {
    gap: 2rem;
  }
  
  .section-title {
    margin-bottom: 1.5rem;
  }
  
  .left-column,
  .right-column {
    gap: 2rem;
  }

  .philosophy-quote-section {
    padding: 2rem 1.5rem;
  }

  .main-quote {
    &::before {
      font-size: 3rem;
      top: -0.5rem;
      left: -0.5rem;
    }
  }
}
</style>