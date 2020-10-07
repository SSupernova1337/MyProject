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
let one = prompt('Один из последних просмотренных фильмов?'),
 two = prompt('На сколько очените его?'),
 three = prompt('Один из последних просмотренных фильмов?'),
 four = prompt('На сколько очените его?');

personalMovieDB.movies[one] = two;
personalMovieDB.movies[three] = four;

console.log(personalMovieDB);