//console log data from data.js
var tableData= data
//console.log(tableData)
// YOUR CODE HERE!
//Define the location for my table updates
var tbody = d3.select('#ufo-table'); 

//Loop through data and console log each data object 
tableData.forEach(function(sighting){
    console.log(sighting);
    var row = tbody.append('tr');
//This stores the sightings as objects and then displays the new object as a keys and values dictionary.
    Object.entries(sighting).forEach(function([key,value]) {
        console.log (key,value);
       
//Append one table row for each element
    var cell = row.append('td');
    cell.text(value);
});
});

//create filter and filter function variables
//select button
var filterbutton = d3.select('#filter-btn');

//event handlers 
filterbutton.on('click',update); 

//new variables
var inputLocation = d3.select('#datetime');
var inputValue = inputLocation.property('value');
var newTableData = tableData;

//Clear data from table
inputLocation.on('click',clearTable)
function clearTable(inputLocation) {
    d3.event.preventDefault();
    var row = d3.selectAll('td')
    row.html("")
  }

//Define actions when fitler button is clicked
function update(){
    d3.event.preventDefault(); 
    var filterData = newTableData.filter(date => date.datetime === inputValue);
    //Loop through data and console log each data object 
filterData.forEach(function(sighting){
    //console.log(sighting);
    newtbody=d3.select('#ufo-table')
    var newrow = newtbody.append('tr');
//This stores the sightings as objects and then displays the new object as a keys and values dictionary.
    Object.entries(sighting).forEach(function([key,value]) {
        console.log (key,value);
       
//Append one table row for each element
    var newcell = newrow.append('td');
    newcell.text(value);
});
});
}


























//     console.log(filterData);
//     // console.log(inputValue);
//     // console.log(newTableData);
//     filterData.forEach(function(date){
//         console.log(date)
//         var row = tbody.append('tr');
//         Object.entries(date).forEach(function([key,value]){
//         var cell = row.append('td');
//         cell.text(value);
//     })
// })
// }
