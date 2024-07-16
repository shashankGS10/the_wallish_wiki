const axios = require('axios');
const cheerio = require('cheerio');

const limitTextToWords = (text, limit) => {
  return text.split(' ').slice(0, limit).join(' ');
};

const scrapeData = async (urlOrKeyword) => {
  try {
    const response = await axios.get(urlOrKeyword);
    const $ = cheerio.load(response.data);

    // Select paragraph and heading tags for content
    const contentTags = $('p, h1, h2, h3, h4, h5, h6');

    if (!contentTags || !contentTags.length) {
      throw new Error('No valid content found');
    }

    let scrapeData = '';
    contentTags.each((i, elem) => {
      const text = $(elem).text().trim();
      if (text.length > 0) {
        scrapeData += `${text} `;
      }
    });

    return limitTextToWords(scrapeData, 5000); // Limit to 5000 words
  } catch (error) {
    console.error('Error scraping data:', error);
    throw error; // Propagate the error back to caller
  }
};

// Function to handle input from console
const handleInput = async () => {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Enter a URL or keyword to scrape: ', async (input) => {
    try {
      const scrapedText = await scrapeData(input.trim());
      console.log('\nScrapped data (limited to 5000 words):\n', scrapedText);
    } catch (error) {
      console.error('Error occurred during scraping:', error);
    } finally {
      readline.close();
    }
  });
};

handleInput();
