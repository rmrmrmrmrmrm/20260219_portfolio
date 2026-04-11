(function () {
  const content = document.getElementById("content-area");
  const nav = document.querySelector(".sidebar nav");

  function setActive(page) {
    document.querySelectorAll(".ajax-link").forEach((a) => {
      a.classList.toggle("is-active", a.dataset.page === page);
    });
  }

  function showLoadError(message) {
    content.innerHTML =
      '<p class="load-error" style="padding:48px 40px;color:#666;line-height:1.7">' +
      (message ||
        "ページを読み込めませんでした。ローカルでは <code>http://</code> で配信した URL から開いてください（<code>file://</code> では制限があります）。") +
      "</p>";
  }

  async function loadPage(href) {
    const url = new URL(href, window.location.href);
    const res = await fetch(url.href);
    if (!res.ok) throw new Error(String(res.status));
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, "text/html");
    content.innerHTML = doc.body.innerHTML;
    const path = url.pathname + url.search + url.hash;
    window.history.pushState({ spa: true }, "", path);
  }

  /** ナビ内の .ajax-link クリックで常に同一ページ内読み込み（ページ遷移しない） */
  if (nav) {
    nav.addEventListener(
      "click",
      (e) => {
        const link = e.target.closest("a.ajax-link");
        if (!link) return;
        e.preventDefault();
        e.stopPropagation();

        const href = link.getAttribute("href");
        if (!href) return;

        loadPage(href)
          .then(() => setActive(link.dataset.page || ""))
          .catch(() => {
            showLoadError();
          });
      },
      true
    );
  }

  function fragmentUrlForCurrentPath() {
    const file = window.location.pathname.split("/").pop() || "";
    if (file === "profile.html") {
      return new URL("profile.html", window.location.href).href;
    }
    /* index.html / top.html / その他はトップ断片 */
    return new URL("top.html", window.location.href).href;
  }

  function activePageFromPath() {
    const file = window.location.pathname.split("/").pop() || "";
    if (file === "profile.html") return "profile";
    return "top";
  }

  window.addEventListener("popstate", () => {
    setActive(activePageFromPath());

    const url = fragmentUrlForCurrentPath();
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.text();
      })
      .then((html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        content.innerHTML = doc.body.innerHTML;
      })
      .catch(() => {
        showLoadError();
      });
  });

  // デフォルト: #content-area に top.html を表示
  const topUrl = new URL("top.html", window.location.href).href;
  loadPage(topUrl)
    .then(() => setActive("top"))
    .catch(() => {
      showLoadError();
    });
})();
