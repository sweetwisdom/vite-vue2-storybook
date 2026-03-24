/** @type { import('@storybook/vue').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  locale: {
    name: '语言',
    description: '切换组件语言',
    defaultValue: 'zh',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'zh', right: '🇨🇳', title: '中文' },
        { value: 'en', right: '🇺🇸', title: 'English' },
      ],
      showName: true,
    },
  },
}

export default preview
// .storybook/preview.js
