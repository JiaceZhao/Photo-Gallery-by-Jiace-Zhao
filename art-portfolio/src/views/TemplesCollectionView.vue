<script setup lang="ts">
const pdfSrc = '/templesCollection/collection.pdf'
</script>

<template>
  <div class="collection-view">
    <!-- Hero -->
    <section class="collection-hero">
      <div class="hero-container">
        <div class="hero-text">
          <h1 class="hero-title">寺院集</h1>
          <p class="hero-subtitle">PDF 合辑</p>
          <p class="hero-description">
            A contemplative compilation exploring temples and time. View inline below or download the PDF.
          </p>
          <div class="hero-actions">
            <a :href="pdfSrc" download class="btn btn-primary">Download PDF</a>
            <a :href="pdfSrc" target="_blank" rel="noopener" class="btn btn-secondary">Open in New Tab</a>
          </div>
        </div>
      </div>
    </section>

    <!-- PDF Viewer -->
    <section class="pdf-section">
      <div class="pdf-container">
        <iframe 
          class="pdf-frame"
          :src="`${pdfSrc}#toolbar=1&navpanes=0&view=FitH`"
          title="寺院集 PDF"
        ></iframe>
        <div class="pdf-fallback">
          <p>
            If the PDF does not display, you can
            <a :href="pdfSrc" target="_blank" rel="noopener">open it here</a>
            or use the download button above.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.collection-view {
  background: #ffffff;
  color: #222222;
  min-height: 100vh;
}

.collection-hero {
  padding: 48px 0 24px;
  background: #ffffff;
  border-bottom: 1px solid #eee;
}

.hero-container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-title {
  font-size: 2rem;
  font-weight: 700;
  color: #222222;
  margin: 0 0 8px;
}

.hero-subtitle {
  font-size: 1rem;
  color: #555555;
  margin: 0 0 16px;
}

.hero-description {
  font-size: 0.95rem;
  color: #444444;
  margin: 0 0 16px;
}

.hero-actions {
  display: flex;
  gap: 12px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease;
}

.btn-primary {
  background: #111111;
  color: #ffffff;
}
.btn-primary:hover { background: #000000; }

.btn-secondary {
  background: #f3f3f3;
  color: #222222;
}
.btn-secondary:hover { background: #e9e9e9; }

.pdf-section {
  padding: 24px 0 48px;
  background: #ffffff;
}

.pdf-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.pdf-frame {
  width: 100%;
  height: 80vh;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fff;
}

.pdf-fallback {
  margin-top: 12px;
  font-size: 0.9rem;
  color: #666666;
}
</style>