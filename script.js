'user strict'
const numberOfFilms = prompt("Cколько фильмов вы уже посмотрели?","");
let personalMovieDb = {
  cout : numberOfFilms,
  movies : {},
  actors : {},
  genres : [],
  private : false
};
let films1 = prompt("Один из последних просмотренных фильмов?"),
    noteFilms1 = prompt("На сколько оцените его?"),
    films2 = prompt("Один из последних просмотренных фильмов?"),
    noteFilms2 = prompt("На сколько оцените его?");
personalMovieDb.movies[films1]=noteFilms1;
personalMovieDb.movies[films2]=noteFilms2;
console.log(personalMovieDb);