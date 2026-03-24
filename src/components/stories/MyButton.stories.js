// src/components/MyButton.stories.js
import MyButton from '../MyButton.vue'

export default {
  title: 'Components/MyButton',
  component: MyButton,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'danger'],
      description: '按钮类型',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    label: {
      control: 'text',
      description: '按钮文字',
    },
  },
}

// ✅ Vue 2 正确写法：直接用 args 对象，不用 props
const Template = (args) => ({
  components: { MyButton },
  data() {
    return { args }
  },
  template: `<MyButton :type="args.type" :disabled="args.disabled">111</MyButton>`,
})

export const Primary = Template.bind({})
Primary.args = { type: 'primary', disabled: false, label: '主要按钮' }
Primary.storyName = '主要按钮'

export const Danger = Template.bind({})
Danger.args = { type: 'danger', disabled: false, label: '危险按钮' }
Danger.storyName = '危险按钮'

export const Disabled = Template.bind({})
Disabled.args = { type: 'primary', disabled: true, label: '禁用状态' }
Disabled.storyName = '禁用状态'