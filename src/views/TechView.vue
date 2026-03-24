<template>
  <div class="m-tech">
    <section class="m-tech__hero">
      <div class="m-tech__hero-main">
        <p class="m-tech__eyebrow">Technical Exchange</p>
        <h1>技术交流</h1>
        <p>
          聚合产品更新、经验分享与建模讨论。这个页面主要用于验证 mohub 组件在内容型场景下的复用能力。
        </p>
      </div>
      <div class="m-tech__hero-actions">
        <m-button>
          <template #iconLeft><m-icon name="edit" /></template>
          我要发帖
        </m-button>
      </div>
    </section>

    <section class="m-tech__content">
      <div class="m-tech__feed">
        <m-post-card
          v-for="post in posts"
          :key="post.title"
          v-bind="post"
        />
      </div>

      <aside class="m-tech__sidebar">
        <div class="m-tech__panel">
          <div class="m-tech__panel-title"><m-icon name="folder" /> 资料中心</div>
          <ul>
            <li v-for="item in resources" :key="item"><m-icon name="link" /> {{ item }}</li>
          </ul>
        </div>

        <div class="m-tech__panel">
          <div class="m-tech__panel-title"><m-icon name="help" /> 常见问题 FAQ</div>
          <ul>
            <li v-for="item in faqs" :key="item.title">
              <strong>{{ item.title }}</strong>
              <span>{{ item.copy }}</span>
            </li>
          </ul>
        </div>

        <div class="m-tech__panel">
          <div class="m-tech__panel-title"><m-icon name="award" /> 贡献者排行</div>
          <ol class="m-tech__rank-list">
            <li v-for="user in ranks" :key="user.name">
              <span>{{ user.rank }}</span>
              <strong>{{ user.name }}</strong>
              <em>{{ user.score }}</em>
            </li>
          </ol>
        </div>
      </aside>
    </section>
  </div>
</template>

<script>
import MButton from '@/components/mohub/MButton.vue'
import MIcon from '@/components/mohub/MIcon.vue'
import MPostCard from '@/components/mohub/MPostCard.vue'

export default {
  name: 'TechView',
  components: {
    MButton,
    MIcon,
    MPostCard,
  },
  data() {
    return {
      posts: [
        {
          author: '算法实验室',
          meta: '发布于 2 小时前 · MATLAB',
          title: 'MWORKS 2026a 亮点全集：从兼容到体验升级',
          excerpt: '围绕 Julia 解释器性能、IDE 交互优化和模型兼容性，这篇文章系统梳理了新版本里最值得关注的更新点。',
          category: '经验分享',
          tags: ['编译优化', '高性能计算'],
          views: '842',
          comments: '12',
          likes: '42',
        },
        {
          author: '工业机器人小组',
          meta: '发布于 昨天 · 模型库',
          title: 'MWORKS 与帮助手册优化建议公开征集',
          excerpt: '围绕复杂建模场景的文档引导和学习曲线，社区正在征集真实使用反馈，供产品团队排期处理。',
          category: '社区公告',
          tags: ['系统建模', '反馈'],
          views: '2501',
          comments: '128',
          likes: '203',
        },
      ],
      resources: [
        'MWORKS 平台介绍文档',
        '同元软控产品手册 (V2026a)',
        'MWORKS 与 MATLAB 兼容性对照',
        '培训课程配套源代码包',
      ],
      faqs: [
        {
          title: '如何申请星火计划免费试用？',
          copy: '进入权限中心后提交申请，审核通过后即可开通。',
        },
        {
          title: 'Syslab 支持自定义 C/C++ 库吗？',
          copy: '支持通过 ccall 接口直接调用编译好的动态库文件。',
        },
      ],
      ranks: [
        { rank: '1', name: '建模大宗师', score: '2,482 积分' },
        { rank: '2', name: 'Julia_Expert', score: '1,920 积分' },
        { rank: '3', name: '李工_建模中', score: '1,450 积分' },
      ],
    }
  },
}
</script>

<style scoped lang="scss" src="./styles/tech-view.scss"></style>
