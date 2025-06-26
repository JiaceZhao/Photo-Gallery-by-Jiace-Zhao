<template>
  <div class="about-view zen-fade-in">
    <!-- About Hero -->
    <section class="about-hero">
      <div class="zen-section">
        <div class="hero-content">
          <div class="hero-image">
            <div class="image-frame">
              <img 
                src="/about/jc.jpg" 
                alt="Portrait of Jiace Zhao - a young artist and photographer with thoughtful expression"
              />
              <div class="image-glow"></div>
            </div>
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
      
      <!-- Flowing transition -->
      <div class="section-flow">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V60Q300,120 600,60T1200,60V0Z" fill="rgba(255,255,255,0.9)"></path>
        </svg>
      </div>
    </section>



    <!-- Main Content - Organic Flow -->
    <section class="main-content">
      <div class="zen-section">
        <div class="content-flow">
          <!-- Quick Overview -->
          <div class="overview-section glass-card">
            <h2 class="section-title">Overview</h2>
            <div class="overview-grid">
              <div class="overview-item">
                <h3>🎓 Education</h3>
                <p>High School Student at Haidian Kaiwen Academy, Beijing. Previously enrolled in the <strong>Science Innovation Program</strong> at <strong>Tsinghua International School Daoxiang Lake</strong>, a selective STEM-focused curriculum.</p>
              </div>
              <div class="overview-item">
                <h3>🏆 Achievements</h3>
                <p>USA Computing Olympiad Gold Medal, Multiple Hackathon Winner</p>
              </div>
            </div>
          </div>

          <!-- Research Highlights -->
          <div class="research-section glass-card">
            <h2 class="section-title">Research & Publications</h2>
            <div class="research-grid">
              <div class="research-item">
                <div class="research-icon">📝</div>
                <div class="research-content">
                  <h4>Co-author, <em>OSGym: Super-Scalable Distributed Data Engine for Generalizable Computer Agents</em></h4>
                  <p>Contributed to the development of OSGym. Paper under submission to <strong>NeurIPS 2025</strong>, led by <strong>Zengyi Qin</strong> (MIT CSAIL).</p>
                </div>
              </div>
              <div class="research-item">
                <div class="research-icon">🤖</div>
                <div class="research-content">
                  <h4>First Author, <em>Adaptive Robust Learning Control for a 6-DOF Robotic Arm</em></h4>
                  <p>Developed and implemented a novel adaptive robust control system integrated with <strong>YOLO v10</strong> for real-time object detection and manipulation. Designed for a 6-degree-of-freedom robotic arm.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Work Experience & Achievements -->
          <div class="experience-blend">
            <div class="timeline-section glass-card">
              <h2 class="section-title">Experience</h2>
              <div class="timeline">
                <div class="timeline-item">
                  <div class="timeline-marker"></div>
                  <div class="timeline-content">
                    <div class="timeline-year">Jan 2025 - Present</div>
                    <h3>AI Researcher</h3>
                    <p><strong>Myshell.ai & MIT</strong> · Led by Zengyi Qin</p>
                    <p class="role-desc">Developing super-scalable distributed data engines for generalizable computer agents</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-marker"></div>
                  <div class="timeline-content">
                    <div class="timeline-year">Nov 2024 - Present</div>
                    <h3>Founder</h3>
                    <p><strong>Singularity Academy</strong></p>
                    <p class="role-desc">Educational platform focused on AI and technology advancement</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-marker"></div>
                  <div class="timeline-content">
                    <div class="timeline-year">Nov 2024 - Present</div>
                    <h3>Co-Founder</h3>
                    <p><strong>Apply4College</strong></p>
                    <p class="role-desc">College Application Helper</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-marker"></div>
                  <div class="timeline-content">
                    <div class="timeline-year">Aug 2024 - Present</div>
                    <h3>Founder</h3>
                    <p><strong>ClickMood</strong></p>
                    <p class="role-desc">An iOS mood tracking app</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="achievements-section glass-card">
              <h2 class="section-title">Key Achievements</h2>
              <div class="achievements-grid">
                <div class="achievement-item">
                  <div class="achievement-icon">🏆</div>
                  <div class="achievement-content">
                    <h4>USA Computing Olympiad Gold Medal</h4>
                    <p>2023 · Currently Platinum Division</p>
                  </div>
                </div>
                <div class="achievement-item">
                  <div class="achievement-icon">🚀</div>
                  <div class="achievement-content">
                    <h4>3rd Place Winner</h4>
                    <p>Hackathon PivotHack(2025)</p>
                  </div>
                </div>
                <div class="achievement-item">
                  <div class="achievement-icon">🚀</div>
                  <div class="achievement-content">
                    <h4>3rd Place Winner</h4>
                    <p>Hackathon Moonshot48 (2025)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Technical Skills -->
          <div class="skills-section glass-card">
            <h2 class="section-title">Technical Expertise</h2>
            <div class="skills-compact">
              <div class="skill-category">
                <h3>Programming</h3>
                <p>Python, Swift, Go, TypeScript, JavaScript, Java, C++</p>
              </div>
              <div class="skill-category">
                <h3>AI/ML</h3>
                <p>TensorFlow, PyTorch, Computer Vision, Robotics</p>
              </div>
              <div class="skill-category">
                <h3>Development</h3>
                <p>Vue.js, Xcode, Git, Web Technologies</p>
              </div>
              <div class="skill-category">
                <h3>Design & Hardware</h3>
                <p>Figma, Fusion 360, PCB Design, EDA Tools</p>
              </div>
            </div>
          </div>

          <!-- Technical Projects -->
          <div class="projects-section glass-card">
            <h2 class="section-title">Technical Projects</h2>
            <div class="projects-content">
              <p class="projects-intro">
                Explore my technical work and open-source contributions on GitHub. From AI research implementations 
                to mobile applications and web technologies, I'm constantly building and experimenting with new ideas.
              </p>
              <div class="github-showcase">
                <div class="github-card">
                  <div class="github-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div class="github-content">
                    <h3>GitHub Portfolio</h3>
                    <p>Discover my technical projects, research implementations, and contributions to open source. From AI algorithms to mobile apps and web applications.</p>
                    <div class="github-stats">
                      <span class="stat-badge">🚀 Active Developer</span>
                      <span class="stat-badge">🤖 AI Research</span>
                      <span class="stat-badge">📱 Mobile Apps</span>
                    </div>
                  </div>
                </div>
                <div class="github-actions">
                  <a href="https://github.com/jiacezhao" target="_blank" rel="noopener noreferrer" class="github-button">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>View GitHub Profile</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15,3 21,3 21,9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                  <div class="tech-highlights">
                    <span class="tech-tag">Python</span>
                    <span class="tech-tag">Swift</span>
                    <span class="tech-tag">AI/ML</span>
                    <span class="tech-tag">Vue.js</span>
                    <span class="tech-tag">Robotics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <div class="contact-flow">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60Q300,0 600,60T1200,0V120H0Z" fill="rgba(255,255,255,0.95)"></path>
        </svg>
      </div>
      
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
  background: linear-gradient(180deg, #ffffff 0%, #fafafa 50%, #f8f8f8 100%);
}

// About Hero
.about-hero {
  padding: clamp(2rem, 4vw, 3rem) 0 0;
  position: relative;
  background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
    gap: 2.5rem;
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
}

  .image-frame {
  position: relative;
  width: clamp(150px, 25vw, 250px);
  height: clamp(150px, 25vw, 250px);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    filter: grayscale(10%);
    transition: all 0.4s ease;
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.15),
      0 0 0 4px rgba(255, 255, 255, 0.8);
    position: relative;
    z-index: 2;

    &:hover {
      filter: grayscale(0%);
      transform: scale(1.02);
    }
  }
}

.image-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.image-frame:hover .image-glow {
  opacity: 1;
}

.hero-text {
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
}

.about-title {
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 300;
  color: var(--zen-black);
  margin-bottom: 0.5rem;
  line-height: 1.1;
}

.about-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: var(--zen-dark-gray);
  font-weight: 400;
  font-style: italic;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.about-description {
  font-size: clamp(0.95rem, 2vw, 1rem);
  color: var(--zen-dark-gray);
  line-height: 1.5;
  margin-bottom: 1.5rem;
  max-width: 500px;

  @media (max-width: 767px) {
    margin: 0 auto 1.5rem;
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
  border-radius: 30px;
  transition: all 0.4s ease;
  min-width: 140px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &.primary {
    background: rgba(26, 26, 26, 0.2);
    color: var(--zen-black);
    border-color: rgba(26, 26, 26, 0.3);
    box-shadow: 
      0 8px 32px rgba(26, 26, 26, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    
    &:hover {
      background: rgba(26, 26, 26, 0.3);
      border-color: rgba(26, 26, 26, 0.4);
      box-shadow: 
        0 12px 40px rgba(26, 26, 26, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
  }

  &.secondary {
    background: rgba(255, 255, 255, 0.15);
    color: var(--zen-black);
    border-color: rgba(26, 26, 26, 0.3);
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    
    &:hover {
      background: rgba(26, 26, 26, 0.15);
      border-color: rgba(26, 26, 26, 0.4);
      box-shadow: 
        0 12px 40px rgba(26, 26, 26, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
  }
}

// Flowing transition
.section-flow {
  position: relative;
  height: 120px;
  overflow: hidden;
  
  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
}



// Main Content Flow
.main-content {
  padding: 0.5rem 0 1rem;
  background: transparent;
}

.content-flow {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
}

.glass-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 
    0 15px 45px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.4);
  transition: all 0.4s ease;

  &:hover {
    box-shadow: 
      0 25px 60px rgba(0, 0, 0, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
  }
}

.section-title {
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  font-weight: 300;
  color: var(--zen-black);
  margin-bottom: 1.2rem;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, var(--zen-accent), transparent);
  }
}

// Experience Blend
.experience-blend {
  display: grid;
  gap: 1rem;
  
  @media (min-width: 968px) {
    grid-template-columns: 1fr 1fr;
  }
}

// Overview Section
.overview-section {
  margin-bottom: 0.5rem;
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}

.overview-item {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  border-left: 3px solid var(--zen-accent);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
    transform: translateY(-2px);
  }

  h3 {
    font-size: 1rem;
    color: var(--zen-black);
    margin: 0 0 0.5rem 0;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: var(--zen-dark-gray);
    margin: 0;
    line-height: 1.4;
  }
}

// Compact Skills
.skills-compact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.skill-category {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
    transform: translateY(-2px);
  }

  h3 {
    font-size: 1rem;
    color: var(--zen-black);
    margin: 0 0 0.5rem 0;
    font-weight: 600;
  }

  p {
    font-size: 0.85rem;
    color: var(--zen-dark-gray);
    margin: 0;
    line-height: 1.4;
  }
}

// Role descriptions
.role-desc {
  font-size: 0.85rem !important;
  color: var(--zen-dark-gray) !important;
  margin-top: 0.3rem !important;
  font-style: italic;
}

// Strong text styling
strong {
  font-weight: 700 !important;
  color: #1a1a1a !important;
}

// Ensure strong tags work in all contexts
.overview-item strong,
.research-content strong,
.timeline-content strong,
.achievement-content strong,
.glass-card strong {
  font-weight: 700 !important;
  color: #1a1a1a !important;
}

// Specifically target paragraph strong tags
p strong {
  font-weight: 700 !important;
  color: #1a1a1a !important;
}

// Timeline
.timeline {
  position: relative;
}

.timeline-item {
  display: flex;
  margin-bottom: 1.2rem;
  position: relative;
  align-items: flex-start;
  gap: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.timeline-marker {
  width: 12px;
  height: 12px;
  background: var(--zen-accent);
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 0.5rem;
  position: relative;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 40px;
    background: linear-gradient(to bottom, var(--zen-accent), transparent);
  }
}

.timeline-item:last-child .timeline-marker::before {
  display: none;
}

.timeline-content {
  flex: 1;

  .timeline-year {
    font-size: 0.9rem;
    color: var(--zen-accent);
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.2rem;
    color: var(--zen-black);
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  p {
    font-size: 1rem;
    color: var(--zen-dark-gray);
    line-height: 1.5;
  }
}

// Skills Grid
.skills-grid {
  display: grid;
  gap: 1rem;
}

.skill-item {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
    transform: translateY(-2px);
  }

  .skill-icon {
    font-size: 1.8rem;
    margin-top: 0.25rem;
    flex-shrink: 0;
  }

  .skill-content {
    h3 {
      font-size: 1.1rem;
      color: var(--zen-black);
      margin-bottom: 0.5rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .skill-level {
      font-size: 0.8rem;
      opacity: 0.7;
      font-family: monospace;
    }

    p {
      font-size: 0.95rem;
      color: var(--zen-dark-gray);
      line-height: 1.5;
      margin: 0;
    }
  }
}

// Education Section
.education-section {
  flex: 1;
}

.education-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.education-item {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  border-left: 3px solid var(--zen-accent);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
    transform: translateX(3px);
  }

  .education-content {
    .education-year {
      font-size: 0.9rem;
      color: var(--zen-accent);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    h3 {
      font-size: 1.1rem;
      color: var(--zen-black);
      margin: 0 0 0.25rem 0;
      font-weight: 600;
    }

    p {
      font-size: 0.95rem;
      color: var(--zen-dark-gray);
      margin: 0 0 0.25rem 0;
      line-height: 1.5;
    }

    .education-location {
      font-style: italic;
      opacity: 0.8;
    }
  }
}



// Research Section
.research-section {
  margin-bottom: 1rem;
}

.research-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.research-item {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
    transform: translateY(-2px);
  }

  .research-icon {
    font-size: 1.8rem;
    margin-top: 0.25rem;
    flex-shrink: 0;
  }

  .research-content {
    h4 {
      font-size: 1.1rem;
      color: var(--zen-black);
      margin: 0 0 0.5rem 0;
      font-weight: 600;
      line-height: 1.3;
    }

    p {
      font-size: 0.95rem;
      color: var(--zen-dark-gray);
      line-height: 1.5;
      margin: 0;
    }
  }
}

// Achievements Section
.achievements-section {
  margin-bottom: 1rem;
}

.achievements-grid {
  display: grid;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

.achievement-item {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
    transform: translateY(-2px);
  }

  .achievement-icon {
    font-size: 1.8rem;
    margin-top: 0.25rem;
    flex-shrink: 0;
  }

  .achievement-content {
    h4 {
      font-size: 1rem;
      color: var(--zen-black);
      margin: 0 0 0.25rem 0;
      font-weight: 600;
    }

    p {
      font-size: 0.95rem;
      color: var(--zen-dark-gray);
      line-height: 1.4;
      margin: 0;
    }
  }
}

// Recognition Grid
.recognition-grid {
  display: grid;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.recognition-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
    transform: translateY(-2px);
  }

  .recognition-icon {
    font-size: 1.5rem;
    margin-top: 0.25rem;
    flex-shrink: 0;
  }

  .recognition-content {
    h4 {
      font-size: 1.1rem;
      color: var(--zen-black);
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    p {
      font-size: 0.95rem;
      color: var(--zen-dark-gray);
      line-height: 1.5;
      margin: 0;
    }
  }
}

// Contact Section
.contact-section {
  position: relative;
  background: linear-gradient(135deg, #fafafa 0%, #ffffff 100%);
  padding: 0 0 2rem;
}

.contact-flow {
  position: relative;
  height: 80px;
  overflow: hidden;
  
  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
}

.contact-content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  padding: 1rem 0;
}

.contact-intro {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: var(--zen-dark-gray);
  margin-bottom: 2rem;
  line-height: 1.5;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
}

.contact-methods {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    max-width: 600px;
    margin: 0 auto;
  }
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--zen-dark-gray);
  text-decoration: none;
  font-size: clamp(0.9rem, 2vw, 1rem);
  padding: 1rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  transition: all 0.4s ease;
  justify-content: center;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(20px);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);

  &:hover {
    color: var(--zen-black);
    border-color: var(--zen-accent);
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 
      0 12px 40px rgba(99, 102, 241, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
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



// Technical Projects Section
.projects-section {
  margin-bottom: 1rem;
}

.projects-intro {
  font-size: 1rem;
  color: var(--zen-dark-gray);
  line-height: 1.5;
  margin-bottom: 1.5rem;
  text-align: center;
}

.github-showcase {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.github-card {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
}

.github-icon {
  color: #333;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.github-content {
  flex: 1;

  h3 {
    font-size: 1.3rem;
    color: var(--zen-black);
    margin: 0 0 0.5rem 0;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    color: var(--zen-dark-gray);
    line-height: 1.5;
    margin: 0 0 1rem 0;
  }
}

.github-stats {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
}

.stat-badge {
  display: inline-block;
  background: rgba(99, 102, 241, 0.1);
  color: var(--zen-accent);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.github-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
}

.github-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #24292e;
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid #24292e;
  min-width: 200px;
  justify-content: center;

  &:hover {
    background: #1a1e22;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(36, 41, 46, 0.3);
  }

  svg:last-child {
    margin-left: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 280px;
  }
}

.tech-highlights {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
}

.tech-tag {
  display: inline-block;
  background: rgba(255, 255, 255, 0.8);
  color: var(--zen-dark-gray);
  padding: 0.25rem 0.6rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(99, 102, 241, 0.1);
    color: var(--zen-accent);
    border-color: rgba(99, 102, 241, 0.2);
  }
}

// Mobile Optimizations
@media (max-width: 768px) {
  .experience-blend {
    grid-template-columns: 1fr;
  }
  
  .glass-card {
    padding: 1rem;
  }
  
  .overview-grid {
    grid-template-columns: 1fr;
  }
  
  .skills-compact {
    grid-template-columns: 1fr;
  }
}

// Animation Enhancements
.zen-fade-in {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>