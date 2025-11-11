<template>
  <div class="collection-view">
    <!-- Hero Section -->
    <section class="collection-hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <div class="text-backdrop"></div>
            <h1 class="collection-title">
              <span class="title-main">Summer Palace · Summer Study</span>
              <span class="title-subtitle">颐和园 · 夏日摄影</span>
            </h1>
            <div class="collection-quote">
              <blockquote>
                "In summer light, water and leaves speak softly of time."
              </blockquote>
              <cite>— Jiace Zhao</cite>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="zen-gallery">
      <div class="gallery-flow">
        <div class="zen-header">
          <div class="header-line"></div>
          <h2 class="zen-title">Summer Palace — Summer</h2>
          <p class="zen-subtitle">Beijing • Summer</p>
          <div class="header-line"></div>
        </div>

        <div class="photo-stream">
          <div v-for="(art, idx) in artworksWithIndex" :key="art.id" class="photo-moment" @click="openLightbox(art)">
            <div class="photo-container">
              <div class="photo-frame" :class="art.format === 'square' ? 'square' : 'panoramic'" :style="{ '--ratio': art.numericRatio ?? (art.format === 'square' ? 1 : 65/24), width: 'min(1000px, 90vw, calc(70vh * var(--ratio)))' }">
                <div class="ratio-box" :style="{ aspectRatio: art.aspectRatio ? art.aspectRatio : (art.format === 'square' ? '1 / 1' : '65 / 24') }">
                  <img :src="art.image" :alt="art.title" class="zen-image" />
                </div>
                <div class="moment-number">{{ String(art.originalIndex + 1).padStart(2, '0') }}</div>
              </div>
            </div>

            <div class="moment-essence">
              <h3 class="moment-title">{{ art.title }}</h3>
              <p class="moment-whisper">{{ art.description }}</p>
              <div class="moment-details">
                <span class="detail-whisper">{{ art.filename }}</span>
                <span class="detail-dot">•</span>
                <span class="detail-whisper">{{ art.location }}</span>
              </div>
            </div>

            <div class="breathing-space" v-if="idx < artworksWithIndex.length - 1">
              <div class="zen-breath"></div>
            </div>
          </div>

          <div v-if="artworks.length === 0" class="fallback-notice">
            <p>Please place JPG/PNG photos under <code>/public/SummerpalaceSummer</code>.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div v-if="lightboxVisible" class="lightbox-overlay" @click="closeLightbox" @keydown.esc="closeLightbox">
      <div class="lightbox-container" @click.stop>
        <button class="lightbox-close" @click="closeLightbox">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div class="lightbox-content">
          <div class="lightbox-image">
            <img :src="currentArtwork?.image" :alt="currentArtwork?.title" />
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
          <button class="nav-btn prev-btn" @click="previousImage" :disabled="currentIndex === 0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15,18 9,12 15,6"></polyline></svg>
          </button>
          <div class="nav-thumbnails">
            <div v-for="(artwork, index) in artworks" :key="artwork.id" class="nav-thumb" :class="{ active: index === currentIndex }" @click="setCurrentImage(index)">
              <img :src="artwork.image" :alt="artwork.title" />
            </div>
          </div>
          <button class="nav-btn next-btn" @click="nextImage" :disabled="currentIndex === artworks.length - 1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9,18 15,12 9,6"></polyline></svg>
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
  aspectRatio?: string
  numericRatio?: number
}

const artworks = ref<Artwork[]>([
  { id: 1, title: 'Summer #01', description: 'Leaf and water in dialogue.', image: '/SummerpalaceSummer/B00034933FR1756717218.jpeg', filename: 'B00034933FR1756717218.jpeg', location: 'Beijing' },
  { id: 2, title: 'Summer #02', description: 'A quiet ripple.', image: '/SummerpalaceSummer/B00034943FR1756717282.jpeg', filename: 'B00034943FR1756717282.jpeg', location: 'Beijing' },
  { id: 3, title: 'Summer #03', description: 'Stone by the lake.', image: '/SummerpalaceSummer/IMG_0574.jpeg', filename: 'IMG_0574.jpeg', location: 'Beijing' },
  { id: 4, title: 'Summer #04', description: 'Shades of green.', image: '/SummerpalaceSummer/IMG_0582.jpeg', filename: 'IMG_0582.jpeg', location: 'Beijing' },
  { id: 5, title: 'Summer #05', description: 'Solitary branch.', image: '/SummerpalaceSummer/IMG_0583.jpeg', filename: 'IMG_0583.jpeg', location: 'Beijing' },
  { id: 6, title: 'Summer #06', description: 'Reflections and wind.', image: '/SummerpalaceSummer/IMG_0584.jpeg', filename: 'IMG_0584.jpeg', location: 'Beijing' },
  { id: 7, title: 'Summer #07', description: 'Steps toward the light.', image: '/SummerpalaceSummer/IMG_0586.jpeg', filename: 'IMG_0586.jpeg', location: 'Beijing' },
])

const lightboxVisible = ref(false)
const currentIndex = ref(0)
const currentArtwork = computed(() => artworks.value[currentIndex.value])

const artworksWithIndex = computed(() => artworks.value.map((art, i) => ({ ...art, originalIndex: i })))

const detectFormats = () => {
  artworks.value.forEach((artwork, index) => {
    if (artworks.value[index].format) return
    const img = new Image()
    img.src = artwork.image
    img.onload = () => {
      const w = img.naturalWidth
      const h = img.naturalHeight
      const ratio = w / h
      const isSquare = ratio > 0.98 && ratio < 1.02
      artworks.value[index] = { 
        ...artwork, 
        format: isSquare ? 'square' : 'panoramic',
        aspectRatio: `${w} / ${h}`,
        numericRatio: ratio
      }
    }
  })
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  detectFormats()
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

const nextImage = () => { if (currentIndex.value < artworks.value.length - 1) currentIndex.value++ }
const previousImage = () => { if (currentIndex.value > 0) currentIndex.value-- }
const setCurrentImage = (index: number) => { currentIndex.value = index }

const handleKeydown = (event: KeyboardEvent) => {
  if (!lightboxVisible.value) return
  switch (event.key) {
    case 'Escape': closeLightbox(); break
    case 'ArrowLeft': previousImage(); break
    case 'ArrowRight': nextImage(); break
  }
}

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'auto'
})
</script>

<style scoped lang="scss">
.collection-view { min-height: 100vh; background: #ffffff; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; color: #222; }
.container { max-width: 1400px; margin: 0 auto; padding: 0 2rem; }
.collection-hero { padding: var(--space-24) 0 var(--space-20); background: #ffffff; position: relative; overflow: hidden; }
.hero-content { position: relative; z-index: 2; text-align: center; }
.hero-text { position: relative; max-width: 800px; margin: 0 auto; }
.text-backdrop { position: absolute; top: -20px; left: -20px; right: -20px; bottom: -20px; background: rgba(0,0,0,0.03); backdrop-filter: blur(6px); border-radius: 20px; z-index: -1; }
.collection-title { margin-bottom: var(--space-8); }
.title-main { display: block; font-size: clamp(2.2rem, 6vw, 4rem); font-weight: 300; line-height: 1; color: #222; margin-bottom: var(--space-2); }
.title-subtitle { display: block; font-size: clamp(1rem, 2.5vw, 1.5rem); font-weight: 400; color: #555; opacity: 0.9; }
.collection-quote { margin: var(--space-8) 0; padding: var(--space-6); background: rgba(0,0,0,0.02); border-left: 3px solid #bbb; border-radius: 0 10px 10px 0; color: #333; }

.zen-gallery { padding: var(--space-20) 0 var(--space-32); background: #ffffff; min-height: 60vh; }
.gallery-flow { max-width: 1400px; margin: 0 auto; padding: 0 var(--space-8); }
.zen-header { text-align: center; margin-bottom: var(--space-20); position: relative; padding: var(--space-12) 0; }
.header-line { width: 60px; height: 1px; background: linear-gradient(90deg, transparent, rgba(0,0,0,0.2), transparent); margin: 0 auto var(--space-6); }
.zen-title { font-size: clamp(2rem, 4vw, 2.5rem); font-weight: 200; color: #222; margin-bottom: var(--space-3); letter-spacing: 0.05em; }
.zen-subtitle { font-size: var(--text-base); color: #555; }

.photo-stream { display: flex; flex-direction: column; align-items: center; gap: 0; }
.photo-moment { width: 100%; max-width: 1200px; cursor: pointer; position: relative; }
.photo-container { width: 100%; margin-bottom: var(--space-8); position: relative; display: flex; justify-content: center; }
.photo-frame { position: relative; width: 100%; border-radius: 6px; overflow: hidden; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.05); background: #fff; }
.ratio-box { width: 100%; }
.zen-image { width: 100%; height: 100%; display: block; object-fit: cover; }
.moment-number { position: absolute; top: var(--space-6); right: var(--space-6); background: rgba(0,0,0,0.75); color: #fff; padding: var(--space-2) var(--space-4); border-radius: 20px; font-weight: 600; font-size: var(--text-sm); backdrop-filter: blur(6px); letter-spacing: 0.05em; }

.moment-essence { text-align: center; padding: var(--space-6) var(--space-4); max-width: 800px; margin: 0 auto; }
.moment-title { font-size: clamp(1.5rem, 3vw, 1.8rem); font-weight: 300; color: #222; margin-bottom: var(--space-4); }
.moment-whisper { font-size: var(--text-base); color: #444; margin-bottom: var(--space-3); }
.moment-details { display: inline-flex; align-items: center; gap: var(--space-2); color: #666; font-size: var(--text-sm); }
.detail-dot { opacity: 0.5; }

/* Lightbox */
.lightbox-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.8); display: grid; place-items: center; z-index: 999; }
.lightbox-container { width: min(1100px, 92vw); background: #0d0d0d; border: 1px solid #222; border-radius: 12px; overflow: hidden; box-shadow: 0 30px 60px -15px rgba(0,0,0,0.6); }
.lightbox-close { position: absolute; top: 14px; right: 14px; background: rgba(255,255,255,0.1); color: #ddd; border: 1px solid #444; border-radius: 8px; padding: 6px; cursor: pointer; }
.lightbox-content { display: grid; grid-template-columns: 1fr 320px; gap: var(--space-6); padding: var(--space-6); }
.lightbox-image img { width: 100%; height: auto; display: block; }
.lightbox-info { color: #e0e0e0; }
.lightbox-title { margin-bottom: var(--space-3); font-weight: 400; }
.lightbox-description { margin-bottom: var(--space-4); color: #cfcfcf; }
.lightbox-meta { display: flex; gap: var(--space-3); font-size: var(--text-sm); color: #bdbdbd; }

.lightbox-navigation { display: grid; grid-template-columns: 40px 1fr 40px; align-items: center; gap: var(--space-4); padding: var(--space-6); background: #0d0d0d; border-top: 1px solid #222; }
.nav-btn { background: #1a1a1a; border: 1px solid #333; color: #ddd; border-radius: 6px; padding: var(--space-2); cursor: pointer; }
.nav-thumbnails { display: flex; gap: var(--space-2); overflow-x: auto; }
.nav-thumb { width: 60px; height: 40px; border: 1px solid #333; border-radius: 4px; overflow: hidden; opacity: 0.6; cursor: pointer; }
.nav-thumb.active { opacity: 1; border-color: #888; }
.nav-thumb img { width: 100%; height: 100%; object-fit: cover; }

/* Fallback */
.fallback-notice { max-width: 1000px; margin: var(--space-12) auto; padding: var(--space-6); background: #f8f8f8; border: 1px solid #ddd; border-radius: 8px; color: #333; }

/* Breathing space visual */
.breathing-space { width: 100%; display: flex; justify-content: center; padding: var(--space-8) 0; }
.zen-breath { width: 120px; height: 1px; background: linear-gradient(90deg, transparent, rgba(0,0,0,0.25), transparent); }
</style>