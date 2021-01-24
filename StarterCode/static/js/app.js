// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(data)

// Get a reference to the table body
var tbody = d3.select("tbody");

 
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });