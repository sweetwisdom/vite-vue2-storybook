<template>
  <div class="app-shell">
    <div class="app-shell__grain"></div>
    <header class="site-header">
      <router-link to="/" class="brand-mark">
        <span class="brand-mark__eyebrow">Component Library</span>
        <span class="brand-mark__title">Vite Vue2 UI</span>
      </router-link>

      <nav class="site-nav" aria-label="Main navigation">
        <router-link to="/" exact class="site-nav__link">首页</router-link>
        <router-link to="/about" class="site-nav__link">关于</router-link>
      </nav>
    </header>

    <main class="site-main">
      <router-view />
    </main>

    <footer class="site-footer">
      <p>Built for reusable UI, documented in Storybook, delivered with Vue 2 and Vite.</p>
      <p>组件不是页面碎片，而是产品界面的可复用基础设施。</p>
    </footer>
  </div>
</template>
