var card, cardurl, cell, cells, date, from, million, row, time, to;
var result = "{| class=\"wikitable sortable\"\n|-\n! Million !! Date !! Time (UTC) !! From !! To !! Postcard\n";
var rows = document.getElementsByTagName("tr");
for (row = 0; row < rows.length; row++) { 
	cells   = rows[row].getElementsByTagName("td");
	million = cells[0].textContent;
	date    = cells[1].textContent.substring(0, cells[1].textContent.length - 9).replace(" 0", " ");
	time    = cells[1].textContent.substring(cells[1].textContent.length -8, cells[1].textContent.length).replace(/^0+/, '');
	from    = cells[2].textContent;
	to      = cells[3].textContent;
	card    = cells[4].getElementsByTagName("a")[0];
	cardurl = card.href;
	card    = card.text;
	result += "|-\n| " + million + " || " + date + " || " + time + " || " + from + " || " + to + " || " + card + 
          "<ref>{{cite web |url=" + cardurl + " |title=Postcard " + card + " |date=" + date + " |website=Postcrossing |access-date=January 28, 2021}}</ref>\n";
}
console.log(result);
