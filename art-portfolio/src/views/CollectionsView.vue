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
                "In the fields of Asū, Kyushu, escaping from the rumbustious city,<br>
                I found the call from the field, the inner piece."
              </blockquote>
              <cite>— Jiace Zhao ｜ 赵嘉策</cite>
            </div>
            <div class="collection-meta">
              <div class="meta-item">
                <span class="meta-icon">📍</span>
                <div>
                  <span class="meta-label">Location</span>
                  <span class="meta-value">Asū, Kyushu, Japan</span>
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
                  <span class="meta-value">Jan, 2024</span>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>

    <!-- Zen Gallery Section -->
    <section class="zen-gallery">
      <div class="gallery-flow">
        <!-- Minimalist Header -->
        <div class="zen-header">
          <div class="header-line"></div>
          <h2 class="zen-title">Nine Moments</h2>
          <p class="zen-subtitle">Asū, Kyushu, Japan • Jan, 2024</p>
          <div class="header-line"></div>
        </div>

                <!-- Photo Stream -->
        <div class="photo-stream">
          <template v-for="(group, groupIndex) in groupedArtworks" :key="`group-${groupIndex}`">
            <!-- Single Panoramic Image -->
            <div
              v-if="group.type === 'single'"
              class="photo-moment"
              @click="openLightbox(group.artworks[0])"
            >
              <div class="photo-container">
                <div class="photo-frame">
                  <img 
                    :src="group.artworks[0].image" 
                    :alt="group.artworks[0].title"
                    class="zen-image"
                  />
                  <div class="moment-number">{{ String(group.artworks[0].originalIndex + 1).padStart(2, '0') }}</div>
                </div>
              </div>

              <div class="moment-essence">
                <h3 class="moment-title">{{ group.artworks[0].title }}</h3>
                <p class="moment-whisper">{{ group.artworks[0].description }}</p>
                
                <div class="moment-details">
                  <span class="detail-whisper">{{ group.artworks[0].filename }}</span>
                  <span class="detail-dot">•</span>
                  <span class="detail-whisper">{{ group.artworks[0].location }}</span>
                </div>
              </div>
            </div>

            <!-- Dual Square Images -->
            <div
              v-else-if="group.type === 'dual'"
              class="photo-moment dual-moment"
            >
              <div class="dual-photo-container">
                <div 
                  v-for="artwork in group.artworks" 
                  :key="artwork.id"
                  class="square-photo-frame"
                  @click="openLightbox(artwork)"
                >
                  <img 
                    :src="artwork.image" 
                    :alt="artwork.title"
                    class="zen-square-image"
                  />
                  <div class="moment-number">{{ String(artwork.originalIndex + 1).padStart(2, '0') }}</div>
                </div>
              </div>

              <div class="dual-moment-essence">
                <div class="dual-titles">
                  <h3 class="moment-title">{{ group.artworks[0].title }}</h3>
                  <span class="title-divider">×</span>
                  <h3 class="moment-title">{{ group.artworks[1].title }}</h3>
                </div>
                <div class="dual-descriptions">
                  <p class="moment-whisper">{{ group.artworks[0].description }}</p>
                  <p class="moment-whisper">{{ group.artworks[1].description }}</p>
                </div>
              </div>
            </div>

            <!-- Zen Breathing Space -->
            <div class="breathing-space" v-if="groupIndex < groupedArtworks.length - 1">
              <div class="zen-breath"></div>
            </div>
          </template>
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
  format?: 'square' | 'panoramic'
}

const artworks = ref<Artwork[]>([
  {
    id: 1,
    title: "Under the Mountain",
    description: "Mountain Range cuts the sky in half, one for the peasants, one for the gods.",
    image: "/KyushuJapan/IMG_0016.JPG",
    filename: "IMG_1715.JPG",
    location: "Kyushu, Japan"
  },
  {
    id: 2,
    title: "Weeds",
    description: "Growing",
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
    title: "Next to the Mountain",
    description: "Swelling upon the ground, next to the mountain.",
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
    title: "Lakeside",
    description: "Where tradition meets nature, a peaceful dwelling rests beside still waters, embraced by autumn's palette.",
    image: "/KyushuJapan/IMG_5343.JPG",
    filename: "IMG_5343.JPG",
    location: "Asū, Kyushu, Japan",
    format: "square"
  },
  {
    id: 8,
    title: "无题",
    description: ".",
    image: "/KyushuJapan/IMG_5344.JPG",
    filename: "IMG_5344.JPG", 
    location: "Asū, Kyushu, Japan",
    format: "square"
  },
  {
    id: 9,
    title: "Living in the Green House",
    description: "Nurture, grow, and live.",
    image: "/KyushuJapan/IMG_1715.JPG",
    filename: "IMG_0016.JPG",
    location: "Kyushu, Japan"
  }
])

const lightboxVisible = ref(false)
const currentIndex = ref(0)

const currentArtwork = computed(() => artworks.value[currentIndex.value])

// Group artworks for display
const groupedArtworks = computed(() => {
  const groups = []
  const artworksWithIndex = artworks.value.map((artwork, index) => ({
    ...artwork,
    originalIndex: index
  }))
  
  let i = 0
  while (i < artworksWithIndex.length) {
    const current = artworksWithIndex[i]
    const next = artworksWithIndex[i + 1]
    
    // Check if current and next are both square images
    if (current.format === 'square' && next?.format === 'square') {
      groups.push({
        type: 'dual',
        artworks: [current, next]
      })
      i += 2
    } else {
      groups.push({
        type: 'single',
        artworks: [current]
      })
      i += 1
    }
  }
  
  return groups
})

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

// Zen Gallery Section
.zen-gallery {
  padding: var(--space-20) 0 var(--space-32);
  background: linear-gradient(180deg, white 0%, #fafafa 50%, white 100%);
  min-height: 100vh;
}

.gallery-flow {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--space-8);
}

// Zen Header
.zen-header {
  text-align: center;
  margin-bottom: var(--space-20);
  position: relative;
  padding: var(--space-12) 0;
}

.header-line {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0,0,0,0.3), transparent);
  margin: 0 auto var(--space-6);
}

.zen-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 200;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
  letter-spacing: 0.05em;
  font-family: 'Inter', sans-serif;
}

.zen-subtitle {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  font-weight: 400;
  margin-bottom: var(--space-6);
  opacity: 0.8;
}

// Photo Stream
.photo-stream {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.photo-moment {
  width: 100%;
  max-width: 1200px;
  cursor: pointer;
  position: relative;
  
  &:hover {
    .moment-details {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

// Photo Container (Protagonist)
.photo-container {
  width: 100%;
  margin-bottom: var(--space-8);
  position: relative;
}

.photo-frame {
  position: relative;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 
    0 20px 40px -10px rgba(0,0,0,0.15),
    0 0 0 1px rgba(0,0,0,0.05);
}



.zen-image {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 65/24; // Panoramic XPan ratio
  object-fit: cover;
}

// Dual Square Images Layout
.dual-moment {
  .photo-container {
    display: none; // Hide the regular container for dual layout
  }
}

.dual-photo-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
  width: 100%;
  margin-bottom: var(--space-8);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
}

.square-photo-frame {
  position: relative;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 
    0 20px 40px -10px rgba(0,0,0,0.15),
    0 0 0 1px rgba(0,0,0,0.05);
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
}

.zen-square-image {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 1; // Square ratio
  object-fit: cover;
}

.dual-moment-essence {
  text-align: center;
  padding: var(--space-6) var(--space-4);
  max-width: 900px;
  margin: 0 auto;
}

.dual-titles {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-2);
    
    .title-divider {
      display: none;
    }
  }
  
  .moment-title {
    margin: 0;
    font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  }
}

.title-divider {
  color: var(--color-text-muted);
  font-size: var(--text-lg);
  opacity: 0.5;
  font-weight: 300;
}

.dual-descriptions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
  
  .moment-whisper {
    margin: 0;
    font-size: var(--text-sm);
    max-width: none;
  }
}



.moment-number {
  position: absolute;
  top: var(--space-6);
  right: var(--space-6);
  background: rgba(255,255,255,0.95);
  color: var(--color-text-primary);
  padding: var(--space-2) var(--space-4);
  border-radius: 20px;
  font-weight: 500;
  font-size: var(--text-sm);
  font-family: 'Monaco', monospace;
  backdrop-filter: blur(10px);
  letter-spacing: 0.1em;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

// Moment Essence (Supporting)
.moment-essence {
  text-align: center;
  padding: var(--space-6) var(--space-4);
  max-width: 800px;
  margin: 0 auto;
}

.moment-title {
  font-size: clamp(1.5rem, 3vw, 1.8rem);
  font-weight: 300;
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
  letter-spacing: 0.02em;
}

.moment-whisper {
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-text-secondary);
  font-style: italic;
  margin-bottom: var(--space-4);
  opacity: 0.85;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.moment-details {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-3);
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.4s ease;
}

.detail-whisper {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  font-family: 'Monaco', monospace;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.detail-dot {
  color: var(--color-text-muted);
  opacity: 0.5;
  font-size: var(--text-xs);
}

// Breathing Space
.breathing-space {
  width: 100%;
  height: var(--space-32);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--space-16) 0;
}

.zen-breath {
  width: 120px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0,0,0,0.1) 20%,
    rgba(0,0,0,0.3) 50%,
    rgba(0,0,0,0.1) 80%,
    transparent 100%
  );
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 4px;
    background: var(--color-text-muted);
    border-radius: 50%;
    opacity: 0.5;
  }
}

// Responsive Design
@media (max-width: 768px) {
  .gallery-flow {
    padding: 0 var(--space-4);
  }
  
  .zen-header {
    margin-bottom: var(--space-12);
  }
  
  .moment-number {
    top: var(--space-4);
    right: var(--space-4);
    padding: var(--space-1) var(--space-3);
    font-size: var(--text-xs);
  }
  
  .moment-essence {
    padding: var(--space-4) var(--space-2);
  }
  
  .breathing-space {
    height: var(--space-20);
    margin: var(--space-8) 0;
  }
  
  .zen-breath {
    width: 80px;
  }
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