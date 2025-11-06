<template>
  <div class="collection-view">
    <!-- Hero Section -->
    <section class="collection-hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <div class="text-backdrop"></div>
            <h1 class="collection-title">
              <span class="title-main">Summer Palace · Late Autumn</span>
              <span class="title-subtitle">颐和园 · 深秋</span>
            </h1>
            <div class="collection-quote">
              <blockquote>
                "薄雾与斜阳交织，色叶在水面轻声流动。"
              </blockquote>
              <cite>— Jiace Zhao ｜ 赵嘉策</cite>
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
          <h2 class="zen-title">Late Autumn Moments</h2>
          <p class="zen-subtitle">Beijing • 2024</p>
          <div class="header-line"></div>
        </div>

        <div class="photo-stream">
          <template v-for="(group, groupIndex) in groupedArtworks" :key="`group-${groupIndex}`">
            <div v-if="group.type === 'single'" class="photo-moment" @click="openLightbox(group.artworks[0])">
              <div class="photo-container">
                <div class="photo-frame" :class="group.artworks[0].format === 'square' ? 'square' : 'panoramic'">
                  <div class="ratio-box" :style="{ aspectRatio: group.artworks[0].aspectRatio ? group.artworks[0].aspectRatio : (group.artworks[0].format === 'square' ? '1 / 1' : '65 / 24') }">
                    <img :src="group.artworks[0].image" :alt="group.artworks[0].title" class="zen-image" />
                  </div>
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

            <div class="breathing-space" v-if="groupIndex < groupedArtworks.length - 1">
              <div class="zen-breath"></div>
            </div>
          </template>

          <div v-if="artworks.length === 0" class="fallback-notice">
            <p>请将 JPG/PNG 照片放置在 <code>/public/SummerPalaceLateAutum</code> 目录下。</p>
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
}

const artworks = ref<Artwork[]>([
  { id: 1, title: 'Late Autumn #01', description: '水面与红叶的轻声。', image: '/SummerPalaceLateAutum/SummerPalace1.JPG', filename: 'SummerPalace1.JPG', location: 'Beijing' },
  { id: 2, title: 'Late Autumn #02', description: '薄雾与石桥。', image: '/SummerPalaceLateAutum/ummerPalace2.JPG', filename: 'ummerPalace2.JPG', location: 'Beijing' },
  { id: 3, title: 'Late Autumn #03', description: '林影与斜阳。', image: '/SummerPalaceLateAutum/ummerPalace3.JPG', filename: 'ummerPalace3.JPG', location: 'Beijing' },
  { id: 4, title: 'Late Autumn #04', description: '银杏的金色呼吸。', image: '/SummerPalaceLateAutum/SummerPalace4.JPG', filename: 'SummerPalace4.JPG', location: 'Beijing' },
])

const lightboxVisible = ref(false)
const currentIndex = ref(0)
const currentArtwork = computed(() => artworks.value[currentIndex.value])

const groupedArtworks = computed(() => {
  const groups: Array<{ type: 'single' | 'dual'; artworks: Array<Artwork & { originalIndex: number }> }> = []
  const artworksWithIndex = artworks.value.map((artwork, index) => ({ ...artwork, originalIndex: index }))
  let i = 0
  while (i < artworksWithIndex.length) {
    const current = artworksWithIndex[i]
    const next = artworksWithIndex[i + 1]
    if (current.format === 'square' && next?.format === 'square') {
      groups.push({ type: 'dual', artworks: [current, next] })
      i += 2
    } else {
      groups.push({ type: 'single', artworks: [current] })
      i += 1
    }
  }
  return groups
})

const detectFormats = () => {
  artworks.value.forEach((artwork, index) => {
    // 尊重手动标注
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
        aspectRatio: `${w} / ${h}`
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
.collection-view { min-height: 100vh; background: #fafafa; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
.container { max-width: 1400px; margin: 0 auto; padding: 0 2rem; }
.collection-hero { padding: var(--space-24) 0 var(--space-20); background: linear-gradient(135deg, #fafafa 0%, #f8f8f8 50%, #f5f5f5 100%); position: relative; overflow: hidden; }
.hero-content { position: relative; z-index: 2; text-align: center; }
.hero-text { position: relative; max-width: 800px; margin: 0 auto; }
.text-backdrop { position: absolute; top: -20px; left: -20px; right: -20px; bottom: -20px; background: rgba(255,255,255,0.3); backdrop-filter: blur(10px); border-radius: 20px; z-index: -1; }
.collection-title { margin-bottom: var(--space-8); }
.title-main { display: block; font-size: clamp(2.2rem, 6vw, 4rem); font-weight: 300; line-height: 1; color: var(--color-text-primary); margin-bottom: var(--space-2); }
.title-subtitle { display: block; font-size: clamp(1rem, 2.5vw, 1.5rem); font-weight: 400; color: var(--color-accent); opacity: 0.85; }
.collection-quote { margin: var(--space-8) 0; padding: var(--space-6); background: rgba(255,255,255,0.5); border-left: 3px solid var(--color-accent); border-radius: 0 10px 10px 0; }

.zen-gallery { padding: var(--space-20) 0 var(--space-32); background: linear-gradient(180deg, white 0%, #fafafa 50%, white 100%); min-height: 60vh; }
.gallery-flow { max-width: 1400px; margin: 0 auto; padding: 0 var(--space-8); }
.zen-header { text-align: center; margin-bottom: var(--space-20); position: relative; padding: var(--space-12) 0; }
.header-line { width: 60px; height: 1px; background: linear-gradient(90deg, transparent, rgba(0,0,0,0.3), transparent); margin: 0 auto var(--space-6); }
.zen-title { font-size: clamp(2rem, 4vw, 2.5rem); font-weight: 200; color: var(--color-text-primary); margin-bottom: var(--space-3); letter-spacing: 0.05em; }
.zen-subtitle { font-size: var(--text-base); color: var(--color-text-muted); }

.photo-stream { display: flex; flex-direction: column; align-items: center; gap: 0; }
.photo-moment { width: 100%; max-width: 1200px; cursor: pointer; position: relative; }
.photo-container { width: 100%; margin-bottom: var(--space-8); position: relative; }
.photo-frame { position: relative; width: 100%; border-radius: 4px; overflow: hidden; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05); }
.ratio-box { width: 100%; }
.zen-image { width: 100%; height: 100%; display: block; object-fit: cover; }
.moment-number { position: absolute; top: var(--space-6); right: var(--space-6); background: rgba(255,255,255,0.95); color: var(--color-text-primary); padding: var(--space-2) var(--space-4); border-radius: 20px; font-weight: 500; font-size: var(--text-sm); backdrop-filter: blur(10px); letter-spacing: 0.1em; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }

.moment-essence { text-align: center; padding: var(--space-6) var(--space-4); max-width: 800px; margin: 0 auto; }
.moment-title { font-size: clamp(1.5rem, 3vw, 1.8rem); font-weight: 300; color: var(--color-text-primary); margin-bottom: var(--space-4); }
.moment-whisper { font-size: var(--text-base); line-height: 1.6; color: var(--color-text-secondary); font-style: italic; margin-bottom: var(--space-4); opacity: 0.85; max-width: 600px; margin-left: auto; margin-right: auto; }
.moment-details { display: flex; justify-content: center; align-items: center; gap: var(--space-2); color: var(--color-text-muted); }
.detail-whisper { font-size: var(--text-xs); }
.detail-dot { color: var(--color-text-muted); opacity: 0.6; }

/* Lightbox */
.lightbox-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; z-index: 1000; }
.lightbox-container { position: relative; background: #111; border-radius: 8px; max-width: 90vw; max-height: 85vh; overflow: hidden; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.4); }
.lightbox-close { position: absolute; top: 12px; right: 12px; background: transparent; border: none; color: white; cursor: pointer; }
.lightbox-content { display: grid; grid-template-columns: 1fr; gap: var(--space-6); padding: var(--space-6); }
.lightbox-image img { width: 100%; height: auto; display: block; }
.lightbox-info { color: #eee; }
.lightbox-title { margin: 0 0 var(--space-2); font-weight: 500; }
.lightbox-description { margin: 0 0 var(--space-2); opacity: 0.8; }
.lightbox-meta { display: flex; gap: var(--space-3); font-size: var(--text-xs); opacity: 0.8; }

.lightbox-navigation { display: grid; grid-template-columns: 40px 1fr 40px; align-items: center; gap: var(--space-4); padding: var(--space-6); background: #0d0d0d; }
.nav-btn { background: #1a1a1a; border: 1px solid #333; color: #ddd; border-radius: 6px; padding: var(--space-2); cursor: pointer; }
.nav-thumbnails { display: flex; gap: var(--space-2); overflow-x: auto; }
.nav-thumb { width: 60px; height: 40px; border: 1px solid #333; border-radius: 4px; overflow: hidden; opacity: 0.6; cursor: pointer; }
.nav-thumb.active { opacity: 1; border-color: #888; }
.nav-thumb img { width: 100%; height: 100%; object-fit: cover; }

/* Fallback */
.fallback-notice { max-width: 1000px; margin: var(--space-12) auto; padding: var(--space-6); background: #fff3cd; border: 1px solid #ffeeba; border-radius: 8px; color: #856404; }

/* Breathing space visual */
.breathing-space { width: 100%; display: flex; justify-content: center; padding: var(--space-8) 0; }
.zen-breath { width: 120px; height: 1px; background: linear-gradient(90deg, transparent, rgba(0,0,0,0.2), transparent); }
</style>