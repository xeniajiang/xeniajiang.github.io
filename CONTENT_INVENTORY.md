# Content Inventory

更新日期：2026-07-27  
统一内容配置：`src/data/siteContent.ts`

## 状态说明

- **已确认**：由现有任务说明明确指定，或由用户直接提供的素材。
- **临时内容**：当前用于维持页面结构或交互入口，尚不是最终内容。
- **缺失**：当前没有可发布内容或文件。
- **需要替换**：已有内容或素材，但来源、准确性、日期或品牌适配性仍需确认。

## 1. 全站、导航与元数据

| 内容模块 | 字段名称 | 当前内容 | 对应页面 | 数据文件位置 | 必填或选填 | 当前状态 |
| --- | --- | --- | --- | --- | --- | --- |
| 全站 | 默认语言 | `en` | 全站 | `siteContent.site.locale` | 必填 | 已确认 |
| 全站 | 主页链接 | `/` | 全站页眉、占位页 | `siteContent.site.homeHref` | 必填 | 已确认 |
| 元数据 | 默认标题 | `Xenia Jiang — Academic Homepage` | 全站 | `siteContent.site.metadata.defaultTitle` | 必填 | 临时内容 |
| 元数据 | 标题模板 | `%s — Xenia Jiang` | 全站 | `siteContent.site.metadata.titleTemplate` | 必填 | 临时内容 |
| 元数据 | 默认描述 | `The academic homepage of Xenia Jiang.` | 全站 | `siteContent.site.metadata.description` | 必填 | 需要替换 |
| 元数据 | 首页标题 | `Xenia Jiang — Academic Homepage` | 首页 | `siteContent.site.homeMetadata.title` | 必填 | 临时内容 |
| 元数据 | 首页描述 | `Xenia Jiang, Researcher at Peking University.` | 首页 | `siteContent.site.homeMetadata.description` | 必填 | 需要替换 |
| 元数据 | CV 页面标题与描述 | 未配置 | CV | 未配置 | 必填 | 缺失 |
| 元数据 | 中文页面标题与描述 | 未配置 | 中文版本 | 未配置 | 必填 | 缺失 |
| 元数据 | Open Graph 标题、描述、图片 | 未配置 | 全站分享预览 | 未配置 | 选填 | 缺失 |
| 元数据 | X / Twitter 分享字段 | 未配置 | 全站分享预览 | 未配置 | 选填 | 缺失 |
| 页眉 | 主页无障碍标签 | `Xenia Jiang home` | 全站 | `siteContent.accessibility.homeLabel` | 必填 | 临时内容 |
| 页眉 | 桌面导航无障碍标签 | `Primary navigation` | 全站 | `siteContent.accessibility.primaryNavigationLabel` | 必填 | 已确认 |
| 页眉 | 移动导航无障碍标签 | `Mobile navigation` | 全站 | `siteContent.accessibility.mobileNavigationLabel` | 必填 | 已确认 |
| 页眉 | 移动菜单关闭文字 | `Close` | 全站移动端 | `siteContent.interface.menuOpenLabel` | 必填 | 已确认 |
| 页眉 | 移动菜单打开文字 | `Menu` | 全站移动端 | `siteContent.interface.menuClosedLabel` | 必填 | 已确认 |
| 导航 | Research | `Research` → `#research` | 首页 | `siteContent.navigation[0]` | 必填 | 已确认 |
| 导航 | Writing | `Writing` → `#writing` | 首页 | `siteContent.navigation[1]` | 必填 | 已确认 |
| 导航 | About | `About` → `#about` | 首页 | `siteContent.navigation[2]` | 必填 | 已确认 |
| 导航 | CV | `CV` → `/cv` | 全站 | `siteContent.navigation[3]` | 必填 | 临时内容 |
| 导航 | 中文入口 | `中文` → `/zh` | 全站 | `siteContent.language` | 必填 | 临时内容 |

## 2. 首页

### 2.1 Hero / About 摘要

| 内容模块 | 字段名称 | 当前内容 | 对应页面 | 数据文件位置 | 必填或选填 | 当前状态 |
| --- | --- | --- | --- | --- | --- | --- |
| 个人信息 | 英文姓名 | `Xenia Jiang` | 首页、全站页眉 | `siteContent.person.englishName` | 必填 | 已确认 |
| 个人信息 | 中文姓名 | `姜浸月` | 首页、全站页眉 | `siteContent.person.chineseName` | 必填 | 已确认 |
| 个人信息 | 姓名分隔符 | `/` | 首页、全站页眉 | `siteContent.person.nameSeparator` | 必填 | 已确认 |
| 个人信息 | 身份标签 | `Researcher` | 首页 | `siteContent.person.role` | 必填 | 已确认 |
| 个人信息 | 学校 | `Peking University` | 首页 | `siteContent.person.institution` | 必填 | 已确认 |
| About 摘要 | 个人简介 | `[INTRODUCTION TO BE PROVIDED BY XENIA]` | 首页 About/Hero | `siteContent.person.introduction` | 必填 | 缺失 |
| 个人照片 | 图片路径 | `/images/portrait.png` | 首页 | `siteContent.person.portrait` | 必填 | 已确认 |
| 个人照片 | 替代文字 | `Portrait of Xenia Jiang` | 首页 | `siteContent.person.portraitAlt` | 必填 | 需要替换 |

### 2.2 首页界面标签

| 内容模块 | 字段名称 | 当前内容 | 对应页面 | 数据文件位置 | 必填或选填 | 当前状态 |
| --- | --- | --- | --- | --- | --- | --- |
| Current | 区块标题 | `Current` | 首页 | `siteContent.interface.currentHeading` | 必填 | 已确认 |
| Research | 区块标题 | `Research` | 首页 | `siteContent.interface.researchHeading` | 必填 | 已确认 |
| Research Agendas | 区块标题 | `Research Agendas` | 首页 | `siteContent.interface.researchAgendasHeading` | 必填 | 已确认 |
| Writing | 区块标题 | `Recent Writing` | 首页 | `siteContent.interface.writingHeading` | 必填 | 已确认 |
| Writing | 查看全部文字 | `View all` | 首页 | `siteContent.interface.writingViewAllLabel` | 必填 | 已确认 |
| 通用界面 | 箭头字符 | `→` | 首页 | `siteContent.interface.arrowSymbol` | 必填 | 已确认 |
| Writing | 来源与日期分隔符 | `·` | 首页 | `siteContent.interface.metadataSeparator` | 必填 | 已确认 |

### 2.3 Current 会议动态

| 内容模块 | 字段名称 | 当前内容 | 对应页面 | 数据文件位置 | 必填或选填 | 当前状态 |
| --- | --- | --- | --- | --- | --- | --- |
| Current 01 | 会议名称 | `AAA 2026` | 首页 | `siteContent.current[0].title` | 必填 | 已确认 |
| Current 01 | 对应项目 | `Contained Gender Transgression in Luoyang` | 首页 | `siteContent.current[0].project` | 必填 | 已确认 |
| Current 01 | 链接 | `#research-contained-gender-transgression-in-luoyang` | 首页 | `siteContent.current[0].href` | 必填 | 临时内容 |
| Current 02 | 会议名称 | `WPATH Scientific Symposium 2026` | 首页 | `siteContent.current[1].title` | 必填 | 已确认 |
| Current 02 | 对应项目 | `Minority Stress Pathways and Mental Health Outcomes: A National Survey of Transgender and Gender-Diverse Individuals in China` | 首页 | `siteContent.current[1].project` | 必填 | 需要替换 |
| Current 02 | 链接 | `#research-china-trans-survey-2021` | 首页 | `siteContent.current[1].href` | 必填 | 临时内容 |

## 3. Research 与研究项目页

当前没有独立研究项目路由。六个项目链接只指向首页中各自所在行，点击后不会打开项目详情。

| 内容模块 | 字段名称 | 当前内容 | 对应页面 | 数据文件位置 | 必填或选填 | 当前状态 |
| --- | --- | --- | --- | --- | --- | --- |
| Research 01 | 编号 | `01` | 首页 Research | `siteContent.research[0].number` | 必填 | 已确认 |
| Research 01 | 标题 | `Situated Gender Nonconformity` | 首页 Research | `siteContent.research[0].title` | 必填 | 已确认 |
| Research 01 | 说明 | `[DESCRIPTION TO BE PROVIDED BY XENIA]` | 首页 Research | `siteContent.research[0].description` | 必填 | 缺失 |
| Research 01 | 详情链接 | `#research-situated-gender-nonconformity` | 首页 Research | `siteContent.research[0].href` | 必填 | 临时内容 |
| Research 02 | 编号 | `02` | 首页 Research | `siteContent.research[1].number` | 必填 | 已确认 |
| Research 02 | 标题 | `Queer Identification across Europe` | 首页 Research | `siteContent.research[1].title` | 必填 | 已确认 |
| Research 02 | 说明 | `[DESCRIPTION TO BE PROVIDED BY XENIA]` | 首页 Research | `siteContent.research[1].description` | 必填 | 缺失 |
| Research 02 | 详情链接 | `#research-queer-identification-across-europe` | 首页 Research | `siteContent.research[1].href` | 必填 | 临时内容 |
| Research 03 | 编号 | `03` | 首页 Research | `siteContent.research[2].number` | 必填 | 已确认 |
| Research 03 | 标题 | `China Trans Survey 2021` | 首页 Research | `siteContent.research[2].title` | 必填 | 已确认 |
| Research 03 | 说明 | `[DESCRIPTION TO BE PROVIDED BY XENIA]` | 首页 Research | `siteContent.research[2].description` | 必填 | 缺失 |
| Research 03 | 详情链接 | `#research-china-trans-survey-2021` | 首页 Research | `siteContent.research[2].href` | 必填 | 临时内容 |
| Research 04 | 编号 | `04` | 首页 Research | `siteContent.research[3].number` | 必填 | 已确认 |
| Research 04 | 标题 | `Trans Height` | 首页 Research | `siteContent.research[3].title` | 必填 | 已确认 |
| Research 04 | 说明 | `[DESCRIPTION TO BE PROVIDED BY XENIA]` | 首页 Research | `siteContent.research[3].description` | 必填 | 缺失 |
| Research 04 | 详情链接 | `#research-trans-height` | 首页 Research | `siteContent.research[3].href` | 必填 | 临时内容 |
| Research 05 | 编号 | `05` | 首页 Research | `siteContent.research[4].number` | 必填 | 已确认 |
| Research 05 | 标题 | `Contained Gender Transgression in Luoyang` | 首页 Research | `siteContent.research[4].title` | 必填 | 已确认 |
| Research 05 | 说明 | `[DESCRIPTION TO BE PROVIDED BY XENIA]` | 首页 Research | `siteContent.research[4].description` | 必填 | 缺失 |
| Research 05 | 详情链接 | `#research-contained-gender-transgression-in-luoyang` | 首页 Research | `siteContent.research[4].href` | 必填 | 临时内容 |
| Research 06 | 编号 | `06` | 首页 Research | `siteContent.research[5].number` | 必填 | 已确认 |
| Research 06 | 标题 | `Queerplatonic Relationships and Asexual Intimacy` | 首页 Research | `siteContent.research[5].title` | 必填 | 已确认 |
| Research 06 | 说明 | `[DESCRIPTION TO BE PROVIDED BY XENIA]` | 首页 Research | `siteContent.research[5].description` | 必填 | 缺失 |
| Research 06 | 详情链接 | `#research-queerplatonic-relationships-and-asexual-intimacy` | 首页 Research | `siteContent.research[5].href` | 必填 | 临时内容 |
| 项目详情页 | 页面路由 | 六个项目均未创建 | 研究项目页 | 未配置 | 必填 | 缺失 |
| 项目详情页 | 项目正文、方法、成果、合作信息、引用 | 均未配置 | 研究项目页 | 未配置 | 选填 | 缺失 |

### Research Agendas

| 内容模块 | 字段名称 | 当前内容 | 对应页面 | 数据文件位置 | 必填或选填 | 当前状态 |
| --- | --- | --- | --- | --- | --- | --- |
| Agenda 01 | 编号 | `01` | 首页 | `siteContent.researchAgendas[0].number` | 必填 | 已确认 |
| Agenda 01 | 标题 | `Sizing Gender` | 首页 | `siteContent.researchAgendas[0].title` | 必填 | 已确认 |
| Agenda 01 | 说明 | `[DESCRIPTION TO BE PROVIDED BY XENIA]` | 首页 | `siteContent.researchAgendas[0].description` | 必填 | 缺失 |
| Agenda 01 | 链接 | `#agenda-sizing-gender` | 首页 | `siteContent.researchAgendas[0].href` | 选填 | 临时内容 |
| Agenda 02 | 编号 | `02` | 首页 | `siteContent.researchAgendas[1].number` | 必填 | 已确认 |
| Agenda 02 | 标题 | `Queer Shame and the Tyranny of Temporal Rupture` | 首页 | `siteContent.researchAgendas[1].title` | 必填 | 已确认 |
| Agenda 02 | 说明 | `[DESCRIPTION TO BE PROVIDED BY XENIA]` | 首页 | `siteContent.researchAgendas[1].description` | 必填 | 缺失 |
| Agenda 02 | 链接 | `#agenda-queer-shame` | 首页 | `siteContent.researchAgendas[1].href` | 选填 | 临时内容 |

## 4. Writing

当前没有 Writing 归档页或文章详情页。`View all` 与三篇文章链接均停留在首页 Writing 区域。

| 内容模块 | 字段名称 | 当前内容 | 对应页面 | 数据文件位置 | 必填或选填 | 当前状态 |
| --- | --- | --- | --- | --- | --- | --- |
| Writing 归档 | View all 链接 | `#writing` | 首页 | `siteContent.writingArchiveHref` | 必填 | 临时内容 |
| Writing 归档 | 独立页面路由 | 未配置 | Writing | 未配置 | 必填 | 缺失 |
| Writing 01 | 标题 | `[WRITING TITLE TO BE PROVIDED BY XENIA]` | 首页 Writing | `siteContent.writing[0].title` | 必填 | 缺失 |
| Writing 01 | 来源 | `[SOURCE TO BE PROVIDED BY XENIA]` | 首页 Writing | `siteContent.writing[0].source` | 必填 | 缺失 |
| Writing 01 | 日期 | `[DATE TO BE PROVIDED]` | 首页 Writing | `siteContent.writing[0].date` | 必填 | 缺失 |
| Writing 01 | 图片 | `/images/writing-1.jpg`，文件不存在 | 首页 Writing | `siteContent.writing[0].image` | 选填 | 缺失 |
| Writing 01 | 图片替代文字 | `[IMAGE ALT TO BE PROVIDED BY XENIA]` | 首页 Writing | `siteContent.writing[0].imageAlt` | 图片存在时必填 | 缺失 |
| Writing 01 | 链接 | `#writing-1` | 首页 Writing | `siteContent.writing[0].href` | 必填 | 临时内容 |
| Writing 02 | 标题 | `[WRITING TITLE TO BE PROVIDED BY XENIA]` | 首页 Writing | `siteContent.writing[1].title` | 必填 | 缺失 |
| Writing 02 | 来源 | `[SOURCE TO BE PROVIDED BY XENIA]` | 首页 Writing | `siteContent.writing[1].source` | 必填 | 缺失 |
| Writing 02 | 日期 | `[DATE TO BE PROVIDED]` | 首页 Writing | `siteContent.writing[1].date` | 必填 | 缺失 |
| Writing 02 | 图片 | `/images/writing-2.jpg`，文件不存在 | 首页 Writing | `siteContent.writing[1].image` | 选填 | 缺失 |
| Writing 02 | 图片替代文字 | `[IMAGE ALT TO BE PROVIDED BY XENIA]` | 首页 Writing | `siteContent.writing[1].imageAlt` | 图片存在时必填 | 缺失 |
| Writing 02 | 链接 | `#writing-2` | 首页 Writing | `siteContent.writing[1].href` | 必填 | 临时内容 |
| Writing 03 | 标题 | `[WRITING TITLE TO BE PROVIDED BY XENIA]` | 首页 Writing | `siteContent.writing[2].title` | 必填 | 缺失 |
| Writing 03 | 来源 | `[SOURCE TO BE PROVIDED BY XENIA]` | 首页 Writing | `siteContent.writing[2].source` | 必填 | 缺失 |
| Writing 03 | 日期 | `[DATE TO BE PROVIDED]` | 首页 Writing | `siteContent.writing[2].date` | 必填 | 缺失 |
| Writing 03 | 图片 | `/images/writing-3.jpg`，文件不存在 | 首页 Writing | `siteContent.writing[2].image` | 选填 | 缺失 |
| Writing 03 | 图片替代文字 | `[IMAGE ALT TO BE PROVIDED BY XENIA]` | 首页 Writing | `siteContent.writing[2].imageAlt` | 图片存在时必填 | 缺失 |
| Writing 03 | 链接 | `#writing-3` | 首页 Writing | `siteContent.writing[2].href` | 必填 | 临时内容 |
| 文章详情页 | 页面路由与正文 | 三篇均未配置 | Writing 详情 | 未配置 | 选填 | 缺失 |

## 5. About

当前 About 导航指向首页 Hero，并没有独立 About 页面。

| 内容模块 | 字段名称 | 当前内容 | 对应页面 | 数据文件位置 | 必填或选填 | 当前状态 |
| --- | --- | --- | --- | --- | --- | --- |
| About | 导航链接 | `#about` | 首页 | `siteContent.navigation[2].href` | 必填 | 已确认 |
| About | 首页摘要 | `[INTRODUCTION TO BE PROVIDED BY XENIA]` | 首页 | `siteContent.person.introduction` | 必填 | 缺失 |
| About | 独立页面路由 | 未配置 | About | 未配置 | 选填 | 缺失 |
| About | 长版个人介绍 | 未配置 | About | 未配置 | 选填 | 缺失 |
| About | 学位、履历、研究兴趣等扩展字段 | 未配置 | About | 未配置 | 选填 | 缺失 |

## 6. CV

| 内容模块 | 字段名称 | 当前内容 | 对应页面 | 数据文件位置 | 必填或选填 | 当前状态 |
| --- | --- | --- | --- | --- | --- | --- |
| CV | 页面眉题 | `Curriculum Vitae` | `/cv` | `siteContent.cvPage.kicker` | 必填 | 临时内容 |
| CV | 页面标题 | `CV to be provided` | `/cv` | `siteContent.cvPage.title` | 必填 | 临时内容 |
| CV | 页面正文 | `[CV CONTENT OR FILE TO BE PROVIDED BY XENIA]` | `/cv` | `siteContent.cvPage.body` | 必填 | 缺失 |
| CV | 返回文字 | `Return home` | `/cv` | `siteContent.cvPage.returnLabel` | 必填 | 已确认 |
| CV | 返回链接 | `/` | `/cv` | `siteContent.cvPage.returnHref` | 必填 | 已确认 |
| CV | PDF 或完整网页内容 | 未配置 | `/cv` | 未配置 | 必填 | 缺失 |
| CV | 文件日期或版本日期 | 未配置 | `/cv` | 未配置 | 选填 | 缺失 |
| CV | 页面元数据 | 未配置 | `/cv` | 未配置 | 必填 | 缺失 |

## 7. 联系方式与外部链接

| 内容模块 | 字段名称 | 当前内容 | 对应页面 | 数据文件位置 | 必填或选填 | 当前状态 |
| --- | --- | --- | --- | --- | --- | --- |
| 联系方式 | Contact 标签 | `Contact` | 首页页脚 | `siteContent.footer.contactLabel` | 必填 | 已确认 |
| 联系方式 | Email 标签 | `Email` | 首页页脚 | `siteContent.footer.emailLabel` | 必填 | 已确认 |
| 联系方式 | 邮箱地址 | `[EMAIL TO BE PROVIDED BY XENIA]` | 首页页脚 | `siteContent.footer.email` | 必填 | 缺失 |
| 联系方式 | 邮箱链接 | 当前不会生成 `mailto:`，只显示不可点击的 Email | 首页页脚 | 由 `siteContent.footer.email` 决定 | 必填 | 缺失 |
| 页脚 | 版权信息 | `© 2026 Xenia Jiang` | 首页页脚 | `siteContent.footer.copyright` | 必填 | 需要替换 |
| 外部链接 | 个人或学术平台链接 | 空数组 `[]` | 全站 | `siteContent.externalLinks` | 选填 | 缺失 |

## 8. 中文与英文版本

中文版本目前仅为占位页，不存在与英文首页逐字段对应的中文内容。

| 内容模块 | 字段名称 | 当前内容 | 对应页面 | 数据文件位置 | 必填或选填 | 当前状态 |
| --- | --- | --- | --- | --- | --- | --- |
| 中文入口 | 导航标签 | `中文` | 全站 | `siteContent.language.label` | 必填 | 已确认 |
| 中文入口 | 路由 | `/zh` | 全站 | `siteContent.language.href` | 必填 | 临时内容 |
| 中文占位页 | 页面眉题 | `中文页面` | `/zh` | `siteContent.chinesePage.kicker` | 必填 | 临时内容 |
| 中文占位页 | 页面标题 | `内容待补充` | `/zh` | `siteContent.chinesePage.title` | 必填 | 临时内容 |
| 中文占位页 | 正文 | `[CHINESE CONTENT TO BE PROVIDED BY XENIA]` | `/zh` | `siteContent.chinesePage.body` | 必填 | 缺失 |
| 中文占位页 | 返回文字 | `返回主页` | `/zh` | `siteContent.chinesePage.returnLabel` | 必填 | 已确认 |
| 中文占位页 | 返回链接 | `/` | `/zh` | `siteContent.chinesePage.returnHref` | 必填 | 已确认 |
| 中文版本 | 中文个人简介 | 未配置 | 中文首页 | 未配置 | 必填 | 缺失 |
| 中文版本 | 中文导航与区块标题映射 | 未配置 | 中文首页 | 未配置 | 必填 | 缺失 |
| 中文版本 | 会议、研究项目、Agenda、Writing 中文字段 | 未配置 | 中文首页 | 未配置 | 选填 | 缺失 |
| 中文版本 | 中文页面元数据 | 未配置 | `/zh` | 未配置 | 必填 | 缺失 |
| 语言语义 | `/zh` 根文档语言 | 根布局仍为 `en`，仅页面主体标注 `zh-CN` | `/zh` | `siteContent.site.locale` 与 `app/zh/page.tsx` | 必填 | 需要替换 |

## 9. 图片与静态资源

| 内容模块 | 字段名称 | 当前内容 | 对应页面 | 数据文件位置 | 必填或选填 | 当前状态 |
| --- | --- | --- | --- | --- | --- | --- |
| 个人照片 | `public/images/portrait.png` | 文件存在，来自用户提供的 `photo.png` | 首页 | `siteContent.person.portrait` | 必填 | 已确认 |
| Writing 图片 01 | `public/images/writing-1.jpg` | 文件不存在，页面显示暖灰占位 | 首页 Writing | `siteContent.writing[0].image` | 选填 | 缺失 |
| Writing 图片 02 | `public/images/writing-2.jpg` | 文件不存在，页面显示暖灰占位 | 首页 Writing | `siteContent.writing[1].image` | 选填 | 缺失 |
| Writing 图片 03 | `public/images/writing-3.jpg` | 文件不存在，页面显示暖灰占位 | 首页 Writing | `siteContent.writing[2].image` | 选填 | 缺失 |
| 浏览器图标 | `public/favicon.svg` | 站点模板自带蓝色图标，未按个人主页定制 | 浏览器标签/直接资源 | 未配置 | 选填 | 需要替换 |
| 分享图片 | `public/og.png` | 文件不存在 | 社交分享 | 未配置 | 选填 | 缺失 |
| 模板遗留图片 | `public/file.svg` | 未被页面引用 | 无 | 未配置 | 选填 | 需要替换 |
| 模板遗留图片 | `public/globe.svg` | 未被页面引用 | 无 | 未配置 | 选填 | 需要替换 |
| 模板遗留图片 | `public/window.svg` | 未被页面引用 | 无 | 未配置 | 选填 | 需要替换 |

## 10. 链接审计

- 没有发现字面量 `href=""` 空链接。
- Research、Research Agendas 与 Writing 条目使用同页锚点作为临时链接，不是详情页。
- `View all` 指向当前 Writing 区块，没有 Writing 归档页。
- CV 路由存在，但只显示占位内容。
- 中文路由存在，但只显示占位内容。
- 邮箱缺失时，页脚 Email 不可点击。
- 外部链接集合为空。

## 11. 统一配置检查结果

已迁移至 `src/data/siteContent.ts` 的可变内容：

- 全站与首页元数据
- 全站语言和主页链接
- 所有导航标签与链接
- 菜单、区块标题、View all、箭头和分隔符
- 无障碍标签
- 姓名、身份、学校、简介、头像与替代文字
- Current、Research、Research Agendas、Writing
- CV 和中文占位页的全部可见文字与返回链接
- 联系方式、版权与外部链接集合

仍保留在组件或页面代码中的内容仅为结构性值：

- HTML 元素、路由段、区块 `id`、CSS 类名
- `lang="zh-CN"` 语言标记
- 图片尺寸 `1024 × 1365`
- 缺失图片时的无文字视觉占位逻辑
- 开发注释和无障碍状态值

这些项目不属于可编辑站点文案。

## 12. 建议优先提供的内容批次

1. **首页核心批次**：个人简介、邮箱、头像替代文字确认、首页元数据描述。
2. **Research 批次**：六个项目说明、两个 Agenda 说明、各项目最终链接或是否需要详情页。
3. **Writing 批次**：三篇文章的标题、来源、日期、图片、替代文字和链接，以及是否需要归档页。
4. **CV 与 About 批次**：CV 文件或页面内容、是否需要独立 About 页面及其内容。
5. **中文批次**：中文首页各字段、中文导航/区块标题、中文元数据及中英文对应规则。
6. **品牌与发布批次**：favicon、社交分享图、版权年份规则、外部平台链接。

## 13. 明显内容风险

1. 首页仍直接显示多处英文占位符，当前不适合公开发布。
2. 六个 Research 项目、两个 Agenda 和三篇 Writing 均没有完整说明或详情内容。
3. 三张 Writing 图片路径会产生资源缺失，虽然前端会显示占位区域。
4. Research 和 Writing 的箭头看似可进入详情，但当前只跳到自身锚点。
5. CV 和中文导航可点击，但目标页面仅为占位页。
6. 邮箱缺失使 Email 看似联系方式但不可操作。
7. 默认元数据、头像替代文字、WPATH 对应项目长标题和版权年份需要用户确认。
8. 中文版本与英文版本没有字段级对应关系，且 `/zh` 的根文档语言仍继承 `en`。
9. 缺少独立页面元数据、Open Graph、分享图片和正式 favicon。
