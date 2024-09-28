const e=document.querySelector(".scienceNews"),t=document.querySelector("#scienceImg"),i=document.querySelector("#sciencetext .title"),r=document.querySelector("#sciencetext .description"),l=async()=>{try{let e=await fetch("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=eHsPZe0Dz2D2HKdpAys2HmM2Dmdsalf8");return await e.json()}catch(e){return alert("An error occurred: "+e),[]}},s=t=>{e.innerHTML="",(t.results||[]).slice(3).forEach(t=>{if(!t.title||"null"===t.url||""===t.url)return;let i=document.createElement("li");i.setAttribute("class","article");let r=t.multimedia&&t.multimedia.length>0?t.multimedia[0].url:"default-image-url.jpg";i.innerHTML=`
      <h2>${t.title}</h2>
      <img src="${r}" alt="${t.title}"/>
      <p>Author: ${t.byline||"Unknown"}</p>
      <p>Description: ${t.abstract||"No description available"}</p>
      <a href="${t.url}" target="_blank">About more</a>
    `,e.appendChild(i)})},n=e=>{if(!e)return;let l=e.multimedia&&e.multimedia.length>0?e.multimedia[0].url:null;l&&(t.innerHTML=`<img src="${l}" alt="${e.title||"News Image"}" style="width%; height: 100%;">`),i.innerHTML=`<a href="${e.url||"#"}"><h3>${e.title||"No Title"}</h3></a>`,r.textContent=e.abstract||"No description available"};(async()=>{let e=await l();console.log(e),s(e);let t=(e.results||[]).find(e=>e.title&&e.url&&"null"!==e.url&&""!==e.url);t&&n(t)})(),async function(){try{let e=await fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=eHsPZe0Dz2D2HKdpAys2HmM2Dmdsal8");if(!e.ok)throw Error("network response was not ok"+e.statusText);let t=await e.json(),i="";t.results.books.forEach(e=>{i+=`<div class="book-container">
                          <div class="book-list">
                            <p class="rank">${e.rank}</p>
                            <img src="${e.book_image}" alt="${e.book_image}">
                            <p class="title">${e.title}</p>
                            <p class="author">by ${e.author}</p>
                            <p class="description">${e.description}</p>
                          </div>
                        </div>`}),document.querySelector(".book-lists").innerHTML=i}catch(e){console.error("Error fetching JSON data:",e)}}();const o=document.querySelector(".toggle_btn"),a=document.querySelector(".dropdown_menu"),c=o.querySelector("i");function u(){let e=document.getElementById("current-time"),t=new Date;e.innerHTML=t.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),e.setAttribute("datetime",t.toISOString())}o.addEventListener("click",()=>{a.classList.toggle("open"),a.classList.contains("open")?(c.classList.remove("uil-bars"),c.classList.add("uil-times")):(c.classList.remove("uil-times"),c.classList.add("uil-bars"))}),u(),setInterval(u,1e3);
//# sourceMappingURL=science.a1af4e59.js.map
