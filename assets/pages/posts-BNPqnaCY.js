import{a as e,n as t,r as n,t as r}from"../preload-helper-BzD_BwVi.js";function i(e,r=[]){let i=`${e.ui.appTitle} の Post 一覧ページです。タグで絞り込みながら記事を探せます。`,a=`${window.origin}/${e.file.ogp}`,o=`${e.ui.appTitle} の個人ブログサイトです。`,s=t(r),c=n(e,r,`all`);document.querySelector(`#app-head`).innerHTML+=`
<title>Post | ${e.ui.appTitle}</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="${i}" />
<meta property="og:type" content="website" />
<meta property="og:title" content="${e.ui.appTitle}" />
<meta property="og:description" content="${o}" />
<meta property="og:image" content="${a}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${e.ui.appTitle}" />
<meta name="twitter:description" content="${o}" />
<meta name="twitter:image" content="${a}" />`,document.querySelector(`#app`).innerHTML=`
<header>
  <a href="/" aria-label="Home">
    <img src="/favicon.svg" alt="アイコン画像" />
  </a>
  <nav>
    <ul>
      <a href="/${e.path.PostPageDirForUrl}/"><li>POST</li></a>
    </ul>
  </nav>
</header>
<main class="site-shell">
  <div class="section-list">
    <section class="section-card">
      <p class="card-title">Post</p>
      <ul id="filter-tag-list" class="tag-list" aria-label="Post tag filters">
        ${s}
      </ul>
      <div class="card-separator"></div>
      <ul class="post-list" data-post-list="archive">
        ${c}
      </ul>
    </section>
  </div>
</main>
<footer>
  <p>${e.ui.copyright}</p>
</footer>
`;let l=document.querySelector(`#filter-tag-list`),u=document.querySelector(`[data-post-list="archive"]`);l.addEventListener(`click`,t=>{t.target.dataset.filter||(t.target.dataset.filter=`all`),l.querySelectorAll(`.is-active`).forEach(e=>{e.classList.toggle(`is-active`)}),t.target.classList.toggle(`is-active`),u.innerHTML=n(e,r,t.target.dataset.filter)})}var{default:a}=await r(async()=>{let{default:e}=await import(`../posts-B_Y_2FEI.js`);return{default:e}},[]);i(e,a);