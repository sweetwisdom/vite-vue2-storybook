# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
vite-vue2-ui

基于 **Vite 6 + Vue 2.7 + SCSS** 的组件库，使用 **Storybook 7** 进行组件开发与文档预览。

- **Type**: Vite + Vue 2 SPA
- **Package Manager**: pnpm
- **CSS Preprocessor**: SCSS with global variables (`@/styles/common.scss`)

## Commands

```bash
pnpm dev           # 启动开发服务器
pnpm build        # 构建生产版本
pnpm preview     # 预览生产构建
pnpm storybook   # 启动 Storybook (端口 6006)
pnpm build-storybook  # 构建 Storybook
```

## Architecture

- 路径别名: `@` → `src/`, `~` → 项目根目录
- Storybook 配置位于 `.storybook/`
- 组件 story 文件放在 `src/**/*.stories.js`
- SCSS 全局变量通过 Vite 配置自动注入到所有 Vue 组件

## Storybook

Storybook 7.6 with Vue 2 support:

- `src/**/*.stories.@(js|jsx|mjs|ts|tsx)` - story 文件模式
- `src/**/*.mdx` - MDX 文档
- Addons: links, essentials, interactions
