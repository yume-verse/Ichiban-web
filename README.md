# Yume Verse 一番賞互動品牌官網（原始碼）

用瀏覽器直接開 `index.html` 就能預覽（字體需連網載入 Google Fonts）。

- `js/config.js`：全部可替換資料。三語文案、六大業務、圖片路徑、聯絡 Email、社群、表單寄送網址、合作地區。
- `js/site.js`：抽籤狀態、表單、捲動動態。
- `css/site.css`：版面與樣式。
- `img/`：由資料夾 01–10 原圖轉出的 WebP（原圖未改動）。

## 尚未提供、目前留空的正式資料
- 聯絡 Email、社群帳號（`contactEmail`、`social`）
- 表單寄送服務（`formEndpoint`）：未填時只整理內容並提供「複製合作需求」，不會顯示已寄出
- 合作國家／地區（`partnerRegions`）：地圖目前只標日本出發點
- 正式品牌標語與各業務服務細節：目前是示例文案

## 素材限制
Cosplay、寫真周邊、IP 品牌、食品、美妝五個場景沒有專屬背景圖，
目前用 06 櫃檯背景重新取景，加上手繪設計稿紙示意。
有新背景時，放進 `img/` 並改 `config.js` 的 `images.scenes` 即可。
