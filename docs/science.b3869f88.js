const e=document.querySelector(".scienceNews"),t=document.querySelector("#scienceImg"),r=document.querySelector("#sciencetext .title"),i=document.querySelector("#sciencetext .description"),l=document.querySelector(".book-lists"),n=document.querySelector("#container"),a=async()=>{try{let e=await fetch("science.json");return await e.json()}catch(e){return alert("An error occurred: "+e),[]}},o=t=>{e&&(e.innerHTML="",(t.results||[]).slice(3).forEach(t=>{if(!t.title||"null"===t.url||""===t.url)return;let r=document.createElement("li");r.setAttribute("class","article");let i=t.multimedia&&t.multimedia.length>0?t.multimedia[0].url:"default-image-url.jpg";r.innerHTML=`
      <h2>${t.title}</h2>
      <img src="${i}" alt="${t.title}"/>
      <p>Author: ${t.byline||"Unknown"}</p>
      <p>Description: ${t.abstract||"No description available"}</p>
      <a href="${t.url}" target="_blank">About more</a>
    `,e.appendChild(r)}))},s=e=>{if(!e||!t||!r||!i)return;let l=e.multimedia&&e.multimedia.length>0?e.multimedia[0].url:null;l&&(t.innerHTML=`<img src="${l}" alt="${e.title||"News Image"}">`),r.innerHTML=`<a href="${e.url||"#"}"><h3>${e.title||"No Title"}</h3></a>`,i.textContent=e.abstract||"No description available"};(async()=>{if(!e)return;let t=await a();console.log(t),o(t);let r=(t.results||[]).find(e=>e.title&&e.url&&"null"!==e.url&&""!==e.url);r&&s(r)})(),async function(){if(l)try{let e=await fetch("test.json");if(!e.ok)throw Error("network response was not ok"+e.statusText);let t=await e.json(),r="";t.results.books.forEach(e=>{r+=`<div class="book-container">
                          <div class="book-list">
                            <p class="rank">${e.rank}</p>
                            <img src="${e.book_image}" alt="${e.book_image}">
                            <p class="title">${e.title}</p>
                            <p class="author">by ${e.author}</p>
                            <p class="description">${e.description}</p>
                          </div>
                        </div>`}),l.innerHTML=r}catch(e){console.error("Error fetching JSON data:",e)}}();const c=document.querySelector(".toggle_btn"),u=document.querySelector(".dropdown_menu"),d=c?c.querySelector("i"):null;function m(){let e=document.getElementById("current-time");if(!e)return;let t=new Date;e.innerHTML=t.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),e.setAttribute("datetime",t.toISOString())}function p(){if(!n||window.matchMedia("(max-width: 768px)").matches)return;let e=Math.min(.28*window.scrollY,160);n.style.setProperty("--parallax-y",`${e}px`)}c&&u&&d&&c.addEventListener("click",()=>{u.classList.toggle("open"),u.classList.contains("open")?(d.classList.remove("uil-bars"),d.classList.add("uil-times")):(d.classList.remove("uil-times"),d.classList.add("uil-bars"))}),m(),setInterval(m,1e3),p(),window.addEventListener("scroll",p,{passive:!0});
//# sourceMappingURL=science.b3869f88.js.map
