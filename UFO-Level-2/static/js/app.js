var tableData = data;
var tbody = d3.select("tbody")
tableData.forEach((ufoSighting) => {
    console.log(ufoSighting);
    var row = tbody.append('tr');
    Object.entries(ufoSighting).forEach(([key, value])=>{
        console.log(key, value);
        var cell =row.append('td');
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");
button.on("click", function(){
    tbody.html("");
    var inputElement = d3.select("#input");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(dighting => sighting.datetime === inputValue,
                                                    sighting.city === inputValue,
                                                    sighting.state === inputValue,
                                                    sighting.country === inputValue,
                                                    sighting.shape ===inputVallue);
console.log(filteredData);
filteredData.forEach(function(sections) {
    console.log(selections);
    var row = tbody.append("tr");
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td")
    });
});
});