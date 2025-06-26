<script setup lang="ts">
import { ref } from 'vue'

interface Collection {
  id: string
  title: string
  subtitle: string
  type: string
  year: string
  status: 'published' | 'upcoming' | 'planned'
  imageCount?: number
  coverImage: string
  description: string
  location?: string
  featured: boolean
}

const featuredCollections = ref<Collection[]>([
  {
    id: 'call-from-the-field',
    title: 'Call from the Field',
    subtitle: '野の呼び声',
    type: 'Photography Series',
    year: '2024',
    status: 'published',
    imageCount: 7,
    coverImage: '/KyushuJapan/IMG_0012.JPG',
    description: 'A photographic journey through the rural landscapes of Kyushu, Japan, where ancient rhythms meet eternal skies.',
    location: 'Kyushu, Japan',
    featured: true
  },
  {
    id: 'urban-contemplations',
    title: 'Urban Contemplations',
    subtitle: '都市の静寂',
    type: 'Photography Series',
    year: '2024',
    status: 'upcoming',
    imageCount: 12,
    coverImage: '/KyushuJapan/IMG_1715.JPG',
    description: 'Finding moments of silence and reflection within the bustling energy of urban landscapes.',
    location: 'Tokyo, Japan',
    featured: true
  },
  {
    id: 'seasons-of-solitude',
    title: 'Seasons of Solitude',
    subtitle: '孤独の四季',
    type: 'Photography Series',
    year: '2025',
    status: 'planned',
    imageCount: 16,
    coverImage: '/KyushuJapan/IMG_0015.JPG',
    description: 'A year-long meditation on solitude, capturing the changing seasons through moments of quiet introspection.',
    location: 'Various',
    featured: true
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
              Contemplative
              <span class="hero-accent">Photography</span>
            </h1>
            <p class="hero-description">
              Creating visual meditations that explore the profound beauty found in everyday moments, 
              where silence speaks louder than words and simplicity reveals infinite depth.
            </p>
            <div class="hero-actions">
              <router-link to="/collections" class="btn btn-primary btn-lg">
                Explore Collections
              </router-link>
              <router-link to="/about" class="btn btn-secondary btn-lg">
                About the Artist
              </router-link>
            </div>
          </div>
          <div class="hero-visual">
            <div class="hero-image-container">
              <div class="hero-frame">
                <img 
                  :src="featuredCollections[0].coverImage" 
                  :alt="featuredCollections[0].title"
                  class="hero-image"
                />
                <div class="image-overlay">
                  <div class="overlay-gradient"></div>
                  <div class="image-caption">
                    <span class="caption-collection">{{ featuredCollections[0].title }}</span>
                    <span class="caption-subtitle">{{ featuredCollections[0].subtitle }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Artist Philosophy -->
    <section class="philosophy">
      <div class="container">
        <div class="philosophy-content">
          <blockquote class="philosophy-quote">
            "Not an engineer, a poet; not a scientist, an artist."
          </blockquote>
          <cite class="philosophy-attribution">— Jiace Zhao</cite>
        </div>
      </div>
    </section>

    <!-- Featured Collections -->
    <section class="collections">
      <div class="container">
        <div class="collections-header">
          <h2 class="collections-title">Photographic Collections</h2>
          <p class="collections-subtitle">
            Each collection represents a sustained meditation on a particular theme, 
            place, or state of being—inviting viewers into a deeper conversation with the world around us.
          </p>
        </div>
        
        <div class="collections-grid">
          <article 
            v-for="(collection, index) in featuredCollections" 
            :key="collection.id"
            :class="['collection-card', `collection-${index}`, collection.status]"
          >
            <div class="collection-visual">
              <div class="collection-image">
                <img 
                  :src="collection.coverImage" 
                  :alt="collection.title"
                  class="cover-image"
                />
                <div class="collection-overlay">
                  <div class="overlay-content">
                    <div class="status-badge" :class="collection.status">
                      <span v-if="collection.status === 'published'">Available Now</span>
                      <span v-else-if="collection.status === 'upcoming'">Coming Soon</span>
                      <span v-else>In Planning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="collection-info">
              <div class="collection-header">
                <span class="collection-type">{{ collection.type }}</span>
                <h3 class="collection-name">{{ collection.title }}</h3>
                <p class="collection-japanese">{{ collection.subtitle }}</p>
              </div>
              
              <p class="collection-description">{{ collection.description }}</p>
              
              <div class="collection-meta">
                <div class="meta-row">
                  <span class="meta-label">Year</span>
                  <span class="meta-value">{{ collection.year }}</span>
                </div>
                <div class="meta-row" v-if="collection.location">
                  <span class="meta-label">Location</span>
                  <span class="meta-value">{{ collection.location }}</span>
                </div>
                <div class="meta-row" v-if="collection.imageCount">
                  <span class="meta-label">Images</span>
                  <span class="meta-value">{{ collection.imageCount }}</span>
                </div>
              </div>
              
              <div class="collection-action">
                <router-link 
                  v-if="collection.status === 'published'" 
                  :to="collection.id === 'call-from-the-field' ? '/collections' : '/collections'"
                  class="view-btn"
                >
                  View Collection
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </router-link>
                <div v-else class="coming-soon-btn">
                  <span>{{ collection.status === 'upcoming' ? 'Coming Soon' : 'In Development' }}</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Collection Philosophy -->
    <section class="process-section">
      <div class="container">
        <div class="process-content">
          <div class="process-text">
            <h2 class="process-title">The Collection Philosophy</h2>
            <p class="process-description">
              Each collection represents a sustained meditation on a particular theme or place. 
              Rather than individual moments, these series capture the deeper rhythms and 
              patterns that emerge when we spend time truly observing and listening to our environment.
            </p>
            <div class="process-principles">
              <div class="principle">
                <h4 class="principle-title">Immersion</h4>
                <p class="principle-text">Extended time spent in place, allowing the landscape to reveal its secrets</p>
              </div>
              <div class="principle">
                <h4 class="principle-title">Patience</h4>
                <p class="principle-text">Waiting for the moment when light, form, and meaning converge</p>
              </div>
              <div class="principle">
                <h4 class="principle-title">Reverence</h4>
                <p class="principle-text">Approaching each scene with respect for its inherent beauty and wisdom</p>
              </div>
            </div>
          </div>
          
          <div class="process-visual">
            <div class="visual-elements">
              <div class="element-circle"></div>
              <div class="element-line"></div>
              <div class="element-dot"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Begin Your Journey</h2>
          <p class="cta-description">
            Discover the complete photographic collections and immerse yourself 
            in moments of contemplative beauty.
          </p>
          <div class="cta-actions">
            <router-link to="/collections" class="btn btn-primary btn-lg">
              View Call from the Field
            </router-link>
            <router-link to="/about" class="btn btn-outline btn-lg">
              Meet the Artist
            </router-link>
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
  padding: var(--space-24) 0 var(--space-20);
  background: linear-gradient(135deg, #ffffff 0%, #fafafa 50%, #f8f8f8 100%);
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 25% 25%, rgba(0,0,0,0.01) 1px, transparent 1px),
      radial-gradient(circle at 75% 75%, rgba(0,0,0,0.008) 1px, transparent 1px);
    background-size: 60px 60px, 100px 100px;
    pointer-events: none;
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-16);
  align-items: center;
  
  @media (min-width: 768px) {
    grid-template-columns: 1.3fr 1fr;
    gap: var(--space-20);
  }
}

.hero-text {
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 300;
  line-height: 1.1;
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);
}

.hero-accent {
  display: block;
  color: var(--color-accent);
  font-weight: 400;
}

.hero-description {
  font-size: var(--text-lg);
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-8);
  max-width: 500px;
  
  @media (max-width: 767px) {
    margin: 0 auto var(--space-8);
  }
}

.hero-actions {
  display: flex;
  gap: var(--space-4);
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
  display: flex;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
}

.hero-image-container {
  position: relative;
  max-width: 450px;
  width: 100%;
}

.hero-frame {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 
    0 25px 50px -12px rgba(0,0,0,0.15),
    0 0 0 1px rgba(255,255,255,0.9);
  transition: transform var(--transition-slow);
  
  &:hover {
    transform: translateY(-10px) rotateY(5deg);
  }
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform var(--transition-slow);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.overlay-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top, rgba(0,0,0,0.3), transparent);
}

.image-caption {
  position: absolute;
  bottom: var(--space-6);
  left: var(--space-6);
  color: white;
  z-index: 2;
}

.caption-collection {
  display: block;
  font-size: var(--text-lg);
  font-weight: 500;
  margin-bottom: 2px;
}

.caption-subtitle {
  display: block;
  font-size: var(--text-sm);
  opacity: 0.9;
  font-family: 'Noto Sans JP', sans-serif;
}

.hero-frame:hover .hero-image {
  transform: scale(1.05);
}

/* Philosophy Section */
.philosophy {
  padding: var(--space-20) 0;
  background: #ffffff;
}

.philosophy-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: var(--space-12);
  background: rgba(255,255,255,0.9);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0,0,0,0.05);
}

.philosophy-quote {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  line-height: 1.6;
  color: var(--color-text-secondary);
  font-style: italic;
  margin-bottom: var(--space-6);
  font-weight: 300;
}

.philosophy-attribution {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  font-style: normal;
  font-weight: 500;
}

/* Featured Collections */
.collections {
  padding: var(--space-24) 0;
  background: linear-gradient(to bottom, #ffffff, #fafafa);
}

.collections-header {
  text-align: center;
  margin-bottom: var(--space-20);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.collections-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);
}

.collections-subtitle {
  font-size: var(--text-lg);
  line-height: 1.6;
  color: var(--color-text-secondary);
}

.collections-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-16);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-20);
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.collection-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 
    0 20px 40px rgba(0,0,0,0.08),
    0 0 0 1px rgba(0,0,0,0.03);
  transition: all var(--transition-slow);
  animation: slideInUp 0.6s ease-out;
  animation-fill-mode: both;
  
  &.collection-0 { animation-delay: 0s; }
  &.collection-1 { animation-delay: 0.2s; }
  &.collection-2 { animation-delay: 0.4s; }
  
  &:hover {
    transform: translateY(-12px);
    box-shadow: 
      0 30px 60px rgba(0,0,0,0.12),
      0 0 0 1px rgba(0,0,0,0.03);
  }
  
  &.upcoming,
  &.planned {
    opacity: 0.8;
    
    .collection-image {
      filter: grayscale(30%);
    }
  }
}

.collection-visual {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.collection-image {
  position: relative;
  height: 100%;
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.collection-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.2));
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--space-4);
}

.overlay-content {
  opacity: 0;
  transition: opacity var(--transition-base);
}

.collection-card:hover .overlay-content {
  opacity: 1;
}

.collection-card:hover .cover-image {
  transform: scale(1.1);
}

.status-badge {
  padding: var(--space-2) var(--space-4);
  border-radius: 20px;
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  color: white;
  backdrop-filter: blur(10px);
  
  &.published {
    background: rgba(34, 197, 94, 0.8);
  }
  
  &.upcoming {
    background: rgba(251, 191, 36, 0.8);
  }
  
  &.planned {
    background: rgba(156, 163, 175, 0.8);
  }
}

.collection-info {
  padding: var(--space-8);
}

.collection-header {
  margin-bottom: var(--space-6);
}

.collection-type {
  display: inline-block;
  font-size: var(--text-xs);
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  margin-bottom: var(--space-2);
}

.collection-name {
  font-size: var(--text-2xl);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-1);
  line-height: 1.2;
}

.collection-japanese {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  font-family: 'Noto Sans JP', sans-serif;
  opacity: 0.8;
}

.collection-description {
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
}

.collection-meta {
  margin-bottom: var(--space-6);
}

.meta-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-2) 0;
  border-bottom: 1px solid rgba(0,0,0,0.03);
  
  &:last-child {
    border-bottom: none;
  }
}

.meta-label {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  font-weight: 500;
}

.meta-value {
  font-size: var(--text-sm);
  color: var(--color-text-primary);
  font-weight: 600;
}

.collection-action {
  padding-top: var(--space-4);
  border-top: 1px solid rgba(0,0,0,0.03);
}

.view-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 600;
  font-size: var(--text-sm);
  transition: all var(--transition-base);
  
  &:hover {
    color: var(--color-text-primary);
    
    svg {
      transform: translateX(2px);
    }
  }
  
  svg {
    transition: transform var(--transition-base);
  }
}

.coming-soon-btn {
  span {
    color: var(--color-text-muted);
    font-size: var(--text-sm);
    font-weight: 500;
    font-style: italic;
  }
}

/* Process Section */
.process-section {
  padding: var(--space-20) 0;
  background: linear-gradient(to bottom, #ffffff, #fafafa);
}

.process-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-12);
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    gap: var(--space-16);
  }
}

.process-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 300;
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);
}

.process-description {
  font-size: var(--text-lg);
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-8);
}

.process-principles {
  display: grid;
  gap: var(--space-6);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-4);
  }
}

.principle {
  padding: var(--space-4);
  background: rgba(255,255,255,0.8);
  border-radius: 12px;
  border-left: 3px solid var(--color-accent);
}

.principle-title {
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}

.principle-text {
  font-size: var(--text-sm);
  line-height: 1.5;
  color: var(--color-text-secondary);
}

.process-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.visual-elements {
  position: relative;
  width: 200px;
  height: 200px;
}

.element-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  border: 2px solid var(--color-accent);
  border-radius: 50%;
  opacity: 0.3;
  animation: pulse 4s ease-in-out infinite;
}

.element-line {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--color-accent);
  opacity: 0.5;
  transform: translateY(-50%);
}

.element-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: var(--color-accent);
  border-radius: 50%;
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.05);
    opacity: 0.5;
  }
}

@keyframes glow {
  from {
    box-shadow: 0 0 10px var(--color-accent);
    opacity: 0.8;
  }
  to {
    box-shadow: 0 0 20px var(--color-accent);
    opacity: 1;
  }
}

/* Call to Action */
.cta {
  padding: var(--space-20) 0;
  background: linear-gradient(135deg, #fafafa 0%, #ffffff 100%);
  text-align: center;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 300;
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
}

.cta-description {
  font-size: var(--text-lg);
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-8);
}

.cta-actions {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
}

/* Button Styles */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: var(--text-sm);
  transition: all var(--transition-base);
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
  
  &.btn-lg {
    padding: var(--space-4) var(--space-8);
    font-size: var(--text-base);
  }
  
  &.btn-primary {
    background: rgba(99, 102, 241, 0.2);
    color: var(--color-accent);
    border-color: rgba(99, 102, 241, 0.3);
    box-shadow: 
      0 8px 32px rgba(99, 102, 241, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    
    &:hover {
      background: rgba(99, 102, 241, 0.3);
      border-color: rgba(99, 102, 241, 0.4);
      transform: translateY(-3px);
      box-shadow: 
        0 12px 40px rgba(99, 102, 241, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
  }
  
  &.btn-secondary {
    background: rgba(255, 255, 255, 0.15);
    color: var(--color-text-primary);
    border-color: rgba(255, 255, 255, 0.25);
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    
    &:hover {
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.35);
      transform: translateY(-3px);
      box-shadow: 
        0 12px 40px rgba(0, 0, 0, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
  }
  
  &.btn-outline {
    background: rgba(99, 102, 241, 0.1);
    color: var(--color-accent);
    border-color: rgba(99, 102, 241, 0.3);
    box-shadow: 
      0 8px 32px rgba(99, 102, 241, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    
    &:hover {
      background: rgba(99, 102, 241, 0.2);
      border-color: rgba(99, 102, 241, 0.4);
      transform: translateY(-3px);
      box-shadow: 
        0 12px 40px rgba(99, 102, 241, 0.25),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
  }
}

/* Animations */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 767px) {
  .hero {
    padding: var(--space-16) 0 var(--space-12);
    min-height: 60vh;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .collections-grid {
    grid-template-columns: 1fr;
  }
  
  .process-content {
    grid-template-columns: 1fr;
  }
  
  .process-principles {
    grid-template-columns: 1fr;
  }
}
</style>

