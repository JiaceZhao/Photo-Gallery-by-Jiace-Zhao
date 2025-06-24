<template>
  <div class="collection-view">
    <!-- Artistic Hero Section -->
    <section class="collection-hero">
      <div class="hero-background">
        <div class="background-texture"></div>
        <div class="floating-elements">
          <div class="element element-1"></div>
          <div class="element element-2"></div>
          <div class="element element-3"></div>
        </div>
      </div>
      
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

    <!-- Artist Statement -->
    <section class="artist-statement">
      <div class="container">
        <div class="statement-content">
          <div class="statement-text">
            <h2 class="statement-title">The Sacred in the Everyday</h2>
            <p class="statement-body">
              This collection emerged from countless mornings spent walking through the rural landscapes 
              of Kyushu, where the boundary between the cultivated and the wild dissolves into something 
              profoundly contemplative. Each photograph preserves a moment when light, land, and silence 
              converged to reveal the sacred hidden within the everyday.
            </p>
            <p class="statement-body">
              The fields here are not merely agricultural spaces, but meditation grounds where centuries 
              of human care have created a harmony between intention and nature. These images invite 
              viewers to slow down, to breathe, and to discover their own relationship with the landscape.
            </p>
          </div>
          <div class="statement-visual">
            <div class="zen-circle">
              <div class="circle-inner"></div>
              <div class="circle-reflection"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Artistic Gallery -->
    <section class="collection-gallery">
      <div class="container">
        <h2 class="gallery-title">The Complete Journey</h2>
        <div class="artworks-flow">
          <article
            v-for="(artwork, index) in artworks"
            :key="artwork.id"
            :class="['artwork-frame', `frame-${index % 3}`]"
            @click="openLightbox(artwork)"
          >
            <div class="frame-container">
              <div class="frame-shadow"></div>
              <div class="artwork-border">
                <div class="image-container">
                  <img 
                    :src="artwork.image" 
                    :alt="artwork.title"
                    class="artwork-image"
                    :style="{ aspectRatio: 'auto' }"
                  />
                  <div class="hover-overlay">
                    <div class="overlay-content">
                      <h3 class="artwork-title">{{ artwork.title }}</h3>
                      <p class="artwork-number">{{ String(index + 1).padStart(2, '0') }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="artwork-info">
                <h3 class="info-title">{{ artwork.title }}</h3>
                <p class="info-description">{{ artwork.description }}</p>
                <div class="info-details">
                  <span class="detail-number">{{ String(index + 1).padStart(2, '0') }}</span>
                  <span class="detail-separator">•</span>
                  <span class="detail-filename">{{ artwork.filename }}</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Enhanced Lightbox Modal -->
    <div v-if="selectedArtwork" class="lightbox-overlay" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <div class="lightbox-background">
          <div class="bg-texture"></div>
        </div>
        
        <button class="lightbox-close" @click="closeLightbox">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <!-- Navigation -->
        <div class="lightbox-nav">
          <button 
            @click="previousImage" 
            :disabled="currentImageIndex === 0"
            class="nav-button nav-prev"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
          
          <div class="image-counter">
            <span class="current">{{ String(currentImageIndex + 1).padStart(2, '0') }}</span>
            <span class="separator">/</span>
            <span class="total">{{ String(artworks.length).padStart(2, '0') }}</span>
          </div>
          
          <button 
            @click="nextImage" 
            :disabled="currentImageIndex === artworks.length - 1"
            class="nav-button nav-next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </div>

        <!-- Main Image with Original Dimensions -->
        <div class="lightbox-image">
          <div class="image-frame">
            <img 
              :src="selectedArtwork.image" 
              :alt="selectedArtwork.title"
              class="lightbox-photo"
              :style="{ maxWidth: '100%', height: 'auto' }"
            />
          </div>
        </div>

        <!-- Enhanced Image Info -->
        <div class="lightbox-info">
          <div class="info-main">
            <h2 class="lightbox-title">{{ selectedArtwork.title }}</h2>
            <p class="lightbox-description">{{ selectedArtwork.description }}</p>
          </div>
          <div class="info-meta">
            <div class="meta-group">
              <span class="meta-label">Location</span>
              <span class="meta-value">{{ selectedArtwork.location }}</span>
            </div>
            <div class="meta-group">
              <span class="meta-label">Year</span>
              <span class="meta-value">{{ selectedArtwork.year }}</span>
            </div>
            <div class="meta-group">
              <span class="meta-label">File</span>
              <span class="meta-value">{{ selectedArtwork.filename }}</span>
            </div>
          </div>
        </div>

        <!-- Elegant Thumbnail Navigation -->
        <div class="thumbnail-nav">
          <div class="thumbnails-container">
            <div
              v-for="(artwork, index) in artworks"
              :key="artwork.id"
              :class="['thumbnail', { active: index === currentImageIndex }]"
              @click="goToImage(index)"
            >
              <div class="thumbnail-frame">
                <img :src="artwork.image" :alt="artwork.title" class="thumbnail-image" />
                <div class="thumbnail-overlay">
                  <span class="thumbnail-number">{{ String(index + 1).padStart(2, '0') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Artwork {
  id: number
  title: string
  filename: string
  image: string
  description: string
  location: string
  year: string
}

const selectedArtwork = ref<Artwork | null>(null)
const currentImageIndex = ref(0)

// Using the actual KyushuJapan photos
const artworks = ref<Artwork[]>([
  {
    id: 1,
    title: "Mountain's Call",
    filename: "IMG_1715.JPG",
    image: "/KyushuJapan/IMG_1715.JPG",
    description: "The ancient mountains of Kyushu speak in whispers of wind and stone, calling to those who listen with patient hearts.",
    location: "Kyushu, Japan",
    year: "2024"
  },
  {
    id: 2,
    title: "Field of Dreams",
    filename: "IMG_0011.JPG", 
    image: "/KyushuJapan/IMG_0011.JPG",
    description: "Green fields stretch endlessly, each blade of grass a note in nature's symphony of growth and renewal.",
    location: "Kyushu, Japan",
    year: "2024"
  },
  {
    id: 3,
    title: "Sacred Landscape",
    filename: "IMG_0012.JPG",
    image: "/KyushuJapan/IMG_0012.JPG", 
    description: "Where earth meets sky, the sacred and mundane dissolve into a single moment of profound beauty.",
    location: "Kyushu, Japan",
    year: "2024"
  },
  {
    id: 4,
    title: "Whispers of the Valley",
    filename: "IMG_0013.JPG",
    image: "/KyushuJapan/IMG_0013.JPG",
    description: "In the valley's embrace, stories of countless seasons echo through mist and morning light.",
    location: "Kyushu, Japan", 
    year: "2024"
  },
  {
    id: 5,
    title: "Horizon's Promise",
    filename: "IMG_0014.JPG",
    image: "/KyushuJapan/IMG_0014.JPG",
    description: "The horizon holds promises of tomorrow, painted in the soft hues of endless possibility.",
    location: "Kyushu, Japan",
    year: "2024"
  },
  {
    id: 6,
    title: "Golden Hour Meditation",
    filename: "IMG_0015.JPG",
    image: "/KyushuJapan/IMG_0015.JPG",
    description: "As day surrenders to dusk, the golden hour invites contemplation of time's gentle passage.",
    location: "Kyushu, Japan",
    year: "2024"
  },
  {
    id: 7,
    title: "Silent Witness",
    filename: "IMG_0016.JPG",
    image: "/KyushuJapan/IMG_0016.JPG",
    description: "Standing as silent witness to the eternal dance between earth and heavens, timeless and serene.",
    location: "Kyushu, Japan",
    year: "2024"
  }
])

const openLightbox = (artwork: Artwork) => {
  selectedArtwork.value = artwork
  currentImageIndex.value = artworks.value.findIndex(work => work.id === artwork.id)
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  selectedArtwork.value = null
  document.body.style.overflow = 'auto'
}

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
    selectedArtwork.value = artworks.value[currentImageIndex.value]
  }
}

const nextImage = () => {
  if (currentImageIndex.value < artworks.value.length - 1) {
    currentImageIndex.value++
    selectedArtwork.value = artworks.value[currentImageIndex.value]
  }
}

const goToImage = (index: number) => {
  currentImageIndex.value = index
  selectedArtwork.value = artworks.value[index]
}

// Keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
  if (!selectedArtwork.value) return
  
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
})
</script>

<style lang="scss" scoped>
.collection-view {
  min-height: 100vh;
  background: var(--color-background);
}

/* Artistic Hero Section */
.collection-hero {
  position: relative;
  padding: var(--space-24) 0 var(--space-20);
  background: linear-gradient(135deg, #fafafa 0%, #f8f8f8 50%, #f5f5f5 100%);
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.background-texture {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(0,0,0,0.02) 1px, transparent 1px),
    radial-gradient(circle at 80% 80%, rgba(0,0,0,0.015) 1px, transparent 1px);
  background-size: 50px 50px, 80px 80px;
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.element {
  position: absolute;
  border-radius: 50%;
  background: rgba(0,0,0,0.01);
  animation: float 20s ease-in-out infinite;
  
  &.element-1 {
    width: 300px;
    height: 300px;
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }
  
  &.element-2 {
    width: 200px;
    height: 200px;
    top: 60%;
    right: 15%;
    animation-delay: -7s;
  }
  
  &.element-3 {
    width: 150px;
    height: 150px;
    bottom: 20%;
    left: 60%;
    animation-delay: -14s;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(120deg); }
  66% { transform: translateY(10px) rotate(240deg); }
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

/* Artist Statement */
.artist-statement {
  padding: var(--space-20) 0;
  background: var(--color-background);
}

.statement-content {
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

.statement-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 300;
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);
}

.statement-body {
  font-size: var(--text-lg);
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
  
  &:last-child {
    margin-bottom: 0;
  }
}

.statement-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.zen-circle {
  position: relative;
  width: 200px;
  height: 200px;
  border: 2px solid rgba(0,0,0,0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle-inner {
  width: 100px;
  height: 100px;
  background: var(--color-accent);
  border-radius: 50%;
  opacity: 0.8;
  animation: pulse 4s ease-in-out infinite;
}

.circle-reflection {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 50px;
  height: 50px;
  background: rgba(255,255,255,0.3);
  border-radius: 50%;
  filter: blur(10px);
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 0.6; }
}

/* Artistic Gallery */
.collection-gallery {
  padding: var(--space-20) 0;
  background: linear-gradient(to bottom, var(--color-background), #fafafa);
}

.gallery-title {
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 300;
  color: var(--color-text-primary);
  margin-bottom: var(--space-16);
}

.artworks-flow {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-16);
  max-width: 800px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    gap: var(--space-20);
  }
}

.artwork-frame {
  cursor: pointer;
  transition: all var(--transition-slow);
  
  &.frame-0 {
    transform: translateX(0);
  }
  
  &.frame-1 {
    transform: translateX(20px);
    
    @media (min-width: 768px) {
      transform: translateX(40px);
    }
  }
  
  &.frame-2 {
    transform: translateX(-20px);
    
    @media (min-width: 768px) {
      transform: translateX(-40px);
    }
  }
  
  &:hover {
    transform: translateX(0) translateY(-10px);
  }
}

.frame-container {
  position: relative;
}

.frame-shadow {
  position: absolute;
  top: 20px;
  left: 20px;
  right: -10px;
  bottom: -10px;
  background: rgba(0,0,0,0.1);
  border-radius: 15px;
  filter: blur(20px);
  z-index: 1;
}

.artwork-border {
  position: relative;
  z-index: 2;
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 
    0 10px 30px rgba(0,0,0,0.1),
    0 0 0 1px rgba(0,0,0,0.05);
}

.image-container {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background: #f5f5f5;
}

.artwork-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform var(--transition-base);
}

.hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-base);
}

.overlay-content {
  text-align: center;
  color: white;
}

.artwork-title {
  font-size: var(--text-xl);
  font-weight: 500;
  margin-bottom: var(--space-2);
}

.artwork-number {
  font-size: var(--text-lg);
  font-weight: 300;
  opacity: 0.8;
}

.artwork-frame:hover .hover-overlay {
  opacity: 1;
}

.artwork-frame:hover .artwork-image {
  transform: scale(1.05);
}

.artwork-info {
  padding: var(--space-6) 0 0;
}

.info-title {
  font-size: var(--text-xl);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
}

.info-description {
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
}

.info-details {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.detail-number {
  font-weight: 600;
  color: var(--color-accent);
}

.detail-separator {
  opacity: 0.5;
}

.detail-filename {
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: var(--text-xs);
}

/* Enhanced Lightbox */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.95);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--space-4);
}

.lightbox-content {
  position: relative;
  width: 100%;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lightbox-background {
  position: absolute;
  top: -50px;
  left: -50px;
  right: -50px;
  bottom: -50px;
  z-index: -1;
}

.bg-texture {
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 30% 40%, rgba(255,255,255,0.02) 1px, transparent 1px),
    radial-gradient(circle at 70% 70%, rgba(255,255,255,0.015) 1px, transparent 1px);
  background-size: 60px 60px, 100px 100px;
}

.lightbox-close {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  z-index: 10;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
  color: white;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-base);
  
  &:hover {
    background: rgba(255,255,255,0.2);
    transform: scale(1.1);
  }
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--space-4);
  z-index: 5;
  pointer-events: none;
}

.nav-button {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-base);
  pointer-events: auto;
  
  &:hover:not(:disabled) {
    background: rgba(255,255,255,0.2);
    transform: scale(1.1);
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
}

.image-counter {
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(10px);
  padding: var(--space-2) var(--space-4);
  border-radius: 20px;
  font-size: var(--text-sm);
  color: white;
  font-weight: 500;
  pointer-events: auto;
  
  .separator {
    margin: 0 var(--space-1);
    opacity: 0.5;
  }
}

.lightbox-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--space-8) 0;
}

.image-frame {
  position: relative;
  max-width: 100%;
  max-height: 70vh;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 
    0 25px 50px -12px rgba(0,0,0,0.5),
    0 0 0 1px rgba(255,255,255,0.1);
}

.lightbox-photo {
  display: block;
  max-width: 100%;
  max-height: 70vh;
  width: auto;
  height: auto;
}

.lightbox-info {
  text-align: center;
  color: white;
  max-width: 600px;
  margin-bottom: var(--space-6);
}

.info-main {
  margin-bottom: var(--space-4);
}

.lightbox-title {
  font-size: var(--text-2xl);
  font-weight: 500;
  margin-bottom: var(--space-3);
}

.lightbox-description {
  font-size: var(--text-base);
  line-height: 1.6;
  opacity: 0.9;
}

.info-meta {
  display: flex;
  justify-content: center;
  gap: var(--space-6);
  flex-wrap: wrap;
}

.meta-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.meta-label {
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.7;
  margin-bottom: 2px;
}

.meta-value {
  font-size: var(--text-sm);
  font-weight: 500;
}

.thumbnail-nav {
  width: 100%;
  max-width: 600px;
}

.thumbnails-container {
  display: flex;
  gap: var(--space-2);
  justify-content: center;
  overflow-x: auto;
  padding: var(--space-2);
}

.thumbnail {
  flex-shrink: 0;
  cursor: pointer;
  transition: all var(--transition-base);
  
  &.active {
    transform: scale(1.1);
  }
}

.thumbnail-frame {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid transparent;
  transition: border-color var(--transition-base);
}

.thumbnail.active .thumbnail-frame {
  border-color: white;
}

.thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnail-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-base);
}

.thumbnail-number {
  color: white;
  font-size: var(--text-xs);
  font-weight: 500;
}

.thumbnail:hover .thumbnail-overlay {
  opacity: 1;
}

/* Responsive Design */
@media (max-width: 767px) {
  .lightbox-nav {
    position: static;
    margin-bottom: var(--space-4);
    padding: 0;
    pointer-events: auto;
  }
  
  .nav-button {
    width: 40px;
    height: 40px;
  }
  
  .lightbox-image {
    margin: var(--space-4) 0;
  }
  
  .image-frame {
    max-height: 50vh;
  }
  
  .thumbnails-container {
    gap: var(--space-1);
  }
  
  .thumbnail-frame {
    width: 50px;
    height: 50px;
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

.artwork-frame {
  animation: slideInUp 0.6s ease-out;
  animation-fill-mode: both;
  
  @for $i from 1 through 7 {
    &:nth-child(#{$i}) {
      animation-delay: #{($i - 1) * 0.1}s;
    }
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px) translateX(var(--offset, 0));
  }
  to {
    opacity: 1;
    transform: translateY(0) translateX(var(--offset, 0));
  }
}
</style> 