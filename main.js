function findElement(selector, select = document) {
  return select.querySelector(selector);
}
const newTemplate = findElement(".template");
const elWrapper = findElement(".hero");
const elBtn = findElement("#btn");
const elInp = findElement("#inp");
const error404 = findElement(".not-found");
const all = findElement("#all");
const darkMode = findElement("#dark");
const lightMode = findElement("#light");
const header = findElement(".header-wrapper");
const body = findElement("body");
const catigories = findElement("#catigories");

all.addEventListener("click", () => {
  API();
});

catigories.addEventListener("change", () => {
  console.log(catigories.value);
  fetch(`https://restcountries.com/v3.1/region/${catigories.value}`)
    .then((res) => res.json())
    .then((json) => {
      products = json;
      console.log(json);
      renderProduct(json);
    });
});

elBtn.addEventListener("click", () => {
  const elInpValue = elInp.value;
  fetch(`https://restcountries.com/v3.1/name/${elInpValue}`)
    .then((res) => {
      if (res.status == 404) {
        newTemplate.style.display = "none";
        error404.style.display = "block";
        return;
      }
      newTemplate.style.display = "block";
      error404.style.display = "none";
      console.log(res);
      return res.json();
    })
    .then((json) => {
      console.log(json);
      renderProduct(json);
    });
});

function API() {
  fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((json) => {
      products = json;
      console.log(json);
      renderProduct(json);
    });
  darkMode.addEventListener("click", () => {
    lightMode.style.display = "block";
    darkMode.style.display = "none";

    body.style.backgroundColor = "#202c36";
    header.style.backgroundColor = "#2b3844";
    header.style.color = "#fff";
    lightMode.style.backgroundColor = "#2b3844";
    lightMode.style.color = "#fff";
    oneProduct.style.backgroundColor = "#2b3844";
    oneProduct.style.color = "#fff";
    elInp.style.backgroundColor = "#2b3844";
    elInp.style.color = "#fff";
    all.style.backgroundColor = "#2b3844";
    all.style.color = "#fff";
    catigories.style.backgroundColor = "#2b3844";
    catigories.style.color = "#fff";
  });
  lightMode.addEventListener("click", () => {
    darkMode.style.display = "block";
    lightMode.style.display = "none";

    body.style.backgroundColor = "#fafafa";
    header.style.backgroundColor = "#fff";
    header.style.color = "#000";
    oneProduct.style.backgroundColor = "#fff";
    oneProduct.style.color = "#000";
    elInp.style.backgroundColor = "#fff";
    elInp.style.color = "#000";
    all.style.backgroundColor = "#fff";
    all.style.color = "#000";
    catigories.style.backgroundColor = "#fff";
    catigories.style.color = "#000";
  });
}
API();
function renderProduct(items) {
  elWrapper.textContent = null;

  let renderProduct = items.map((item) => {
    const newEl = newTemplate.content.cloneNode(true);

    const topImg = findElement(".one-product-top-img", newEl);
    const title = findElement(".title", newEl);
    const population = findElement(".population", newEl);
    const region = findElement(".region", newEl);
    const capital = findElement(".capital", newEl);
    const oneProduct = findElement(".one-product", newEl);

    capital.textContent = item.capital;
    topImg.dataset.name = item.name.common;
    title.textContent = item.name.common;
    population.textContent = item.population;
    region.textContent = item.region;
    topImg.src = item.flags.png;

    darkMode.addEventListener("click", () => {
      lightMode.style.display = "block";
      darkMode.style.display = "none";

      body.style.backgroundColor = "#202c36";
      header.style.backgroundColor = "#2b3844";
      header.style.color = "#fff";
      lightMode.style.backgroundColor = "#2b3844";
      lightMode.style.color = "#fff";
      oneProduct.style.backgroundColor = "#2b3844";
      oneProduct.style.color = "#fff";
      elInp.style.backgroundColor = "#2b3844";
      elInp.style.color = "#fff";
      all.style.backgroundColor = "#2b3844";
      all.style.color = "#fff";
      catigories.style.backgroundColor = "#2b3844";
      catigories.style.color = "#fff";
    });
    lightMode.addEventListener("click", () => {
      darkMode.style.display = "block";
      lightMode.style.display = "none";

      body.style.backgroundColor = "#fafafa";
      header.style.backgroundColor = "#fff";
      header.style.color = "#000";
      oneProduct.style.backgroundColor = "#fff";
      oneProduct.style.color = "#000";
      elInp.style.backgroundColor = "#fff";
      elInp.style.color = "#000";
      all.style.backgroundColor = "#fff";
      all.style.color = "#000";
      catigories.style.backgroundColor = "#fff";
      catigories.style.color = "#000";
    });

    elWrapper.appendChild(newEl);
  });
}
elWrapper.addEventListener("click", (evt) => {
  if (evt.target.className.includes("one-product-top-img")) {
    const name = evt.target.dataset.name;

    window.location.replace(`./single.html?name=${name}`);
  }
});
