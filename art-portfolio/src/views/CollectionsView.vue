<template>
  <div class="collection-view">
    <!-- Hero Section -->
    <section class="collection-hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <div class="text-backdrop"></div>
            <h1 class="collection-title">
              <span class="title-main">Call from the Field</span>
              <span class="title-subtitle">野の呼び声</span>
            </h1>
            <div class="collection-quote">
              <blockquote>
                "In the fields of Kyushu, where ancient rhythms meet eternal skies,<br>
                every blade of grass holds a story of time itself."
              </blockquote>
              <cite>— A meditation on landscape</cite>
            </div>
            <div class="collection-meta">
              <div class="meta-item">
                <span class="meta-icon">📍</span>
                <div>
                  <span class="meta-label">Location</span>
                  <span class="meta-value">Kyushu, Japan</span>
                </div>
              </div>
              <div class="meta-item">
                <span class="meta-icon">📸</span>
                <div>
                  <span class="meta-label">Collection</span>
                  <span class="meta-value">{{ artworks.length }} Photographs</span>
                </div>
              </div>
              <div class="meta-item">
                <span class="meta-icon">🗓</span>
                <div>
                  <span class="meta-label">Year</span>
                  <span class="meta-value">2024</span>
                </div>
              </div>
            </div>
          </div>
          <div class="hero-visual">
            <div class="featured-frame">
              <div class="frame-border"></div>
              <div class="featured-image">
                <img 
                  :src="artworks[0].image" 
                  :alt="artworks[0].title"
                  class="hero-photo"
                />
                <div class="image-overlay">
                  <div class="overlay-gradient"></div>
                </div>
              </div>
              <div class="image-caption">
                <span class="caption-title">{{ artworks[0].title }}</span>
                <span class="caption-text">Opening the collection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Gallery Section -->
    <section class="panoramic-gallery">
      <div class="container">
        <div class="gallery-header">
          <h2 class="gallery-title">Portfolio Collection</h2>
          <div class="gallery-subtitle">Hasselblad XPan • Panoramic Format</div>
        </div>

        <div class="photographs-grid">
          <article
            v-for="(artwork, index) in artworks"
            :key="artwork.id"
            class="photograph-item"
            :class="{ 'reverse-layout': index % 2 === 1 }"
          >
            <!-- Photograph Container -->
            <div class="photograph-container" @click="openLightbox(artwork)">
              <div class="image-frame">
                <img 
                  :src="artwork.image" 
                  :alt="artwork.title"
                  class="panoramic-image"
                />
                <div class="image-number">{{ String(index + 1).padStart(2, '0') }}</div>
              </div>
            </div>

            <!-- Glass Info Box -->
            <div class="info-glass-box">
              <div class="glass-background"></div>
              <div class="info-content">
                <h3 class="artwork-title">{{ artwork.title }}</h3>
                <p class="artwork-description">{{ artwork.description }}</p>
                <div class="artwork-details">
                  <div class="detail-row">
                    <span class="detail-label">File</span>
                    <span class="detail-value">{{ artwork.filename }}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Location</span>
                    <span class="detail-value">{{ artwork.location }}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Format</span>
                    <span class="detail-value">Panoramic 65:24</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Artistic Divider -->
            <div class="artistic-divider" v-if="index < artworks.length - 1">
              <svg class="divider-svg" viewBox="0 0 800 40">
                <defs>
                  <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:rgba(0,0,0,0);stop-opacity:0" />
                    <stop offset="50%" style="stop-color:rgba(0,0,0,0.2);stop-opacity:1" />
                    <stop offset="100%" style="stop-color:rgba(0,0,0,0);stop-opacity:0" />
                  </linearGradient>
                </defs>
                <path d="M0,20 Q200,10 400,20 T800,20" stroke="url(#dividerGradient)" stroke-width="1" fill="none"/>
                <circle cx="400" cy="20" r="2" fill="rgba(0,0,0,0.3)" />
              </svg>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div 
      v-if="lightboxVisible" 
      class="lightbox-overlay" 
      @click="closeLightbox"
      @keydown.esc="closeLightbox"
    >
      <div class="lightbox-container" @click.stop>
        <button class="lightbox-close" @click="closeLightbox">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div class="lightbox-content">
          <div class="lightbox-image">
            <img 
              :src="currentArtwork?.image" 
              :alt="currentArtwork?.title"
            />
          </div>
          
          <div class="lightbox-info">
            <h3 class="lightbox-title">{{ currentArtwork?.title }}</h3>
            <p class="lightbox-description">{{ currentArtwork?.description }}</p>
            <div class="lightbox-meta">
              <span class="meta-item">{{ currentArtwork?.filename }}</span>
              <span class="meta-item">{{ currentArtwork?.location }}</span>
            </div>
          </div>
        </div>
        
        <div class="lightbox-navigation">
          <button 
            class="nav-btn prev-btn" 
            @click="previousImage"
            :disabled="currentIndex === 0"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
          
          <div class="nav-thumbnails">
            <div 
              v-for="(artwork, index) in artworks" 
              :key="artwork.id"
              class="nav-thumb"
              :class="{ active: index === currentIndex }"
              @click="setCurrentImage(index)"
            >
              <img :src="artwork.image" :alt="artwork.title" />
            </div>
          </div>
          
          <button 
            class="nav-btn next-btn" 
            @click="nextImage"
            :disabled="currentIndex === artworks.length - 1"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Artwork {
  id: number
  title: string
  description: string
  image: string
  filename: string
  location: string
}

const artworks = ref<Artwork[]>([
  {
    id: 1,
    title: "Mountain's Call",
    description: "Where earth meets sky in perfect harmony, speaking in the ancient language of stone and cloud.",
    image: "/KyushuJapan/IMG_1715.JPG",
    filename: "IMG_1715.JPG",
    location: "Kyushu, Japan"
  },
  {
    id: 2,
    title: "Field of Dreams",
    description: "Rolling landscapes unfold like memories, each hill a chapter in the story of the land.",
    image: "/KyushuJapan/IMG_0011.JPG",
    filename: "IMG_0011.JPG",
    location: "Kyushu, Japan"
  },
  {
    id: 3,
    title: "Sacred Landscape",
    description: "In this moment, the ordinary becomes extraordinary, revealing the sacred hidden in plain sight.",
    image: "/KyushuJapan/IMG_0012.JPG",
    filename: "IMG_0012.JPG",
    location: "Kyushu, Japan"
  },
  {
    id: 4,
    title: "Whispers of the Valley",
    description: "The valley holds secrets whispered by wind through grass, stories only the patient heart can hear.",
    image: "/KyushuJapan/IMG_0013.JPG",
    filename: "IMG_0013.JPG",
    location: "Kyushu, Japan"
  },
  {
    id: 5,
    title: "Horizon's Promise",
    description: "Where the horizon meets hope, infinite possibilities stretch beyond the visible world.",
    image: "/KyushuJapan/IMG_0014.JPG",
    filename: "IMG_0014.JPG",
    location: "Kyushu, Japan"
  },
  {
    id: 6,
    title: "Golden Hour Meditation",
    description: "In the golden hour, light becomes prayer, transforming the landscape into cathedral.",
    image: "/KyushuJapan/IMG_0015.JPG",
    filename: "IMG_0015.JPG",
    location: "Kyushu, Japan"
  },
  {
    id: 7,
    title: "Silent Witness",
    description: "Standing as a silent witness to time's passage, this moment captures eternity in a single frame.",
    image: "/KyushuJapan/IMG_0016.JPG",
    filename: "IMG_0016.JPG",
    location: "Kyushu, Japan"
  }
])

const lightboxVisible = ref(false)
const currentIndex = ref(0)

const currentArtwork = computed(() => artworks.value[currentIndex.value])

const openLightbox = (artwork: Artwork) => {
  currentIndex.value = artworks.value.findIndex(a => a.id === artwork.id)
  lightboxVisible.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxVisible.value = false
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  if (currentIndex.value < artworks.value.length - 1) {
    currentIndex.value++
  }
}

const previousImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const setCurrentImage = (index: number) => {
  currentIndex.value = index
}

const handleKeydown = (event: KeyboardEvent) => {
  if (!lightboxVisible.value) return
  
  switch (event.key) {
    case 'Escape':
      closeLightbox()
      break
    case 'ArrowLeft':
      previousImage()
      break
    case 'ArrowRight':
      nextImage()
      break
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'auto'
})
</script>

<style scoped lang="scss">
// Main container
.collection-view {
  min-height: 100vh;
  background: #fafafa;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
}

// Hero Section Styles
.collection-hero {
  padding: var(--space-24) 0 var(--space-20);
  background: linear-gradient(135deg, #fafafa 0%, #f8f8f8 50%, #f5f5f5 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(0,0,0,0.02) 1px, transparent 1px),
      radial-gradient(circle at 80% 80%, rgba(0,0,0,0.015) 1px, transparent 1px);
    background-size: 50px 50px, 80px 80px;
    z-index: 1;
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
  position: relative;
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
}

.text-backdrop {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: rgba(255,255,255,0.3);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  z-index: -1;
}

.collection-title {
  margin-bottom: var(--space-8);
}

.title-main {
  display: block;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 300;
  line-height: 1;
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}

.title-subtitle {
  display: block;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-weight: 400;
  color: var(--color-accent);
  font-family: 'Noto Sans JP', sans-serif;
  opacity: 0.8;
}

.collection-quote {
  margin: var(--space-8) 0;
  padding: var(--space-6);
  background: rgba(255,255,255,0.5);
  border-left: 3px solid var(--color-accent);
  border-radius: 0 10px 10px 0;
  
  blockquote {
    font-size: var(--text-lg);
    line-height: 1.6;
    color: var(--color-text-secondary);
    font-style: italic;
    margin-bottom: var(--space-3);
  }
  
  cite {
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    font-style: normal;
    font-weight: 500;
  }
}

.collection-meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--space-4);
  margin-top: var(--space-8);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  background: rgba(255,255,255,0.6);
  border-radius: 12px;
  backdrop-filter: blur(5px);
}

.meta-icon {
  font-size: 1.2rem;
  opacity: 0.7;
}

.meta-label {
  display: block;
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

.meta-value {
  display: block;
  font-size: var(--text-sm);
  color: var(--color-text-primary);
  font-weight: 600;
  margin-top: 2px;
}

.hero-visual {
  display: flex;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
}

.featured-frame {
  position: relative;
  max-width: 400px;
  width: 100%;
}

.frame-border {
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  border: 2px solid rgba(0,0,0,0.1);
  border-radius: 20px;
  z-index: 1;
}

.featured-image {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 
    0 25px 50px -12px rgba(0,0,0,0.25),
    0 0 0 1px rgba(255,255,255,0.5);
}

.hero-photo {
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
  pointer-events: none;
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
  bottom: var(--space-4);
  left: var(--space-4);
  right: var(--space-4);
  color: white;
  z-index: 2;
}

.caption-title {
  display: block;
  font-size: var(--text-lg);
  font-weight: 500;
  margin-bottom: 2px;
}

.caption-text {
  display: block;
  font-size: var(--text-sm);
  opacity: 0.9;
}

.featured-frame:hover .hero-photo {
  transform: scale(1.05);
}

// Panoramic Gallery Section
.panoramic-gallery {
  padding: var(--space-24) 0;
  background: white;
}

.gallery-header {
  text-align: center;
  margin-bottom: var(--space-20);
  padding-bottom: var(--space-8);
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.gallery-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
  letter-spacing: -0.02em;
}

.gallery-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  font-weight: 400;
  font-style: italic;
}

// Photographs Grid
.photographs-grid {
  max-width: 1200px;
  margin: 0 auto;
}

.photograph-item {
  margin-bottom: var(--space-24);
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-12);
  align-items: center;

  &.reverse-layout {
    grid-template-columns: 1fr 2fr;
    
    .photograph-container {
      order: 2;
    }
    
    .info-glass-box {
      order: 1;
    }
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: var(--space-8);
    text-align: center;
    
    &.reverse-layout {
      grid-template-columns: 1fr;
      
      .photograph-container,
      .info-glass-box {
        order: initial;
      }
    }
  }
}

// Photograph Container
.photograph-container {
  position: relative;
  cursor: pointer;
  transition: transform var(--transition-base);

  &:hover {
    transform: translateY(-5px);
    
    .image-frame {
      box-shadow: 0 30px 60px rgba(0,0,0,0.15);
    }
  }
}

.image-frame {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  transition: box-shadow var(--transition-base);
}

.panoramic-image {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 65/24; // Hasselblad XPan ratio
  object-fit: cover;
}

.image-number {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(255,255,255,0.9);
  color: #000;
  padding: 0.5rem 0.8rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  z-index: 2;
}

// Glass Info Box
.info-glass-box {
  position: relative;
  height: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
}

.glass-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 16px;
  box-shadow: 
    0 8px 32px rgba(0,0,0,0.1),
    inset 0 1px 0 rgba(255,255,255,0.5);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 1px, transparent 1px),
      radial-gradient(circle at 70% 70%, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 20px 20px, 40px 40px;
    border-radius: inherit;
  }
}

.info-content {
  position: relative;
  z-index: 2;
  padding: var(--space-8);
  width: 100%;
}

.artwork-title {
  font-size: var(--text-2xl);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
  line-height: 1.2;
}

.artwork-description {
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
  font-style: italic;
}

.artwork-details {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--space-2);
  border-bottom: 1px solid rgba(0,0,0,0.1);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
}

.detail-label {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.detail-value {
  font-size: var(--text-sm);
  color: var(--color-text-primary);
  font-weight: 600;
  font-family: 'Monaco', 'Menlo', monospace;
}

// Artistic Divider
.artistic-divider {
  grid-column: 1 / -1;
  margin: var(--space-16) 0;
  display: flex;
  justify-content: center;
}

.divider-svg {
  width: 100%;
  max-width: 800px;
  height: 40px;
  opacity: 0.7;
}

// Lightbox Styles (keeping existing)
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.lightbox-container {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
}

.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: scale(1.1);
  }
}

.lightbox-content {
  display: flex;
  max-height: 70vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.lightbox-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
}

.lightbox-info {
  width: 300px;
  padding: 2rem;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }

  .lightbox-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
    color: #333;
  }

  .lightbox-description {
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
    margin: 0 0 1.5rem 0;
  }

  .lightbox-meta {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .meta-item {
      font-size: 0.9rem;
      color: #999;
    }
  }
}

.lightbox-navigation {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background: #f8f9fa;
  border-top: 1px solid #eee;

  .nav-btn {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.25);
      transform: translateY(-2px);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .nav-thumbnails {
    flex: 1;
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    padding: 0 1rem;

    .nav-thumb {
      width: 60px;
      height: 40px;
      border-radius: 4px;
      overflow: hidden;
      cursor: pointer;
      border: 2px solid transparent;
      transition: border-color 0.2s ease;

      &.active {
        border-color: #007bff;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

// Print Styles
@media print {
  .panoramic-gallery {
    background: white !important;
    color: black !important;
    padding: 0.5in;
  }

  .lightbox-overlay {
    display: none !important;
  }

  .photograph-item {
    page-break-inside: avoid;
    margin-bottom: 1in;
  }

  .glass-background {
    background: rgba(0,0,0,0.05) !important;
    border: 1px solid rgba(0,0,0,0.2) !important;
    backdrop-filter: none !important;
  }
}
</style> 