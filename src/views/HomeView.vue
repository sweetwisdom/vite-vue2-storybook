<template>
  <div class="m-home">
    <section class="m-home__hero">
      <div class="m-home__hero-inner">
        <m-badge>
          <template #icon><m-icon name="rocket" /></template>
          新一代 MATLAB 协作生态系统
        </m-badge>
        <h1 class="m-home__title">mohub</h1>
        <p class="m-home__description">
          为科研人员、工程师和开发者量身定制。在这里，您可以分享高精尖模型、探讨前沿算法，
          或者与数千名 MATLAB 高手并肩前行。
        </p>
        <div class="m-home__actions">
          <m-button size="lg">开启协作之旅</m-button>
          <m-button variant="secondary" size="lg">了解更多功能</m-button>
        </div>

        <div class="m-home__visual">
          <div class="m-home__visual-glow"></div>
          <div class="m-home__visual-toolbar">
            <span></span>
            <span></span>
          </div>
          <div class="m-home__visual-grid">
            <div class="m-home__visual-card"></div>
            <div class="m-home__visual-panel">
              <m-icon name="cpu" />
            </div>
          </div>
          <div class="m-home__visual-row"></div>
        </div>
      </div>
    </section>

    <section class="m-home__features">
      <div class="m-home__section-head">
        <h2>为什么选择 mohub <span>?</span></h2>
        <p>我们提供从开发到共享的全链路专业支持</p>
      </div>

      <div class="m-home__feature-grid">
        <m-feature-card
          v-for="item in features"
          :key="item.title"
          :title="item.title"
          :description="item.description"
        >
          <template #icon><m-icon :name="item.icon" /></template>
        </m-feature-card>
      </div>
    </section>
  </div>
</template>

<script>
import MBadge from '@/components/mohub/MBadge.vue'
import MButton from '@/components/mohub/MButton.vue'
import MFeatureCard from '@/components/mohub/MFeatureCard.vue'
import MIcon from '@/components/mohub/MIcon.vue'

export default {
  name: 'HomeView',
  components: {
    MBadge,
    MButton,
    MFeatureCard,
    MIcon,
  },
  data() {
    return {
      features: [
        {
          icon: 'terminal',
          title: '仿真开发',
          description: '全面支持 Syslab 环境，提供卓越的 Julia 与 MATLAB 语法体验，让仿真计算更高效。',
        },
        {
          icon: 'share',
          title: '众创共享',
          description: '云端模型库一键下载调用，支持多维标签分类。让您的代码创造更大的社会价值。',
        },
        {
          icon: 'graduation',
          title: '高校专区',
          description: '专为学术界设计的协作板块，集成校园正版授权，助力国家级重点实验室项目研发。',
        },
        {
          icon: 'cpu',
          title: 'AI 助手',
          description: '基于垂直领域大模型，秒级生成高质量脚本，解决复杂的矩阵运算与算法优化难题。',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss" src="./styles/home-view.scss"></style>
