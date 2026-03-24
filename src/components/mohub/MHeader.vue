<template>
  <header class="m-header">
    <div class="m-header__inner">
      <div class="m-header__left">
        <m-logo tagline="Scientific Collaboration Cloud" />
        <nav class="m-header__nav">
          <router-link
            v-for="item in navItems"
            :key="item.to + item.label"
            :to="item.to"
            :exact="item.to === '/'"
            class="m-header__nav-link"
          >
            <span v-if="item.icon" class="m-header__nav-icon"><m-icon :name="item.icon" /></span>
            <span>{{ item.label }}</span>
          </router-link>
        </nav>
      </div>

      <div class="m-header__actions">
        <div class="m-header__tools">
          <m-icon-button label="搜索"><m-icon name="search" /></m-icon-button>
          <m-icon-button label="资料库"><m-icon name="library" /></m-icon-button>
          <m-icon-button label="消息通知" :dot="true"><m-icon name="bell" /></m-icon-button>
        </div>
        <div class="m-header__divider"></div>
        <div class="m-header__profile">
          <div class="m-header__avatar">MO</div>
          <m-icon name="chevron-down" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import MIcon from './MIcon.vue'
import MIconButton from './MIconButton.vue'
import MLogo from './MLogo.vue'

export default {
  name: 'MHeader',
  components: {
    MIcon,
    MIconButton,
    MLogo,
  },
  data() {
    return {
      navItems: [
        { label: '首页', to: '/' },
        { label: '技术交流', to: '/tech' },
        { label: '众创共享', to: '/tech' },
        { label: '高校专区', to: '/tech' },
        { label: '竞赛', to: '/tech' },
        { label: '智能问答助手', to: '/tech', icon: 'sparkles' },
      ],
    }
  },
}
</script>

<style scoped lang="scss" src="./styles/m-header.scss"></style>
