<template>
  <div class="m-app-shell">
    <m-header />
    <main class="m-app-shell__main">
      <router-view />
    </main>
    <m-footer />
  </div>
</template>

<script>
import MFooter from '@/components/mohub/MFooter.vue'
import MHeader from '@/components/mohub/MHeader.vue'

export default {
  name: 'AppShell',
  components: {
    MFooter,
    MHeader,
  },
}
</script>

<style scoped lang="scss">
.m-app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.m-app-shell__main {
  flex: 1;
}
</style>
