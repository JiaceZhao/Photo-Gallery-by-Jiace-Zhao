<template>
  <div class="about-view zen-fade-in">
    <!-- About Hero -->
    <section class="about-hero">
      <div class="zen-section">
        <div class="hero-content">
          <div class="hero-image">
            <div class="image-frame">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
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

    <!-- Philosophy Quote - Floating -->
    <section class="philosophy-floating">
      <div class="zen-section">
        <div class="philosophy-card">
          <blockquote class="main-quote">
            "Not an engineer, a poet; not a scientist, an artist."
          </blockquote>
          <cite class="quote-attribution">— Personal philosophy, 2025</cite>
        </div>
      </div>
    </section>

    <!-- Main Content - Organic Flow -->
    <section class="main-content">
      <div class="zen-section">
        <div class="content-flow">
          <!-- Story & Journey -->
          <div class="story-section glass-card">
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

          <!-- Timeline & Skills Blend -->
          <div class="experience-blend">
            <div class="timeline-section glass-card">
              <h2 class="section-title">Work Experience</h2>
              <div class="timeline">
                <div class="timeline-item">
                  <div class="timeline-marker"></div>
                  <div class="timeline-content">
                    <div class="timeline-year">January 2025 - Now</div>
                    <h3>Researcher</h3>
                    <p>Myshell.ai & MIT, lead by Zengyi Qin</p>
                    <ul class="timeline-details">
                      <li>Personalize your work experience to the job ad and incorporate important achievements to stand out.</li>
                      <li>Use strong verbs to describe your responsibilities.</li>
                      <li>Keep your description to three or four main points.</li>
                    </ul>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-marker"></div>
                  <div class="timeline-content">
                    <div class="timeline-year">June 2025 - Now</div>
                    <h3>Dev.</h3>
                    <p>AdventureX, biggest Hackathon in China</p>
                    <ul class="timeline-details">
                      <li>Developed the webpage.</li>
                    </ul>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-marker"></div>
                  <div class="timeline-content">
                    <div class="timeline-year">Nov. 2024 - Now</div>
                    <h3>Founder</h3>
                    <p>Singularity Academy</p>
                    <ul class="timeline-details">
                      <li>Personalize your work experience to the job ad and incorporate important achievements to stand out.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="skills-section glass-card">
              <h2 class="section-title">Skills</h2>
              <div class="skills-grid">
                <div class="skill-item">
                  <div class="skill-icon">💻</div>
                  <div class="skill-content">
                    <h3>Software Engineering <span class="skill-level">◾◾◾◾</span></h3>
                    <p>Swift, Xcode, Go/Gin, TypeScript, JavaScript, Vue, Python, Java, C++</p>
                  </div>
                </div>
                <div class="skill-item">
                  <div class="skill-icon">🔧</div>
                  <div class="skill-content">
                    <h3>Hardware Engineering <span class="skill-level">◾◾</span></h3>
                    <p>Fusion 360, EDA Tools, PCB Design</p>
                  </div>
                </div>
                <div class="skill-item">
                  <div class="skill-icon">🎨</div>
                  <div class="skill-content">
                    <h3>Design <span class="skill-level">◾◾</span></h3>
                    <p>Figma, Adobe Illustrator</p>
                  </div>
                </div>
                <div class="skill-item">
                  <div class="skill-icon">🤖</div>
                  <div class="skill-content">
                    <h3>Deep Learning <span class="skill-level">◾◾◾◾</span></h3>
                    <p>TensorFlow, PyTorch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Education & Languages -->
          <div class="experience-blend">
            <div class="education-section glass-card">
              <h2 class="section-title">Education</h2>
              <div class="education-grid">
                <div class="education-item">
                  <div class="education-content">
                    <div class="education-year">2024-2026</div>
                    <h3>Haidian Kaiwen Academy</h3>
                    <p>Highschool, Grades 11-12</p>
                    <p class="education-location">Beijing, China</p>
                  </div>
                </div>
                <div class="education-item">
                  <div class="education-content">
                    <div class="education-year">2022-2024</div>
                    <h3>Tsinghua International School Daoxiang Lake</h3>
                    <p>High School, Grades 9-10</p>
                    <p class="education-location">Beijing, China</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="languages-section glass-card">
              <h2 class="section-title">Languages</h2>
              <div class="languages-grid">
                <div class="language-item">
                  <h3>Chinese <span class="skill-level">◾◾◾◾◾</span></h3>
                </div>
                <div class="language-item">
                  <h3>English <span class="skill-level">◾◾◾◾</span></h3>
                </div>
                <div class="language-item">
                  <h3>Spanish <span class="skill-level">◾</span></h3>
                </div>
              </div>

              <h2 class="section-title" style="margin-top: 2rem;">Side Hustles</h2>
              <div class="side-hustles">
                <div class="hustle-item">
                  <h3>Project Name</h3>
                  <ul>
                    <li>Photography Portfolio</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Research -->
          <div class="research-section glass-card">
            <h2 class="section-title">Research</h2>
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

          <!-- Achievements -->
          <div class="achievements-section glass-card">
            <h2 class="section-title">Achievements</h2>
            <div class="achievements-grid">
              <div class="achievement-item">
                <div class="achievement-icon">🏆</div>
                <div class="achievement-content">
                  <h4>USA Computing Olympiad (USACO)</h4>
                  <p>Gold Medal, 2023. Currently Platinum Division</p>
                </div>
              </div>
              <div class="achievement-item">
                <div class="achievement-icon">🚀</div>
                <div class="achievement-content">
                  <h4>PivotHack Hackathon</h4>
                  <p>3rd Place Winner, 2025</p>
                </div>
              </div>
              <div class="achievement-item">
                <div class="achievement-icon">🌙</div>
                <div class="achievement-content">
                  <h4>Moonshot48 Hackathon</h4>
                  <p>3rd Place Winner, 2025</p>
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
  padding: clamp(4rem, 8vw, 6rem) 0 0;
  position: relative;
  background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 4rem;

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
}

.image-frame {
  position: relative;
  width: clamp(200px, 35vw, 350px);
  height: clamp(200px, 35vw, 350px);

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

// Philosophy Floating
.philosophy-floating {
  padding: 2rem 0 4rem;
  position: relative;
  z-index: 10;
}

.philosophy-card {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(30px);
  border-radius: 24px;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.5);
  text-align: center;
  transform: translateY(-2rem);
}

.main-quote {
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-style: italic;
  color: var(--zen-black);
  line-height: 1.5;
  margin: 0 0 1.5rem;
  position: relative;

  &::before {
    content: '"';
    font-size: 4rem;
    color: var(--zen-accent);
    position: absolute;
    top: -1rem;
    left: -1rem;
    line-height: 1;
    opacity: 0.3;
  }
}

.quote-attribution {
  font-size: 1rem;
  color: var(--zen-gray);
  font-style: normal;
  font-weight: 500;
}

// Main Content Flow
.main-content {
  padding: 2rem 0 4rem;
  background: transparent;
}

.content-flow {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 3rem;
}

.glass-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2.5rem;
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
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  font-weight: 300;
  color: var(--zen-black);
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, var(--zen-accent), transparent);
  }
}

// Experience Blend
.experience-blend {
  display: grid;
  gap: 2rem;
  
  @media (min-width: 968px) {
    grid-template-columns: 1fr 1fr;
  }
}

// Timeline
.timeline {
  position: relative;
}

.timeline-item {
  display: flex;
  margin-bottom: 2rem;
  position: relative;
  align-items: flex-start;
  gap: 1.5rem;

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
  gap: 1.5rem;
}

.skill-item {
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
  gap: 1.5rem;
}

.education-item {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  border-left: 4px solid var(--zen-accent);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
    transform: translateX(4px);
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

// Languages Section
.languages-section {
  flex: 1;
}

.languages-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.language-item {
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
    transform: translateY(-2px);
  }

  h3 {
    font-size: 1rem;
    color: var(--zen-black);
    margin: 0;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}

.side-hustles {
  .hustle-item {
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 12px;
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

    ul {
      margin: 0;
      padding-left: 1.2rem;
      list-style-type: disc;

      li {
        font-size: 0.95rem;
        color: var(--zen-dark-gray);
        line-height: 1.5;
      }
    }
  }
}

// Research Section
.research-section {
  margin-bottom: 2rem;
}

.research-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.research-item {
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
  margin-bottom: 2rem;
}

.achievements-grid {
  display: grid;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

.achievement-item {
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
  padding: 0 0 4rem;
}

.contact-flow {
  position: relative;
  height: 120px;
  overflow: hidden;
  
  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
}

.contact-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem 0;
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
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
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

// Story Text
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

// Mobile Optimizations
@media (max-width: 768px) {
  .experience-blend {
    grid-template-columns: 1fr;
  }
  
  .recognition-grid {
    grid-template-columns: 1fr;
  }
  
  .glass-card {
    padding: 2rem;
  }
  
  .philosophy-card {
    padding: 2rem 1.5rem;
    transform: translateY(-1rem);
  }
  
  .main-quote::before {
    font-size: 3rem;
    top: -0.5rem;
    left: -0.5rem;
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