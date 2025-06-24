<template>
  <div class="gallery-view zen-fade-in">
    <!-- Gallery Header -->
    <section class="gallery-header">
      <div class="container">
        <div class="header-content">
          <h1 class="gallery-title">Collections</h1>
          <p class="gallery-subtitle">
            Curated photographic series exploring themes of landscape, mindfulness, and the relationship between human and nature
          </p>
        </div>
      </div>
    </section>

    <!-- Collections Grid -->
    <section class="collections-section">
      <div class="container">
        <div class="collections-grid">
          <!-- Call from the Field Collection -->
          <article class="collection-card featured-collection">
            <div class="collection-hero">
              <div class="hero-images">
                <div class="main-image">
                  <img 
                    :src="callFromFieldCollection.coverImage" 
                    :alt="callFromFieldCollection.title"
                    class="cover-image"
                  />
                  <div class="image-overlay">
                    <div class="overlay-gradient"></div>
                  </div>
                </div>
                <div class="preview-grid">
                  <div 
                    v-for="(image, index) in callFromFieldCollection.previewImages.slice(0, 3)"
                    :key="index"
                    class="preview-item"
                  >
                    <img :src="image.src" :alt="image.alt" class="preview-image" />
                  </div>
                </div>
              </div>
              
              <div class="collection-content">
                <div class="collection-header">
                  <span class="collection-badge">{{ callFromFieldCollection.type }}</span>
                  <h2 class="collection-title">{{ callFromFieldCollection.title }}</h2>
                  <p class="collection-subtitle">{{ callFromFieldCollection.subtitle }}</p>
                </div>
                
                <p class="collection-description">{{ callFromFieldCollection.description }}</p>
                
                <div class="collection-meta">
                  <div class="meta-item">
                    <span class="meta-label">Location</span>
                    <span class="meta-value">{{ callFromFieldCollection.location }}</span>
                  </div>
                  <div class="meta-item">
                    <span class="meta-label">Images</span>
                    <span class="meta-value">{{ callFromFieldCollection.imageCount }}</span>
                  </div>
                  <div class="meta-item">
                    <span class="meta-label">Year</span>
                    <span class="meta-value">{{ callFromFieldCollection.year }}</span>
                  </div>
                </div>
                
                <router-link 
                  to="/collections" 
                  class="view-collection-btn"
                >
                  Explore Collection
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </router-link>
              </div>
            </div>
          </article>

          <!-- Upcoming Collections Placeholder -->
          <article class="collection-card upcoming-collection">
            <div class="upcoming-content">
              <div class="upcoming-visual">
                <div class="coming-soon-circle">
                  <div class="circle-inner">
                    <span class="coming-soon-text">Coming<br/>Soon</span>
                  </div>
                </div>
              </div>
              
              <div class="upcoming-info">
                <h3 class="upcoming-title">Urban Contemplations</h3>
                <p class="upcoming-description">
                  A forthcoming series exploring moments of stillness and reflection within the bustling urban landscape
                </p>
                <div class="upcoming-meta">
                  <span class="upcoming-status">In Development</span>
                  <span class="upcoming-year">2024</span>
                </div>
              </div>
            </div>
          </article>

          <article class="collection-card upcoming-collection">
            <div class="upcoming-content">
              <div class="upcoming-visual">
                <div class="coming-soon-circle">
                  <div class="circle-inner">
                    <span class="coming-soon-text">Coming<br/>Soon</span>
                  </div>
                </div>
              </div>
              
              <div class="upcoming-info">
                <h3 class="upcoming-title">Seasons of Solitude</h3>
                <p class="upcoming-description">
                  Four seasons captured through the lens of introspection, documenting the cyclical nature of both earth and soul
                </p>
                <div class="upcoming-meta">
                  <span class="upcoming-status">Planned</span>
                  <span class="upcoming-year">2025</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Collection Process -->
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Collection {
  id: string
  title: string
  subtitle: string
  description: string
  type: string
  location: string
  year: string
  imageCount: number
  coverImage: string
  previewImages: Array<{ src: string; alt: string }>
  status: 'published' | 'upcoming' | 'planned'
}

// Call from the Field Collection Data
const callFromFieldCollection = ref<Collection>({
  id: 'call-from-the-field',
  title: 'Call from the Field',
  subtitle: '野の呼び声',
  description: 'A photographic journey through the rural landscapes of Kyushu, Japan, where ancient rhythms meet eternal skies. Each image captures the profound connection between land and spirit that defines these sacred spaces.',
  type: 'Photography Series',
  location: 'Kyushu, Japan',
  year: '2024',
  imageCount: 7,
  coverImage: '/KyushuJapan/IMG_0012.JPG',
  previewImages: [
    { src: '/KyushuJapan/IMG_1715.JPG', alt: "Mountain's Call" },
    { src: '/KyushuJapan/IMG_0011.JPG', alt: 'Field of Dreams' },
    { src: '/KyushuJapan/IMG_0015.JPG', alt: 'Golden Hour Meditation' }
  ],
  status: 'published'
})
</script>

<style lang="scss" scoped>
.gallery-view {
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  background: var(--color-background);
}

/* Gallery Header */
.gallery-header {
  padding: var(--space-20) 0 var(--space-16);
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
}

.header-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.gallery-title {
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 300;
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
}

.gallery-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

/* Collections Section */
.collections-section {
  padding: var(--space-20) 0;
}

.collections-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-12);
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-16);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
}

/* Featured Collection Card */
.collection-card {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 
    0 20px 40px rgba(0,0,0,0.1),
    0 0 0 1px rgba(0,0,0,0.05);
  transition: all var(--transition-slow);
  background: white;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 
      0 30px 60px rgba(0,0,0,0.15),
      0 0 0 1px rgba(0,0,0,0.05);
  }
}

.featured-collection {
  @media (min-width: 1024px) {
    grid-row: span 2;
  }
}

.collection-hero {
  position: relative;
}

.hero-images {
  position: relative;
  height: 400px;
  
  @media (min-width: 1024px) {
    height: 500px;
  }
}

.main-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
}

.overlay-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70%;
  background: linear-gradient(
    to top,
    rgba(0,0,0,0.8) 0%,
    rgba(0,0,0,0.4) 50%,
    transparent 100%
  );
}

.preview-grid {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.preview-item {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid rgba(255,255,255,0.8);
  backdrop-filter: blur(5px);
  transition: all var(--transition-base);
  
  &:hover {
    transform: scale(1.1);
    border-color: white;
  }
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.collection-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
  padding: var(--space-8);
  color: white;
}

.collection-header {
  margin-bottom: var(--space-6);
}

.collection-badge {
  display: inline-block;
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(10px);
  padding: var(--space-1) var(--space-3);
  border-radius: 20px;
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
  margin-bottom: var(--space-3);
}

.collection-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: var(--space-2);
}

.collection-subtitle {
  font-size: var(--text-lg);
  opacity: 0.9;
  font-family: 'Noto Sans JP', sans-serif;
}

.collection-description {
  font-size: var(--text-base);
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: var(--space-6);
  max-width: 400px;
}

.collection-meta {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  margin-bottom: var(--space-6);
  
  @media (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-2);
  }
}

.meta-item {
  text-align: center;
  
  @media (max-width: 767px) {
    text-align: left;
  }
}

.meta-label {
  display: block;
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.7;
  margin-bottom: 2px;
}

.meta-value {
  display: block;
  font-size: var(--text-sm);
  font-weight: 500;
}

.view-collection-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.3);
  color: white;
  padding: var(--space-3) var(--space-6);
  border-radius: 30px;
  font-size: var(--text-sm);
  font-weight: 500;
  text-decoration: none;
  transition: all var(--transition-base);
  
  &:hover {
    background: rgba(255,255,255,0.3);
    transform: translateY(-2px);
  }
  
  svg {
    transition: transform var(--transition-base);
  }
  
  &:hover svg {
    transform: translateX(2px);
  }
}

.featured-collection:hover .cover-image {
  transform: scale(1.05);
}

/* Upcoming Collections */
.upcoming-collection {
  background: linear-gradient(135deg, #f8f9fa 0%, #f1f3f4 100%);
  border: 2px dashed rgba(0,0,0,0.1);
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.upcoming-content {
  text-align: center;
  padding: var(--space-6);
  width: 100%;
}

.upcoming-visual {
  margin-bottom: var(--space-6);
  display: flex;
  justify-content: center;
}

.coming-soon-circle {
  width: 100px;
  height: 100px;
  border: 2px solid rgba(0,0,0,0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 2px solid transparent;
    border-top-color: var(--color-accent);
    border-radius: 50%;
    animation: spin 3s linear infinite;
  }
}

.circle-inner {
  width: 80px;
  height: 80px;
  background: rgba(255,255,255,0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.coming-soon-text {
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.2;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.upcoming-title {
  font-size: var(--text-xl);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
}

.upcoming-description {
  font-size: var(--text-sm);
  line-height: 1.5;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
}

.upcoming-meta {
  display: flex;
  justify-content: center;
  gap: var(--space-4);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.upcoming-status {
  color: var(--color-accent);
  font-weight: 600;
}

.upcoming-year {
  color: var(--color-text-muted);
  font-weight: 500;
}

/* Process Section */
.process-section {
  padding: var(--space-20) 0;
  background: linear-gradient(to bottom, var(--color-background), #fafafa);
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
  background: rgba(255,255,255,0.6);
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

/* Responsive Design */
@media (max-width: 767px) {
  .collections-grid {
    grid-template-columns: 1fr;
  }
  
  .featured-collection {
    grid-row: auto;
  }
  
  .hero-images {
    height: 300px;
  }
  
  .collection-content {
    padding: var(--space-6);
  }
  
  .collection-meta {
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }
  
  .meta-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-2) 0;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    
    &:last-child {
      border-bottom: none;
    }
  }
  
  .meta-label,
  .meta-value {
    display: inline;
  }
  
  .process-principles {
    grid-template-columns: 1fr;
  }
}

/* Animation Enhancements */
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

.collection-card {
  animation: slideInUp 0.6s ease-out;
  animation-fill-mode: both;
  
  &:nth-child(1) { animation-delay: 0s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }
}

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
</style> 