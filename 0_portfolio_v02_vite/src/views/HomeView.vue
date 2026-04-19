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
      美しい演出の傍らで、誰にとっても使いやすく、
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
    <!-- <div class="about-lead">
      <p>Web業界歴10年。<br>
        デザイナーとコーダーの経験があり、<br>
        特にHTML/CSS/JavaScriptでの静的コーディング分野での<br>
        <span class="c-marker">サイト更新・CMSカスタマイズ</span>の経験が多いです。<br>
      </p>
      <p>強みは<br>
        ・<span class="c-marker">レガシー/モダン問わない環境への対応</span>、<br>
        ・<span class="c-marker">保守性やアクセシビリティへの配慮</span>、<br class="sponly">・<span class="c-marker">デザイナー経験</span><br>
        と考えています。
      </p>
      <p>今後は<br>
        <span class="c-marker">モダンフロントエンド</span>や、<span class="c-marker">AI活用</span>なども含め、<br>
        技術的な引き出しを増やしつつ、<br class="sponly">ディレクションから関われる実装者を目指したいと考えています。
      </p>
      <p>
        会社によって様々なスタイルがあると思いますが、<br>
        チームの一員として<span class="c-marker">前後工程への配慮</span>や、<br>
        <span class="c-marker">協力し合える環境</span>の一助となるような行動を心がけています。
      </p>
    </div> -->
    <div class="actions">
      <RouterLink to="/works" class="button">実績を見る</RouterLink>
    </div>
  </section>
</template>
