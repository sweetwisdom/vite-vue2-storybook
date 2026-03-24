import MButton from '../MButton.vue'
import MIcon from '../MIcon.vue'

export default {
  title: 'Mohub/MButton',
  component: MButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'default', 'success', 'warning', 'danger', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['md', 'lg'],
    },
  },
}

const Template = (args) => ({
  components: { MButton, MIcon },
  data() {
    return { args }
  },
  template: `
    <m-button v-bind="args">
      <template #iconLeft><m-icon name="rocket" /></template>
      开启协作之旅
    </m-button>
  `,
})

export const Primary = Template.bind({})
Primary.args = { variant: 'primary', size: 'lg' }

export const Default = Template.bind({})
Default.args = { variant: 'default', size: 'md' }

export const Success = Template.bind({})
Success.args = { variant: 'success', size: 'md' }

export const Warning = Template.bind({})
Warning.args = { variant: 'warning', size: 'md' }

export const Danger = Template.bind({})
Danger.args = { variant: 'danger', size: 'md' }
