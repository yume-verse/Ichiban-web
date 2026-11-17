/* ============================================================
   Yume Verse 官網｜集中設定
   需要替換正式資料時，只改這一個檔案。
   ============================================================ */
window.YV_CONFIG = {
  siteUrl: "yume-verse.com",
  /* 正式聯絡方式：尚未提供。填入後網站才會顯示成可點連結。 */
  contactEmail: "",            // 例："hello@yume-verse.com"
  social: [],                  // 例：[{ label: "Instagram", url: "https://…" }]
  /* 表單寄送服務：尚未串接。填入 endpoint 後才會真的送出。 */
  formEndpoint: "",
  /* 合作國家／地區：尚未提供正式名單，留空就不顯示任何據點。 */
  partnerRegions: [],
  /* 圖片路徑：換成正式場景圖時改這裡。 */
  images: {
    logo: "img/logo.webp",
    counter: "img/bg-counter.webp",
    box: "img/box.webp",
    boxFront: "img/box-front.webp",
    ticket: "img/ticket.webp",
    paper: "img/paper.webp",
    wall: "img/bg-cosplay.webp",
    scenes: {
      cosplay: "img/bg-cosplay.webp",
      photo: "img/bg-photo.webp",
      cafe: "img/bg-cafe.webp",
      ip: "img/bg-ip.webp",
      food: "img/bg-food.webp",
      beauty: "img/bg-beauty.webp"
    }
  },
  /* 六大業務固定順序 */
  business: ["cosplay", "photo", "cafe", "ip", "food", "beauty"]
};

window.YV_I18N = {
  "zh-TW": {
    meta: { title: "Yume Verse｜一張籤，六種日本文化", desc: "Yume Verse 是在全世界行銷日本文化的公司。抽一張籤，認識 Cosplay、寫真周邊、女僕咖啡廳、IP 品牌、日本食品與日本美妝外銷。" },
    nav: { story: "品牌故事", business: "六大業務", world: "全球合作", contact: "聯絡我們", menu: "選單", close: "關閉", home: "回到封面", lang: "語言" },
    hero: { title1: "一張籤，", title2: "六種日本文化。", sub: "跟著 Yume Verse，抽出下一份靈感。", draw: "抽一份日本靈感", explore: "直接探索六大業務", scroll: "向下探索" },
    draw: { kicker: "一份驚喜，正在揭曉。", drawing: "正在抽出紙籤…", tear: "撕開這張籤", youGot: "你抽到的是", go: "探索這項業務", all: "查看全部業務", again: "再抽一張", skip: "略過動畫", close: "關閉" },
    biz: {
      label: "BUSINESS", cta: "洽詢合作", all: "查看全部業務", prev: "上一項", next: "下一項", placeholder: "示意圖稿・正式素材替換位置",
      cosplay: { en: "Cosplay", name: "Cosplay", line: "穿上喜歡的樣子，把故事帶到現場。", points: ["服裝造型", "活動演出", "拍攝企劃"], note: "從一件服裝開始，讓喜歡的世界有了真實的溫度。" },
      photo: { en: "Photo Goods", name: "寫真周邊", line: "把想留住的瞬間，印成可以收藏的紙本。", points: ["寫真集", "明信片", "周邊小物"], note: "一張照片、一張明信片，都是可以帶回家的日常。" },
      cafe: { en: "Maid Café", name: "女僕咖啡廳", line: "在一杯咖啡與一份心意之間，遇見屬於你的日系日常。", points: ["主題餐飲", "角色互動", "主題活動"], note: "窗邊的位置已經留好，慢慢坐一會兒。" },
      ip: { en: "IP Brand", name: "IP 品牌", line: "讓角色走出畫面，成為陪在身邊的品牌。", points: ["角色設計", "品牌授權", "周邊開發"], note: "從一張設計稿，到一個被記住的名字。" },
      food: { en: "Japanese Food", name: "日本食品外銷", line: "把日本的好味道，好好送到世界的餐桌。", points: ["選品", "出口安排", "通路合作"], note: "一箱一箱整理好，再交到下一個人手上。" },
      beauty: { en: "Japanese Beauty", name: "日本美妝外銷", line: "把日系保養的細膩，帶進每天的梳妝時間。", points: ["選品", "出口安排", "通路合作"], note: "窗邊的光很柔，適合慢慢照顧自己。" }
    },
    story: {
      kicker: "THE COLLECTION", title: "六種靈感，同一個 Yume Verse。",
      whoT: "我們是誰", who: "Yume Verse 是一間在全世界行銷日本文化的公司。我們把喜歡的日本，整理成六種可以親身遇見的體驗。",
      beliefT: "我們相信", belief: "文化不是遠遠地看，而是走進日常的小事：一件服裝、一張照片、一杯咖啡、一個角色、一份點心、一瓶保養品。",
      howT: "六張籤，一樣重要", how: "六項業務沒有大小之分。無論你先抽到哪一張，都是認識 Yume Verse 的好起點。",
      hint: "點任一張籤，直接前往該項業務"
    },
    world: { kicker: "TO THE WORLD", en: "From Japan, To Everywhere.", title: "從日本出發，與世界相遇。", body: "讓日本文化，走進更多人的日常。這張地圖畫的是我們想去的方向；每一段新的合作，都會在上面多留下一筆。", origin: "日本", note: "合作地區資料整理中，確認後會更新在這裡。" },
    end: { kicker: "LET'S CREATE TOGETHER", title1: "下一份驚喜，", title2: "一起開啟。", sub: "讓日本文化，走進更多人的日常。", cta: "洽談合作", again: "再抽一張", top: "回到頂端", copy: "© Yume Verse" },
    form: {
      title: "洽談合作", lead: "告訴我們你想一起做的事。", name: "姓名", company: "公司／單位", email: "Email", business: "合作業務", message: "想說的話", any: "還沒決定／想先聊聊",
      submit: "整理合作需求", cancel: "取消", required: "必填", optional: "選填",
      errName: "請填寫姓名。", errEmail: "請填寫正確的 Email。", errMsg: "請簡單寫下合作想法（至少 10 個字）。",
      doneTitle: "合作需求已整理好", doneLead: "本站尚未串接寄送服務，這份內容還沒有寄出。請按「複製合作需求」，再貼到你與 Yume Verse 聯絡的管道。",
      copy: "複製合作需求", copied: "已複製到剪貼簿", copyFail: "無法自動複製，請手動選取上方文字。", edit: "回去修改", closeBtn: "關閉",
      sumTitle: "【Yume Verse 合作需求】", sending: "寄送中…", sent: "已送出，謝謝你。", sendFail: "寄送失敗，請改用複製的方式聯絡我們。", mailLabel: "或直接來信："
    },
    progress: "章節",
    chapters: ["抽賞櫃檯", "揭曉", "六大業務", "品牌故事", "全球合作", "聯絡我們"]
  },
  "en": {
    meta: { title: "Yume Verse | One ticket, six sides of Japanese culture", desc: "Yume Verse brings Japanese culture to the world. Draw a ticket and discover Cosplay, Photo Goods, Maid Café, IP Brand, Japanese Food and Japanese Beauty." },
    nav: { story: "Our Story", business: "Six Businesses", world: "Worldwide", contact: "Contact", menu: "Menu", close: "Close", home: "Back to cover", lang: "Language" },
    hero: { title1: "One ticket,", title2: "six sides of Japan.", sub: "Draw your next idea with Yume Verse.", draw: "Draw a ticket", explore: "Browse all six businesses", scroll: "Scroll" },
    draw: { kicker: "A small surprise is on its way.", drawing: "Drawing your ticket…", tear: "Tear it open", youGot: "You drew", go: "Explore this business", all: "See all businesses", again: "Draw again", skip: "Skip animation", close: "Close" },
    biz: {
      label: "BUSINESS", cta: "Work with us", all: "See all businesses", prev: "Previous", next: "Next", placeholder: "Sample sketch · final artwork goes here",
      cosplay: { en: "Cosplay", name: "Cosplay", line: "Wear what you love and bring the story to life.", points: ["Costume styling", "Event appearances", "Shoot planning"], note: "It starts with one outfit, and a favourite world feels real." },
      photo: { en: "Photo Goods", name: "Photo Goods", line: "Moments worth keeping, printed to hold in your hands.", points: ["Photo books", "Postcards", "Small goods"], note: "A photo or a postcard is a little everyday to take home." },
      cafe: { en: "Maid Café", name: "Maid Café", line: "Between a cup of coffee and a kind gesture, find your own Japanese everyday.", points: ["Themed dining", "Character hospitality", "Themed events"], note: "The seat by the window is ready. Stay a while." },
      ip: { en: "IP Brand", name: "IP Brand", line: "Characters step off the page and become brands that stay with you.", points: ["Character design", "Licensing", "Merchandise"], note: "From one design sheet to a name people remember." },
      food: { en: "Japanese Food", name: "Japanese Food Export", line: "Good flavours from Japan, carefully sent to tables around the world.", points: ["Curation", "Export handling", "Channel partners"], note: "Packed box by box, then handed to the next person." },
      beauty: { en: "Japanese Beauty", name: "Japanese Beauty Export", line: "The gentle detail of Japanese care, for your daily routine.", points: ["Curation", "Export handling", "Channel partners"], note: "Soft window light, and time to look after yourself." }
    },
    story: {
      kicker: "THE COLLECTION", title: "Six ideas, one Yume Verse.",
      whoT: "Who we are", who: "Yume Verse is a company that brings Japanese culture to the world. We turn the Japan we love into six experiences you can meet in person.",
      beliefT: "What we believe", belief: "Culture is not something to watch from far away. It lives in small daily things: an outfit, a photo, a coffee, a character, a snack, a bottle of skincare.",
      howT: "Six tickets, equally loved", how: "No business ranks above another. Whichever ticket you draw first is a good place to start.",
      hint: "Tap any ticket to go straight to that business"
    },
    world: { kicker: "TO THE WORLD", en: "From Japan, To Everywhere.", title: "Setting out from Japan to meet the world.", body: "We want Japanese culture to be part of more people's everyday. This map shows where we hope to go; each new partnership adds another line to it.", origin: "Japan", note: "Partner regions are being confirmed and will be added here." },
    end: { kicker: "LET'S CREATE TOGETHER", title1: "The next surprise,", title2: "let's open it together.", sub: "Bringing Japanese culture into more everyday lives.", cta: "Start a project", again: "Draw again", top: "Back to top", copy: "© Yume Verse" },
    form: {
      title: "Start a project", lead: "Tell us what you'd like to make together.", name: "Name", company: "Company", email: "Email", business: "Business", message: "Message", any: "Not sure yet / let's talk",
      submit: "Prepare my request", cancel: "Cancel", required: "Required", optional: "Optional",
      errName: "Please enter your name.", errEmail: "Please enter a valid email.", errMsg: "Please describe your idea (at least 10 characters).",
      doneTitle: "Your request is ready", doneLead: "This site is not connected to a mail service yet, so nothing has been sent. Use “Copy request” and paste it into your usual channel with Yume Verse.",
      copy: "Copy request", copied: "Copied to clipboard", copyFail: "Could not copy automatically. Please select the text above.", edit: "Edit", closeBtn: "Close",
      sumTitle: "[Yume Verse partnership request]", sending: "Sending…", sent: "Sent. Thank you.", sendFail: "Sending failed. Please copy the request instead.", mailLabel: "Or email us:"
    },
    progress: "Chapter",
    chapters: ["The Counter", "The Draw", "Six Discoveries", "The Collection", "To the World", "Contact"]
  },
  "ja": {
    meta: { title: "Yume Verse｜一枚のくじ、六つの日本文化", desc: "Yume Verse は日本文化を世界へ届ける会社です。くじを一枚ひいて、コスプレ、写真グッズ、メイドカフェ、IPブランド、日本食品・日本コスメの輸出に出会ってください。" },
    nav: { story: "ブランドストーリー", business: "六つの事業", world: "世界へ", contact: "お問い合わせ", menu: "メニュー", close: "閉じる", home: "トップへ", lang: "言語" },
    hero: { title1: "一枚のくじ、", title2: "六つの日本文化。", sub: "Yume Verse と、次のひらめきを引いてみよう。", draw: "くじを引く", explore: "六つの事業を見る", scroll: "スクロール" },
    draw: { kicker: "小さなおどろきが、もうすぐ。", drawing: "くじを引いています…", tear: "くじを開ける", youGot: "引いたのは", go: "この事業を見る", all: "すべての事業を見る", again: "もう一枚引く", skip: "アニメーションを省略", close: "閉じる" },
    biz: {
      label: "BUSINESS", cta: "協業のご相談", all: "すべての事業を見る", prev: "前へ", next: "次へ", placeholder: "イメージスケッチ・正式素材に差し替え予定",
      cosplay: { en: "Cosplay", name: "コスプレ", line: "好きな姿をまとって、物語をその場に。", points: ["衣装スタイリング", "イベント出演", "撮影企画"], note: "一着の衣装から、好きな世界にぬくもりが生まれます。" },
      photo: { en: "Photo Goods", name: "写真グッズ", line: "残したい瞬間を、手に取れる紙のかたちに。", points: ["写真集", "ポストカード", "小物グッズ"], note: "一枚の写真も、持ち帰れる日常になります。" },
      cafe: { en: "Maid Café", name: "メイドカフェ", line: "一杯のコーヒーと心づかいのあいだで、あなたの日本の日常に出会う。", points: ["テーマ飲食", "キャラクター接客", "テーマイベント"], note: "窓ぎわの席を用意しました。ごゆっくりどうぞ。" },
      ip: { en: "IP Brand", name: "IPブランド", line: "キャラクターが画面を出て、そばにいるブランドに。", points: ["キャラクターデザイン", "ライセンス", "グッズ開発"], note: "一枚のデザイン画から、覚えてもらえる名前へ。" },
      food: { en: "Japanese Food", name: "日本食品の輸出", line: "日本のおいしさを、世界の食卓へていねいに。", points: ["商品選定", "輸出手配", "販路づくり"], note: "一箱ずつ整えて、次の人の手へ。" },
      beauty: { en: "Japanese Beauty", name: "日本コスメの輸出", line: "日本のケアのこまやかさを、毎日の身じたくに。", points: ["商品選定", "輸出手配", "販路づくり"], note: "やわらかな窓の光で、自分をいたわる時間を。" }
    },
    story: {
      kicker: "THE COLLECTION", title: "六つのひらめき、ひとつの Yume Verse。",
      whoT: "わたしたちについて", who: "Yume Verse は、日本文化を世界へ届ける会社です。好きな日本を、実際に出会える六つの体験にまとめました。",
      beliefT: "信じていること", belief: "文化は遠くから眺めるものではなく、日常の小さなことの中にあります。一着の衣装、一枚の写真、一杯のコーヒー、ひとりのキャラクター、ひとつのお菓子、一本のスキンケア。",
      howT: "六枚とも、同じように大切", how: "六つの事業に順位はありません。最初にどれを引いても、Yume Verse を知るよい入口です。",
      hint: "くじをタップすると、その事業へ移動します"
    },
    world: { kicker: "TO THE WORLD", en: "From Japan, To Everywhere.", title: "日本から出発して、世界と出会う。", body: "日本文化を、もっと多くの人の日常へ。この地図はわたしたちが向かいたい方向です。新しい協業のたびに、ここに一本ずつ線が増えていきます。", origin: "日本", note: "協業地域の情報は確認中です。確定後こちらに反映します。" },
    end: { kicker: "LET'S CREATE TOGETHER", title1: "次のおどろきを、", title2: "いっしょに開けよう。", sub: "日本文化を、もっと多くの人の日常へ。", cta: "協業のご相談", again: "もう一枚引く", top: "トップへ戻る", copy: "© Yume Verse" },
    form: {
      title: "協業のご相談", lead: "いっしょに作りたいことを教えてください。", name: "お名前", company: "会社・団体名", email: "メール", business: "ご希望の事業", message: "メッセージ", any: "未定／まず相談したい",
      submit: "相談内容をまとめる", cancel: "キャンセル", required: "必須", optional: "任意",
      errName: "お名前を入力してください。", errEmail: "正しいメールアドレスを入力してください。", errMsg: "ご相談内容を10文字以上でご記入ください。",
      doneTitle: "相談内容がまとまりました", doneLead: "このサイトはまだ送信サービスに接続していないため、内容は送信されていません。「相談内容をコピー」を押して、Yume Verse との連絡手段に貼り付けてください。",
      copy: "相談内容をコピー", copied: "コピーしました", copyFail: "自動でコピーできませんでした。上の文章を選択してください。", edit: "修正する", closeBtn: "閉じる",
      sumTitle: "【Yume Verse 協業のご相談】", sending: "送信中…", sent: "送信しました。ありがとうございます。", sendFail: "送信できませんでした。コピーしてご連絡ください。", mailLabel: "メールでも受け付けています："
    },
    progress: "チャプター",
    chapters: ["くじのカウンター", "ひらく", "六つの事業", "ブランドストーリー", "世界へ", "お問い合わせ"]
  }
};
