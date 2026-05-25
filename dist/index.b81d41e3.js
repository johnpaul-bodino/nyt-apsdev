const e=document.querySelector(".scienceNews"),t=document.querySelector("#scienceImg"),r=document.querySelector("#sciencetext .title"),i=document.querySelector("#sciencetext .description"),l=async()=>{try{let e=await fetch("science.json");return await e.json()}catch(e){return alert("An error occurred: "+e),[]}},n=t=>{e.innerHTML="",(t.results||[]).slice(3).forEach(t=>{if(!t.title||"null"===t.url||""===t.url)return;let r=document.createElement("li");r.setAttribute("class","article");let i=t.multimedia&&t.multimedia.length>0?t.multimedia[0].url:"default-image-url.jpg";r.innerHTML=`
      <h2>${t.title}</h2>
      <img src="${i}" alt="${t.title}"/>
      <p>Author: ${t.byline||"Unknown"}</p>
      <p>Description: ${t.abstract||"No description available"}</p>
      <a href="${t.url}" target="_blank">About more</a>
    `,e.appendChild(r)})},s=e=>{if(!e)return;let l=e.multimedia&&e.multimedia.length>0?e.multimedia[0].url:null;l&&(t.innerHTML=`<img src="${l}" alt="${e.title||"News Image"}" style="width%; height: 100%;">`),r.innerHTML=`<a href="${e.url||"#"}"><h3>${e.title||"No Title"}</h3></a>`,i.textContent=e.abstract||"No description available"};(async()=>{let e=await l();console.log(e),n(e);let t=(e.results||[]).find(e=>e.title&&e.url&&"null"!==e.url&&""!==e.url);t&&s(t)})(),async function(){try{let e=await fetch("test.json");if(!e.ok)throw Error("network response was not ok"+e.statusText);let t=await e.json(),r="";t.results.books.forEach(e=>{r+=`<div class="book-container">
                          <div class="book-list">
                            <p class="rank">${e.rank}</p>
                            <img src="${e.book_image}" alt="${e.book_image}">
                            <p class="title">${e.title}</p>
                            <p class="author">by ${e.author}</p>
                            <p class="description">${e.description}</p>
                          </div>
                        </div>`}),document.querySelector(".book-lists").innerHTML=r}catch(e){console.error("Error fetching JSON data:",e)}}();const a=document.querySelector(".toggle_btn"),o=document.querySelector(".dropdown_menu"),c=a.querySelector("i");function u(){let e=document.getElementById("current-time"),t=new Date;e.innerHTML=t.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),e.setAttribute("datetime",t.toISOString())}a.addEventListener("click",()=>{o.classList.toggle("open"),o.classList.contains("open")?(c.classList.remove("uil-bars"),c.classList.add("uil-times")):(c.classList.remove("uil-times"),c.classList.add("uil-bars"))}),u(),setInterval(u,1e3);
//# sourceMappingURL=index.b81d41e3.js.map
