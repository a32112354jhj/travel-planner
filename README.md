# Travel Planner

使用 [Next.js](https://nextjs.org) App Router 建立的旅遊規劃網站，以 [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) 初始化。

## 技術棧

- **Next.js 16** — React 框架（App Router）
- **React 19** — UI 函式庫
- **TypeScript 5** — 型別安全
- **Tailwind CSS 4** — 樣式工具
- **ESLint 9** — 程式碼品質檢查

## 專案架構

```
travel-planner/
├── app/                    # 應用程式核心目錄（App Router）
│   ├── layout.tsx          #   全站最外層版型，設定 HTML、body、字型與 metadata
│   ├── page.tsx            #   首頁（對應路徑 /）
│   ├── globals.css         #   全域樣式，載入 Tailwind、CSS 變數與主題色
│   └── favicon.ico         #   網站分頁圖示
│
├── public/                 # 靜態資源（不經打包，直接對應網站根路徑）
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── next.config.ts          # Next.js 設定檔
├── tsconfig.json           # TypeScript 設定
├── eslint.config.mjs       # ESLint 規則設定
├── postcss.config.mjs      # PostCSS 設定（Tailwind 使用）
├── next-env.d.ts           # Next.js 自動產生的型別宣告
├── package.json            # 專案依賴與腳本定義
└── README.md               # 專案說明文件
```

### 各目錄說明

| 目錄 / 檔案 | 用途 |
|---|---|
| `app/` | 頁面與路由。Next.js App Router 會根據此目錄下的檔案結構自動產生路由。 |
| `app/layout.tsx` | 根版型，包裹所有頁面。設定全域字型（Geist）、HTML lang、metadata。 |
| `app/page.tsx` | 首頁元件，瀏覽器進入 `/` 時渲染的內容。 |
| `app/globals.css` | 全域 CSS，透過 `@import "tailwindcss"` 載入 Tailwind，並定義亮／暗色主題變數。 |
| `public/` | 靜態檔案，可直接透過 URL 存取（例如 `/next.svg`）。 |

### 程式流向

```
瀏覽器請求 /
  → Next.js 套用 app/layout.tsx（HTML、body、字型、metadata）
    → 渲染 app/page.tsx（首頁內容）
      → 全域樣式由 app/globals.css 套用
      → 圖片等靜態資源從 public/ 提供
```

## Getting Started

啟動開發伺服器：

```bash
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000) 即可看到結果。

## 可用腳本

| 指令 | 說明 |
|---|---|
| `npm run dev` | 啟動開發伺服器 |
| `npm run build` | 建置生產版本 |
| `npm run start` | 啟動生產伺服器 |
| `npm run lint` | 執行 ESLint 檢查 |

## 延伸閱讀

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)
