'user strict'
const numberOfFilms = prompt("Cколько фильмов вы уже посмотрели?","");
let personalMovieDb = {
  cout : numberOfFilms,
  movies : {},
  actors : {},
  genres : [],  
  private : false
};

Cycle:for(let i = 0;i<2;i++){
  let films1 = prompt("Один из последних просмотренных фильмов?"),
    noteFilms1 = prompt("На сколько оцените его?");
    if(films1!=" " && noteFilms1!="" && films1!=null && noteFilms1!=null && films1.length<50){
      personalMovieDb.movies[films1]=noteFilms1;
    }else{
      console.log("Erreur");
      i--;
    }
}

console.log(personalMovieDb);