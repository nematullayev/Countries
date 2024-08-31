function findElement(selector, select = document) {
  return select.querySelector(selector);
}

const img = findElement(".img");
const title = findElement(".title");
const nativeName = findElement(".native-name");
const population = findElement(".population");
const region = findElement(".region");
const subRegion = findElement(".sub-region");
const capital = findElement(".capital");
const topLevelDomain = findElement(".top-Level-Domain");
const currencies = findElement(".currencies");
const languages = findElement(".languages");
const nearOne = findElement(".near-one");
const nearSecond = findElement(".near-second");
const nearThird = findElement(".near-third");
const back = findElement(".hero-top-btn");

const darkMode = findElement("#dark");
const lightMode = findElement("#light");
const header = findElement(".header-wrapper");
const body = findElement("body");
const arrow = findElement(".arrow");

darkMode.addEventListener("click", () => {
  lightMode.style.display = "block";
  darkMode.style.display = "none";

  body.style.backgroundColor = "#202c36";
  body.style.color = "#fff";
  back.style.color = "#fff";
  header.style.backgroundColor = "#2b3844";
  header.style.color = "#fff";
  lightMode.style.backgroundColor = "#2b3844";
  lightMode.style.color = "#fff";

  nativeName.style.color = "#abafb3";

  population.style.color = "#abafb3";
  region.style.color = "#abafb3";
  currencies.style.color = "#abafb3";
  subRegion.style.color = "#abafb3";
  capital.style.color = "#abafb3";
  topLevelDomain.style.color = "#abafb3";
  languages.style.color = "#abafb3";
  nearOne.style.color = "#abafb3";
  nearSecond.style.color = "#abafb3";
  nearThird.style.color = "#abafb3";
  arrow.src = "./img/white-arrow.svg";
});
lightMode.addEventListener("click", () => {
  darkMode.style.display = "block";
  lightMode.style.display = "none";

  body.style.backgroundColor = "#fafafa";
  body.style.color = "#000";
  header.style.backgroundColor = "#fff";
  header.style.color = "#000";
  back.style.color = "#000";
  arrow.src = "./img/call-made.svg";
});

let params = new URLSearchParams(document.location.search);
let name = params.get("name");
console.log(name);
fetch(`https://restcountries.com/v3.1/name/${name}`)
  .then((res) => res.json())
  .then((json) => {
    img.src = json[0].flags.png;
    nativeName.textContent = json[0].altSpellings[1];

    title.textContent = json[0].name.common;
    population.textContent = json[0].population;
    region.textContent = json[0].region;
    currencies.textContent = json[0].area + `   km²`;
    subRegion.textContent = json[0].subregion;
    capital.textContent = json[0].capital;
    topLevelDomain.textContent = json[0].tld;
    languages.textContent = json[0].timezones[0];
    nearOne.textContent = json[0].borders[1];
    nearSecond.textContent = json[0].borders[2];
    nearThird.textContent = json[0].borders[3];

    console.log(json);
  });
