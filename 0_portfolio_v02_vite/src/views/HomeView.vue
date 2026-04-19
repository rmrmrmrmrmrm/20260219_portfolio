<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="page page--home">
    <p class="eyebrow">Portfolio / Knock</p>
    <h1 class="page-title">
      Good design<br>lasts a long time.
      <!-- 優れたデザインは長持ちする。 -->
      <br><span class="page-title--jp">ずっと、心地よく続くものを</span>
    </h1>
    <div class="lead">
      <!-- このサイトは Vue + Vite のポートフォリオ用叩き台です。
      デザインは最小限なので、配色やタイポグラフィはお好みで差し替えてください。 -->
      <p>
      美しい演出の裏側で、誰にとっても使いやすく、
      <br>ずっと守り続けられる「優しさ」をコードに込めていたい。
      <br>それが、10年この業界で歩んできた私のこだわりです。
      </p>
      <p>
      デザインの意図を汲み取り、長く愛される土台を作る。
      <br>その安心感があるからこそ、新しい挑戦も思い切り楽しめるはず。
      <br>モダンな技術も、温かい配慮も。その両方を詰め込んで、一歩先の実装を目指しています。
      </p>
    </div>
    <p class="lead--en">
      While flashy presentations are nice, I want to infuse my code with "gentleness" that makes it easy for anyone to use and something that can be cherished for a long time.
      <br>That's my commitment after 10 years in this industry.
      <br>Understanding the design intent and creating a foundation that will be loved for years to come.
      <br>It's that sense of security that allows you to fully enjoy new challenges.
      <br>Modern technology and warm consideration—I aim to implement solutions that are one step ahead by incorporating both.
    </p>
    <div class="actions">
      <RouterLink to="/works" class="button">実績を見る</RouterLink>
    </div>
  </section>
</template>
