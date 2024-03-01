'user strict'
let numberOfFilms;
function start(){
  numberOfFilms = prompt("Cколько фильмов вы уже посмотрели?","");
  while(numberOfFilms==""||numberOfFilms==null||isNaN(numberOfFilms)){
   numberOfFilms = prompt("Cколько фильмов вы уже посмотрели?","");
  }
}
start();
//Object
let personalMovieDb = {
  count : numberOfFilms,
  movies : {},
  actors : {},
  genres : [],  
  privat : false
};

function rememberMyFilms(){
  for(let i = 0;i<2;i++){
    let films1 = prompt("Один из последних просмотренных фильмов?").trim(),
      noteFilms1 = prompt("На сколько оцените его?");
      if(films1!=" " && noteFilms1!="" && films1!=null && noteFilms1!=null && films1.length<50){
        personalMovieDb.movies[films1]=noteFilms1;
      }else{
        console.log("Erreur");
        i--;
      }
  }
}
rememberMyFilms();

function detectPersonalLevel(){
  if(personalMovieDb.count<10){
    alert("Посмотрено довольно мало фильмов");
  }else if(personalMovieDb.count>=10 && personalMovieDb.count<=30){
  alert("Вы класный зритель");
  }else if(personalMovieDb.count>30){
  alert("Вы киноман");
  }else{
    alert("Произошла ошибка");
  }
}
detectPersonalLevel();

function showMyDb(hidden){
  if(!hidden){
    console.log(personalMovieDb);
  }
}
showMyDb(personalMovieDb.privat);

function writeYourGenres(){
  for(let i = 1;i<=3;i++){
    let genr = prompt(`Ваш любимый жанр под номером ${i}.`,"");
    personalMovieDb.genres[i-1]=genr;
  }
}
writeYourGenres();
