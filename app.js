const linkCategory = document.querySelector("#linkCategory");
const submitButton = document.querySelector("#submitButton");
const addButton = document.querySelector("#addButton");
const cancelButton = document.querySelector("#cancelButton");
const addLinkPanel = document.querySelector("#addLinkPanel");
const linksList = document.querySelector("#linksList");
const addedCategories = document.querySelector("#addedCategories");
const addLinkContainer = document.querySelector("#addLinkContainer");

let editIndex = -1;
let linkCategories = [];
let links = [
  {
    title: "Wes Bos Courses",
    url: "http://wesbos.com/courses/",
    categories: ["Node", "ES6", "Flexbox", "React"],
    date: new Date(),
  },
  {
    title: "Traversy Media",
    url: "https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA",
    categories: ["Node", "CSS", "Javscript", "Angular"],
    date: new Date(),
  },
  {
    title: "Colt Steele",
    url: "https://www.udemy.com/user/coltsteele/",
    categories: ["Node", "Javascript", "React", "MEAN", "Mongo"],
    date: new Date(),
  },
];

const deleteLink = (index) => {
  links.splice(index, 1);
  displayLinks();
};

const editLink = (index) => {
  editIndex = index;
  linkTitle.value = links[index].title;
  linkUrl.value = links[index].url;
  linkCategories = links[index].categories;
  showFormPanel();
};

const formatDate = (date) => {
  return `${("0" + (date.getMonth() + 1)).slice(-2)}/${(
    "0" + date.getDay()
  ).slice(-2)}/${date.getFullYear()}`;
};

const displayLinks = () => {
  let index = 0;
  linksList.innerHTML = "";
  for (let link of links) {
    let linkHTMLString = `
    <div class="flex-item">
      <div class="link panel">
        <div class="link-options">
          <button class="btn-sm" onclick="deleteLink(${index})">Delete</button>
          <button class="btn-sm" onclick="editLink(${index})">Edit</button>
        </div>
        <a href="${link.url}">
          <h1 class="link header">${link.title}</h1>
        </a>
        <p class="link-date">${formatDate(link.date)}</p>
        <div class="categories">
          Categories:`;
    for (let category of link.categories) {
      linkHTMLString += `<span class="category">${category}</span>`;
    }

    linkHTMLString += `
        </div>
      </div>
    </div>`;

    linksList.innerHTML += linkHTMLString;

    index++;
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
  addLinkContainer.classList.remove("hidden");
  displayLinkCategories();
};

const hideFormPanel = () => {
  addLinkContainer.classList.add("hidden");
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

  if (editIndex === -1) {
    links.unshift(newLink);
  } else {
    links[editIndex] = newLink;
    editIndex = -1;
  }

  clearLinkForm();
  displayLinkCategories();
  hideFormPanel();
  displayLinks();
});
