// Declare and set variable for number of country results to return
// ** Value can be changed to return a different number of rows**
var numOfRows = 15;

// Declare blank variables
var members, postcards, rank, results, row, table = [];

// Declare and set variable to hold all rows in table
var rows = document.getElementById("countryList").getElementsByTagName("tr");

// Declare and set variable with today's date formatted as: January 1, 2021
var today = new Date().toLocaleDateString("en-us",{year:'numeric',month:'long',day:'numeric'})

// Loop to run through each row in table
for (row = 1; row < rows.length; row++) {

	// Declare blank object variable - will be reset with each iteration of loop
	var object = {};

	// Declare and set cells variable with all cells from current row - will be reset with each iteration of loop
	var cells = rows[row].getElementsByTagName("td");

	// If second cell contains two links, get the link text, remove '(*)' if it exists, and store value in object variable's 'country' key
	if (cells[1].getElementsByTagName("a")[1]) {object.country = cells[1].getElementsByTagName("a")[1].innerText.replace(/ \(\*\)/g,'');}

	// Else, get the text from the span element, remove '(*)' if it exists, and store value in object variable's 'country' key
	else {object.country = cells[1].getElementsByTagName("span")[0].innerText.replace(/ \(\*\)/g,'');}

	// Get value from third cell, remove commas, convert to integer, and store result into object variable's 'members' key
	object.members = parseInt(cells[2].innerText.replace(/,/g,''));

	// Get value from fourth cell, remove commas, convert to integer, and store result into object variable's 'postcards' key
	object.postcards = parseInt(cells[3].innerText.replace(/,/g,''));
	
	// Store object variable in table array
	table.push(object);
}

// Copy the table array into a new variable called members
members = copyMultiArray(table);

// Copy the table array into a new variable called postcards
postcards = copyMultiArray(table);

// Sort the members array by the members key
members.sort(function(a,b) {
  if (a.members > b.members){return -1;}
  if (a.members < b.members){return 1;}
  return 0;
});

// Sort the postcards array by the postcards key
postcards.sort(function(a,b) {
  if (a.postcards > b.postcards){return -1;}
  if (a.postcards < b.postcards){return 1;}
  return 0;
});

// Return the top numOfRows rows in the members array and drop all others
members.splice(numOfRows,members.length - numOfRows);

// Return the top numOfRows rows in the postcards array and drop all others
postcards.splice(numOfRows,postcards.length - numOfRows);

// Set the results variable with data
results = "==Users distribution==\n<!-- Please use the script referenced on the talk page to update these tables -->\n''Last updated " + today + 
	".''\n{|\n|-\n|\n{| class='wikitable sortable'\n|+ Countries with most users<ref name='countries' />\n|-\n! Rank !! Country !! Users\n";

// Loop through members array
for (rank = 0; rank < members.length; rank++) {

	// For each record in the members array, get the country value and store it into the country variable
	var country = members[rank].country;

	// For each record in the members array, get the members value, format the number with commas, and store the value into the users variable
	var users = members[rank].members.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	// Using the country and users variables, build the Wikipedia table markdown for the first table and add it to the results variable
	results += '|-\n|' + (rank + 1) + '.||{{flag|' + country + '}}||' + users + '\n';
}

// Add the Wikipedia markdown for the second table into the results variable
results += "|}\n| &nbsp;&nbsp;&nbsp;&nbsp;\n|\n{| class='wikitable sortable'\n|+ Countries with most sent postcards<ref name='countries' />\n|-\n! Rank !! Country !! Sent postcards\n";

// Loop through postcards array
for (rank = 0; rank < postcards.length; rank++) {

	// For each record in the postcards array, get the country value and store it into the country variable
	var country = postcards[rank].country;

	// For each record in the postcards array, get the members value, format the number with commas, and store the value into the users variable
	var cards = postcards[rank].postcards.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	// Using the country and users variables, build the Wikipedia table markdown for the first table and add it to the results variable
	results += '|-\n|' + (rank + 1) + '.||{{flag|' + country + '}}||' + cards + '\n';
}

// Add the closing code for the Wikipedia table markdown
results += '|}\n|}\n';

// Print the contents of the results variable to the console
console.log(results);

// Copy the results variable contents to the clipboard
copy(results);


// Function used to copy an array
function copyMultiArray(array) {
	var result, key, value;
	if (typeof array !== "object" || array === null) {return array;}
	result = Array.isArray(array) ? [] : {};
	for (key in array) {
		value = array[key];
		result[key] = copyMultiArray(value);
	}
	return result;
}
