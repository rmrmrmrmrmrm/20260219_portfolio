<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { getWorkBySlug } from '@/data/works'

const baseUrl = import.meta.env.BASE_URL

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
})

const work = computed(() => getWorkBySlug(props.slug))

const imageSrc = computed(() => {
  const path = work.value?.image
  if (!path) return ''
  const normalized = path.replace(/^\//, '')
  return `${baseUrl}${normalized}`
})
const imageSrc2 = computed(() => {
  const path = work.value?.image2
  if (!path) return ''
  const normalized = path.replace(/^\//, '')
  return `${baseUrl}${normalized}`
})
const imageSrc3 = computed(() => {
  const path = work.value?.image3
  if (!path) return ''
  const normalized = path.replace(/^\//, '')
  return `${baseUrl}${normalized}`
})

const overviewText = computed(
  () => work.value?.overview ?? work.value?.effort ?? '',
)

const impressionParagraphs = computed(
  () => work.value?.impressions ?? work.value?.body ?? [],
)
</script>

<template>
  <article v-if="work" class="page page--detail">
    <p class="eyebrow">
      <RouterLink to="/works" class="inline-link">実績</RouterLink>
      <span aria-hidden="true"> / </span>
      <span>{{ work.subtitle }} {{ work.title }}</span>
    </p>
    <h1 class="page-title"><span class="page-title--sub">{{ work.subtitle }}</span>{{ work.title }}</h1>
    <p class="detail-meta">{{ work.year }} · {{ work.role }}</p>
    <ul class="tags detail-tags" aria-label="タグ">
      <li v-for="tag in work.tags" :key="tag" class="tags__item">{{ tag }}</li>
    </ul>
    <p class="detail-figure-note">画像をクリックで拡大表示</p>
    <div class="detail-figure-box">
      <figure v-if="work.image && imageSrc" class="detail-figure">
        <a :href="imageSrc" target="_blank" rel="noopener noreferrer">
        <img
          class="detail-figure__img"
          :src="imageSrc"
          :alt="`${work.title}`"
          loading="lazy"
          decoding="async"
        />
        </a>
      </figure>
      <figure v-if="work.image2 && imageSrc2" class="detail-figure">
        <a :href="imageSrc2" target="_blank" rel="noopener noreferrer">
        <img
          class="detail-figure__img"
          :src="imageSrc2"
          :alt="`${work.title}`"
          loading="lazy"
          decoding="async"
        />
        </a>
      </figure>
      <figure v-if="work.image3 && imageSrc3" class="detail-figure">
        <a :href="imageSrc3" target="_blank" rel="noopener noreferrer">
        <img
          class="detail-figure__img"
          :src="imageSrc3"
          :alt="`${work.title}`"
          loading="lazy"
          decoding="async"
        />
        </a>
      </figure>
    </div><!-- /detail-figure-box -->
    <section v-if="overviewText" class="detail-section">
      <h2 class="detail-section__ttl">概要</h2>
      <p class="detail-section__body">{{ overviewText }}</p>
    </section>
    <dl v-if="work.url || work.stack" class="detail-facts">
      <template v-if="work.url">
        <dt>URL</dt>
        <dd>
          <a :href="work.url" target="_blank" rel="noopener noreferrer">{{ work.url }}</a>
        </dd>
      </template>
      <template v-if="work.effort">
        <dt>工数</dt>
        <dd>{{ work.effort }}</dd>
      </template>
      <template v-if="work.stack">
        <dt>技術スタック</dt>
        <dd>{{ work.stack }}</dd>
      </template>
    </dl>
    <section v-if="impressionParagraphs.length" class="detail-section">
      <h2 class="detail-section__ttl">感想</h2>
      <div class="detail-body">
        <p v-for="(paragraph, i) in impressionParagraphs" :key="i">{{ paragraph }}</p>
      </div>
    </section>
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
