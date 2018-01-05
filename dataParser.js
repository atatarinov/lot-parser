'use strict';

const dir = require('node-dir');
const cheerio = require('cheerio');


let artistsNamesArray = [];


dir.readFiles(__dirname + '/data/2015-03-18',
  function(err, content, next) {
      if (err) throw err;

      const $ = cheerio.load(content);

      $('h2').each(function () {
        let artistName = this.children[0].data;
        artistsNamesArray.push(artistName);
      });

      // console.log('content:', content);
      // console.log(typeof content);
      // console.log('_________________');
      next();
  },
  function(err, files){
      if (err) throw err;
      console.log('finished reading files:', files);

      console.log(artistsNamesArray);
  });

















// const request = require('request');
// const cheerio = require('cheerio');

// const fs = require('fs');
// const path = require('path');

// function filewalker(dir, done) {
//   let results = [];

//   fs.readdir(dir, function(err, list) {
//       if (err) return done(err);

//       var pending = list.length;

//       if (!pending) return done(null, results);

//       list.forEach(function(file){
//           file = path.resolve(dir, file);

//           fs.stat(file, function(err, stat){
//             if (err) console.log(err);
//               // If directory, execute a recursive call
//               if (stat && stat.isDirectory()) {
//                   // Add directory to array [comment if you need to remove the directories from the array]
//                   results.push(file);

//                   filewalker(file, function(err, res){
//                     if (err) console.log(err);
//                       results = results.concat(res);
//                       if (!--pending) done(null, results);
//                   });
//               } else {
//                   results.push(file);

//                   if (!--pending) done(null, results);
//               }
//           });
//       });
//   });
// }

// filewalker('./2015-03-18');
