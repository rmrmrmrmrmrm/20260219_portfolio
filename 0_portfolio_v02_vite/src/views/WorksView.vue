<script setup>
import { RouterLink } from 'vue-router'
import { works } from '@/data/works'
</script>

<template>
  <section class="page">
    <h1 class="page-title">WORKS</h1>
    <p class="lead">
      できること：Webサイト制作（ディレクション、デザイン、コーディング）、チラシ制作、イラスト制作（LINEスタンプ）
      <!-- 案件データは <code>src/data/works.js</code> にまとめています。ここに行を足すと一覧と詳細の両方に反映されます。 -->
    </p>
    <ul class="work-list">
      <li v-for="item in works" :key="item.slug" class="work-card">
        <RouterLink :to="{ name: 'work-detail', params: { slug: item.slug } }" class="work-card__link">
          <span class="work-card__year">{{ item.year }}</span>
          <figure v-if="item.image" class="work-card__figure">
            <img
              class="work-card__figure__img"
              :src="item.image" 
              :alt="item.title"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <span class="work-card__title"><span class="page-title--sub">{{ item.subtitle }}</span>{{ item.title }}</span>
          <span class="work-card__meta">{{ item.role }}</span>
        </RouterLink>
      </li>
    </ul>
  </section>
</template>
