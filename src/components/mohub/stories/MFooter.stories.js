import MFooter from '../MFooter.vue'

export default {
  title: 'Mohub/MFooter',
  component: MFooter,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Default = () => ({
  components: { MFooter },
  template: '<m-footer />',
})
