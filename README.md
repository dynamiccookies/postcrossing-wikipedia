# postcrossing-wikipedia
![GitHub](https://img.shields.io/github/license/dynamiccookies/postcrossing-wikipedia?style=for-the-badge)
![GitHub file size in bytes](https://img.shields.io/github/size/dynamiccookies/postcrossing-wikipedia/script.js?style=for-the-badge)


Simple script to parse HTML table from [Postcrossing Community post](https://community.postcrossing.com/t/postcrossing-wikipedia-page-need-help/55442/5) and format into Wikipedia table markdown

#### Each HTML Table Row Converts From This:
```
<tr dir="ltr">
  <td dir="ltr">1</td>
  <td dir="ltr">April 11, 2008 03:03 pm</td>
  <td dir="ltr">Turkey</td>
  <td dir="ltr">Romania</td>
  <td dir="ltr">
    <a 
      href="https://www.postcrossing.com/postcards/TR-8482" 
      rel="nofollow" 
      target="_blank" 
      class="linkify-word no-track-link"
    >
      TR-8482
    </a>
  </td>
</tr>
```

#### To This:
```
|-
| 1 || April 11, 2008 || 3:03 pm || Turkey || Romania || TR-8482<ref>
{{cite web 
  |url=https://www.postcrossing.com/postcards/TR-8482 
  |title=Postcard TR-8482 
  |date=April 11, 2008 
  |website=Postcrossing 
  |access-date=February 16, 2021
}}</ref>
```

## How to Use

1. Copy the code in [script.js](https://raw.githubusercontent.com/dynamiccookies/postcrossing-wikipedia/main/script.js)

2. Using the Chrome browser, navigate to the ["Postcrossing Wikipedia Page - Need Help"](https://community.postcrossing.com/t/postcrossing-wikipedia-page-need-help/55442/5) community post

3. Press the F12 key to open the Developer Tools

4. In the console pane that just opened, paste the code you copied in Step 1

5. Press Enter and the script should run and successfully return the results

6. Click the Copy option just below the results

7. You now have all of the results from the Postcrossing Community post's table fully formatted as a Wikipedia table that you can paste directly to a Wikipedia article

## Note
Please ***do not*** simply paste and replace the current Postcard Milestones table on the [Postcrossing Wikipedia page](https://en.wikipedia.org/wiki/Postcrossing#History). The code returned from this script does not include the manually added references in the Millions column on that page. 

## License

This project uses the following license: [Unlicense](LICENSE)
