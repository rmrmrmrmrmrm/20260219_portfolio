<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()
const homeActive = computed(() => route.name === 'home')
const worksActive = computed(
  () => route.name === 'works' || route.name === 'work-detail',
)
</script>

<template>
  <div class="layout">
    <header class="site-header">
      <RouterLink to="/" class="logo">Portfolio</RouterLink>
      <nav class="nav" aria-label="メイン">
        <RouterLink
          to="/"
          class="nav-link"
          :class="{ 'nav-link--active': homeActive }"
        >
          TOP
        </RouterLink>
        <RouterLink
          to="/works"
          class="nav-link"
          :class="{ 'nav-link--active': worksActive }"
        >
          実績
        </RouterLink>
      </nav>
    </header>
    <main class="site-main">
      <RouterView />
    </main>
    <footer class="site-footer">
      <p class="footer-note">
        MASUDA RISA
        <!-- 叩き台 — 文言・実績データは <code>src/data/works.js</code> で編集できます。 -->
      </p>
    </footer>
  </div>
</template>
