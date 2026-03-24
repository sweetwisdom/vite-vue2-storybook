import MHeader from '../MHeader.vue'

export default {
  title: 'Mohub/MHeader',
  component: MHeader,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Default = () => ({
  components: { MHeader },
  template: '<m-header />',
})
