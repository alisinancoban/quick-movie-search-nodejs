const getDb = require('../util/database').getDb;

class Movie {
  constructor(title, year, type, poster) {
    this.title = title;
    this.year = year;
    this.type = type;
    this.poster = poster;
  }

  save() {
    const db = getDb();
    return db
      .collection('movies')
      .insertOne(this)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('movies')
      .find()
      .toArray()
      .then(movies => {
        return movies;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Movie;
