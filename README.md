# vite-vue2-ui

基于 **Vite 6 + Vue 2.7 + SCSS** 的组件库，使用 **Storybook 7** 进行组件开发与文档预览。

## 技术栈

| 工具                | 版本  | 说明                                      |
| --------------------- | ------- | ------------------------------------------- |
| Vite                | 6.x   | 构建工具                                  |
| Vue                 | 2.7.x | 最后一个 Vue 2 版本，内置 Composition API |
| @vitejs/plugin-vue2 | —    | Vue 2.7 SFC 支持                          |
| sass-embedded       | —    | SCSS 编译（Vite 6 modern API）            |
| Storybook           | 7.x   | 组件文档与预览（Vue 2 支持的最后版本）    |

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务
npm run dev

# 启动 Storybook（不自动打开浏览器）
npm run storybook
```



## Scripts

```bash
npm run dev              # Vite 开发服务
npm run build            # 打包构建
npm run storybook        # Storybook 预览（端口 6006）
npm run build-storybook  # 构建静态 Storybook 文档
```

## 注意事项

* Vue 2 已于 2023-12-31 EOL，Storybook 8+ 不再支持 Vue 2，本项目锁定 Storybook **7.x**


