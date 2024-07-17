const readline = require('readline');
const axios = require('axios');
const cheerio = require('cheerio');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function fetchHTML(url) {
  try {
      const response = await axios.get(url);
      return response.data;
  } catch (error) {
      throw Error(`Error fetching the URL: ${url} - ${error}`);
  }
}

function extractData(html) {
  const $ = cheerio.load(html);

  // Extract title
  const title = $('#firstHeading').text().trim();

  // Extract first paragraph
  let firstParagraph = '';
  $('.mw-parser-output > p').each((index, element) => {
      if (firstParagraph === '' && $(element).text().trim().length > 0) {
          firstParagraph = $(element).text().trim();
          return false; // Exit each loop
      }
  });

  // Extract headings
  const headings = [];
  $('.mw-parser-output > h2 > span.mw-headline').each((index, element) => {
      headings.push($(element).text().trim());
  });

  return {
      title,
      firstParagraph,
      headings
  };
}

async function scrapeWikipedia(keyword) {
  const url = `https://en.wikipedia.org/wiki/${encodeURIComponent(keyword)}`;

  try {
      const html = await fetchHTML(url);
      const data = extractData(html);
      console.log('Title:', data.title);
      console.log('First Paragraph:', data.firstParagraph);
      console.log('Headings:', data.headings);
      console.log('Reference Link:', url);
  } catch (error) {
      console.error('Error scraping Wikipedia:', error.message);
  }
}

rl.question('Enter a keyword to search on Wikipedia: ', (answer) => {
  scrapeWikipedia(answer);
  rl.close();
});