import MButton from '../MButton.vue'
import MCard from '../MCard.vue'

export default {
  title: 'Mohub/MCard',
  component: MCard,
}

export const Default = () => ({
  components: { MButton, MCard },
  template: `
    <div style="max-width: 420px; padding: 24px; background: #f8fafc;">
      <m-card title="资料中心">
        <template #extra>
          <a href="#" style="color: #fe7300;">查看更多</a>
        </template>
        <p style="margin: 0 0 16px; color: #64748b; line-height: 1.8;">
          这是一个基础卡片容器，适合承载列表、说明块和侧边栏模块。
        </p>
        <m-button variant="default">查看详情</m-button>
      </m-card>
    </div>
  `,
})
