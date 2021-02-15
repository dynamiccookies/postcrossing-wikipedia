// Declare blank variables
var card, cardurl, cell, cells, date, from, million, row, time, to;

// Declare results string variable and store static column header string
var result = "{| class=\"wikitable sortable\"\n|-\n! Million !! Date !! Time (UTC) !! From !! To !! Postcard\n";

// Declare and set variable to hold post
var post   = document.getElementById("post_5");

// Declare and set variable to hold all rows in table
var rows   = post.getElementsByTagName("tr");

// Declare and set variable with today's date
var today  = new Date().toLocaleDateString("en-us",{year:'numeric',month:'long',day:'numeric'})

// Loop to run through each row in table
for (row = 1; row < rows.length; row++) { 

	// Populate cells variable with all cells from current row
	cells   = rows[row].getElementsByTagName("td");

	// Set varaible to value from first cell
	million = cells[0].textContent;

	// Set variable to date extracted from second cell using substring
	date    = cells[1].textContent.substring(0, cells[1].textContent.length - 9).replace(" 0", " ");

	// Set variable to time extracted from second cell using substring and removing preceding zero in hour
	time    = cells[1].textContent.substring(cells[1].textContent.length -8, cells[1].textContent.length).replace(/^0+/, '');

	// Set variable to value from third field
	from    = cells[2].textContent;

	// Set variable to value from fourth field
	to      = cells[3].textContent;

	// Set variable to link code and value extracted from fifth field
	card    = cells[4].getElementsByTagName("a")[0];

	// Set variable to URL from link code in fifth field
	cardurl = card.href;

	// Reset variable to value within link code of fifth field
	card    = card.text;

	// Append concatenated text and variables for current row's data to results variable
	result += "|-\n| " + million + " || " + date + " || " + time + " || " + from + " || " + to + " || " + card + 
          "<ref>{{cite web |url=" + cardurl + " |title=Postcard " + card + " |date=" + date + " |website=Postcrossing |access-date=" + today + "}}</ref>\n";
}

// Push results variable contents to console
console.log(result);
