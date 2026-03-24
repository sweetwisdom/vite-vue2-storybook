<template>
  <div class="page page--about">
    <section class="about-hero">
      <div>
        <p class="section-kicker">About The Library</p>
        <h1>关于页应该解释这套组件库如何被开发、预览和扩展。</h1>
      </div>
      <p class="about-hero__copy">
        项目采用 Vue 2.7 + Vite 6 + Storybook 7 组合，目标不是做一个营销站，
        而是建立一套适合组件沉淀、文档协作和后续扩展的前端基础设施。
      </p>
    </section>

    <section class="timeline-grid">
      <article v-for="item in timeline" :key="item.year" class="timeline-card">
        <span class="timeline-card__year">{{ item.year }}</span>
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </article>
    </section>

    <section class="principles-panel">
      <div>
        <p class="section-kicker">Principles</p>
        <h2>三条约束，保证这次改造不是表面翻新。</h2>
      </div>

      <ul class="principle-list">
        <li v-for="principle in principles" :key="principle.title" class="principle-list__item">
          <h3>{{ principle.title }}</h3>
          <p>{{ principle.copy }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      timeline: [
        {
          year: '01',
          title: 'Component development',
          description: '基础组件在 Vue 2 环境中开发，保持 API 清晰，避免业务逻辑侵入通用层。',
        },
        {
          year: '02',
          title: 'Storybook preview',
          description: '通过 stories 和 MDX 文档承载交互状态、使用说明和视觉回归的协作入口。',
        },
        {
          year: '03',
          title: 'Scalable foundation',
          description: '首页与关于页负责对外表达组件库定位，为后续新增组件分类页预留结构空间。',
        },
      ],
      principles: [
        {
          title: '组件边界必须明确',
          copy: '文案、视觉和结构都围绕可复用组件展开，而不是围绕某个临时业务页面展开。',
        },
        {
          title: '文档与开发并行',
          copy: '每个组件都应该能在 Storybook 中被独立查看、调试和说明，降低接入与维护成本。',
        },
        {
          title: '品牌表达服务于信任',
          copy: '组件库首页可以有识别度，但最终目的仍然是让团队相信这套 UI 基座足够稳定。',
        },
      ],
    }
  },
}
</script>
