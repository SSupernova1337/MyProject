'use strict';
//1
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?'); 


//2
let personalMovieDB = {  
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

//3
for (let i = 0; i < 2; i++){
	let a = prompt('Один из последних просмотренных фильмов?',),
		b = prompt('На сколько очените его?',);
	
			if (a != null && b != null && a !='' & b != '' && a.length <50){
				personalMovieDB.movies[a] = b;
				console.log('done');
			} else {
				console.log('error');
				i--;
			}
}
 


if (personalMovieDB.count <= 10) { 
	alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count <= 30) {
	alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
	alert("Вы киноман");
} else {
	alert('Произошла ошибка');
}


