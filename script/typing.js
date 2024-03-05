const keyRowSelect = document.getElementById('keyRow');
const difficultySelect = document.getElementById('difficulty');
const levelSelect = document.getElementById('lessons');
const wordDisplay = document.getElementById("wordDisplay");
/*//for audio 
const erroraudio = document.getElementById("error");
const correctaudio = document.getElementById("correct");
const progressBar = document.getElementById('progressbar');*/

keyRowSelect.addEventListener('change', updateContent);
difficultySelect.addEventListener('change', updateContent);
levelSelect.addEventListener('change', updateContent);

function updateContent() {
    const selectedKeyRow = keyRowSelect.value;
    const selectedDifficulty = difficultySelect.value;
    const selectedLesson = levelSelect.value;
    //content according to difficulty,keyrow and lessions 
    const contentMap = {
        Introduction: {
            homekey: {
                lesson1: ["f f f f ", "j j j j ", "f f f f ", "j j j j ", "f f f f j j j j ", "f f f f j j j j ", "f f j j f f j j ", "f f j j f f j j ", "f j f j f j f j ", "f j f j f j f j "],
                lesson2: ["d d d d ", "k k k k ", "d d d d ", "k k k k ", "d d d d k k k k ", "d d d d k k k k ", "d d k k d d k k ", "d d k k d d k k ", "d k d k d k d k ", "d k d k d k d k "],
                lesson3: ["s s s s ", "l l l l ", "s s s s ", "l l l l ", "s s s s l l l l ", "s s s s l l l l ", "s s l l s s l l ", "s s l l s s l l ", "s l s l s l s l ", "s l s l s l s l "],
                lesson4: ["a a a a ", "; ; ; ; ", "a a a a ", "; ; ; ; ", "a a a a ; ; ; ; ", "a a a a ; ; ; ; ", "a a ; ; a a ; ; ", "a a ; ; a a ; ; ", "a ; a ; a ; a ; ", "a ; a ; a ; a ; "],
                lesson5: ["g g g g ", "h h h h ", "g g g g ", "h h h h ", "g g g g h h h h ", "g g g g h h h h ", "g g h h g g h h ", "g g h h g g h h ", "g h g h g h g h ", "g h g h g h g h "],
                lesson6: ["F F F F ", "J J J J ", "F F F F ", "J J J J ", "F F F F J J J J ", "F F F F J J J J ", "F F J J F F J J ", "F F J J F F J J ", "F J F J F J F J ", "F J F J F J F J "],
                lesson7: ["D D D D ", "K K K K ", "D D D D ", "K K K K ", "D D D D K K K K ", "D D D D K K K K ", "dD dD dD dD ", "kK kK kK kK ", "dD kK dD kK dD kK dD kK ", "dD kK dD kK dD kK dD kK "],
                lesson8: ["S S S S ", "L L L L ", "S S S S ", "L L L L ", "S S S S L L L L ", "S S S S L L L L ", "sS sS sS sS ", "lL lL lL lL ", "sS lL sS lL sS lL sS lL ", "sS lL sS lL sS lL sS lL "],
                lesson9: ["A A A A ", ": : : : ", "A A A A ", ": : : : ", "A A A A : : : : ", "A A A A ; ; ; ; ", "aA aA aA aA ", ";: ;: ;: ;: ", "aA ;: aA ;: aA ;: aA ;: ", "aA ;: aA ;: aA ;: aA ;: "],
                lesson10: ["G G G G ", "H H H H ", "G G G G ", "H H H H ", "G G G G H H H H ", "G G G G H H H H ", "gG gG gG gG ", "hH hH hH hH ", "gG hH gG hH gG hH gG hH ", "gG hH gG hH gG hH gG hH "],
            },
            topkey: {
                lesson1: ["r r r r ", "u u u u ", "r r r r ", "u u u u ", "r r r r u u u u ", "r r r r u u u u ", "r r u u r r u u ", "r r u u r r u u ", "r u r u r u r u ", "r u r u r u r u "],
                lesson2: ["e e e e ", "i i i i ", "e e e e ", "i i i i ", "e e e e i i i i ", "e e e e i i i i ", "e e i i e e i i ", "e e i i e e i i ", "e i e i e i e i ", "e i e i e i e i "],
                lesson3: ["w w w w ", "o o o o ", "w w w w ", "o o o o ", "w w w w o o o o ", "w w w w o o o o ", "w w o o w w o o ", "w w o o w w o o ", "w o w o w o w o ", "w o w o w o w o "],
                lesson4: ["q q q q ", "p p p p ", "q q q q ", "p p p p ", "q q q q p p p p ", "q q q q p p p p ", "q q p p q q p p ", "q q p p q q p p ", "q p q p q p q p ", "q p q p q p q p "],
                lesson5: ["t t t t ", "y y y y ", "t t t t ", "y y y y ", "t t t t y y y y ", "t t t t y y y y ", "t t y y t t y y ", "t t y y t t y y ", "t y t y t y t y ", "t y t y t y t y "],
                lesson6: ["R R R R ", "U U U U ", "R R R R ", "U U U U ", "R R R R U U U U ", "R R R R U U U U ", "rR rR rR rR ", "uU uU uU uU ", "rR uU rR rR uU rR uU rR ", "rR uU rR uU rR uU rR uU "],
                lesson7: ["E E E E ", "I I I I ", "E E E E ", "I I I I ", "E E E E I I I I ", "E E E E I I I I ", "eE eE eE eE ", "iI iI iI iI ", "eE iI eE iI eE iI eE iI ", "eE iI eE iI eE iI eE iI "],
                lesson8: ["W W W W ", "O O O O ", "W W W W ", "O O O O ", "W W W W O O O O ", "W W W W O O O O ", "wW wW wW wW ", "oO oO oO oO ", "wW oO wW oO wW oO wW oO ", "wW oO wW oO wW oO wW oO "],
                lesson9: ["Q Q Q Q ", "P P P P ", "Q Q Q Q ", "P P P P ", "Q Q Q Q P P P P ", "Q Q Q Q P P P P ", "qQ qQ qQ qQ ", "pP pP pP pP ", "qQ pP qQ pP qQ pP qQ pP ", "qQ pP qQ pP qQ pP qQ pP "],
                lesson10: ["T T T T ", "Y Y Y Y ", "T T T T ", "Y Y Y Y ", "T T T T Y Y Y Y ", "T T T T Y Y Y Y ", "tT tT tT tT ", "yY yY yY yY ", "tT yY tT yY tT yY tT yY ", "tT yY tT yY tT yY tT yY "]
            },
            bottomkey: {
                lesson1: ["v v v v ", "m m m m ", "v v v v ", "m m m m ", "v v v v m m m m ", "v v v v m m m m ", "v v m m v v m m ", "v v m m v v m m ", "v m v m v m v m ", "v m v m v m v m "],
                lesson2: ["c c c c ", ", , , , ", "c c c c ", ", , , , ", "c c c c , , , , ", "c c c c , , , , ", "c c , , c c , , ", "c c , , c c , , ", "c , c , c , c , ", "c , c , c , c , "],
                lesson3: ["x x x x ", ". . . . ", "x x x x ", ". . . . ", "x x x x . . . . ", "x x x x . . . . ", "x x . . x x . . ", "x x . . x x . . ", "x . x . x . x . ", "x . x . x . x . "],
                lesson4: ["z z z z ", "/ / / / ", "z z z z ", "/ / / / ", "z z z z / / / / ", "z z z z / / / / ", "z z / / z z / / ", "z z / / z z / / ", "z / z / z / z / ", "z / z / z / z / "],
                lesson5: ["b b b b ", "n n n n ", "b b b b ", "n n n n ", "b b b b n n n n ", "b b b b n n n n ", "b b n n b b n n ", "b b n n b b n n ", "b n b n b n b n ", "b n b n b n b n "],
                lesson6: ["V V V V ", "M M M M ", "V V V V ", "M M M M ", "V V V V M M M M ", "V V V V M M M M ", "vV vV vV vV ", "mM mM mM mM ", "vV mM vV mM vV mM vV mM ", "vV mM vV mM vV mM vV mM "],
                lesson7: ["C C C C ", "< < < < ", "C C C C ", "< < < < ", "C C C C < < < < ", "C C C C < < < < ", "cC cC cC cC ", ",< ,< ,< ,< ", "cC ,< cC ,< cC ,< cC ,< ", "cC ,< cC ,< cC ,< cC ,< "],
                lesson8: ["X X X X ", "> > > > ", "X X X X ", "> > > > ", "X X X X > > > > ", "X X X X > > > > ", "xX xX xX xX ", ".> .> .> .> ", "xX .> xX .> xX .> xX .> ", "xX .> xX .> xX .> xX .> "],
                lesson9: ["Z Z Z Z ", "? ? ? ? ", "Z Z Z Z ", "? ? ? ? ", "Z Z Z Z ? ? ? ? ", "Z Z Z Z ? ? ? ? ", "zZ zZ zZ zZ ", "/? /? /? /? ", "zZ /? zZ /? zZ /? zZ /? ", "zZ /? zZ /? zZ /? zZ /? "],
                lesson10: ["B B B B ", "N N N N ", "B B B B ", "N N N N ", "B B B B N N N N ", "B B B B N N N N ", "bB bB bB bB ", "nN nN nN nN ", "bB nN bB nN bB nN bB nN ", "bB nN bB nN bB nN bB nN "]
            },
            allkey: {
                lesson1: [],
                lesson2: [],
                lesson3: [],
                lesson4: [],
                lesson5: [],
                lesson6: [],
                lesson7: [],
                lesson8: [],
                lesson9: [],
                lesson10: []
            }
        },
        Beginner: {
            homekey: {
                lesson1: [],
                lesson2: [],
                lesson3: [],
                lesson4: [],
                lesson5: [],
                lesson6: [],
                lesson7: [],
                lesson8: [],
                lesson9: [],
                lesson10: []
            },
            topkey: {
                lesson1: [],
                lesson2: [],
                lesson3: [],
                lesson4: [],
                lesson5: [],
                lesson6: [],
                lesson7: [],
                lesson8: [],
                lesson9: [],
                lesson10: []
            },
            bottomkey: {
                lesson1: [],
                lesson2: [],
                lesson3: [],
                lesson4: [],
                lesson5: [],
                lesson6: [],
                lesson7: [],
                lesson8: [],
                lesson9: [],
                lesson10: []
            },
            allkey: {
                lesson1: [],
                lesson2: [],
                lesson3: [],
                lesson4: [],
                lesson5: [],
                lesson6: [],
                lesson7: [],
                lesson8: [],
                lesson9: [],
                lesson10: []
            }
        },
        Advanced: {
            lesson1: ["12435 a;sdlfkj;alsdkjfa;lsdkfj"],
            lesson2: [" sdlfka;sdkjf;laksjdf;"],
            lesson3: ["asldkfj;"],
            lesson4: [],
            lesson5: [],
            lesson6: [],
            lesson7: [],
            lesson8: [],
            lesson9: [],
            lesson10: []
        },
        Expert: {
            lesson1: ["asdf asdf"],
            lesson2: [" asldkfj;lkjasd;lff "],
            lesson3: [],
            lesson4: [],
            lesson5: [],
            lesson6: [],
            lesson7: [],
            lesson8: [],
            lesson9: [],
            lesson10: []
        }
    };
    const keyMapping = {
        //home row
        ' ': ' ',
        'a': 'ब',
        'A': 'आ',
        's': 'क',
        'S': 'ङ्क',
        'd': 'म',
        'D': 'ङ्ग',
        'f': 'ा',
        'F': 'ँ',
        'g': 'न',
        'G': 'द्द',
        ';': 'स',
        ':': 'ट्ठ',
        'l': 'ि',
        'L': 'ी',
        'k': 'प',
        'K': 'फ',
        'j': 'व',
        'J': 'ो',
        'h': 'ज',
        'H': 'झ',
        "'": 'ु',
        '"': 'ू',
        //top row
        'q': 'त्र',
        'Q': 'त्त',
        'w': 'ध',
        'W': 'ड्ढ',
        'e': 'भ',
        'E': 'ऐ',
        'r': 'च',
        'R': 'द्ब',
        't': 'त',
        'T': 'ट्ट',
        'y': 'थ',
        'Y': 'ठ्ठ',
        'u': 'ग',
        'U': 'ऊ',
        'i': 'ष',
        'I': 'क्ष',
        'o': 'य',
        'O': 'इ',
        'p': 'उ',
        'P': 'ए',
        '[': 'र्',
        '{': 'ृ',
        ']': 'े',
        '}': 'ै',
        "\\": "्",
        '|': 'ं',
        //buttom keys
        'z': 'श',
        'Z': 'क्क',
        'x': 'ह',
        'X': 'ह्य',
        'c': 'अ',
        'C': 'ऋ',
        'v': 'ख',
        'V': 'ॐ',
        'b': 'द',
        'B': 'ौ',
        'n': 'ल',
        'N': 'द्य',
        'm': 'ः',
        'M': 'ड्ड',
        ',': 'ऽ',
        '<': 'ङ',
        '.': '।',
        '>': 'श्र',
        '/': 'र',
        '?': 'रु',
        //numbers keys
        '`': 'ञ',
        '~': '॥',
        '1': '१',
        '!': 'ज्ञ',
        '2': '२',
        '@': 'ई',
        '3': '३',
        '#': 'घ',
        '4': '४',
        '$': 'द्ध',
        '5': '५',
        '%': 'छ',
        '6': '६',
        '^': 'ट',
        '7': '७',
        '&': 'ठ',
        '8': '८',
        '*': 'ड',
        '9': '९',
        '(': 'ढ',
        '0': '०',
        ')': 'ण',
        '-': 'औ',
        '_': 'ओ',
        '=': '‍‍‍',
        '+': '‌',

    };
    //Exception handler--fetching contentMap according to selection
    function fetchcontentMap(contentMap, difficulty, keyRow, lesson) {
        resetProgressBar();
        if (keyRow in contentMap[difficulty]) {
            return (contentMap[difficulty] ? .[keyRow] ? .[lesson]);
        } else if (lesson in contentMap[difficulty]) {
            return contentMap[difficulty] ? .[lesson];
        }
    }
    //to enable and disable the selection option of KeyRow
    if (selectedDifficulty === "Advanced" || selectedDifficulty === "Expert") {
        keyRowSelect.disabled = true;
    } else {
        keyRowSelect.disabled = false;
    };
    // Initialize index to 0
    let currentIndex = 0;
    let totalLetters = 0;
    let mistakeLetters = 0;
    //selection array
    const currentlesson = fetchcontentMap(contentMap, selectedDifficulty, selectedKeyRow, selectedLesson);
    //console.log("Current lesson content:", currentlesson);
    let typedCharacters = "";
    let currentWord = currentlesson[currentIndex];

    function displayNextWord() {
        if (currentIndex < currentlesson.length) {
            currentWord = currentlesson[currentIndex];
            console.log(`index:${currentWord}`)
            var mappedWord = currentWord
                .split('')
                .map(char => keyMapping[char] || char) // Replace by unicode as define in keymapping
                .join('');
            typedCharacters = "";
            typedWord.textContent = ""; // Clear the typed word
            wordDisplay.textContent = mappedWord;
            console.log(`Display:${mappedWord}`)
            calculateLetters(); //to calculate total letters 
        } else {
            wordDisplay.textContent = "";
            document.removeEventListener("keydown", typing);
            progressBar.innerText = "Practice Complete!";
            // console.log("Practice Completed!");
        }
    }
    // keyevent
    const typedWord = document.getElementById("typedWord");
    document.addEventListener("keydown", typing);

    function typing(event) {
        if (currentWord === typedCharacters) {
            typedCharacters = "";
            typedWord.textContent = ""; // Clear the typed word
            displayNextWord();
            erroraudio.pause();
        } else if (currentWord && event.key === currentWord[typedCharacters.length]) {
            // Correct key pressed, add to typed characters
            typedCharacters += event.key;
            correctaudio.play(); //play correct audio
            erroraudio.pause();
            var mappedTypedCharacters = typedCharacters
                .split('')
                .map(char => keyMapping[char] || char) // Replace by unicode as define in keymapping
                .join('');
            typedWord.textContent = mappedTypedCharacters;
            console.log(`typedword:${mappedTypedCharacters}`)
            startTimer(); //to calculate time taken;

            if (typedCharacters.length === currentWord.length) {
                stopTimer(); //to calculate time taken; 
                typedCharacters = "";
                typedWord.textContent = ""; // Clear the typed word
                currentIndex++;
                displayNextWord();
                calculateAcc(); // to calculate accuracy;   
                calculateSpeed();
                updateProgressBar(); //update progress bar
            }
        } else {
            //condition for mistakes 
            const commonkeys = ['Enter', 'Backspace', 'Control', 'Alt', 'Shift', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'CapsLock', 'Meta'];
            if (!commonkeys.includes(event.key)) {
                if (event.key !== currentWord[typedCharacters.length] && typedCharacters != "" && 'Shift' + event.key) {
                    calculateMistake();
                }
            }
        }
    }
    //calculation functions
    function calculateLetters() {
        totalLetters = currentWord.length;
        document.getElementById("totalLetters").textContent = totalLetters;
        // console.log(`Total letters: ${totalLetters}`);
    }

    function calculateMistake() {
        mistakeLetters++;
        console.log(`Mistake letters: ${mistakeLetters}`); //to display the mistakelatters     
        erroraudio.play(); // play error audio  
        document.getElementById("mistakeLetters").textContent = mistakeLetters;
    }

    function calculateAcc() {
        const accuracyPercentage = Math.round(((totalLetters - mistakeLetters) / totalLetters) * 100);
        document.getElementById("accuracy").textContent = accuracyPercentage;
        // console.log(`Accuracy: ${accuracyPercentage}%`);  
    }
    let timer = null;
    let startTime = 0;
    let elapsedTime = 0;
    let isRunning = false;
    displayTimeTaken = document.getElementById("timeTaken");

    function startTimer() {
        if (!isRunning) {
            resetCalculation(); //Reseting for new start
            startTime = Date.now() - elapsedTime;
            timer = setInterval(() => {
                const currentTime = Date.now();
                elapsedTime = currentTime - startTime; //in milliseconds(i.e a minute (60 seconds × 1000 milliseconds))
                let seconds = Math.floor(elapsedTime / 1000 % 60);
                seconds = String(seconds).padStart(2, '0');
                displayTimeTaken.textContent = `${seconds}`;
            }, 10);
            isRunning = true;
        }
    }

    function stopTimer() {
        if (isRunning) {
            clearInterval(timer);
            isRunning = false;
        }
    }

    function calculateSpeed() {
        const typingSpeedWPM = Math.round(((totalLetters - mistakeLetters) / 5) / (elapsedTime / 60000));
        document.getElementById("speed").textContent = `${Math.abs(typingSpeedWPM)}`;
    }

    function updateProgressBar() {
        const progressPercentage = (currentIndex / currentlesson.length) * 100;
        progressBar.style.width = progressPercentage + '%';
    }

    function resetProgressBar() {
        progressBar.style.width = 0;
        progressBar.innerText = "";
    }

    function resetCalculation() {
        elapsedTime = 0; //Reseting to zero on every start
        mistakeLetters = 0; //Resetting mistakeletters to zero for new calcu
        document.getElementById("mistakeLetters").innerText = "00";
        document.getElementById("accuracy").innerText = "00";
        document.getElementById("speed").innerText = "00";
    }
    // Initial display
    displayNextWord();
}