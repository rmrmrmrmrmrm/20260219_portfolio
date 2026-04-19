<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="page page--home">
    <p class="eyebrow">Portfolio / Knock</p>
    <h1 class="page-title">ようこそ</h1>
    <p class="lead">
      このサイトは Vue + Vite のポートフォリオ用叩き台です。デザインは最小限なので、配色やタイポグラフィはお好みで差し替えてください。
    </p>
    <div class="actions">
      <RouterLink to="/works" class="button">実績を見る</RouterLink>
    </div>
  </section>
</template>
