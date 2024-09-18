document.getElementById('submit').addEventListener('click', async function(event) {
    event.preventDefault();
    
    const query = document.getElementById('searchQuery').value;
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = 'Loading...';
    
    try {
        const response = await fetch(`https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        
        resultsContainer.innerHTML = '';

data.collection.items.forEach(item => {
const mediaType = item.data[0].media_type;
let mediaElement;
if (mediaType === 'image') {
                mediaElement = `<img src="${item.links[0].href}" alt="${item.data[0].title}">`;
            } else if (mediaType === 'video') {
                mediaElement = `<video controls>
                                    <source src="${item.links[0].href}" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>`;
            }

resultsContainer.innerHTML += `
<div class="result-item">
${mediaElement}
<div class="description">
<h3>${item.data[0].title}</h3>
<p>${item.data[0].description || 'No description available'}
</p>
</div>
</div>
`;
});

if (data.collection.items.length === 0) {
resultsContainer.innerHTML = 'No results found.';
}
 } catch (error) {
resultsContainer.innerHTML = 'An error occurred. Please try again later.';
console.error('Error fetching data:', error);
    }
});
async function fetchiv() {
 let ttof = await fetch(`https://images-api.nasa.gov/search?q=${encodeURIComponent("nature")}`);
 let fett = await ttof.json();
 fett.collection.items.forEach((item) => {
 const mediaType = item.data[0].media_type;
let mediaEl;
if (mediaType === 'image') {
mediaEl = `<img id="img" src="${item.links[0].href}" alt="${item.data[0].title}">`;
} else if (mediaType === 'video') {
mediaEl= `<video controls>
<source src="${item.links[0].href}" type="video/mp4">
Your browser does not support the video tag.</video>`;
}
let res = document.createElement("div");
res.classList.add("res");
res.innerHTML += `
 <div class="result-item">
${mediaEl}
<div class="description">
<h2>${item.data[0].title}</h2>
<p>${item.data[0].description || 'No description available'}
</p>
</div>
</div>
 `;
 console.log(item.data[0]);
 document.getElementById("results").appendChild(res);
 //switching from document.getElementById("res") += `the items` to document.getElementById("results").appendChild(res); made the loading much faster
});
}
fetchiv();
async function climate() {
let climate = await fetch("https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key=rKmm6PZ8bx9CsJJcLTmMWQ2gUe3i2fzqDgIZPCl1")
let climfetched = await climate.json();
console.log("this is planetary",climfetched);
}
document.getElementById("agric").addEventListener('click', async function() {
let modal = document.getElementById("modal").classList.add("active");
let data = await fetch("/edsc_collection_results_export.json");
let soildata = await data.json();
 soildata.forEach((sd) => {
  let res = document.createElement("div");
  res.innerHTML = `
<div id="details">
<h2>${sd.title}</h2>
</div>
  `;
  console.log(`https://docserver.gesdisc.eosdis.nasa.gov/public/project/Images/${sd.shortName}.png`);
 });
})