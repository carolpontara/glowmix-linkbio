(function () {
  var cfg = window.LINKBIO_CONFIG;
  var $ = function (id) { return document.getElementById(id); };

  var ICONS = {
    loja: '<svg viewBox="0 0 24 24"><path d="M7 7V6a5 5 0 0 1 10 0v1h2.2a1 1 0 0 1 1 .9l1 12A2 2 0 0 1 19.2 22H4.8a2 2 0 0 1-2-2.1l1-12a1 1 0 0 1 1-.9H7Zm2 0h6V6a3 3 0 0 0-6 0v1Zm-1 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 2c-2.7 0-3 0-4.1.1-4 .2-5.6 1.8-5.8 5.8C2 9 2 9.3 2 12s0 3 .1 4.1c.2 4 1.8 5.6 5.8 5.8 1.1.1 1.4.1 4.1.1s3 0 4.1-.1c4-.2 5.6-1.8 5.8-5.8.1-1.1.1-1.4.1-4.1s0-3-.1-4.1c-.2-4-1.8-5.6-5.8-5.8C15 2 14.7 2 12 2Zm0 1.8c2.7 0 3 0 4 .1 2.9.1 4 1.3 4.1 4.1.1 1 .1 1.3.1 4s0 3-.1 4c-.1 2.8-1.3 4-4.1 4.1-1 .1-1.3.1-4 .1s-3 0-4-.1c-2.9-.1-4-1.3-4.1-4.1-.1-1-.1-1.3-.1-4s0-3 .1-4C3.9 5.2 5.1 4 8 3.9c1-.1 1.3-.1 4-.1Z"/></svg>',
    link: '<svg viewBox="0 0 24 24"><path d="M10.6 13.4a1 1 0 0 1 0-1.4l3-3a1 1 0 1 1 1.4 1.4l-3 3a1 1 0 0 1-1.4 0ZM8.5 20a4.5 4.5 0 0 1-3.2-7.7l2.1-2.1a1 1 0 1 1 1.4 1.4l-2.1 2.1a2.5 2.5 0 0 0 3.5 3.5l2.1-2.1a1 1 0 0 1 1.4 1.4l-2.1 2.1A4.5 4.5 0 0 1 8.5 20Zm7.5-6.8a1 1 0 0 1-.7-1.7l2.1-2.1a2.5 2.5 0 0 0-3.5-3.5l-2.1 2.1a1 1 0 0 1-1.4-1.4l2.1-2.1a4.5 4.5 0 0 1 6.4 6.4l-2.1 2.1a1 1 0 0 1-.8.2Z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24"><path d="M9.3 5.3a1 1 0 0 1 1.4 0l6 6a1 1 0 0 1 0 1.4l-6 6a1 1 0 1 1-1.4-1.4l5.3-5.3-5.3-5.3a1 1 0 0 1 0-1.4Z"/></svg>',
    copy: '<svg viewBox="0 0 24 24"><path d="M16 1H6a2 2 0 0 0-2 2v12h2V3h10V1Zm3 4H10a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16h-9V7h9v14Z"/></svg>',
  };

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function cleanHandle(h) {
    return String(h || "").trim().replace(/^@/, "").replace(/^https?:\/\/(www\.)?instagram\.com\//i, "").replace(/\/.*$/, "");
  }

  var toastTimer;
  function toast(msg) {
    var t = $("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2200);
  }

  function copy(text, msg) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () { toast(msg); });
    } else {
      var ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      toast(msg);
    }
  }

  // Perfil
  var loja = cfg.loja;
  var handle = cleanHandle(loja.instagram);
  $("logo").src = loja.logo;
  $("nome").textContent = loja.nome;
  $("bio").textContent = loja.bio;
  $("handle").textContent = "@" + handle;
  $("handle").href = "https://www.instagram.com/" + handle + "/";
  $("ano").textContent = new Date().getFullYear();

  // Links
  var nav = $("links");
  cfg.links.forEach(function (l, i) {
    var ativo = !!l.url;
    var a = el(ativo ? "a" : "div", "btn btn-" + (l.icone || "link") + (l.destaque ? " btn-destaque" : "") + (ativo ? "" : " btn-off"));
    a.style.setProperty("--d", i * 70 + "ms");
    if (ativo) {
      a.href = l.url;
      a.target = "_blank";
      a.rel = "noopener";
    } else {
      a.setAttribute("aria-disabled", "true");
    }
    a.innerHTML =
      '<span class="btn-ico">' + (ICONS[l.icone] || ICONS.link) + "</span>" +
      '<span class="btn-txt"><strong>' + esc(l.titulo) + "</strong>" +
      (l.subtitulo ? "<small>" + esc(l.subtitulo) + "</small>" : "") + "</span>" +
      (ativo ? '<span class="btn-go">' + ICONS.arrow + "</span>" : '<span class="badge">Em breve</span>');
    nav.appendChild(a);
  });

  // Influenciadoras
  var grid = $("influ-grid");
  var paleta = ["pink", "purple", "teal", "yellow"];
  cfg.influenciadoras.forEach(function (inf, i) {
    var h = cleanHandle(inf.instagram);
    var cor = paleta[i % paleta.length];
    var card;
    if (h) {
      card = el("a", "influ-card c-" + cor);
      card.href = "https://www.instagram.com/" + h + "/";
      card.target = "_blank";
      card.rel = "noopener";
      var nome = inf.nome || h;
      var foto = inf.foto
        ? '<img src="' + esc(inf.foto) + '" alt="' + esc(nome) + '" loading="lazy" />'
        : "<span>" + esc(nome.charAt(0).toUpperCase()) + "</span>";
      card.innerHTML =
        '<span class="influ-avatar">' + foto + "</span>" +
        '<strong class="influ-nome">' + esc(nome) + "</strong>" +
        '<span class="influ-at">' + ICONS.instagram + "@" + esc(h) + "</span>";
      if (inf.cupom) {
        var c = el("button", "cupom", ICONS.copy + "<span>" + esc(inf.cupom) + "</span>");
        c.type = "button";
        c.title = "Copiar cupom";
        c.addEventListener("click", function (ev) {
          ev.preventDefault();
          ev.stopPropagation();
          copy(inf.cupom, "Cupom " + inf.cupom + " copiado!");
        });
        card.appendChild(c);
      }
    } else {
      card = el("div", "influ-card influ-vazia c-" + cor);
      card.innerHTML =
        '<span class="influ-avatar"><span>✦</span></span>' +
        '<strong class="influ-nome">Em breve</strong>' +
        '<span class="influ-at">@influencer</span>';
    }
    card.style.setProperty("--d", 200 + i * 70 + "ms");
    grid.appendChild(card);
  });

  // Compartilhar
  $("share").addEventListener("click", function () {
    var data = { title: loja.nome, text: loja.bio, url: location.href };
    if (navigator.share) {
      navigator.share(data).catch(function () {});
    } else {
      copy(location.href, "Link copiado!");
    }
  });
})();
