    const axios = require('axios');
    const cheerio = require('cheerio');

	const url = 'https://www.exploretock.com/mamnoonrestaurant/';
    axios(url)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html)
        const statsTable = $('.ProfileBody-content ul li');
        const tockMeals = [];

        statsTable.each(function () {
          const rank = $(this).find('section').attr('id');
          const createdLink = rank.replace('offering-','')
          tockMeals.push({
            createdLink
          });
        });

        console.log(tockMeals);
      })
      .catch(console.error);
