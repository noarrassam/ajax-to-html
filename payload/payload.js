let movieTable;
function payload(movie, rows) {
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    movieTable = document.getElementById(rows);
    console.log(movieTable);
    // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object
    // Append the td elements to the new table row
    // Append the table row to the tbody element
    appendElement(response.Title);
    appendElement(response.Year);
    appendElement(response.Actors);
  });
}

function appendElement(data) {
  let newel = document.createElement("td");
  var elementid = document.getElementsByTagName("td").length;
  newel.setAttribute("id", elementid);
  newel.innerHTML = data;
  movieTable.appendChild(newel);
}

export { payload };
