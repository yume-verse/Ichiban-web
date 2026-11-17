/* Yume Verse 一番賞互動品牌官網｜互動邏輯
   文案與資料在 js/config.js；這裡只管畫面與狀態。 */
(function () {
  "use strict";
  var C = window.YV_CONFIG, I = window.YV_I18N;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var html = document.documentElement;
  var reduceMQ = window.matchMedia("(prefers-reduced-motion: reduce)");
  var hasG = !!(window.gsap && window.ScrollTrigger);
  var motion = function () { return hasG && !reduceMQ.matches; };
  var BIZ = C.business;
  var lang = "zh-TW";
  html.classList.add("js");

  function t(path) {
    return path.split(".").reduce(function (o, k) { return o == null ? o : o[k]; }, I[lang]);
  }
  function abs(p) { try { return new URL(p, document.baseURI).href; } catch (e) { return p; } }
  function no(k) { var n = BIZ.indexOf(k) + 1; return (n < 10 ? "0" : "") + n; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  /* ---------- 圖片設定與失敗備援 ---------- */
  html.style.setProperty("--paper", 'url("' + abs(C.images.paper) + '")');
  html.style.setProperty("--wallimg", 'url("' + abs(C.images.wall) + '")');
  document.addEventListener("error", function (e) {
    var el = e.target;
    if (el && el.tagName === "IMG") {
      el.style.visibility = "hidden";
      var tk = el.closest && el.closest(".tk");
      if (tk) tk.classList.add("noimg");
    }
  }, true);

  /* ---------- 元件 ---------- */
  function icoHTML(k) {
    if (k === "cafe") return '<img src="img/icon-cafe.png" alt="">';
    return '<svg viewBox="0 0 64 64" aria-hidden="true"><use href="#i-' + k + '"/></svg>';
  }
  function faceHTML(k) {
    return '<span class="tk-ico">' + icoHTML(k) + '</span><span class="tk-no">' + no(k) + "</span>";
  }
  function tkHTML(k) {
    return '<span class="tk" data-k="' + k + '"><img class="tk-paper" src="' + C.images.ticket + '" alt="" loading="lazy"><span class="tk-face">' + faceHTML(k) + "</span></span>";
  }
  var ARROW_L = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12H5M11 6l-6 6 6 6"/></svg>';
  var ARROW_R = '<svg class="arr" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>';
  var CHEV = '<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';

  function sheet(k, cls, d) {
    return '<div class="sheet rv ' + (cls || "") + '" style="--d:' + (d || 0) + 's"><span class="sheet-ico"><svg viewBox="0 0 64 64" aria-hidden="true"><use href="#i-' + k + '"/></svg></span><small data-i18n="biz.placeholder"></small></div>';
  }
  var CARD_ART = [
    '<path d="M12 80L52 36l19 22 18-15 49 37z"/><circle cx="114" cy="27" r="9"/>',
    '<path d="M10 86c30-12 52-26 82-58M56 62c14 1 26 4 40-2"/><use href="#i-sakura" x="82" y="18" width="20" height="20" fill="currentColor" stroke="none"/><use href="#i-sakura" x="92" y="50" width="15" height="15" fill="currentColor" stroke="none"/><use href="#i-sakura" x="46" y="50" width="14" height="14" fill="currentColor" stroke="none"/>',
    '<path d="M10 62q15-18 30 0t30 0 30 0 30 0M10 78q15-18 30 0t30 0 30 0 30 0"/><circle cx="110" cy="28" r="10"/>'
  ];
  function card(i) {
    return '<div class="card rv" style="--d:' + (i * 0.12) + 's" tabindex="0" role="button" aria-pressed="false"><div class="card-in"><div class="card-f"><svg viewBox="0 0 150 100" aria-hidden="true">' + CARD_ART[i] + '</svg></div><div class="card-b"><i style="top:42%"></i><i style="top:56%"></i><i style="top:70%"></i></div></div></div>';
  }
  var ART = {
    cosplay: function () { return sheet("cosplay") + sheet("sakura", "mini", 0.15); },
    photo: function () { return card(0) + card(1) + card(2); },
    cafe: function () { return '<div class="steam" aria-hidden="true"><i></i><i></i></div>'; },
    ip: function () { return sheet("ip") + sheet("ip", "mini", 0.15); },
    food: function () { return sheet("food", "flat") + sheet("sakura", "mini flat", 0.15); },
    beauty: function () { return sheet("beauty"); }
  };
  var SIDE = { cosplay: "right", photo: "left", cafe: "right", ip: "left", food: "right", beauty: "right" };
  var DEST = { cosplay: [-7, 1], photo: [8, 1], cafe: [3, 0.82], ip: [-5, 1], food: [5, 0.8], beauty: [6, 0.8] };

  function buildBusiness() {
    var wrap = $("#business");
    wrap.innerHTML = BIZ.map(function (k, i) {
      var prev = BIZ[(i + 5) % 6], next = BIZ[(i + 1) % 6];
      return '<section class="biz biz-' + k + '" id="biz-' + k + '" data-k="' + k + '" data-side="' + SIDE[k] + '" aria-labelledby="h-' + k + '">' +
        '<div class="biz-bg"><img src="' + C.images.scenes[k] + '" alt="" ' + (i ? 'loading="lazy"' : "") + "></div>" +
        '<div class="biz-art">' + ART[k]() + '<div class="biz-tk">' + tkHTML(k) + "</div></div>" +
        '<div class="biz-copy">' +
        '<p class="biz-label rv"><span data-i18n="biz.label"></span> ' + no(k) + " / 06</p>" +
        '<h2 class="biz-en rv" id="h-' + k + '" data-i18n="biz.' + k + '.en"></h2>' +
        '<p class="biz-name rv" data-i18n="biz.' + k + '.name"></p>' +
        '<p class="biz-line rv" data-i18n="biz.' + k + '.line"></p>' +
        '<ul class="biz-points rv" data-i18n-list="biz.' + k + '.points"></ul>' +
        '<p class="biz-note rv" data-i18n="biz.' + k + '.note"></p>' +
        '<div class="biz-act rv"><button class="btn" type="button" data-contact="' + k + '"><span data-i18n="biz.cta"></span>' + ARROW_R + "</button>" +
        '<a class="link" href="#story"><span data-i18n="biz.all"></span>' + CHEV + "</a></div>" +
        "</div>" +
        '<div class="biz-pager"><button class="pv" type="button" data-go="' + prev + '">' + ARROW_L + '<span data-i18n="biz.' + prev + '.name"></span></button>' +
        '<button class="nx" type="button" data-go="' + next + '"><span data-i18n="biz.' + next + '.name"></span>' + ARROW_R + "</button></div>" +
        "</section>";
    }).join("");
    $$(".biz-copy", wrap).forEach(function (c) { $$(".rv", c).forEach(function (el, i) { el.style.setProperty("--d", (i * 0.07) + "s"); }); });
  }
  function buildTickets() {
    $("#fan").innerHTML = BIZ.map(function (k, i) {
      return '<a class="fan-item rv" style="--d:' + (i * 0.08) + 's" href="#biz-' + k + '">' + tkHTML(k) + '<b data-i18n="biz.' + k + '.name"></b></a>';
    }).join("");
    var links = BIZ.map(function (k, i) {
      return '<a class="rv" style="--d:' + (i * 0.07) + 's" href="#biz-' + k + '" data-i18n-aria="biz.' + k + '.name">' + tkHTML(k) + "</a>";
    }).join("");
    $("#endTk").innerHTML = links;
    $("#endMobile").innerHTML = '<img src="' + C.images.box + '" alt="" loading="lazy"><div class="grid">' + links + "</div>";
    $("#mapTk").innerHTML = BIZ.map(tkHTML).join("");
  }

  /* ---------- 三語 ---------- */
  function applyLang() {
    html.lang = lang === "zh-TW" ? "zh-Hant-TW" : lang;
    $$("[data-i18n]").forEach(function (el) { var v = t(el.getAttribute("data-i18n")); if (v != null) el.textContent = v; });
    $$("[data-i18n-aria]").forEach(function (el) { var v = t(el.getAttribute("data-i18n-aria")); if (v != null) el.setAttribute("aria-label", v); });
    $$("[data-i18n-list]").forEach(function (ul) {
      ul.innerHTML = (t(ul.getAttribute("data-i18n-list")) || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");
    });
    document.title = t("meta.title");
    var md = $('meta[name="description"]'); if (md) md.setAttribute("content", t("meta.desc"));
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang)); });
    var sel = $("#formBiz"), cur = sel.value;
    sel.innerHTML = '<option value="">' + esc(t("form.any")) + "</option>" + BIZ.map(function (k) { return '<option value="' + k + '">' + no(k) + " " + esc(t("biz." + k + ".name")) + "</option>"; }).join("");
    sel.value = cur;
    BIZ.forEach(function (k) { var n = $("#biz-" + k + " .biz-name"); if (n) n.hidden = t("biz." + k + ".name") === t("biz." + k + ".en"); });
    if (D.result) fillResult();
    setProgress(chapter, true);
    renderMail();
    if (hasG) window.ScrollTrigger.refresh();
  }
  function setLang(l) {
    if (!I[l]) return;
    lang = l;
    try { localStorage.setItem("yv-lang", l); } catch (e) {}
    applyLang();
  }
  function renderMail() {
    [["#endMail"], ["#doneMail"]].forEach(function (a) {
      var el = $(a[0]);
      if (C.contactEmail) {
        el.hidden = false;
        el.innerHTML = esc(t("form.mailLabel")) + ' <a href="mailto:' + esc(C.contactEmail) + '">' + esc(C.contactEmail) + "</a>";
      } else { el.hidden = true; }
    });
  }

  /* ---------- 章節進度與導覽 ---------- */
  var chapter = 1, drawActive = false;
  function setProgress(n, force) {
    if (n === chapter && !force) return;
    chapter = n;
    $("#progNo").textContent = "0" + n;
    $$(".progress-bars i").forEach(function (b, i) { b.classList.toggle("on", i === n - 1); });
    $("#progName").textContent = t("chapters")[n - 1];
    var map = { 3: "business", 4: "story", 5: "world", 6: "contact" };
    $$(".nav-links a").forEach(function (a) { a.classList.toggle("on", a.getAttribute("data-nav") === map[n]); });
  }
  var ticking = false;
  function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      $("#nav").classList.toggle("solid", window.scrollY > 40);
      if (drawActive) return;
      var mid = window.innerHeight * 0.5, n = 1;
      $$("[data-chapter]").forEach(function (s) { if (s.getBoundingClientRect().top <= mid) n = +s.getAttribute("data-chapter"); });
      setProgress(n);
    });
  }
  function scrollToEl(el, instant) {
    var top = el.getBoundingClientRect().top + window.scrollY;
    try { window.scrollTo({ top: top, behavior: instant || reduceMQ.matches ? "instant" : "smooth" }); }
    catch (e) { window.scrollTo(0, top); }
  }

  /* ---------- 抽籤狀態機 ---------- */
  // idle → drawing → revealed → entering → idle
  var D = { state: "idle", result: null, tl: null, skip: false, opener: null };
  var draw = $("#draw"), veil = $("#drawVeil"), fly = $("#fly"), cover = $("#flyCover"), curl = $("#flyCurl"),
    ui = $("#drawUi"), kicker = $("#drawKicker"), stageTk = $("#stageTicket"), worldEl = $("#cam"),
    boxwrap = $("#boxwrap"), drawBtn = $("#drawBtn"), live = $("#drawLive");
  var solid = document.createElement("div");
  solid.style.cssText = "position:absolute;inset:0;background:#FFF9F0;opacity:0;pointer-events:none";
  draw.insertBefore(solid, fly);
  var REST = { yPercent: -42, rotation: -9 };

  function pick() {
    var a = new Uint32Array(1), lim = 4294967292; // 6 的倍數上限，避免取餘數偏差
    try { do { crypto.getRandomValues(a); } while (a[0] >= lim); return BIZ[a[0] % 6]; }
    catch (e) { return BIZ[Math.floor(Math.random() * 6)]; }
  }
  function fillResult() {
    var k = D.result;
    $("#flyFace").innerHTML = faceHTML(k);
    $("#drawNo").textContent = t("biz.label") + " " + no(k) + " / 06";
    $("#drawEn").textContent = t("biz." + k + ".en");
    $("#drawName").textContent = t("biz." + k + ".name");
    $("#drawName").hidden = t("biz." + k + ".name") === t("biz." + k + ".en");
  }
  function center() {
    var W = fly.offsetWidth, vh = window.innerHeight;
    var cy = Math.max(vh * (window.innerWidth < 760 ? 0.33 : 0.38), 150 + W * 0.21);
    ui.style.top = Math.round(cy + W * 0.2095 + 14) + "px";
    return { x: window.innerWidth / 2, y: cy, W: W };
  }
  function resetStage() {
    if (hasG) {
      gsap.killTweensOf([worldEl, stageTk, "#heroCopy > *", ".scroll-hint"]);
      gsap.set(worldEl, { scale: 1 });
      gsap.set(stageTk, { opacity: 1, yPercent: REST.yPercent, rotation: REST.rotation, skewX: 0 });
      gsap.set(["#heroCopy > *", ".scroll-hint"], { clearProps: "opacity,visibility,transform" });
    }
  }
  function closeDraw(keepFocus) {
    if (D.tl) { D.tl.kill(); D.tl = null; }
    draw.hidden = true; draw.classList.remove("revealed");
    html.classList.remove("lock"); drawActive = false;
    D.state = "idle"; D.result = null; D.skip = false;
    drawBtn.disabled = false;
    resetStage(); onScroll();
    if (!keepFocus && D.opener && D.opener.focus) D.opener.focus();
  }
  function showRevealed() {
    D.state = "revealed"; draw.classList.add("revealed");
    live.textContent = t("draw.youGot") + " " + t("biz." + D.result + ".name");
    $("#drawGo").focus({ preventScroll: true });
  }
  function startDraw(opener) {
    if (D.state !== "idle") return;           // 防連點
    D.state = "drawing"; D.result = pick(); D.skip = false; D.opener = opener || drawBtn;
    fillResult();
    draw.hidden = false; html.classList.add("lock"); drawActive = true; drawBtn.disabled = true;
    setProgress(2);
    live.textContent = t("draw.drawing");
    var c = center();
    if (!motion()) {                           // 無 GSAP 或減少動態：直接呈現結果
      veil.style.opacity = 1; kicker.style.opacity = 1;
      cover.style.clipPath = "inset(0 0 0 100%)"; curl.style.opacity = 0;
      fly.style.cssText += ";opacity:1;visibility:visible;transform:translate(" + c.x + "px," + c.y + "px) translate(-50%,-50%) rotate(-1.5deg)";
      ui.style.opacity = 1; ui.style.visibility = "visible";
      showRevealed(); return;
    }
    gsap.set(cover, { clipPath: "inset(0% 0% 0% 0%)" });
    gsap.set(curl, { opacity: 0, left: "9%" });
    gsap.set([veil, solid, kicker], { opacity: 0 });
    gsap.set(kicker, { y: 14 });
    gsap.set(fly, { autoAlpha: 0 });
    gsap.set(ui, { autoAlpha: 0, y: 16 });
    gsap.set("#drawClose", { autoAlpha: 1 });
    // 1) 文案退場、鏡頭推近、紙籤從箱口抽出
    var tl = D.tl = gsap.timeline({ onComplete: handoff });
    tl.to("#heroCopy > *", { y: -18, autoAlpha: 0, duration: 0.4, stagger: 0.05, ease: "power2.in" }, 0)
      .to(".scroll-hint", { autoAlpha: 0, duration: 0.3 }, 0)
      .to(worldEl, { scale: 1.2, duration: 1.5, ease: "power2.inOut" }, 0.1)
      .to(stageTk, { yPercent: -8, duration: 0.3, ease: "power2.in" }, 0.25)
      .to(stageTk, { yPercent: -182, rotation: -5, duration: 1.05, ease: "power3.out" }, 0.6)
      .to(stageTk, { skewX: 4, duration: 0.28, yoyo: true, repeat: 1, ease: "sine.inOut" }, 0.75);
  }
  function handoff() {
    // 2) 同一張籤交給最上層：位置、大小、角度都對齊後才接手
    var sc = boxwrap.getBoundingClientRect().width / boxwrap.offsetWidth;
    var r = stageTk.getBoundingClientRect();
    var c = center();
    gsap.set(fly, { autoAlpha: 1, xPercent: -50, yPercent: -50, x: r.left + r.width / 2, y: r.top + r.height / 2, scale: stageTk.offsetWidth * sc / c.W, scaleY: stageTk.offsetWidth * sc / c.W, rotation: -5 });
    gsap.set(stageTk, { opacity: 0 });
    var tl = D.tl = gsap.timeline({ onComplete: showRevealed });
    tl.to(veil, { opacity: 1, duration: 0.9, ease: "power1.out" }, 0)
      .to(fly, { x: c.x, y: c.y, scale: 1, rotation: -3, duration: 1.0, ease: "power3.inOut" }, 0)
      .to(kicker, { opacity: 1, y: 0, duration: 0.5 }, 0.45)
      .to(fly, { rotation: 1.5, duration: 0.3, ease: "sine.inOut" }, "+=0.2")
      .set(curl, { opacity: 1 })
      // 3) 沿粉色撕線揭開封層
      .fromTo(cover, { clipPath: "inset(0% 0% 0% 9%)" }, { clipPath: "inset(0% 0% 0% 100%)", duration: 0.95, ease: "power2.inOut" })
      .to(curl, { left: "96%", duration: 0.95, ease: "power2.inOut" }, "<")
      .to(curl, { opacity: 0, duration: 0.18 })
      .to(fly, { rotation: -1.5, duration: 0.5, ease: "power2.out" }, "<")
      .to(ui, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" }, "<0.05");
    if (D.skip) tl.progress(1);
  }
  function skipDraw() {
    if (D.state !== "drawing" || !D.tl) return;
    D.skip = true; D.tl.progress(1);
  }
  function enterBusiness() {
    if (D.state !== "revealed") return;
    var k = D.result, sec = $("#biz-" + k), dest = $(".biz-tk", sec);
    D.state = "entering";
    if (!motion()) { closeDraw(true); fly.style.opacity = 0; scrollToEl(sec, true); focusSection(sec); return; }
    // 4) 同一張籤落到該場景的桌面／展示位置
    var tl = D.tl = gsap.timeline();
    tl.to([ui, kicker, "#drawClose"], { autoAlpha: 0, duration: 0.25 })
      .to(solid, { opacity: 1, duration: 0.3 }, "<")
      .add(function () {
        scrollToEl(sec, true);
        resetStage();
        ScrollTrigger.update();
        dest.style.visibility = "hidden";
        var r = dest.getBoundingClientRect(), s = dest.offsetWidth / fly.offsetWidth;
        gsap.to(fly, { x: r.left + r.width / 2, y: r.top + r.height / 2, scale: s, scaleY: s * DEST[k][1], rotation: DEST[k][0], duration: 0.95, ease: "power3.inOut" });
        gsap.to([solid, veil], { opacity: 0, duration: 0.8, delay: 0.1 });
      })
      .add(function () {
        dest.style.visibility = "";
        gsap.set(fly, { autoAlpha: 0 });
        gsap.set([ui, kicker], { clearProps: "opacity,visibility" });
        closeDraw(true); focusSection(sec);
      }, "+=1.0");
  }
  function focusSection(sec) {
    var h = $("h2", sec); if (!h) return;
    h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true });
  }
  function drawAgainFromEnd() {
    if (D.state !== "idle") return;
    var far = window.scrollY > window.innerHeight * 2.5;
    scrollToEl($("#top"), far);                 // 距離太遠就直接回到櫃檯，不拖著整頁捲
    var n = 0, iv = setInterval(function () {
      if (window.scrollY < 4 || ++n > 25) {
        clearInterval(iv);
        try { window.scrollTo({ top: 0, behavior: "instant" }); } catch (e) { window.scrollTo(0, 0); }
        setTimeout(function () { startDraw(drawBtn); }, far ? 350 : 60);
      }
    }, 60);
  }

  /* ---------- 合作需求表單 ---------- */
  var modal = $("#modal"), form = $("#form"), done = $("#done"), lastFocus = null;
  function openForm(k, opener) {
    lastFocus = opener || document.activeElement;
    form.hidden = false; done.hidden = true; $("#copyMsg").textContent = "";
    $("#formBiz").value = k || "";
    modal.hidden = false; html.classList.add("lock");
    form.elements.name.focus();
  }
  function closeForm() {
    modal.hidden = true;
    if (draw.hidden) html.classList.remove("lock");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function setErr(name, msg) {
    var el = form.elements[name];
    el.classList.toggle("bad", !!msg);
    el.setAttribute("aria-invalid", msg ? "true" : "false");
    $('[data-err="' + name + '"]').textContent = msg || "";
    return !msg;
  }
  function validate() {
    var f = form.elements, ok = true, first = null;
    [["name", f.name.value.trim().length > 0, "errName"],
     ["email", /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.value.trim()), "errEmail"],
     ["message", f.message.value.trim().length >= 10, "errMsg"]].forEach(function (r) {
      if (!setErr(r[0], r[1] ? "" : t("form." + r[2]))) { ok = false; first = first || f[r[0]]; }
    });
    if (first) first.focus();
    return ok;
  }
  function summaryText() {
    var f = form.elements, k = f.business.value;
    return [t("form.sumTitle"),
      t("form.name") + "：" + f.name.value.trim(),
      t("form.company") + "：" + (f.company.value.trim() || "-"),
      t("form.email") + "：" + f.email.value.trim(),
      t("form.business") + "：" + (k ? no(k) + " " + t("biz." + k + ".name") : t("form.any")),
      "", t("form.message") + "：", f.message.value.trim(), "", C.siteUrl].join("\n");
  }
  function showDone() {
    $("#summary").value = summaryText();
    form.hidden = true; done.hidden = false;
    $("#copyBtn").focus();
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validate()) return;
    if (!C.formEndpoint) { showDone(); return; }   // 尚未串接寄送：只整理、不假裝寄出
    var btn = $('button[type="submit"]', form), label = $("span", btn);
    btn.disabled = true; label.textContent = t("form.sending");
    fetch(C.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text: summaryText() }) })
      .then(function (r) { if (!r.ok) throw new Error(r.status); showDone(); $("#copyMsg").textContent = t("form.sent"); })
      .catch(function () { showDone(); $("#copyMsg").textContent = t("form.sendFail"); })
      .then(function () { btn.disabled = false; label.textContent = t("form.submit"); });
  });
  $("#copyBtn").addEventListener("click", function () {
    var ta = $("#summary"), msg = $("#copyMsg");
    function fallback() {
      ta.focus(); ta.select();
      var ok = false; try { ok = document.execCommand("copy"); } catch (e) {}
      msg.textContent = t(ok ? "form.copied" : "form.copyFail");
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(ta.value).then(function () { msg.textContent = t("form.copied"); }, fallback);
    } else { fallback(); }
  });
  $("#editBtn").addEventListener("click", function () { done.hidden = true; form.hidden = false; form.elements.message.focus(); });
  ["name", "email", "message"].forEach(function (n) { form.elements[n].addEventListener("input", function () { if (this.classList.contains("bad")) setErr(n, ""); }); });

  /* ---------- 事件 ---------- */
  function trap(e, root) {
    if (e.key !== "Tab") return;
    var f = $$('a[href],button:not([disabled]),input,select,textarea,[tabindex="0"]', root).filter(function (el) { return el.offsetParent !== null; });
    if (!f.length) return;
    var a = f[0], z = f[f.length - 1];
    if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
    else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
  }
  document.addEventListener("keydown", function (e) {
    if (!modal.hidden) { if (e.key === "Escape") closeForm(); else trap(e, modal); return; }
    if (!draw.hidden) {
      if (e.key === "Escape") { if (D.state !== "entering") closeDraw(); }
      else trap(e, draw);
      return;
    }
    if (e.key === "Escape") toggleMenu(false);
    var c = e.target.closest && e.target.closest(".card");
    if (c && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); c.click(); }
  });
  function toggleMenu(open) {
    var tg = $("#navToggle"), links = $("#navLinks");
    var v = open == null ? tg.getAttribute("aria-expanded") !== "true" : open;
    tg.setAttribute("aria-expanded", String(v)); links.classList.toggle("open", v);
  }
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-contact],[data-go],[data-lang],[data-close],.card,.nav-links a,#navToggle");
    if (!el) return;
    if (el.id === "navToggle") { toggleMenu(); return; }
    if (el.hasAttribute("data-lang")) { setLang(el.getAttribute("data-lang")); return; }
    if (el.hasAttribute("data-contact")) { openForm(el.getAttribute("data-contact"), el); return; }
    if (el.hasAttribute("data-go")) { scrollToEl($("#biz-" + el.getAttribute("data-go"))); return; }
    if (el.hasAttribute("data-close")) { closeForm(); return; }
    if (el.classList.contains("card")) { var on = el.classList.toggle("flip"); el.setAttribute("aria-pressed", String(on)); return; }
    toggleMenu(false);
  });
  drawBtn.addEventListener("click", function () { startDraw(drawBtn); });
  $("#drawGo").addEventListener("click", enterBusiness);
  $("#drawAll").addEventListener("click", function () { if (D.state !== "revealed") return; closeDraw(true); scrollToEl($("#business")); });
  $("#drawAgain").addEventListener("click", function () { if (D.state !== "revealed") return; closeDraw(true); requestAnimationFrame(function () { startDraw(drawBtn); }); });
  $("#drawClose").addEventListener("click", function () { if (D.state !== "entering") closeDraw(); });
  $("#drawSkip").addEventListener("click", skipDraw);
  $("#againBtn").addEventListener("click", function () { drawAgainFromEnd(this); });
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () {
    onScroll();
    if (D.state === "revealed") {              // 視窗改變時，結果不變，只重新置中
      var c = center();
      if (hasG) gsap.set(fly, { x: c.x, y: c.y });
    }
  });

  /* ---------- 進場與捲動動態 ---------- */
  function initReveal() {
    var els = $$(".rv");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.05 });
    els.forEach(function (e) { io.observe(e); });
  }
  function placeMapTickets(p) {
    var arcs = $$(".map-arcs path"), tks = $$("#mapTk .tk");
    arcs.forEach(function (a, i) {
      var L = a.getTotalLength(), q = Math.max(0.08, Math.min(0.94, p * (0.86 + i * 0.03)));
      var pt = a.getPointAtLength(L * q);
      var tk = tks[i]; if (!tk) return;
      tk.style.left = (pt.x / 10) + "%"; tk.style.top = (pt.y / 5) + "%";
      tk.style.transform = "translate(-50%,-50%) rotate(" + ((i % 2 ? 1 : -1) * (4 + i * 2) * (0.4 + q)) + "deg) scale(" + (0.55 + 0.45 * q) + ")";
      tk.style.opacity = Math.min(1, q * 6);
    });
  }
  function initMotion() {
    placeMapTickets(0.9);
    if (!motion()) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(stageTk, { opacity: 1, yPercent: REST.yPercent, rotation: REST.rotation });
    gsap.to("#heroCopy", { yPercent: -18, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    gsap.matchMedia().add("(min-width:761px) and (min-aspect-ratio:4/5)", function () {
      $$(".biz").forEach(function (sec) {
        gsap.fromTo($(".biz-bg img", sec), { scale: 1.1, yPercent: -2.5 }, { scale: 1, yPercent: 2.5, ease: "none", scrollTrigger: { trigger: sec, start: "top bottom", end: "bottom top", scrub: true } });
        gsap.fromTo($(".biz-art", sec), { yPercent: 3 }, { yPercent: -3, ease: "none", scrollTrigger: { trigger: sec, start: "top bottom", end: "bottom top", scrub: true } });
      });
    });
    ScrollTrigger.create({ trigger: "#map", start: "top 85%", end: "bottom 45%", scrub: 0.6, onUpdate: function (s) { placeMapTickets(s.progress); } });
    placeMapTickets(0);
    gsap.fromTo(".end .scene-bg", { scale: 1.08 }, { scale: 1, ease: "none", scrollTrigger: { trigger: ".end", start: "top bottom", end: "top top", scrub: true } });
    // 按鈕 hover：紙籤多探出一點
    drawBtn.addEventListener("mouseenter", function () { if (D.state === "idle") gsap.to(stageTk, { yPercent: -70, rotation: -6, duration: 0.5, ease: "power2.out" }); });
    drawBtn.addEventListener("mouseleave", function () { if (D.state === "idle") gsap.to(stageTk, { yPercent: REST.yPercent, rotation: REST.rotation, duration: 0.6, ease: "power2.out" }); });
  }

  /* ---------- 啟動 ---------- */
  buildBusiness(); buildTickets();
  $$(".story-copy > *, .world-copy > *, .end-copy > *, .map, .fan-hint, .world-note").forEach(function (el, i) { el.classList.add("rv"); });
  try { var saved = localStorage.getItem("yv-lang"); if (saved && I[saved]) lang = saved; } catch (e) {}
  applyLang();
  initReveal(); initMotion(); onScroll();
  if (!hasG) { stageTk.style.opacity = 1; stageTk.style.transform = "translateY(-42%) rotate(-9deg)"; }
  var booted = false;
  function boot() { if (booted) return; booted = true; html.classList.add("loaded"); }
  if (document.readyState === "complete") boot(); else window.addEventListener("load", boot);
  setTimeout(boot, 3500);
})();
