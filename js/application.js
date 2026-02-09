"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");

        while (
            personalMovieDB.count == "" ||
            personalMovieDB.count == null ||
            isNaN(personalMovieDB.count)
        ) {
            personalMovieDB.count = +prompt(
                "Сколько фильмов вы уже посмотрели?",
            );
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt(
                    "Один из последних просмотренных фильмов?",
                    "",
                ).trim(),
                b = prompt("На сколько оцените его?", "");

            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("done");
            } else {
                console.log("error");
                i--;
            }
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            // let question = prompt(`Ваш любимый жанр под номером ${i}`);
            // if (question === null || question === "") {
            //     console.log(
            //         "Вы ввели некорректные данные или не ввели их вовсе",
            //     );
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = question;
            // }

            let question = prompt(
                `Ведите ваши любимые жанры через запятую`,
            ).toLowerCase();

            if (question === null || question === "") {
                console.log(
                    "Вы ввели некорректные данные или не ввели их вовсе",
                );
                i--;
            } else {
                personalMovieDB.genres = question.split(", ");
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
};

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.writeYourGenres();

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.showMyDB(personalMovieDB.privat);

// console.log(personalMovieDB);

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените его?", ""),
//     c = prompt("Один из последних просмотренных фильмов?", ""),
//     d = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
