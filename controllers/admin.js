const Movie = require('../models/movie');

exports.postAddMovie = (req, res, next) => {
  const title = req.body.title;
  const year = req.body.year;
  const type = req.body.type;
  const poster = req.body.poster;
  const movie = new Movie(title, year, type, poster);
  movie
    .save()
    .then(result => {
      console.log('Created Movie');
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    });
  };

exports.getMovies = (req, res, next) => {
  Movie
    .fetchAll()
    .then(result => {
      console.log('Fetch All');
      res.setHeader('Content-Type', 'application/json');
      res.json(result);
      return res;
    })
    .catch(err => {
      console.log(err);
    });   
};

