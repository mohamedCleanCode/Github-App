// Main Elements
let searchInput = document.querySelector(".search-user"),
  btnGetRepos = document.querySelector(".get-repos"),
  dataContainer = document.querySelector(".data");

// Btn When Click
btnGetRepos.onclick = function () {
  getData();
};

// Function Get Data With Fetch API
function getData() {
  if (searchInput.value == "") {
    dataContainer.innerHTML = "<span>Please Type Usernam To Get Repos</span>";
  } else {
    dataContainer.innerHTML = "";
    fetch(`https://api.github.com/users/${searchInput.value.trim()}/repos`)
      .then((response) => (response ? response.json() : console.log(response)))
      .then((data) => {
        data.forEach((repo) => {
          createEleAndAppendToDom(repo);
        });
      });
  }
}

// Function To Create Elements And Append To DOM
function createEleAndAppendToDom(repo) {
  let box = document.createElement("div");
  box.className = "box";
  let textBox = document.createTextNode(`Repo Name: ${repo.name}`);
  box.appendChild(textBox);
  let visit = document.createElement("a");
  let textVisit = document.createTextNode("Visit");
  visit.appendChild(textVisit);
  visit.href = `${repo.html_url}`;
  visit.setAttribute("target", "_blank");
  box.appendChild(visit);
  dataContainer.appendChild(box);
}
