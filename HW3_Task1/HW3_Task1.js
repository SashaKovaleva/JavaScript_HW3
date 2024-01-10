let favoriteMovie = prompt("Введите мой любимый фильм:");

if (favoriteMovie == 'Джентльмены') {
    alert("Вы угадали");
}
else {
    alert("Попробуйте ещё раз");
    favoriteMovie = prompt("Введите мой любимый фильм:");   
}