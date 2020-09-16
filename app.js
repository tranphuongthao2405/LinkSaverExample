const linkCategory = document.querySelector("#linkCategory");
const submitButton = document.querySelector("#submitButton");
const addButton = document.querySelector("#addButton");
const cancelButton = document.querySelector("#cancelButton");
const addLinkPanel = document.querySelector("#addLinkPanel");

let linkCategories = [];
let links = [];

const displayLinkCategories = () => {};

const showFormPanel = () => {
  addLinkPanel.classList.remove("hidden");
};

const hideFormPanel = () => {
  addLinkPanel.classList.add("hidden");
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

  links.push(newLink);

  linkTitle.value = "";
  linkUrl.value = "";
  linkCategory.value = "";
  linkCategories = [];
  displayLinkCategories();
  hideFormPanel();
});
