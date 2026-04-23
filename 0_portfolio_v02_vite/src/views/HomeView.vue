<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="page page--home">
    <p class="eyebrow">Portfolio / Knock</p>
    <h1 class="page-title">
      Good design<br>lasts a long time.<!-- 優れたデザインは長持ちする。 -->
      <br><span class="page-title--jp">ずっと、心地よく続くものを</span>
    </h1>
    <div class="lead">
      <p>
      制作の現場で求められるのは実現力とスピード。<br>
      それを支える技術の学習も、チームへの配慮も、制作では大事な事です。<br>
      <br>
      チームと協力してクライアント様やユーザーに長く愛されるプロダクトを作っていきたい、<br>
      そんな想いでクリエイティブに関わっています。
      </p>
    </div>
    <p class="lead--en">
      Production demands a balance of high-quality execution and speed. For me, creative work isn’t just about the output; it's about the technical skill that backs it up and the care we show our teammates.
      <br>I am committed to the creative process because I want to work alongside my team to craft products that earn the lasting affection of our clients and users.
    </p>
    <div class="actions">
      <RouterLink to="/works" class="button">実績を見る</RouterLink>
    </div>
  </section>
</template>
