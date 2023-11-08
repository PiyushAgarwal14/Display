# Bookmark Management Tool
# To work with Google Sheets and fetch data from it using Google Apps Script

# Steps
1) Save Code.gs file data into your Google AppScript.
2) Replace your created Spreadsheet Id in code.gs file.
3) Then deploy the code by selecting Web App as service.
4) Choose Anyone can see even anonymous.
5) Deploy your code.
6) Now Copy your Web_App_Url and paste into your script.js file and save it.
7) save index.html, style.css and script.js file into your local computer or into your machine.
8) Now open browser in your computer and run localhost inde.html file.


# The typical format of your spreadsheet should have rows and columns. Here's a basic format:

1. **Column Headers (Row 1):** Use the first row to provide column headers that describe the data in each column. For example:

   | Image URL       | Text       | URL                |
   |-----------------|------------|--------------------|
   | http://example.com/image1.jpg | Card 1 Text | http://example.com/page1 |
   | http://example.com/image2.jpg | Card 2 Text | http://example.com/page2 |
   | http://example.com/image3.jpg | Card 3 Text | http://example.com/page3 |
   | ...             | ...        | ...                |

2. **Data Rows:** Below the header row, you have your data rows. Each row represents a card with details in the respective columns.

3. **Data Types:** Ensure that the data in each column matches the expected data type. In the example above, the "Image URL" column contains image URLs (strings), the "Text" column contains card text (strings), and the "URL" column contains URLs (strings).

Once you have your Google Sheets set up in this format, you can write Google Apps Script code to access and retrieve the data from the spreadsheet and then serve it as JSON when requested by your web app. This data can then be used to populate your HTML page with cards, as demonstrated in the previous code examples.


# Index Page
<img src="https://github.com/PiyushAgarwal14/Display/assets/87847452/403e022a-942e-4283-8979-63eec640f730" alt="index_page">

# Customize the code according to yor need.
