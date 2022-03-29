function payload(movie, rows) {
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    let movieTable = document.getElementById(rows);

    console.log(movieTable);
    // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object
    // Append the td elements to the new table row
    // Append the table row to the tbody element
    let newel = document.createElement("td");
    var elementid = document.getElementsByTagName("td").length;
    newel.setAttribute("id", elementid);
    newel.innerHTML = response.Title;
    movieTable.appendChild(newel);

    let newel1 = document.createElement("td");
    var elementid1 = document.getElementsByTagName("td").length;
    newel1.setAttribute("id", elementid1);
    newel1.innerHTML = response.Year;
    movieTable.appendChild(newel1);

    let newel2 = document.createElement("td");
    var elementid2 = document.getElementsByTagName("td").length;
    newel2.setAttribute("id", elementid2);
    newel2.innerHTML = response.Actors;
    movieTable.appendChild(newel2);
  });
}

export { payload };
