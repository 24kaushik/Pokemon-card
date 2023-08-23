const url = "https://pokeapi.co/api/v2/pokemon/"
const btn = document.getElementById("btn");
const card = document.getElementById("card");
var root = document.querySelector(':root');
let themes = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190ff",
}


const getData = () => {
    let randNo = Math.floor(Math.random() * 300) + 1;
    fetch(url + randNo)
        .then(response => response.json())
        .then((data) => {
            card.innerHTML = `<p class="hp">
            <span>HP</span>
            ${data.stats[0].base_stat}
        </p>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${randNo}.svg" alt="">
        <h2 class="poke-name">${data.name[0].toUpperCase() + data.name.slice(1)}</h2>
        <div class="types">
        </div>
        <div class="stats">
            <div class="div">
                <h3>${data.stats[1].base_stat}</h3>
                <p>Attack</p>
            </div>
            <div class="div">
                <h3>${data.stats[2].base_stat}</h3>
                <p>Defence</p>
            </div>
            <div class="div">
                <h3>${data.stats[5].base_stat}</h3>
                <p>Speed</p>
            </div>
        </div>`;

            appendTypes(data.types);
            changeTheme(data.types);
        })
        .catch(err => console.error(err))
}

const appendTypes = (types) => {
    types.forEach(item => {
        let span = document.createElement("span");
        span.textContent = item.type.name;
        document.querySelector(".types").appendChild(span)
    })
}

const changeTheme = (types) => {
    root.style.setProperty("--theme", themes[types[0].type.name])

}

btn.addEventListener("click", (e) => {
    e.preventDefault()
    getData()
})

window.addEventListener("load", getData())