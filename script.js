'user strict'
let numberOfFilms;
function start(){
  numberOfFilms = prompt("Cколько фильмов вы уже посмотрели?","");
  while(numberOfFilms==""||numberOfFilms==null||isNaN(numberOfFilms)){
   numberOfFilms = prompt("Cколько фильмов вы уже посмотрели?","");
  }
}
start();
let personalMovieDb = {
  count : numberOfFilms,
  movies : {},
  actors : {},
  genres : [],  
  private : false
};

for(let i = 0;i<2;i++){
  let films1 = prompt("Один из последних просмотренных фильмов?"),
    noteFilms1 = prompt("На сколько оцените его?");
    if(films1!=" " && noteFilms1!="" && films1!=null && noteFilms1!=null && films1.length<50){
      personalMovieDb.movies[films1]=noteFilms1;
    }else{
      console.log("Erreur");
      i--;
    }
}
if(personalMovieDb.cout<10){
  alert("Посмотрено довольно мало фильмов");
}else if(personalMovieDb.cout>=10 && personalMovieDb.cout<=30){
alert("Вы класный зритель");
}else if(personalMovieDb.cout>30){
alert("Вы киноман");
}else{
  alert("Произошла ошибка");
}

console.log(personalMovieDb);