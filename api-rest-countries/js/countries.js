
const loadData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => eachData(data))
}

const eachData = (countries) => {
    console.log(countries)
    countries.map(country => {
        const container = document.getElementById('contriesContainer');
        container.classList.add('container');
        const creatEl = document.createElement('div');
        creatEl.classList.add('createEl')
        creatEl.innerHTML= 
        ` 
        <h2>${country.name.common}</h2> 
        <p class="population">Population: ${country.population}</p>
        <p class="population">Continents: ${country.continents[0]}</p>
        <p class="population">capital: ${country.capital[0]}</p>
        <p class="population">language: ${country.languages.eng}</p>
        <img src="${country.flags.png}"></img>
        `
        container.appendChild(creatEl);
    })
}

loadData();