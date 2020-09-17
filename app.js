const linkCategory = document.querySelector("#linkCategory");
const submitButton = document.querySelector("#submitButton");
const addButton = document.querySelector("#addButton");
const cancelButton = document.querySelector("#cancelButton");
const addLinkPanel = document.querySelector("#addLinkPanel");
const linksList = document.querySelector("#linksList");
const addedCategories = document.querySelector("#addedCategories");

let linkCategories = [];
let links = [
  {
    title: "New Link 1",
    url: "url1.com",
    categories: ["node", "angular"],
  },
  {
    title: "New Link 2",
    url: "url2.com",
    categories: ["js", "angular"],
  },
  {
    title: "New Link 3",
    url: "url3.com",
    categories: ["node", "bootstrap"],
  },
];

const displayLinks = () => {
  linksList.innerHTML = "";
  for (let link of links) {
    let linkHTMLString = `<div class="link panel">
      <div class="link-options">
        <button class="btn-sm">Delete</button>
        <button class="btn-sm">Edit</button>
      </div>
      <a href="${link.url}">
        <h1 class="link header">${link.title}</h1>
      </a>
      <p class="link-date">${Date.now()}</p>
      <div class="categories">
        Categories:`;
    for (let category of link.categories) {
      linkHTMLString += `<span class="category">${category}</span>`;
    }

    linkHTMLString += `
      </div>
    </div>`;

    linksList.innerHTML += linkHTMLString;
  }
};

displayLinks();

const clearLinkForm = () => {
  linkTitle.value = "";
  linkUrl.value = "";
  linkCategory.value = "";
  linkCategories = [];
  addedCategories.innerHTML = "";
};

const displayLinkCategories = () => {
  addedCategories.innerHTML = "";
  for (let category of linkCategories) {
    let categoryHTMLString = `<span class="category">${category}</span>`;
    addedCategories.innerHTML += categoryHTMLString;
  }
};

const showFormPanel = () => {
  addLinkPanel.classList.remove("hidden");
};

const hideFormPanel = () => {
  addLinkPanel.classList.add("hidden");
  clearLinkForm();
};

addButton.addEventListener("click", showFormPanel);

cancelButton.addEventListener("click", (e) => {
  e.preventDefault();
  hideFormPanel();
});

linkCategory.addEventListener("keydown", (e) => {
  if (e.keyCode === 188) {
    e.preventDefault();
    linkCategories.push(e.target.value);
    e.target.value = "";

    // display updated categories
    displayLinkCategories();
  }
});

submitButton.addEventListener("click", (e) => {
  // stop from submitting
  e.preventDefault();
  console.log(linkTitle);
  const title = linkTitle.value;
  const url = linkUrl.value;
  const categories = linkCategories;

  const newLink = {
    title,
    url,
    categories,
  };

  links.unshift(newLink);

  clearLinkForm();
  displayLinkCategories();
  hideFormPanel();
  displayLinks();
});
