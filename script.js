'user strict'

//Object
let personalMovieDb = {
  count : 0,
  movies : {},
  actors : {},
  genres : [],  
  privat : false,
  start:function(){
    personalMovieDb.count = prompt("Cколько фильмов вы уже посмотрели?","");
    while(personalMovieDb.count==""||personalMovieDb.count==null||isNaN(personalMovieDb.count)){
      personalMovieDb.count = prompt("Cколько фильмов вы уже посмотрели?","");
    }
  },
  rememberMyFilms : function(){
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
  },
  detectPersonalLevel:function(){
    if(personalMovieDb.count<10){
      alert("Посмотрено довольно мало фильмов");
    }else if(personalMovieDb.count>=10 && personalMovieDb.count<=30){
    alert("Вы класный зритель");
    }else if(personalMovieDb.count>30){
    alert("Вы киноман");
    }else{
      alert("Произошла ошибка");
    }
  },
  showMyDb:function(hidden){
    if(!hidden){
      console.log(personalMovieDb);
    }
  },
  writeYourGenres:function (){
    let i=1;
    Show:while(i<2){
    let genrs = prompt(`Веддите ваши любимые фильмы через запятую`,"").toLowerCase();
    if(genrs == ""||genrs==null) {
      continue Show;
    };
    personalMovieDb.genres=genrs.split(", ");
    personalMovieDb.genres.sort();
    i++;
  }
    personalMovieDb.genres.forEach((element,i )=> {
      console.log(`Любимый жанр ${i+1} - это ${element}`)
    });
   },
  toggleVisibleMyDb:function(){
    if(personalMovieDb.privat==false){
      personalMovieDb.privat = true;
    }else{
      personalMovieDb.privat = false;
    }
  }
};
personalMovieDb.showMyDb();
