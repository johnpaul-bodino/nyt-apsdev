const e=document.querySelector(".scienceNews"),t=document.querySelector("#scienceImg"),r=document.querySelector("#sciencetext .title"),i=document.querySelector("#sciencetext .description"),l=document.querySelector(".book-lists"),n=async()=>{try{let e=await fetch("science.json");return await e.json()}catch(e){return alert("An error occurred: "+e),[]}},a=t=>{e&&(e.innerHTML="",(t.results||[]).slice(3).forEach(t=>{if(!t.title||"null"===t.url||""===t.url)return;let r=document.createElement("li");r.setAttribute("class","article");let i=t.multimedia&&t.multimedia.length>0?t.multimedia[0].url:"default-image-url.jpg";r.innerHTML=`
      <h2>${t.title}</h2>
      <img src="${i}" alt="${t.title}"/>
      <p>Author: ${t.byline||"Unknown"}</p>
      <p>Description: ${t.abstract||"No description available"}</p>
      <a href="${t.url}" target="_blank">About more</a>
    `,e.appendChild(r)}))},o=e=>{if(!e||!t||!r||!i)return;let l=e.multimedia&&e.multimedia.length>0?e.multimedia[0].url:null;l&&(t.innerHTML=`<img src="${l}" alt="${e.title||"News Image"}">`),r.innerHTML=`<a href="${e.url||"#"}"><h3>${e.title||"No Title"}</h3></a>`,i.textContent=e.abstract||"No description available"};(async()=>{if(!e)return;let t=await n();console.log(t),a(t);let r=(t.results||[]).find(e=>e.title&&e.url&&"null"!==e.url&&""!==e.url);r&&o(r)})(),async function(){if(l)try{let e=await fetch("test.json");if(!e.ok)throw Error("network response was not ok"+e.statusText);let t=await e.json(),r="";t.results.books.forEach(e=>{r+=`<div class="book-container">
                          <div class="book-list">
                            <p class="rank">${e.rank}</p>
                            <img src="${e.book_image}" alt="${e.book_image}">
                            <p class="title">${e.title}</p>
                            <p class="author">by ${e.author}</p>
                            <p class="description">${e.description}</p>
                          </div>
                        </div>`}),l.innerHTML=r}catch(e){console.error("Error fetching JSON data:",e)}}();const s=document.querySelector(".toggle_btn"),c=document.querySelector(".dropdown_menu"),u=s?s.querySelector("i"):null;function d(){let e=document.getElementById("current-time");if(!e)return;let t=new Date;e.innerHTML=t.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),e.setAttribute("datetime",t.toISOString())}s&&c&&u&&s.addEventListener("click",()=>{c.classList.toggle("open"),c.classList.contains("open")?(u.classList.remove("uil-bars"),u.classList.add("uil-times")):(u.classList.remove("uil-times"),u.classList.add("uil-bars"))}),d(),setInterval(d,1e3);
//# sourceMappingURL=science.a7c00b0d.js.map
