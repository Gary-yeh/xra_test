# 宇萌數位科技 ARPLANET | XR & AI Solutions Website

這是一個為 **宇萌數位科技 (ARPLANET)** 設計的現代化形象官方網站專案。該網站採用最新的網頁設計趨勢，展示其在 XR (擴增實境)、VR (虛擬實境)、MR (混合實境) 及 AI (人工智慧) 領域的解決方案與核心平台。

## 🎯 專案目標

打造一個具備高度互動性、視覺吸引力且完全響應式 (RWD) 的企業級網站，以突顯 ARPLANET 在空間運算 (Spatial Computing) 時代的領導地位。

## ✨ 主要特色

*   **沉浸式視覺設計 (Immersive Design)**：採用深色科技風格 (Dark Tech Theme)，搭配流暢的漸層與微動畫。
*   **響應式網頁設計 (RWD)**：Mobile-First 設計原則，完美適配手機、平板與桌面裝置。
*   **動態互動元件**：
    *   **Bento Grid 產品展示**：以現代化的網格佈局展示 marq+, CoreXR 等核心產品。
    *   **3D 卡片堆疊輪播 (3D Stack Carousel)**：用於展示不同產業的解決方案，支援點擊互動切換。
    *   **合作夥伴跑馬燈**：自動滾動展示知名合作夥伴 Logo。
*   **效能優化**：
    *   使用 `IntersectionObserver` 實現捲動觸發的淡入動畫 (Scroll-triggered Animations)。
    *   語意化 HTML5 結構與 SEO 優化標籤。

## 🛠️ 技術棧 (Tech Stack)

本專案堅持使用原生技術以確保最高效能與可控性：

*   **HTML5**: 語意化標籤結構。
*   **CSS3**: 
    *   Flexbox & Grid Layout 佈局。
    *   CSS Variables (Custom Properties) 管理主題色彩。
    *   CSS Transitions & Animations 實現流暢動效。
*   **JavaScript (Vanilla JS)**: 
    *   無依賴的原生 JS 邏輯。
    *   DOM 操作與事件處理。
    *   客製化輪播邏輯。

## 📂 專案結構

```
.
├── index.html          # 主要頁面結構
├── styles.css          # 主要樣式表 (包含 RWD 設置)
├── script.js           # 互動邏輯 (選單、輪播、動畫)
├── images/             # 圖片資源目錄
└── README.md           # 專案說明文件
```

## 🚀 如何執行 (Setup & Usage)

由於這是一個靜態網頁專案，您不需要複雜的後端環境或編譯步驟。

1.  **Clone 專案**：
    ```bash
    git clone https://github.com/your-username/xra_test.git
    ```
2.  **開啟網頁**：
    *   直接使用瀏覽器打開 `index.html`。
    *   或者使用 VS Code 的 **Live Server** 插件啟動預覽 (推薦，以獲得最佳開發體驗)。

## 📝 授權 (License)

本專案為示範用途，內容與商標權歸宇萌數位科技所有。
