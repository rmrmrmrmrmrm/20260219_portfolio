<script setup>
import { RouterLink } from 'vue-router'
import { works } from '@/data/works'
</script>

<template>
  <section class="page">
    <h1 class="page-title">実績</h1>
    <p class="lead">
      案件データは <code>src/data/works.js</code> にまとめています。ここに行を足すと一覧と詳細の両方に反映されます。
    </p>
    <ul class="work-list">
      <li v-for="item in works" :key="item.slug" class="work-card">
        <RouterLink :to="{ name: 'work-detail', params: { slug: item.slug } }" class="work-card__link">
          <span class="work-card__title">{{ item.title }}</span>
          <span class="work-card__meta">{{ item.year }} · {{ item.role }}</span>
          <p class="work-card__summary">{{ item.summary }}</p>
          <ul class="tags" aria-label="タグ">
            <li v-for="tag in item.tags" :key="tag" class="tags__item">{{ tag }}</li>
          </ul>
        </RouterLink>
      </li>
    </ul>
  </section>
</template>
