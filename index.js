import{a as d,S as f,i}from"./assets/vendor-DQiTczw4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const u="",m="https://pixabay.com/api/";function p(s){const o={key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(m,{params:o}).then(e=>e.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader-container");let g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(e=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
        />
      </a>
      <div class="gallery-info">
        <div class="info-item">
          <b>Likes</b>
          <span>${e.likes}</span>
        </div>
        <div class="info-item">
          <b>Views</b>
          <span>${e.views}</span>
        </div>
        <div class="info-item">
          <b>Comments</b>
          <span>${e.comments}</span>
        </div>
        <div class="info-item">
          <b>Downloads</b>
          <span>${e.downloads}</span>
        </div>
      </div>
    </li>`).join("");l.innerHTML=o,g.refresh()}function y(){l.innerHTML=""}function b(){c.classList.remove("is-hidden")}function L(){c.classList.add("is-hidden")}const v=document.querySelector(".form");v.addEventListener("submit",w);function w(s){s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(!o){i.warning({title:"Warning",message:"Search field cannot be empty!",position:"topRight"});return}y(),b(),p(o).then(e=>{if(e.hits.length===0){i.error({title:"",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff"});return}h(e.hits)}).catch(e=>{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff"}),console.error(e)}).finally(()=>{L()}),s.currentTarget.reset()}
//# sourceMappingURL=index.js.map
