<script setup lang="ts">
import { ref } from 'vue'

interface FeaturedWork {
  id: number
  title: string
  medium: string
  image: string
  description: string
}

const featuredWorks = ref<FeaturedWork[]>([
  {
    id: 1,
    title: "Mountain's Call",
    medium: "Photography",
    image: "/KyushuJapan/IMG_1715.JPG",
    description: "The ancient mountains of Kyushu speak in whispers of wind and stone"
  },
  {
    id: 2,
    title: "Field of Dreams", 
    medium: "Photography",
    image: "/KyushuJapan/IMG_0011.JPG",
    description: "Green fields stretch endlessly, each blade of grass a note in nature's symphony"
  },
  {
    id: 3,
    title: "Golden Hour Meditation",
    medium: "Photography",
    image: "/KyushuJapan/IMG_0015.JPG",
    description: "As day surrenders to dusk, the golden hour invites contemplation"
  }
])
</script>

<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              Contemporary Art
              <span class="hero-accent">Through Digital Expression</span>
            </h1>
            <p class="hero-description">
              Exploring the intersection of traditional aesthetics and modern technology 
              to create works that invite contemplation and discovery.
            </p>
            <div class="hero-actions">
              <router-link to="/gallery" class="btn btn-primary btn-lg">
                View Gallery
              </router-link>
              <router-link to="/collections" class="btn btn-secondary btn-lg">
                Call from the Field
              </router-link>
            </div>
          </div>
          <div class="hero-visual">
            <div class="hero-image">
              <img 
                src="/KyushuJapan/IMG_0012.JPG" 
                alt="Sacred landscape from the Kyushu series showcasing minimalist aesthetic"
                class="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Artist Statement -->
    <section class="statement">
      <div class="container">
        <div class="statement-content">
          <blockquote class="statement-quote">
            "My work emerges from the belief that in our increasingly complex world, 
            art serves as a sanctuary—a place where we can pause, breathe, and reconnect 
            with what is essential."
          </blockquote>
          <cite class="statement-attribution">— Sarah Chen</cite>
        </div>
      </div>
    </section>

    <!-- Featured Works -->
    <section class="featured">
      <div class="container">
        <div class="featured-header">
          <h2 class="featured-title text-4xl font-light">Featured Works</h2>
          <p class="featured-subtitle text-secondary">
            A selection of recent pieces exploring themes of simplicity, space, and contemplation
          </p>
        </div>
        
        <div class="featured-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <article 
            v-for="work in featuredWorks" 
            :key="work.id"
            class="featured-item card"
          >
            <div class="featured-image">
              <img 
                :src="work.image" 
                :alt="work.title"
                class="object-cover aspect-portrait"
              />
            </div>
            <div class="featured-info card-body">
              <h3 class="featured-work-title text-xl font-medium">{{ work.title }}</h3>
              <p class="featured-medium text-sm text-secondary">{{ work.medium }}</p>
              <p class="featured-description text-sm text-muted">{{ work.description }}</p>
            </div>
          </article>
        </div>
        
        <div class="featured-actions">
          <router-link to="/gallery" class="btn btn-secondary">
            View All Works
            <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process">
      <div class="container">
        <div class="process-content">
          <div class="process-text">
            <h2 class="process-title text-3xl font-light">Artistic Process</h2>
            <p class="process-description text-secondary">
              Each piece begins with observation—finding those quiet moments where light, 
              form, and space converge to create something greater than their individual parts. 
              Through digital tools and traditional techniques, I seek to preserve these 
              ephemeral experiences.
            </p>
            <div class="process-stats">
              <div class="stat">
                <div class="stat-number text-2xl font-semibold">50+</div>
                <div class="stat-label text-sm text-muted">Works Created</div>
              </div>
              <div class="stat">
                <div class="stat-number text-2xl font-semibold">5</div>
                <div class="stat-label text-sm text-muted">Exhibitions</div>
              </div>
              <div class="stat">
                <div class="stat-number text-2xl font-semibold">2024</div>
                <div class="stat-label text-sm text-muted">Latest Collection</div>
              </div>
            </div>
          </div>
          <div class="process-visual">
            <div class="process-circle">
              <div class="circle-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.home-view {
  min-height: 100vh;
}

/* Hero Section */
.hero {
  padding: var(--space-20) 0 var(--space-16);
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  min-height: 70vh;
  display: flex;
  align-items: center;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-12);
  align-items: center;
  
  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 1fr;
    gap: var(--space-16);
  }
}

.hero-text {
  order: 2;
  text-align: center;
  
  @media (min-width: 768px) {
    order: 1;
    text-align: left;
  }
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 300;
  line-height: 1.1;
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);
}

.hero-accent {
  display: block;
  color: var(--color-accent);
  font-weight: 400;
  margin-top: var(--space-2);
}

.hero-description {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-8);
  max-width: 500px;
  
  @media (max-width: 767px) {
    margin: 0 auto var(--space-8);
  }
}

.hero-actions {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
}

.hero-visual {
  order: 1;
  display: flex;
  justify-content: center;
  
  @media (min-width: 768px) {
    order: 2;
    justify-content: flex-end;
  }
}

.hero-image {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 4/5;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  
  img {
    width: 100%;
    height: 100%;
    transition: transform var(--transition-slow);
  }
  
  &:hover img {
    transform: scale(1.05);
  }
}

/* Statement Section */
.statement {
  padding: var(--space-20) 0;
  background-color: var(--color-surface-elevated);
}

.statement-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.statement-quote {
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-style: italic;
  font-weight: 300;
  line-height: 1.5;
  color: var(--color-text-primary);
  margin: 0 0 var(--space-4);
  position: relative;
  
  &::before {
    content: '"';
    font-size: 4rem;
    color: var(--color-accent);
    position: absolute;
    top: -1rem;
    left: -2rem;
    line-height: 1;
    opacity: 0.3;
  }
}

.statement-attribution {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  font-style: normal;
  font-weight: 500;
}

/* Featured Section */
.featured {
  padding: var(--space-20) 0;
}

.featured-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.featured-title {
  margin-bottom: var(--space-4);
}

.featured-subtitle {
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.featured-item {
  transition: transform var(--transition-base);
  
  &:hover {
    transform: translateY(-8px);
  }
}

.featured-image {
  width: 100%;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  overflow: hidden;
  
  img {
    width: 100%;
    transition: transform var(--transition-slow);
  }
  
  &:hover img {
    transform: scale(1.05);
  }
}

.featured-info {
  border-top: none;
}

.featured-work-title {
  margin-bottom: var(--space-2);
}

.featured-medium {
  margin-bottom: var(--space-3);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

.featured-description {
  line-height: 1.5;
}

.featured-actions {
  text-align: center;
  margin-top: var(--space-12);
}

/* Process Section */
.process {
  padding: var(--space-20) 0;
  background-color: var(--color-surface-elevated);
}

.process-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-12);
  align-items: center;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-16);
  }
}

.process-title {
  margin-bottom: var(--space-6);
}

.process-description {
  line-height: 1.7;
  margin-bottom: var(--space-8);
}

.process-stats {
  display: flex;
  gap: var(--space-8);
  flex-wrap: wrap;
}

.stat {
  text-align: center;
  min-width: 80px;
}

.stat-number {
  color: var(--color-accent);
  margin-bottom: var(--space-1);
}

.stat-label {
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

.process-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.process-circle {
  width: 250px;
  height: 250px;
  border: 2px solid var(--color-border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: rotate 20s linear infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 1px solid var(--color-accent);
    border-radius: 50%;
    border-top-color: transparent;
    border-right-color: transparent;
    animation: rotate 8s linear infinite reverse;
  }
}

.circle-inner {
  width: 150px;
  height: 150px;
  background: var(--color-accent);
  border-radius: 50%;
  opacity: 0.1;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.2;
  }
}

/* Responsive Improvements */
@media (max-width: 768px) {
  .hero {
    padding: var(--space-16) 0 var(--space-12);
    min-height: 60vh;
  }
  
  .statement,
  .featured,
  .process {
    padding: var(--space-16) 0;
  }
  
  .process-stats {
    justify-content: center;
  }
  
  .process-circle {
    width: 200px;
    height: 200px;
  }
  
  .circle-inner {
    width: 120px;
    height: 120px;
  }
}

/* Utility classes */
.ml-2 { margin-left: var(--space-2); }
.w-4 { width: 1rem; }
.h-4 { height: 1rem; }
</style>

