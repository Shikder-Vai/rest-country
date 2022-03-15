const loadAllCounries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => showCountries(data));
};

const showCountries = (countries) => {
  console.log(countries);
  const countriesHtml = countries.map((country) => getCountryHtml(country));
  const container = document.getElementById("all-countries");
  container.innerHTML = countriesHtml.join(" ");
};
const getCountryHtml = ({ name, flags, capital, area, region }) => {
  return `<div class="country">
    <img src="${flags.png}" alt="">
    <h1>Name: ${name.common}</h1>
    <h2>Capital: ${capital}</h2>
    <p>Area: ${area}</p>
    <p>Region: ${region}</p>
    </div>`;
};

// option 1.
// const getCountryHtml = (country) => {
//   const { name, flags, capital } = country;
//   return `<div class="country">
//   <img src="${flags.png}" alt="">
//   <h1>Name: ${name.common}</h1>
//   <h2>Capital: ${capital}</h2>
//   </div>`;
// };

//Orginal
/*
const getCountryHtml = (country) => {
    return `<div class="country">
    <img src="${country.flags.png}" alt="">
    <h1>Name: ${country.name.common}</h1>
    <h2>Capital: ${country.capital}</h2>
    </div>`;
  };
  */
loadAllCounries();
