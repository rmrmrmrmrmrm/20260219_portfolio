(function () {
  const content = document.getElementById("content-area");
  const links = document.querySelectorAll(".ajax-link");

  function setActive(page) {
    links.forEach((a) => {
      a.classList.toggle("is-active", a.dataset.page === page);
    });
  }

  async function loadPage(href) {
    const url = new URL(href, window.location.href);
    const res = await fetch(url.href);
    if (!res.ok) throw new Error(String(res.status));
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, "text/html");
    content.innerHTML = doc.body.innerHTML;
    window.history.pushState({ spa: true }, "", url.pathname + url.search + url.hash);
  }

  links.forEach((link) => {
    link.addEventListener("click", async (e) => {
      e.preventDefault();
      try {
        await loadPage(link.href);
        setActive(link.dataset.page || "");
      } catch (err) {
        window.location.href = link.href;
      }
    });
  });

  window.addEventListener("popstate", () => {
    const path = window.location.pathname;
    const file = path.split("/").pop() || "top.html";
    const map = { "top.html": "top", "profile.html": "profile" };
    setActive(map[file] || "");
    fetch(window.location.href)
      .then((r) => r.text())
      .then((html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        content.innerHTML = doc.body.innerHTML;
      })
      .catch(() => {});
  });

  // 初回: トップを表示
  loadPage(new URL("top.html", window.location.href).href)
    .then(() => setActive("top"))
    .catch(() => {
      content.innerHTML =
        '<p style="padding:48px 40px;color:#666;">トップを読み込めませんでした。ローカルサーバーで開くか、top.html に直接アクセスしてください。</p>';
    });
})();
