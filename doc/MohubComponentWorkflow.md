# mohub 组件创建步骤

本文档记录 `mohub` 组件库的创建流程，便于后续继续扩展 `m-xx` 组件。

## 1. 分析设计稿

参考来源：

- `design-html/mohub-v1/ui设计规范.md`
- `design-html/mohub-v1/首页.html`
- `design-html/mohub-v1/技术交流.html`

先抽取三类信息：

- 视觉基线：品牌色 `#FE7300`、文字色、背景色、圆角、阴影、字体
- 重复结构：header、footer、按钮、卡片、统计项、帖子卡片
- 页面模式：首页属于营销/平台介绍页，技术交流页属于内容列表页

这一步的目标不是直接照搬 HTML，而是识别哪些内容值得沉淀成组件。

## 2. 建立样式基础层

统一变量放在 `src/styles/common.scss`，包括：

- 颜色变量
- 字体变量
- 圆角和阴影
- 容器宽度
- 公共 mixin，例如 `m-container`、`m-card`、`m-hover-lift`

Vite 已通过 `vite.config.js` 自动注入：

```scss
@use "@/styles/common.scss" as *;
```

所以所有 `lang="scss"` 的 Vue 组件都可以直接使用这些变量。

## 3. 定义组件目录和命名

组件统一放在：

- `src/components/mohub/`

命名规则：

- 组件文件使用 PascalCase，例如 `MButton.vue`
- CSS 类名前缀使用 `m-`，例如 `m-button`


## 4. 组件实现原则

实现时遵循两条规则：

- 简单样式直接写在组件内部 `<style scoped lang="scss">`
- 样式较复杂的组件拆到独立 scss 文件，例如：
  - `src/components/mohub/styles/m-header.scss`
  - `src/components/mohub/styles/m-footer.scss`

组件优先做成“可复用壳子”，通过 `props` 和 `slot` 承载变化，例如：

- `MButton` 用 `variant`、`size`
- `MBadge` 用 `tone`
- `MFeatureCard` 用 `title`、`description`，图标通过 `slot`

## 为组件补 Storybook

每个关键基础组件都补一个 story，放在：

- `src/components/mohub/stories/`

本次已添加：

- `MButton.stories.js`

## 导出组件

`src\components\mohub\index.js`


```js
export { default as MStatCard } from './MStatCard.vue'
```



