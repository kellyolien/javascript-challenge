// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(data)

// Get a reference to the table body
var tbody = d3.select("tbody");

 
data.forEach(function(ufoSighting) {
    // console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
      // console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

  function ufoFilter(date) {
    // console.log(date)
     var filter = data.filter(function(ufo){
       return ufo.datetime === date
     })
      return filter
  };

  // ufoFilter("1/7/2010")

  d3.select("#filter-btn").on("click", inputValue);

  function inputValue(){
    var dateValue = d3.select("#datetime").property("value");
    // console.log(ufoFilter(dateValue))
    tbody.html("")
    tbody.selectAll("tr").data(ufoFilter(dateValue))
    .enter()
    .append("tr")
    .html(function(item){
      return `
      <td>${item.datetime}</td>
      <td>${item.city}</td>
      <td>${item.state}</td>
      <td>${item.country}</td>
      <td>${item.shape}</td>
      <td>${item.durationMinutes}</td>
      <td>${item.comment}</td>
      `
    })
    
  }
