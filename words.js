// Выбираем рандомное слово
let pickWord = function () {
    let words = [
        'велотурист',
        'беспорядки',
        'гипотенуза',
        'дальтонизм',
        'демография',
        'демократия',
        'деформация',
        'заповедник',
        'застройщик',
        'зубочистка',
        'крестовина',
        'лягушатник',
        'манускрипт',
        'муравейник',
        'нарушитель',
        'ностальгия',
        'аквариум',
        'богатырь',
        'волейбол',
        'гвоздить',
        'огнемётчик',
        'оргтехника',
        'погремушка',
        'подсвечник',
        'подстанция',
        'пожиратель',
        'португалец',
        'поручитель',
        'послушание',
        'правосудие',
        'прогульщик',
        'равнодушие',
        'разгильдяй',
        'республика',
        'рыбочистка',
        'снегурочка',
        'собиратель',
        'справочник',
        'трудолюбие',
        'умывальник',
        'ускоритель',
        'чертовщина',
        'экспедитор'
    ];
    return words[Math.floor(Math.random() * words.length)];
}

// массив с ответом, вместо букв _
let setupAnswerArray = function (word) {
    let answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = '_';
    }
    return answerArray;
};
// С помощью alert отображает текущее состояние игры
let showPlayerProgress = function (answerArray) {
    alert(answerArray.join(" "));
};
// Запрашивает ответ игрока с помощью prompt
let getGuess = function () {
    return prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
};
// Обновляет answerArray согласно ответу игрока (guess)
// возвращает число, обозначающее, сколько раз буква guess
// встречается в слове, чтобы можно было обновить значение
// remainingLetters
let updateGameState = function (guess, word, answerArray) {
    let appearances = 0;
    for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            appearances++;
        }
    }
    return appearances;
};
// С помощью alert показывает игроку отгаданное слово
// и поздравляет его с победой
let showAnswerAndCongratulatePlayer = function (answerArray) {
    showPlayerProgress(answerArray);
    alert("Отлично! Было загадано слово " + answerArray.join(""));
};

// word: загаданное слово
let word = pickWord();
// answerArray: итоговый массив
let answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угадать
let remainingLetters = word.length;


// Игровой цикл
while (remainingLetters > 0) {
    //Текущее состояние игры
    showPlayerProgress(answerArray);
    // Запрашиваем вариант ответа
    let guess = getGuess();
    if (guess === null) {
        //выходим из игрового цикла
        break;
    } else if (guess.length !== 1) {
        alert("Введите одну букву");
    } else {
        // обновление состояния игры
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
    //Конец игрового цикла
}
//Отображаем ответ и поздравляем игрока

showAnswerAndCongratulatePlayer(answerArray);

