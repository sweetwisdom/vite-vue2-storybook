<template>
  <footer class="m-footer">
    <div class="m-footer__inner">
      <div class="m-footer__main">
        <div class="m-footer__brand">
          <div class="m-footer__logo"><span>mo</span>hub</div>
          <p>连接智慧，驱动创新。mohub 是面向未来的专业科学计算社区与协作平台。</p>
        </div>

        <div class="m-footer__stats">
          <m-stat-card value="150,000+" label="活跃开发者" />
          <m-stat-card value="85,000+" label="成熟计算模型" />
          <m-stat-card value="200+" label="重点合作高校" />
        </div>
      </div>

      <div class="m-footer__bottom">
        <div class="m-footer__links">
          <a href="#">关于平台</a>
          <a href="#">技术文档</a>
          <a href="#">帮助中心</a>
          <a href="#">反馈建议</a>
        </div>
        <div class="m-footer__meta">© 2026 mohub Inc. 保留所有权利。</div>
      </div>
    </div>
  </footer>
</template>

<script>
import MStatCard from './MStatCard.vue'

export default {
  name: 'MFooter',
  components: {
    MStatCard,
  },
}
</script>

<style scoped  >
@import "./styles/m-footer.scss"
</style>
