<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { getWorkBySlug } from '@/data/works'

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
})

const work = computed(() => getWorkBySlug(props.slug))
</script>

<template>
  <article v-if="work" class="page page--detail">
    <p class="eyebrow">
      <RouterLink to="/works" class="inline-link">実績</RouterLink>
      <span aria-hidden="true"> / </span>
      <span>{{ work.title }}</span>
    </p>
    <h1 class="page-title">{{ work.title }}</h1>
    <p class="detail-meta">{{ work.year }} · {{ work.role }}</p>
    <ul class="tags detail-tags" aria-label="タグ">
      <li v-for="tag in work.tags" :key="tag" class="tags__item">{{ tag }}</li>
    </ul>
    <p class="lead">{{ work.summary }}</p>
    <div class="detail-body">
      <p v-for="(paragraph, i) in work.body" :key="i">{{ paragraph }}</p>
    </div>
    <p class="back">
      <RouterLink to="/works" class="inline-link">← 実績一覧へ</RouterLink>
    </p>
  </article>
  <section v-else class="page">
    <h1 class="page-title">見つかりませんでした</h1>
    <p class="lead">URL のスラッグが <code>works.js</code> に存在しません。</p>
    <RouterLink to="/works" class="button">実績一覧へ</RouterLink>
  </section>
</template>
