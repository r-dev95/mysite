import{a as e,i as t,t as n}from"./preload-helper-c4JbMTJA.js";function r(e,n=[]){let r=`${e.ui.appTitle} の個人ブログサイトです。`,i=`${window.origin}/${e.file.ogp}`,a=t(e,n);document.querySelector(`#app-head`).innerHTML+=`
<title>${e.ui.appTitle}</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="${r}" />
<meta property="og:type" content="website" />
<meta property="og:title" content="${e.ui.appTitle}" />
<meta property="og:description" content="${r}" />
<meta property="og:image" content="${i}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${e.ui.appTitle}" />
<meta name="twitter:description" content="${r}" />
<meta name="twitter:image" content="${i}" />`,document.querySelector(`#app`).innerHTML=`
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
      <p class="card-title">About</p>
      <div class="card-header">
        <h2>${e.ui.appTitle}</h2>
        <ul class="social-links" aria-label="SNS links">
          <li>
            <a href="https://x.com/rui__19" target="_blank" rel="noreferrer" aria-label="X">
              <img src="/icons/x.svg" alt="" width="20" height="20" />
            </a>
          </li>
          <li>
            <a href="https://github.com/r-dev95" target="_blank" rel="noreferrer" aria-label="GitHub">
              <img src="/icons/github.svg" alt="" width="20" height="20" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p class="card-text">ソフトウェアエンジニア (python, C, C++)</p>
        <p class="card-text">最近はWeb周りの技術を学習中です。</p>
      </div>
    </section>
    <section class="section-card" aria-labelledby="post-heading">
      <p class="card-title">Post</p>
      <div class="card-header">
        <h2 id="post-heading">最新の投稿</h2>
        <a class="card-link" href="/${e.path.PostPageDirForUrl}/">もっと見る</a>
      </div>
      <ul class="post-list" data-post-list="latest">
        ${a}
      </ul>
    </section>
  </div>
</main>
<footer>
  <p>${e.ui.copyright}</p>
</footer>`}var{default:i}=await n(async()=>{let{default:e}=await import(`./posts-B_Y_2FEI.js`);return{default:e}},[]);r(e,i.slice(0,3));