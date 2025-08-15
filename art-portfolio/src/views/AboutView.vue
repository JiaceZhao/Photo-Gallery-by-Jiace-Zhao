<template>
  <div class="about-view">
    <!-- Header -->
    <header class="cv-header">
      <div class="header-content">
        <div class="profile-section">
          <div class="profile-image">
            <img 
              src="/favicon-photo.jpg" 
              alt="Jiace Zhao - Portrait"
            />
          </div>
          <div class="name-title">
            <h1>Jiace Zhao</h1>
          </div>
        </div>
        <div class="contact-info">
          <p>Haidian, Beijing, China</p>
          <p>Born: February 2008</p>
        </div>
      </div>
    </header>

    <!-- Profile -->
    <section class="cv-section">
      <h2>Profile</h2>
      <p class="profile-text">
        A start-uper, a poet, a human being, an engineer, an artist, a photographer, a martian, a hacker, a daydreamer —always hopeful for change.
      </p>
    </section>

    <!-- Skills -->
    <section class="cv-section">
      <h2>Skills</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Software Engineering</h3>
          <p>Swift, Xcode, Go/Gin, TypeScript, JavaScript, React, Python, Java, C++</p>
          <div class="skill-level">◾◾◾◾◾</div>
        </div>
        <div class="skill-category">
          <h3>Hardware Engineering</h3>
          <p>Fusion 360, LiChuang EDA, PCB Design</p>
          <div class="skill-level">◾◾</div>
        </div>
        <div class="skill-category">
          <h3>AI</h3>
          <p>TensorFlow, PyTorch, CUDA</p>
          <div class="skill-level">◾◾◾◾◾</div>
        </div>
        <div class="skill-category">
          <h3>Design</h3>
          <p>Figma, Adobe Illustrator, Blender, Photography</p>
          <div class="skill-level">◾◾</div>
        </div>
        <div class="skill-category">
          <h3>Languages</h3>
          <div class="language-skills">
            <div class="language-item">
              <span>Chinese</span>
              <span class="skill-level">◾◾◾◾◾</span>
            </div>
            <div class="language-item">
              <span>English</span>
              <span class="skill-level">◾◾◾◾</span>
            </div>
            <div class="language-item">
              <span>Spanish</span>
              <span class="skill-level">◾</span>
            </div>
          </div>
        </div>
        <div class="skill-category">
          <h3>Side Hustles</h3>
          <p>Jiace's Gallery, Photography Collections, Cardistry</p>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="cv-section">
      <h2>Experience</h2>
      <div class="experience-list">
        <div class="experience-item">
          <div class="experience-header">
            <h3>Founder</h3>
            <span class="company">Singularity Spaces</span>
            <span class="period">Nov. 2024 - Now</span>
          </div>
          <p>Singularity Spaces is the best hacker space across China under the SINGULARITY banner: a high-caliber, values-driven community uniting top researchers, industry leaders, talented students, and bold startup founders—focused on pushing boundaries, building impactful projects, and shaping the future of technology together.</p>
        </div>

        <div class="experience-item">
          <div class="experience-header">
            <h3>Founder</h3>
            <span class="company">Singularity Voices</span>
            <span class="period">Nov. 2024 - Now</span>
          </div>
          <p>Singularity Voices is a deep-dive interview series under the SINGULARITY banner, featuring conversations with pioneering AI entrepreneurs, researchers, and innovators, aimed at inspiring and connecting the next generation of builders and thinkers.</p>
        </div>

        <div class="experience-item">
          <div class="experience-header">
            <h3>Founder</h3>
            <span class="company">Singularity Academy</span>
            <span class="period">Jan. 2024 - Now</span>
          </div>
          <p>Singularity Academy is an AI-powered educational platform under the SINGULARITY banner. Singularity Academy integrates personalized AI tutoring, adaptive learning paths, and immersive social learning spaces to empower students with meaningful, purpose-driven education beyond traditional test-focused systems. Helped 100+ homeschooling families.</p>
        </div>

        <div class="experience-item">
          <div class="experience-header">
            <h3>Founder</h3>
            <span class="company">ClickMood</span>
            <span class="period">Sept. 2024 - Now</span>
          </div>
          <p>ClickMood is a mood-tracking App on iOS/MacOS/iPadOS AppStore. Helped users to manage and appreciate their moods with feedback.</p>
        </div>

        <div class="experience-item">
          <div class="experience-header">
            <h3>Researcher</h3>
            <span class="company">Myshell.ai & MIT CSAIL, led by Zengyi Qin</span>
            <span class="period">Jan. 2025 - Now</span>
          </div>
          <p>Contributed to research and development of OSGym, a scalable data engine for computer-using agents, under Zengyi Qin (MIT CSAIL).</p>
        </div>

        <div class="experience-item">
          <div class="experience-header">
            <h3>Co-founder</h3>
            <span class="company">Apply4College.org</span>
            <span class="period">Nov. 2024 - Now</span>
          </div>
          <p>Apply4College.org provides the free tools and insights students need to navigate the application process with confidence for underprivileged applicants.</p>
        </div>

        <div class="experience-item">
          <div class="experience-header">
            <h3>Back-end Dev.</h3>
            <span class="company">AdventureX, biggest Hackathon in China</span>
            <span class="period">June 2025 - July 2025</span>
          </div>
          <p>The biggest Hackathon in China, hosting a hackathon event for 1,000+ hackers. Built the official website's backend.</p>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="cv-section">
      <h2>Education</h2>
      <div class="education-list">
        <div class="education-item">
          <div class="education-header">
            <h3>Haidian Kaiwen Academy</h3>
            <span class="period">2024-2026</span>
          </div>
          <p>High School, Grades 11-12</p>
          <p class="location">Beijing, China</p>
        </div>

        <div class="education-item">
          <div class="education-header">
            <h3>Tsinghua International School Daoxiang Lake</h3>
            <span class="period">2022-2024</span>
          </div>
          <p>Science Innovation Program, High School, Grades 9-10</p>
          <p class="location">Beijing, China</p>
        </div>
      </div>
    </section>

    <!-- Research -->
    <section class="cv-section">
      <h2>Research</h2>
      <div class="research-list">
        <div class="research-item">
          <h3>Co-author, OSGym: Super-Scalable Distributed Data Engine for Generalizable Computer Agents</h3>
          <p>Contributed to the development of OSGym. Paper under submission to NeurIPS 2025, led by Zengyi Qin (MIT CSAIL).</p>
        </div>

        <div class="research-item">
          <h3>First Author, Adaptive Robust Learning Control for a 6-DOF Robotic Arm</h3>
          <p>Developed and implemented a novel adaptive robust control system integrated with YOLOv10 for real-time object detection and manipulation. Designed for a 6-degree-of-freedom robotic arm.</p>
        </div>
      </div>
    </section>

    <!-- Awards -->
    <section class="cv-section">
      <h2>Awards</h2>
      <div class="awards-list">
        <div class="award-item">
          <h3>USA Computing Olympiad (USACO) – Gold Medal, 2023</h3>
          <p>Currently Platinum Division</p>
        </div>
        <div class="award-item">
          <h3>PivotHack Hackathon – 3rd Place Winner, 2025</h3>
        </div>
        <div class="award-item">
          <h3>Moonshot48 Hackathon – 3rd Place Winner, 2025</h3>
        </div>
        <div class="award-item">
          <h3>AdventureX 2025 Moonshot AI Kimi Track – 1st Place Winner</h3>
        </div>
        <div class="award-item">
          <h3>AdventureX 2025 中控技术 (SUPCON) Track - 2nd Place Winner</h3>
        </div>
      </div>
    </section>

    <!-- Technical Projects -->
    <section class="cv-section">
      <h2>Technical Projects</h2>
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
            <a href="https://github.com/JiaceZhao" target="_blank" rel="noopener noreferrer" class="github-button">
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
    </section>

    <!-- Links -->
    <section class="cv-section">
      <h2>Links</h2>
      <div class="links-list">
        <div class="link-item">
          <strong>GitHub:</strong> <a href="https://github.com/JiaceZhao" target="_blank" rel="noopener noreferrer">https://github.com/JiaceZhao</a>
        </div>
        <div class="link-item">
          <strong>X:</strong> <a href="https://x.com/KrypotoZ" target="_blank" rel="noopener noreferrer">https://x.com/KrypotoZ</a>
        </div>
        <div class="link-item">
          <strong>Homepage:</strong> <a href="https://www.jczhao.info/about" target="_blank" rel="noopener noreferrer">https://www.jczhao.info/about</a>
        </div>
        <div class="link-item">
          <strong>OpenReview:</strong> <a href="https://openreview.net/profile?id=~Jiace_Zhao1" target="_blank" rel="noopener noreferrer">https://openreview.net/profile?id=~Jiace_Zhao1</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// No reactive data needed for this static CV page
</script>

<style lang="scss" scoped>
.about-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
  background: white;
}

.cv-header {
  border-bottom: 3px solid #2c3e50;
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
}

.header-content {
  text-align: center;
}

.profile-section {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1.5rem;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.name-title h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 1rem 0;
  letter-spacing: -0.5px;
}

.contact-info {
  font-size: 1.1rem;
  color: #555;
  
  p {
    margin: 0.25rem 0;
  }
}

.cv-section {
  margin-bottom: 2.5rem;
  
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2c3e50;
    margin: 0 0 1rem 0;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #ecf0f1;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
}

.profile-text {
  font-size: 1.1rem;
  font-style: italic;
  color: #555;
  line-height: 1.6;
  margin: 0;
}

.skills-grid {
  display: grid;
  gap: 1.5rem;
}

.skill-category {
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #2c3e50;
    margin: 0 0 0.5rem 0;
  }
  
  p {
    margin: 0 0 0.5rem 0;
    color: #555;
  }
}

.skill-level {
  font-size: 1.2rem;
  color: #3498db;
  letter-spacing: 2px;
}

.language-skills {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.language-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  span:first-child {
    font-weight: 500;
  }
}

.experience-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.experience-item {
  .experience-header {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 0.5rem;
    
    h3 {
      font-size: 1.2rem;
      font-weight: 600;
      color: #2c3e50;
      margin: 0;
    }
    
    .company {
      font-weight: 500;
      color: #34495e;
    }
    
    .period {
      font-size: 0.9rem;
      color: #7f8c8d;
      font-style: italic;
    }
  }
  
  p {
    margin: 0;
    color: #555;
    line-height: 1.6;
  }
}

.education-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.education-item {
  .education-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.5rem;
    
    h3 {
      font-size: 1.2rem;
      font-weight: 600;
      color: #2c3e50;
      margin: 0;
    }
    
    .period {
      font-size: 0.9rem;
      color: #7f8c8d;
      font-style: italic;
    }
  }
  
  p {
    margin: 0 0 0.25rem 0;
    color: #555;
    
    &.location {
      color: #7f8c8d;
      font-style: italic;
    }
  }
}

.research-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.research-item {
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #2c3e50;
    margin: 0 0 0.5rem 0;
    line-height: 1.4;
  }
  
  p {
    margin: 0;
    color: #555;
    line-height: 1.6;
  }
}

.awards-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.award-item {
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #2c3e50;
    margin: 0 0 0.25rem 0;
  }
  
  p {
    margin: 0;
    color: #7f8c8d;
    font-size: 0.9rem;
  }
}

.projects-content {
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.projects-intro {
  font-size: 1.1rem;
  color: #555;
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
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
}

.github-icon {
  padding: 1rem;
  background-color: #3498db;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.github-content {
  padding: 1rem;
  flex-grow: 1;

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
    color: #555;
    margin-bottom: 1rem;
  }
}

.github-stats {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.stat-badge {
  background-color: #e0e0e0;
  color: #333;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
}

.github-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1rem;
}

.github-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #3498db;
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #2980b9;
  }

  svg:first-child {
    margin-right: 0.5rem;
  }

  svg:last-child {
    margin-left: 0.5rem;
  }
}

.tech-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tech-tag {
  background-color: #e0e0e0;
  color: #333;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
}

.links-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.link-item {
  strong {
    color: #2c3e50;
    margin-right: 0.5rem;
  }
  
  a {
    color: #3498db;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
}

// Responsive design
@media (max-width: 768px) {
  .about-view {
    padding: 1rem;
  }
  
  .name-title h1 {
    font-size: 2rem;
  }
  
  .profile-section {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .profile-image {
    margin-right: 0;
  }

  .experience-header,
  .education-header {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
  
  .cv-section h2 {
    font-size: 1.3rem;
  }
}
</style>