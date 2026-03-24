import MFeatureCard from '../MFeatureCard.vue'
import MIcon from '../MIcon.vue'

export default {
  title: 'Mohub/MFeatureCard',
  component: MFeatureCard,
}

export const Default = () => ({
  components: { MFeatureCard, MIcon },
  template: `
    <div style="max-width: 360px; padding: 24px; background: #f8fafc;">
      <m-feature-card title="仿真开发" description="全面支持 Syslab 环境，提供卓越的 Julia 与 MATLAB 语法体验，让仿真计算更高效。">
        <template #icon><m-icon name="terminal" /></template>
      </m-feature-card>
    </div>
  `,
})
