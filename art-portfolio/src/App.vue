<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <div id="app">
    <!-- Header -->
    <header class="header">
      <div class="container">
        <nav class="nav">
          <router-link to="/" class="logo">
            <span class="logo-icon">◦</span>
            <span class="logo-text">JIACE ZHAO</span>
          </router-link>
          
          <div class="nav-links">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/about" class="nav-link">About</router-link>
          </div>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-info">
            <p class="footer-quote text-muted">
              "Not an engineer, a poet; not a scientist, an artist."
            </p>
            <p class="footer-copyright text-muted">
              © {{ currentYear }} Jiace Zhao • All rights reserved
            </p>
          </div>
          <div class="footer-links">
            <a href="mailto:krypotozhao@gmail.com" class="footer-link">Contact</a>
            <a href="tel:+8615566970454" class="footer-link">Phone</a>
            <a href="/about" class="footer-link">About</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
/* Header Styles */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border-light);
  z-index: 1000;
  transition: all var(--transition-fast);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-4);
    padding: var(--space-3) 0;
  }
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  text-decoration: none;
  color: var(--color-text-primary);
  font-weight: 600;
  font-size: var(--text-lg);
  transition: all var(--transition-fast);
  
  &:hover {
    color: var(--color-accent);
    
    .logo-icon {
      transform: rotate(180deg);
    }
  }
}

.logo-icon {
  font-size: var(--text-2xl);
  transition: transform var(--transition-base);
}

.logo-text {
  letter-spacing: 0.1em;
  font-size: var(--text-sm);
  font-weight: 600;
}

.nav-links {
  display: flex;
  gap: var(--space-8);
  
  @media (max-width: 768px) {
    gap: var(--space-6);
  }
  
  @media (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-4);
  }
}

.nav-link {
  position: relative;
  text-decoration: none;
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
  font-weight: 500;
  padding: var(--space-2) 0;
  transition: color var(--transition-fast);
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--color-accent);
    transition: width var(--transition-fast);
  }
  
  &:hover,
  &.router-link-active {
    color: var(--color-text-primary);
    
    &::after {
      width: 100%;
    }
  }
  
  &.router-link-active::after {
    background-color: var(--color-accent);
  }
}

/* Main Content */
.main {
  flex: 1;
  margin-top: 80px; /* Height of fixed header */
  min-height: calc(100vh - 80px);
  
  @media (max-width: 768px) {
    margin-top: 100px; /* Adjust for stacked nav on mobile */
  }
}

/* Footer Styles */
.footer {
  background-color: var(--color-surface-elevated);
  border-top: 1px solid var(--color-border-light);
  margin-top: var(--space-20);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-8) 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-6);
    text-align: center;
  }
}

.footer-info {
  flex: 1;
}

.footer-quote {
  font-size: var(--text-sm);
  font-style: italic;
  margin-bottom: var(--space-2);
  max-width: 400px;
}

.footer-copyright {
  font-size: var(--text-xs);
}

.footer-links {
  display: flex;
  gap: var(--space-6);
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: var(--space-3);
  }
}

.footer-link {
  text-decoration: none;
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
  font-weight: 500;
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--color-accent);
  }
}

/* Global Animation */
.router-enter-active,
.router-leave-active {
  transition: all 0.3s ease;
}

.router-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.router-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .main {
    margin-top: 120px;
  }
}

@media (max-width: 480px) {
  .nav {
    padding: var(--space-3) 0;
  }
  
  .logo-text {
    font-size: var(--text-xs);
  }
  
  .nav-link {
    font-size: var(--text-xs);
  }
}
</style>
