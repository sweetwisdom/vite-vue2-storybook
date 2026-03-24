# Storybook 7 + Vite + Vue 2.7 使用指南

> 适用版本：Storybook 7.x · Vite 6.x · Vue 2.7.x · @storybook/vue-vite 7.x

---

## 一、快速入门

### 1.1 前置说明********


| 项目         | 说明                                                        |
| ------------ | ----------------------------------------------------------- |
| Vue 2 EOL    | Vue 2 已于 2023-12-31 停止维护，Storybook 8+ 不再支持 Vue 2 |
| 必须使用     | Storybook**7.x**（最后支持 Vue 2 的大版本）                 |
| Framework 包 | `@storybook/vue-vite@7`（内含 builder-vite，无需单独安装）  |

### 1.2 初始化步骤

**Step 1：用 create-vite 创建项目**

```bash
npm create vite@latest my-ui-lib -- --template vue
cd my-ui-lib
```

**Step 2：替换为 Vue 2.7**

```bash
# 卸载 Vue 3
npm uninstall vue @vitejs/plugin-vue

# 安装 Vue 2.7 及专用 Vite 插件
npm install vue@2.7
npm install -D @vitejs/plugin-vue2 sass-embedded
```

**Step 3：用 Storybook CLI 初始化**

```bash
npx storybook@7 init
```

CLI 会自动检测 Vite 环境，但会误装 Vue 3 的 framework。需手动替换：

```bash
npm uninstall @storybook/vue3-vite
npm install -D @storybook/vue-vite@7
```

**Step 4：修改 `src/main.js`（Vue 2 写法）**

```js
import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: h => h(App),
}).$mount('#app')
```

---

## 二、配置文件详解

### 2.1 vite.config.js

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',           // Vite 6 默认值
        additionalData: `@use "@/styles/variables" as *;`, // 全局注入变量
      },
    },
  },
})
```


## 三、取消自动打开浏览器

### 方式一：在 package.json 中加 `--no-open`（推荐）

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "storybook": "storybook dev -p 6006 --no-open",
    "build-storybook": "storybook build"
  }
}
```

### 方式二：使用 `--ci` flag

```bash
storybook dev -p 6006 --ci
```

`--ci` 会同时跳过交互提示和自动打开浏览器，适合 CI/CD 环境。

### 方式三：环境变量（不推荐，兼容性差）

```bash
BROWSER=none storybook dev -p 6006
```

---

## 四、中文界面配置

Storybook 7 的 UI 本身不支持多语言切换，"中文配置"通常指两种场景：

### 4.1 让组件支持中文内容预览（工具栏切换语言）

在 `preview.js` 中声明全局变量，顶部工具栏会出现语言切换器：

```js
// .storybook/preview.js
export const globalTypes = {
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
```

在 Story 中通过 `globals.locale` 获取当前语言：

```js
// MyButton.stories.js
const Template = (args, { globals }) => ({
  components: { MyButton },
  data() {
    return {
      args,
      locale: globals.locale,
    }
  },
  template: `
    <MyButton v-bind="args">
      {{ locale === 'zh' ? '确认' : 'Confirm' }}
    </MyButton>
  `,
})
```

### 4.2 如果项目使用 vue-i18n，结合 decorator 注入

```js
// .storybook/preview.js
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhCN from '../src/locales/zh.json'
import enUS from '../src/locales/en.json'

Vue.use(VueI18n)

export const decorators = [
  (story, context) => {
    const i18n = new VueI18n({
      locale: context.globals.locale || 'zh',
      messages: { zh: zhCN, en: enUS },
    })
    return {
      i18n,
      components: { story },
      template: '<story />',
    }
  },
]
```

---

## 五、编写 Story 规范（Vue 2）

### 5.1 基础模板（推荐写法）

```js
// src/components/MyButton.stories.js
import MyButton from './MyButton.vue'

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
      description: '按钮文字（slot）',
    },
  },
}

// ✅ Vue 2 正确写法：用 data + args，不用 props: Object.keys(argTypes)
const Template = (args) => ({
  components: { MyButton },
  data() {
    return { args }
  },
  template: `<MyButton :type="args.type" :disabled="args.disabled">{{ args.label }}</MyButton>`,
})

export const Primary = Template.bind({})
Primary.args   = { type: 'primary', disabled: false, label: '主要按钮' }
Primary.storyName = '主要按钮'

export const Danger = Template.bind({})
Danger.args    = { type: 'danger', disabled: false, label: '危险按钮' }
Danger.storyName = '危险按钮'

export const Disabled = Template.bind({})
Disabled.args  = { type: 'primary', disabled: true, label: '禁用状态' }
Disabled.storyName = '禁用状态'
```

### 5.2 常见 argTypes 控件类型

```js
argTypes: {
  size:        { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
  color:       { control: 'color' },
  count:       { control: { type: 'range', min: 0, max: 100, step: 1 } },
  date:        { control: 'date' },
  visible:     { control: 'boolean' },
  text:        { control: 'text' },
  json:        { control: 'object' },
  // 隐藏某个 prop
  internalId:  { table: { disable: true } },
}
```

### 5.3 添加 Story 级别描述文档

```js
Primary.parameters = {
  docs: {
    description: {
      story: '这是默认的主要按钮，用于表单提交等主操作场景。',
    },
  },
}
```

---

## 六、项目目录建议

```
my-ui-lib/
├── .storybook/
│   ├── main.js          # Storybook 主配置
│   └── preview.js       # 全局装饰器、参数、样式
├── src/
│   ├── components/
│   │   ├── MyButton/
│   │   │   ├── MyButton.vue
│   │   │   ├── MyButton.stories.js
│   │   │   └── index.js          # 导出组件
│   │   └── index.js              # 统一导出所有组件
│   ├── styles/
│   │   ├── common.scss       # 变量（只放变量和 mixin，无 @use）
│   │   └── index.scss            # 全局基础样式
│   └── main.js
├── vite.config.js
└── package.json
```

---

## 七、发布组件库

### 7.1 发布 Storybook 文档站（Chromatic）

Chromatic 是 Storybook 官方推荐的托管平台，免费套餐可用。

```bash
# 安装 Chromatic CLI
npm install -D chromatic

# 登录 chromatic.com 获取 project-token，然后：
npx chromatic --project-token=<your-project-token>
```

添加 npm script：

```json
{
  "scripts": {
    "chromatic": "npx chromatic --project-token=${CHROMATIC_PROJECT_TOKEN}"
  }
}
```

配合 GitHub Actions 自动部署（`.github/workflows/chromatic.yml`）：

```yaml
name: Chromatic Deployment
on: push
jobs:
  chromatic:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - name: Run Chromatic
        uses: chromaui/action@latest
        with:
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
```

> 将 `CHROMATIC_PROJECT_TOKEN` 添加到 GitHub 仓库的 Secrets 中，不要写死在代码里。

### 7.2 发布到 GitHub Pages（静态站）

```bash
# 构建静态 Storybook
npm run build-storybook
# 产物在 storybook-static/ 目录
```

使用 GitHub Actions 自动部署到 Pages：

```yaml
name: Deploy Storybook to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deploy.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build-storybook
      - uses: actions/upload-pages-artifact@v3
        with:
          path: storybook-static
      - id: deploy
        uses: actions/deploy-pages@v4
```

### 7.3 发布组件库本身到 npm

Storybook 只是文档/预览工具，组件库代码通过 Vite lib 模式打包后发布到 npm。

**vite.config.js 增加 lib 配置：**

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/components/index.js', import.meta.url)),
      name: 'MyUILib',
      fileName: (format) => `my-ui-lib.${format}.js`,
    },
    rollupOptions: {
      // 不打包 Vue，由使用方提供
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' },
      },
    },
  },
})
```

**package.json 关键字段：**

```json
{
  "name": "my-ui-lib",
  "version": "1.0.0",
  "main": "./dist/my-ui-lib.umd.js",
  "module": "./dist/my-ui-lib.es.js",
  "exports": {
    ".": {
      "import": "./dist/my-ui-lib.es.js",
      "require": "./dist/my-ui-lib.umd.js"
    },
    "./dist/style.css": "./dist/style.css"
  },
  "files": ["dist"],
  "scripts": {
    "build:lib": "vite build"
  }
}
```

**发布：**

```bash
npm run build:lib
npm publish
```

---

## 八、常见问题


| 问题                                      | 原因                                              | 解决                                       |
| ----------------------------------------- | ------------------------------------------------- | ------------------------------------------ |
| `module.exports` CJS 警告                 | Vite 6 项目默认 ESM                               | `.storybook/main.js` 改用 `export default` |
| `template or render function not defined` | Story Template 用了`props: Object.keys(argTypes)` | 改用`data() { return { args } }` 方式      |
| SCSS 变量未找到                           | `additionalData` 路径错误                         | 检查`@` 别名是否指向 `src`，文件是否存在   |
| `@use` rules 顺序错误                     | `common.scss` 内部有 `@use`                   | 变量文件只放纯变量和 mixin，不写任何`@use` |
| Storybook 8 不支持 Vue 2                  | 官方已放弃                                        | 安装时明确使用`npx storybook@7 init`       |
