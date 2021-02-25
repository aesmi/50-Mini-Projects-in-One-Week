const results = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

getData();

filter.addEventListener("input", (e) => filterData(e.target.value));

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");

  const { results } = await res.json();

  // set results to empty
  result.innerHTML = "";
  results.forEach((user) => {
    const li = document.createElement("li");
    listItems.push(li);
    // templating
    li.innerHTML = `<img = src="${user["picture"]["large"]}" alt="${user.name.first}">
    <div class="user-info">
      <h4>${user.name.first} ${user.name.last}</h4>
      <p>${user.location.city}, ${user.location.country}</p>
    </div>
    `;
    // inject into our li element

    //this is basically how React adds elements after computing diff from vDom vs actual DOM
    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  listItems.forEach((item) => {
    let lcItem = item.innerText.toLowerCase();
    let lcSearch = searchTerm.toLowerCase();
    lcItem.includes(lcSearch)
      ? item.classList.remove("hide")
      : item.classList.add("hide");
  });
}
