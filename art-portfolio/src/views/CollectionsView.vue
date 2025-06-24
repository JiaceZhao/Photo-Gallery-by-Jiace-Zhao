<template>
  <div class="collection-view">
    <!-- Artistic Portfolio Collage -->
    <div class="portfolio-collage">
      <!-- Background Elements -->
      <div class="collage-background">
        <div class="texture-layer"></div>
        <svg class="flowing-lines" viewBox="0 0 1400 1000">
          <path d="M0,300 Q350,200 700,400 T1400,350" stroke="rgba(0,0,0,0.03)" stroke-width="2" fill="none"/>
          <path d="M0,600 Q400,500 800,650 T1400,580" stroke="rgba(0,0,0,0.02)" stroke-width="1" fill="none"/>
        </svg>
      </div>

      <!-- Main Title Block -->
      <div class="title-block">
        <h1 class="main-title">
          <span class="title-large">CALL</span>
          <span class="title-from">from the</span>
          <span class="title-field">FIELD</span>
        </h1>
        <div class="subtitle-japanese">野の呼び声</div>
        <div class="collection-details">
          <span>Kyushu, Japan • 2024 • 7 Photographs</span>
        </div>
      </div>

      <!-- Hero Image - Large Feature -->
      <div class="hero-piece" @click="openLightbox(artworks[0])">
        <div class="image-container large-img">
          <img :src="artworks[0].image" :alt="artworks[0].title" />
          <div class="img-number">01</div>
          <div class="img-overlay">
            <h3>{{ artworks[0].title }}</h3>
            <p>{{ artworks[0].description.split('.')[0] }}</p>
          </div>
        </div>
      </div>

      <!-- Quote Block -->
      <div class="quote-section">
        <blockquote>
          "In the fields of Kyushu, where ancient rhythms meet eternal skies"
        </blockquote>
        <div class="quote-accent"></div>
      </div>

      <!-- Medium Image Pair -->
      <div class="medium-pair">
        <div class="medium-img img-left" @click="openLightbox(artworks[1])">
          <img :src="artworks[1].image" :alt="artworks[1].title" />
          <div class="img-label">
            <span class="label-num">02</span>
            <span class="label-title">{{ artworks[1].title }}</span>
          </div>
        </div>
        
        <div class="medium-img img-right" @click="openLightbox(artworks[2])">
          <img :src="artworks[2].image" :alt="artworks[2].title" />
          <div class="img-label">
            <span class="label-num">03</span>
            <span class="label-title">{{ artworks[2].title }}</span>
          </div>
        </div>
      </div>

      <!-- Flowing Text Element -->
      <div class="flowing-text">
        <span class="text-accent">every blade of grass</span>
        <span class="text-main">holds a story of time itself</span>
      </div>

      <!-- Three Small Images Cluster -->
      <div class="small-cluster">
        <div class="small-img img-a" @click="openLightbox(artworks[3])">
          <img :src="artworks[3].image" :alt="artworks[3].title" />
          <div class="small-number">04</div>
        </div>
        
        <div class="small-img img-b" @click="openLightbox(artworks[4])">
          <img :src="artworks[4].image" :alt="artworks[4].title" />
          <div class="small-number">05</div>
        </div>
        
        <div class="text-between">
          <div class="vertical-text">WHISPERS</div>
          <div class="location-mark">Kyushu</div>
        </div>
      </div>

      <!-- Final Large Images -->
      <div class="final-spread">
        <div class="signature-img" @click="openLightbox(artworks[5])">
          <img :src="artworks[5].image" :alt="artworks[5].title" />
          <div class="signature-overlay">
            <span class="sig-num">06</span>
            <h3 class="sig-title">{{ artworks[5].title }}</h3>
            <p class="sig-desc">{{ artworks[5].description.split('.')[0] }}</p>
          </div>
        </div>
        
        <div class="closing-img" @click="openLightbox(artworks[6])">
          <img :src="artworks[6].image" :alt="artworks[6].title" />
          <div class="closing-mark">
            <span class="closing-num">07</span>
            <span class="closing-title">{{ artworks[6].title }}</span>
          </div>
        </div>
      </div>

      <!-- Year Signature -->
      <div class="year-signature">
        <div class="year-large">2024</div>
        <div class="signature-line"></div>
      </div>

      <!-- Corner Elements -->
      <div class="corner-accents">
        <div class="corner-tl"></div>
        <div class="corner-br"></div>
      </div>
    </div>

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
// Print-ready portfolio collage styles
.collection-view {
  min-height: 100vh;
  background: #fff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.portfolio-collage {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  min-height: 200vh;
  
  // Print optimization
  @media print {
    padding: 1in;
    page-break-inside: avoid;
    
    * {
      color: #000 !important;
      background: transparent !important;
    }
  }
}

// Background Elements
.collage-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;

  .texture-layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(0,0,0,0.01) 1px, transparent 1px),
      radial-gradient(circle at 80% 70%, rgba(0,0,0,0.01) 1px, transparent 1px);
    background-size: 50px 50px, 75px 75px;
  }

  .flowing-lines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }
}

// Main Title
.title-block {
  position: absolute;
  top: 4rem;
  left: 2rem;
  z-index: 10;

  .main-title {
    font-size: clamp(2.5rem, 8vw, 4rem);
    font-weight: 900;
    line-height: 0.85;
    margin: 0;
    letter-spacing: -0.02em;

    .title-large {
      display: block;
      color: #000;
    }

    .title-from {
      display: block;
      font-size: 0.4em;
      font-weight: 300;
      color: #666;
      margin: 0.2em 0;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .title-field {
      display: block;
      color: #000;
    }
  }

  .subtitle-japanese {
    font-size: 1.2rem;
    color: #666;
    margin: 1rem 0 0.5rem 0;
    font-weight: 300;
  }

  .collection-details {
    font-size: 0.9rem;
    color: #999;
    font-weight: 400;
    letter-spacing: 0.02em;
  }
}

// Hero Image
.hero-piece {
  position: absolute;
  top: 12rem;
  right: 4rem;
  width: 500px;
  height: 350px;
  z-index: 5;
  cursor: pointer;
  
  @media (max-width: 768px) {
    position: relative;
    top: 8rem;
    right: 0;
    width: 100%;
    height: 300px;
    margin: 2rem 0;
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    transition: all 0.4s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 30px 60px rgba(0,0,0,0.15);

      .img-overlay {
        opacity: 1;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .img-number {
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
    }

    .img-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparent, rgba(0,0,0,0.8));
      color: white;
      padding: 2rem 1.5rem 1.5rem;
      opacity: 0;
      transition: opacity 0.3s ease;

      h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.2rem;
        font-weight: 600;
      }

      p {
        margin: 0;
        font-size: 0.9rem;
        opacity: 0.9;
        line-height: 1.4;
      }
    }
  }
}

// Quote Section
.quote-section {
  position: absolute;
  top: 28rem;
  left: 2rem;
  width: 350px;
  z-index: 8;

  @media (max-width: 768px) {
    position: relative;
    top: 2rem;
    left: 0;
    width: 100%;
    margin: 2rem 0;
  }

  blockquote {
    font-size: 1.4rem;
    font-style: italic;
    color: #333;
    margin: 0;
    line-height: 1.4;
    font-weight: 300;
    position: relative;

    &::before {
      content: '"';
      font-size: 3rem;
      color: #ddd;
      position: absolute;
      top: -1rem;
      left: -1.5rem;
      font-family: serif;
    }
  }

  .quote-accent {
    width: 80px;
    height: 2px;
    background: #000;
    margin-top: 1rem;
  }
}

// Medium Image Pair
.medium-pair {
  position: absolute;
  top: 45rem;
  left: 6rem;
  right: 6rem;
  display: flex;
  gap: 3rem;
  z-index: 6;

  @media (max-width: 768px) {
    position: relative;
    top: 4rem;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 2rem;
    margin: 3rem 0;
  }

  .medium-img {
    flex: 1;
    height: 280px;
    position: relative;
    cursor: pointer;
    border-radius: 6px;
    overflow: hidden;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .img-label {
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      right: 1rem;
      background: rgba(255,255,255,0.95);
      padding: 0.8rem 1rem;
      border-radius: 6px;
      backdrop-filter: blur(10px);

      .label-num {
        font-weight: 700;
        color: #000;
        margin-right: 0.5rem;
      }

      .label-title {
        color: #333;
        font-weight: 500;
      }
    }
  }

  .img-left {
    transform: rotate(-1deg);
  }

  .img-right {
    transform: rotate(1deg);
  }
}

// Flowing Text
.flowing-text {
  position: absolute;
  top: 75rem;
  right: 8rem;
  width: 300px;
  z-index: 9;
  text-align: right;

  @media (max-width: 768px) {
    position: relative;
    top: 4rem;
    right: 0;
    width: 100%;
    text-align: center;
    margin: 3rem 0;
  }

  .text-accent {
    display: block;
    font-size: 1rem;
    color: #666;
    font-style: italic;
    margin-bottom: 0.5rem;
  }

  .text-main {
    display: block;
    font-size: 1.8rem;
    font-weight: 600;
    color: #000;
    line-height: 1.2;
  }
}

// Small Cluster
.small-cluster {
  position: absolute;
  top: 85rem;
  left: 4rem;
  right: 4rem;
  display: grid;
  grid-template-columns: 200px 200px 1fr;
  grid-template-rows: 150px 150px;
  gap: 2rem;
  z-index: 7;

  @media (max-width: 768px) {
    position: relative;
    top: 4rem;
    left: 0;
    right: 0;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    margin: 3rem 0;
  }

  .small-img {
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .small-number {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: rgba(0,0,0,0.8);
      color: white;
      padding: 0.3rem 0.6rem;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 600;
    }
  }

  .img-a {
    grid-column: 1;
    grid-row: 1;
    transform: rotate(-2deg);
  }

  .img-b {
    grid-column: 2;
    grid-row: 2;
    transform: rotate(3deg);
  }

  .text-between {
    grid-column: 3;
    grid-row: 1 / 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    @media (max-width: 768px) {
      grid-column: 1 / 3;
      grid-row: 3;
      flex-direction: row;
      justify-content: space-around;
    }

    .vertical-text {
      writing-mode: vertical-rl;
      text-orientation: mixed;
      font-size: 2rem;
      font-weight: 200;
      color: #ccc;
      letter-spacing: 0.5rem;
      margin-bottom: 2rem;

      @media (max-width: 768px) {
        writing-mode: horizontal-tb;
        margin-bottom: 0;
        margin-right: 2rem;
      }
    }

    .location-mark {
      font-size: 1rem;
      color: #666;
      transform: rotate(-90deg);

      @media (max-width: 768px) {
        transform: none;
      }
    }
  }
}

// Final Spread
.final-spread {
  position: absolute;
  top: 115rem;
  left: 2rem;
  right: 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  z-index: 8;

  @media (max-width: 768px) {
    position: relative;
    top: 6rem;
    left: 0;
    right: 0;
    grid-template-columns: 1fr;
    margin: 4rem 0;
  }

  .signature-img {
    height: 400px;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 25px 50px rgba(0,0,0,0.15);

      .signature-overlay {
        opacity: 1;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .signature-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(0,0,0,0.1), rgba(0,0,0,0.7));
      color: white;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      opacity: 0;
      transition: opacity 0.3s ease;

      .sig-num {
        font-size: 3rem;
        font-weight: 900;
        margin-bottom: 1rem;
        opacity: 0.8;
      }

      .sig-title {
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0 0 0.5rem 0;
      }

      .sig-desc {
        font-size: 1rem;
        opacity: 0.9;
        line-height: 1.4;
        margin: 0;
      }
    }
  }

  .closing-img {
    height: 250px;
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
    align-self: end;
    transform: rotate(2deg);
    transition: transform 0.3s ease;

    &:hover {
      transform: rotate(0deg) scale(1.02);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .closing-mark {
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      right: 1rem;
      background: rgba(255,255,255,0.95);
      padding: 0.8rem 1rem;
      border-radius: 4px;
      backdrop-filter: blur(10px);

      .closing-num {
        font-weight: 700;
        color: #000;
        margin-right: 0.5rem;
      }

      .closing-title {
        color: #333;
        font-weight: 500;
        font-size: 0.9rem;
      }
    }
  }
}

// Year Signature
.year-signature {
  position: absolute;
  bottom: 2rem;
  right: 4rem;
  z-index: 10;

  .year-large {
    font-size: 6rem;
    font-weight: 100;
    color: #eee;
    line-height: 1;
    margin-bottom: 1rem;
  }

  .signature-line {
    width: 120px;
    height: 1px;
    background: #ccc;
  }
}

// Corner Accents
.corner-accents {
  .corner-tl, .corner-br {
    position: absolute;
    width: 40px;
    height: 40px;
    border: 2px solid #f0f0f0;
  }

  .corner-tl {
    top: 1rem;
    left: 1rem;
    border-right: none;
    border-bottom: none;
  }

  .corner-br {
    bottom: 1rem;
    right: 1rem;
    border-left: none;
    border-top: none;
  }
}

// Lightbox Styles
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
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.2),
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
    transition: left 0.3s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
    box-shadow: 
      0 8px 24px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
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
    backdrop-filter: blur(20px);
    box-shadow: 
      0 4px 16px rgba(0, 0, 0, 0.1),
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
      transition: left 0.3s;
    }

    &:hover::before {
      left: 100%;
    }

    &:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
      box-shadow: 
        0 8px 24px rgba(0, 0, 0, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
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

// Responsive Design
@media (max-width: 768px) {
  .portfolio-collage {
    padding: 2rem 1rem;
    min-height: auto;
  }

  .title-block {
    position: relative;
    top: 0;
    left: 0;
    margin-bottom: 2rem;
  }

  // Reset all absolute positioning for mobile
  .hero-piece,
  .quote-section,
  .medium-pair,
  .flowing-text,
  .small-cluster,
  .final-spread {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    margin: 2rem 0;
  }

  .year-signature {
    position: relative;
    bottom: auto;
    right: auto;
    text-align: center;
    margin: 3rem 0 1rem 0;
  }
}

// Print styles
@media print {
  .portfolio-collage {
    background: white !important;
    color: black !important;
    padding: 0.5in;
    page-break-inside: avoid;
  }

  .lightbox-overlay {
    display: none !important;
  }

  .collage-background {
    display: none;
  }

  .corner-accents {
    display: none;
  }
 }
</style> 