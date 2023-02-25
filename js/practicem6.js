//  console.log('connected');

// function loadPost(){
//     fetch(`js/api-1-data.js`)
//     .then(res => res.json())
//     .then(data => displayPosts(data))
//     console.log(url);

// }

const loadData = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => showData(data))
    .catch((err) => {
        console.log(err);
    });


};

const showData = (data) => {
    // console.log(data);
    for(let singleData of data.slice(0, 10)){
        // console.log(singleData);
        const container = document.getElementById("post-info");
        const div = document.createElement("div");
        div.innerHTML = `
        <h1 class="text-center text-green-500 text-3xl">${singleData.title}</h1>
        `;
        container.appendChild(div);
    }
};

loadData();

// meme world

const loadMeme = () => {
    const url = "https://meme-api.com/gimme/20";
    fetch(url)
    .then((res) => res.json())
    .then((data) => showMeme(data.memes));
};

const showMeme = (memes) => {
    console.log(memes.url);
    memes.slice(0, 12).forEach((meme) => {
        // console.log(meme);
        const memeContainer = document.getElementById("section");
        const div = document.createElement("div");
        div.innerHTML= `
        <div class="card w-full glass shadow-2xl">
  <figure><img class="w-full h-64"src="${meme.url}"/></figure>
  
  
</div>
`;
        memeContainer.appendChild(div)
       });
};
loadMeme();

// Rest countries

const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
    console.log(data);
    showAllCountries(data.slice(0, 12));
});
};

const showAllCountries = (countries) =>{
    const countryContainer = document.getElementById("countries-info");
    countryContainer.innerHTML = "";
    // console.log(countries);
    countries.forEach((country) => {
         console.log(country.flags.png);
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card w-full h-96 bg-base-100 shadow-2xl">
  <figure class="px-10 pt-10">
    <img src="${country.flags.png}" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title text-3xl">${country.name.common}!</h2>
    <p>Population: ${country.population}}</p>
    <div class="card-actions">
      <button onClick="showDetails('${country.cca2}')" class="btn btn-primary">See Details</button>
    </div>
  </div>
</div>
        `;
        countryContainer.appendChild(div);
    });

};
const showDetails =(id) => {
    const URL = `https://restcountries.com/v3.1/alpha/${id}`;
    fetch(URL)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

loadCountries();

const showAllData = () =>{
    fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
    console.log(data);
    showAllCountries(data);
});
}