'use strict';

const dir = require('node-dir');
const cheerio = require('cheerio');


let artistsNamesArray = [];

dir.readFiles(__dirname + '/data/2015-03-18',
  function (err, content, next) {
    if (err) throw err;

    let artistObj = {};

    const $ = cheerio.load(content);

    $('h2').each(function () {
      let artistName = this.children[0].data;
      artistObj.artist = artistName;
    });

    $('h3').each(function () {
      let works = this.children[0].data;
      artistObj.works = works;
    });

    artistsNamesArray.push(artistObj);

    next();
  },
  function (err, files) {
    if (err) throw err;
    console.log('finished reading files:', files);

    console.log(artistsNamesArray);
  });
