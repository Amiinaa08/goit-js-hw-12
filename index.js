import{a as v,S as w,i as n}from"./assets/vendor-B5nsgUv9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const S="54744478-626f145ffe7173a1cca0dc1cc",C="https://pixabay.com/api/";async function f(r,e){const o={key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15};return(await v.get(C,{params:o})).data}const u=document.querySelector(".gallery"),m=document.querySelector(".loader-container"),g=document.querySelector(".load-more");let R=new w(".gallery a",{captionsData:"alt",captionDelay:250});function h(r){const e=r.map(o=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o.largeImageURL}">
        <img
          class="gallery-image"
          src="${o.webformatURL}"
          alt="${o.tags}"
        />
      </a>
      <div class="gallery-info">
        <div class="info-item">
          <b>Likes</b>
          <span>${o.likes}</span>
        </div>
        <div class="info-item">
          <b>Views</b>
          <span>${o.views}</span>
        </div>
        <div class="info-item">
          <b>Comments</b>
          <span>${o.comments}</span>
        </div>
        <div class="info-item">
          <b>Downloads</b>
          <span>${o.downloads}</span>
        </div>
      </div>
    </li>`).join("");u.insertAdjacentHTML("beforeend",e),R.refresh()}function q(){u.innerHTML=""}function p(){m.classList.remove("is-hidden")}function y(){m.classList.add("is-hidden")}function b(){g.classList.remove("is-hidden")}function d(){g.classList.add("is-hidden")}const L=document.querySelector(".form"),P=document.querySelector(".load-more");let i=1,a="";L.addEventListener("submit",B);P.addEventListener("click",M);async function B(r){if(r.preventDefault(),a=r.currentTarget.elements["search-text"].value.trim(),!a){n.warning({title:"Warning",message:"Search field cannot be empty!",position:"topRight"});return}i=1,q(),d(),p();try{const e=await f(a,i);if(e.hits.length===0){n.error({title:"",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff"});return}h(e.hits),i*15<e.totalHits?b():n.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(e){n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff"}),console.error(e)}finally{y()}L.reset()}async function M(){i+=1,d(),p();try{const r=await f(a,i);h(r.hits);const e=document.querySelector(".gallery-item");if(e){const o=e.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}i*15>=r.totalHits?(d(),n.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b()}catch(r){n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff"}),console.error(r)}finally{y()}}
//# sourceMappingURL=index.js.map
