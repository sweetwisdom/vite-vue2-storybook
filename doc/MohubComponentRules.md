# mohub 组件创建规则

基于 `doc/MohubComponentWorkflow.md`，这里定义新增 `mohub` 组件时的最小规则。

## 1. 命名与目录

- 组件统一放在 `src/components/mohub/`
- 文件名使用 PascalCase，例如 `MButton.vue`
- CSS 类名前缀统一使用 `m-`，例如 `m-button`
- 新组件完成后，必须加入 `src/components/mohub/index.js`

## 2. 样式规则

- SCSS 变量统一使用 `src/styles/common.scss`
- 不允许在组件里随意新增一套颜色、圆角、阴影命名
- 简单样式写在组件内部 `<style scoped lang="scss">`
- 复杂样式拆到 `src/components/mohub/styles/`

## 3. API 设计规则

- 优先兼容 Element UI 的属性命名和使用方式
- 视觉可以适配 mohub，但 API 不要自创一套
- 优先使用 `props`、`slot`、事件组合能力，不要把业务数据写死在组件内部

示例：

- `m-button` 使用 `variant`、`size`
- `m-input` 支持 `v-model`、`clearable`
- `m-dialog` 支持 `:visible.sync`
- `m-tabs` / `m-tab-pane` 支持 `v-model + name + label`

## 4. 开发顺序

新增组件时按以下顺序：

1. 先看设计稿，确认是否值得沉淀成通用组件
2. 先补变量和公共样式能力，再写组件
3. 组件完成后补 Storybook story
4. 最后再在页面里组合使用

## 5. 验证要求

每新增一个组件，至少完成：

- 加入 `index.js` 导出
- 新增对应 story
- 执行 `pnpm build`
- 执行 `pnpm build-storybook`

## 6. 禁止事项

- 不要直接在页面里复制大段结构代替组件
- 不要绕开 `common.scss` 直接硬编码整套视觉变量
- 不要做只适配单个页面、无法复用的“伪组件”
