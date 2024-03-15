function createElement(data) {
  const paragraph = document.createElement("p");
  paragraph.textContent = data;
  document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
  const xhl = new XMLHttpRequest();
  xhl.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
  );
  xhl.onload = () => {
    const data = JSON.parse(xhl.response);
    callback(data.query.pages[21721040]["extract"]);
  };

  xhl.send();
}

queryWikipedia(createElement);
