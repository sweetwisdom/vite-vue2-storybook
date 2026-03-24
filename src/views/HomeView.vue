<template>
  <div class="page page--home">
    <section class="hero-panel">
      <div class="hero-panel__lead">
        <p class="section-kicker">Vue 2 Component System</p>
        <h1>为组件库建立一张清晰、可信的前台首页。</h1>
        <p class="hero-panel__copy">
          这里展示的不是某个单独业务页面，而是一套可复用 UI 能力的入口。
          组件、文档和设计语义需要同时被看见，Vue Router 负责拆分视图，首页负责建立组件库认知。
        </p>

        <div class="hero-panel__actions">
          <router-link to="/about" class="button button--solid">查看组件库说明</router-link>
          <a href="https://storybook.js.org/" target="_blank" rel="noreferrer" class="button button--ghost">
            打开 Storybook 生态
          </a>
        </div>
      </div>

      <aside class="signal-card">
        <p class="signal-card__label">Library Snapshot</p>
        <div class="signal-card__value">03</div>
        <p class="signal-card__copy">三个核心面向: 组件开发、文档预览、品牌表达。</p>
        <ul class="signal-card__list">
          <li>可扩展的组件展示入口</li>
          <li>统一的品牌壳层与导航</li>
          <li>适合 Storybook 语境的介绍文案</li>
        </ul>
      </aside>
    </section>

    <section class="metrics-strip" aria-label="Project metrics">
      <article v-for="metric in metrics" :key="metric.label" class="metric-chip">
        <span class="metric-chip__value">{{ metric.value }}</span>
        <span class="metric-chip__label">{{ metric.label }}</span>
      </article>
    </section>

    <section class="story-grid">
      <article class="story-card story-card--feature">
        <p class="section-kicker">Library Positioning</p>
        <h2>首页要回答: 这套组件能服务什么团队，解决什么问题。</h2>
        <p>
          视觉上保留识别度，但文案重心改成组件库能力说明。访问者进入首页后，
          应该立刻知道这里是一个基于 Vue 2、Vite 和 Storybook 的 UI 基础设施项目。
        </p>
      </article>

      <article class="story-card">
        <p class="section-kicker">Documentation</p>
        <h3>文档不只是附属品</h3>
        <p>Storybook 在这里不是演示工具，而是组件开发、状态校验和文档预览的主工作台。</p>
      </article>

      <article class="story-card">
        <p class="section-kicker">Reusability</p>
        <h3>组件先于页面复制</h3>
        <p>目标不是快速拼出一页，而是沉淀按钮、表单、布局等可持续复用的基础模块。</p>
      </article>
    </section>

    <section class="manifesto-panel">
      <div>
        <p class="section-kicker">Library Manifesto</p>
        <h2>组件库的首页，首先要传达稳定性、边界感和复用价值。</h2>
      </div>
      <p>
        所以这里不再强调“页面改造”本身，而是强调组件组织方式、文档体系和视觉识别。
        这样首页和关于页才真正服务于组件库，而不是服务于一次性的展示文案。
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      metrics: [
        { value: '02', label: 'Route views' },
        { value: '07', label: 'Story files' },
        { value: 'UI', label: 'Library focus' },
      ],
    }
  },
}
</script>
