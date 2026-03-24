# mohub 设计规范

## 色彩体系
- **主色 (Brand Orange)**: #FE7300
- **背景色 (Page Background)**: #FFFFFF
- **辅助背景 (Secondary BG)**: #F8FAFC
- **文字主色 (Text Main)**: #0F172A
- **文字辅助色 (Text Muted)**: #64748B
- **边框色**: #E2E8F0
- **链接/悬停**: #FE7300

## 字体体系
- **标题字体**: Outfit (400-800 weight)
- **正文字体**: Satoshi (400, 500, 700)
- **标题权重**: Extrabold (800)
- **正文权重**: Regular (400), Medium (500)

## 导航栏组件
```html
<header class="sticky top-0 z-50 bg-white border-b border-slate-100">
    <div class="max-w-[1440px] mx-auto px-10 h-20 flex items-center justify-between">
        <div class="flex items-center gap-10">
            <a href="#" id="nav-logo-link" class="flex items-center gap-2">
                <span class="font-display text-2xl font-extrabold tracking-tight">
                    <span class="text-[#FE7300]">mo</span>hub
                </span>
            </a>
            
            <nav class="hidden lg:flex items-center gap-8">
                <a href="#" class="nav-link nav-link-active font-medium text-slate-700 hover:text-slate-900">首页</a>
                <a href="#" class="nav-link font-medium text-slate-500 hover:text-slate-900">技术交流</a>
                <a href="#" class="nav-link font-medium text-slate-500 hover:text-slate-900">众创共享</a>
                <a href="#" class="nav-link font-medium text-slate-500 hover:text-slate-900">高校专区</a>
                <a href="#" class="nav-link font-medium text-slate-500 hover:text-slate-900">竞赛</a>
                <a href="#" class="nav-link font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1.5">
                    <iconify-icon icon="lucide:sparkles" class="text-[#FE7300]"></iconify-icon>
                    智能问答助手
                </a>
            </nav>
        </div>

        <div class="flex items-center gap-4">
            <div class="flex items-center gap-1">
                <button class="w-9 h-9 flex items-center justify-center text-slate-400 hover:text-[#FE7300] hover:bg-orange-50 rounded-full transition-all">
                    <iconify-icon icon="lucide:search" class="text-xl"></iconify-icon>
                </button>
                <button class="w-9 h-9 flex items-center justify-center text-slate-400 hover:text-[#FE7300] hover:bg-orange-50 rounded-full transition-all">
                    <iconify-icon icon="lucide:library" class="text-xl"></iconify-icon>
                </button>
                <button class="w-9 h-9 flex items-center justify-center text-slate-400 hover:text-[#FE7300] hover:bg-orange-50 rounded-full transition-all relative">
                    <iconify-icon icon="lucide:bell" class="text-xl"></iconify-icon>
                    <span class="absolute top-2.5 right-2.5 w-2 h-2 bg-[#FE7300] rounded-full ring-2 ring-white"></span>
                </button>
            </div>
            <div class="h-8 w-[1px] bg-slate-200"></div>
            <div class="flex items-center gap-3 cursor-pointer group">
                <div class="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" alt="User Avatar" class="w-full h-full object-cover">
                </div>
                <iconify-icon icon="lucide:chevron-down" class="text-slate-400 group-hover:text-slate-600 transition-colors"></iconify-icon>
            </div>
        </div>
    </div>
</header>
```

## 设计样式
- **圆角**: 大卡片 2xl (16px), 小组件 xl (8px)
- **阴影**: subtle shadows (0 20px 25px -5px, 0 8px 10px -6px)
- **间距**: 充足白色空间，grid gap-8 for cards
- **按钮**: 橙色背景，白色文字，圆角 xl，带 hover 效果
- **链接颜色**: 文字色，hover 变橙色
- **导航高亮**: 橙色文字 + 下划线（2px border-bottom）

## 平台频道展示
4 大核心频道卡片：
1. **仿真开发** - Syslab、Julia 等开发环境
2. **众创共享** - 模型库、代码共享
3. **高校专区** - 学术资源、校园授权
4. **AI 助手** - 智能问答、代码补全

## 统计数据展示格式
- 150,000+ 活跃开发者
- 85,000+ 成熟计算模型
- 200+ 重点合作高校


