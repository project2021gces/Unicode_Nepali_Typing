const keyRowSelect = document.getElementById('keyRow');
const difficultySelect = document.getElementById('difficulty');
const levelSelect = document.getElementById('lessons');
const wordDisplay = document.getElementById("wordDisplay");

keyRowSelect.addEventListener('change', updateContent);
difficultySelect.addEventListener('change', updateContent);
levelSelect.addEventListener('change',updateContent);

function updateContent() {
    const selectedKeyRow = keyRowSelect.value;
    const selectedDifficulty = difficultySelect.value;
    const selectedLesson=levelSelect.value;
        //content according to difficulty,keyrow and lessions 
        const contentMap = {
            Introduction: {
                homekey:
                    {
                    lesson1: ["f f f f","j j j j","f f f f","j j j j","f f f f j j j j","f f f f j j j j","f f j j f f j j","f f j j f f j j","f j f j f j f j","f j f j f j f j"],
                    lesson2: ["d d d d","k k k k","d d d d","k k k k","d d d d k k k k","d d d d k k k k","d d k k d d k k","d d k k d d k k","d k d k d k d k","d k d k d k d k"],
                    lesson3: ["s s s s","l l l l","s s s s","l l l l","s s s s l l l l","s s s s l l l l","s s l l s s l l","s s l l s s l l","s l s l s l s l","s l s l s l s l"],
                    lesson4: ["a a a a","; ; ; ;","a a a a","; ; ; ;","a a a a ; ; ; ;","a a a a ; ; ; ;","a a ; ; a a ; ;","a a ; ; a a ; ;","a ; a ; a ; a ;","a ; a ; a ; a ;"],
                    lesson5: ["g g g g","h h h h","g g g g","h h h h","g g g g h h h h","g g g g h h h h","g g h h g g h h","g g h h g g h h","g h g h g h g h","g h g h g h g h"],
                    lesson6: ["F F F F","J J J J","F F F F","J J J J","F F F F J J J J","F F F F J J J J","F F J J F F J J","F F J J F F J J","F J F J F J F J","F J F J F J F J"],
                    lesson7: ["D D D D","K K K K","D D D D","K K K K","D D D D K K K K","D D D D K K K K","dD dD dD dD","kK kK kK kK","dD kK dD kK dD kK dD kK","dD kK dD kK dD kK dD kK"],
                    lesson8: ["S S S S","L L L L","S S S S","L L L L","S S S S L L L L","S S S S L L L L","sS sS sS sS","lL lL lL lL","sS lL sS lL sS lL sS lL","sS lL sS lL sS lL sS lL"],
                    lesson9: ["A A A A",": : : :","A A A A",": : : :","A A A A : : : :","A A A A ; ; ; ;","aA aA aA aA",";: ;: ;: ;:","aA ;: aA ;: aA ;: aA ;:","aA ;: aA ;: aA ;: aA ;:"],
                    lesson10: ["G G G G","H H H H","G G G G","H H H H","G G G G H H H H","G G G G H H H H","gG gG gG gG","hH hH hH hH","gG hH gG hH gG hH gG hH","gG hH gG hH gG hH gG hH"],
                    },
                topkey: {
                    lesson1: [""],
                    lesson2: [""],
                    lesson3: [""],
                    lesson4: [""],
                    lesson5: [""], 
                    lesson6: [""],
                    lesson7: [""],
                    lesson8: [""],
                    lesson9: [""],
                    lesson10: [""]
                    },
                bottomkey: {
                    lesson1: [""],
                    lesson2: [""],
                    lesson3: [""],
                    lesson4: [""],
                    lesson5: [""], 
                    lesson6: [""],
                    lesson7: [""],
                    lesson8: [""],
                    lesson9: [""],
                    lesson10: [""]
                    },
                allkey:{
                    lesson1: [""],
                    lesson2: [""],
                    lesson3: [""],
                    lesson4: [""],
                    lesson5: [""], 
                    lesson6: [""],
                    lesson7: [""],
                    lesson8: [""],
                    lesson9: [""],
                    lesson10: [""]
                    }
                },
            Beginner: {
                homekey:
                    {
                    lesson1: ["asdf asdf asdf","11","22","33"],
                    lesson2: ["11","22","33","asdf asdf ;lkj ;lkj ;lkj"],
                    lesson3: [""],
                    lesson4: [""],
                    lesson5: [""], 
                    lesson6: [""],
                    lesson7: [""],
                    lesson8: [""],
                    lesson9: [""],
                    lesson10: [""]
                    },
                topkey: {
                    lesson1: [""],
                    lesson2: [""],
                    lesson3: [""],
                    lesson4: [""],
                    lesson5: [""], 
                    lesson6: [""],
                    lesson7: [""],
                    lesson8: [""],
                    lesson9: [""],
                    lesson10: [""]
                    },
                bottomkey: {
                    lesson1: [""],
                    lesson2: [""],
                    lesson3: [""],
                    lesson4: [""],
                    lesson5: [""], 
                    lesson6: [""],
                    lesson7: [""],
                    lesson8: [""],
                    lesson9: [""],
                    lesson10: [""]
                    },
                allkey:{
                    lesson1: [""],
                    lesson2: [""],
                    lesson3: [""],
                    lesson4: [""],
                    lesson5: [""], 
                    lesson6: [""],
                    lesson7: [""],
                    lesson8: [""],
                    lesson9: [""],
                    lesson10: [""]
                    }
                },
            Advanced: {
                homekey:
                    {
                    lesson1: [""],
                    lesson2: [""],
                    lesson3: [""],
                    lesson4: [""],
                    lesson5: [""], 
                    lesson6: [""],
                    lesson7: [""],
                    lesson8: [""],
                    lesson9: [""],
                    lesson10: [""]
                    },
                topkey: {
                    lesson1: [""],
                    lesson2: [""],
                    lesson3: [""],
                    lesson4: [""],
                    lesson5: [""], 
                    lesson6: [""],
                    lesson7: [""],
                    lesson8: [""],
                    lesson9: [""],
                    lesson10: [""]
                    },
                bottomkey: {
                    lesson1: [""],
                    lesson2: [""],
                    lesson3: [""],
                    lesson4: [""],
                    lesson5: [""], 
                    lesson6: [""],
                    lesson7: [""],
                    lesson8: [""],
                    lesson9: [""],
                    lesson10: [""]
                    },
                allkey:{
                    lesson1: [""],
                    lesson2: [""],
                    lesson3: [""],
                    lesson4: [""],
                    lesson5: [""], 
                    lesson6: [""],
                    lesson7: [""],
                    lesson8: [""],
                    lesson9: [""],
                    lesson10: [""]
                    }
                },
            Expert: {
                homekey:
                    {
                    lesson1: [""],
                    lesson2: [""],
                    lesson3: [""],
                    lesson4: [""],
                    lesson5: [""], 
                    lesson6: [""],
                    lesson7: [""],
                    lesson8: [""],
                    lesson9: [""],
                    lesson10: [""]
                    },
                topkey: {
                    lesson1: [""],
                    lesson2: [""],
                    lesson3: [""],
                    lesson4: [""],
                    lesson5: [""], 
                    lesson6: [""],
                    lesson7: [""],
                    lesson8: [""],
                    lesson9: [""],
                    lesson10: [""]
                    },
                bottomkey: {
                    lesson1: [""],
                    lesson2: [""],
                    lesson3: [""],
                    lesson4: [""],
                    lesson5: [""], 
                    lesson6: [""],
                    lesson7: [""],
                    lesson8: [""],
                    lesson9: [""],
                    lesson10: [""]
                    },
                allkey:{
                    lesson1: [""],
                    lesson2: [""],
                    lesson3: [""],
                    lesson4: [""],
                    lesson5: [""], 
                    lesson6: [""],
                    lesson7: [""],
                    lesson8: [""],
                    lesson9: [""],
                    lesson10: [""]
                    }
                }
        };

        //keyMapping to convert into unicode
        const keyMapping = {
            //home row
            ' ':' ',
            'a': 'ब',
            'A':'आ',
            's': 'क',
            'S':'ङ्क',
            'd': 'म',
            'D':'ङ्ग',
            'f': 'ा',
            'F':'ँ',
            'g':'न',
            'G':'द्द',
            ';':'स',
            ':':'ट्ठ',
            'l':'ि',
            'L':'ी',
            'k':'प',
            'K':'फ',
            'j':'व',
            'J':'ो',
            'h':'ज',
            'H':'झ',
            "'":'ु',
            '"':'ू',
            //top row
            'q':'त्र',
            'Q':'त्त',
            'w':'ध',
            'W':'ड्ढ',
            'e':'भ',
            'E':'ऐ',
            'r':'च',
            'R':'द्ब',
            't':'त',
            'T':'ट्ट',
            'y':'थ',
            'Y':'ठ्ठ',
            'u':'ग',
            'U':'ऊ',
            'i':'ष',
            'I':'क्ष',
            'o':'य',
            'O':'इ',
            'p':'उ',
            'P':'ए',
            '[':'र्',
            '{':'ृ',
            ']':'े',
            '}':'ै',
            "\\": "्",
            '|':'ं',
            //buttom keys
            'z':'श',
            'Z':'क्क',
            'x':'ह',
            'X':'ह्य',
            'c':'अ',
            'C':'ऋ',
            'v':'ख',
            'V':'ॐ',
            'b':'द',
            'B':'ौ',
            'n':'ल',
            'N':'द्य',
            'm':'ः',
            'M':'ड्ड',
            ',':'ऽ',
            '<':'ङ',
            '.':'।',
            '>':'श्र',
            '/':'र',
            '?':'रु',
            //numbers keys
            '`':'ञ',
            '~':'॥',
            '1':'१',
            '!':'ज्ञ',
            '2':'२',
            '@':'ई',
            '3':'३',
            '#':'घ',
            '4':'४',
            '$':'द्ध',
            '5':'५',
            '%':'छ',
            '6':'६',
            '^':'ट',
            '7':'७',
            '&':'ठ',
            '8':'८',
            '*':'ड',
            '9':'९',
            '(':'ढ',
            '0':'०',
            ')':'ण',
            '-':'औ',
            '_':'ओ',
            '=':'‍‍‍',
            '+':'‌',
            //special characters yet to define
            ' ':'‌ ',
            '':'‌',
            '':'‌',
            '':'‌',
            '':'‌',
            '':'‌',
            '':'‌',
            '':'‌',
            '':'‌',
            '':'‌',
            '':'‌',
            '':'‌',
            '':'‌'

        };
        let currentIndex = 0;
        //selection of content
        let currentlesson = contentMap[selectedDifficulty][selectedKeyRow][selectedLesson];
        let typedCharacters = "";
        let currentWord =currentlesson[currentIndex];

            function displayNextWord() {
                if (currentIndex < currentlesson.length) {
                    currentWord = currentlesson[currentIndex];
                    const mappedWord = currentWord
                        .split('')
                        .map(char => keyMapping[char] || char) // Replace by unicode as define in keymapping
                        .join('');
                    wordDisplay.textContent = mappedWord;
                } 
                else {
                    wordDisplay.textContent = "Practice complete!";
                    document.removeEventListener("keydown", typing);
                   // console.log("Practice Completed!");
                }
            }
            // keyevent
            const typedWord = document.getElementById("typedWord");
            document.addEventListener("keydown", typing);
            function typing(event){
                if (currentWord && currentWord === typedCharacters) {
                    
                    currentWord = currentlesson[currentIndex];
                    typedCharacters = "";
                    typedWord.textContent = ""; // Clear the typed word
                    displayNextWord();   
                } else if (currentWord && event.key === currentWord[typedCharacters.length]) {
                    // Correct key pressed, add to typed characters
                    typedCharacters += event.key;
                    const mappedTypedCharacters = typedCharacters
                        .split('')
                        .map(char => keyMapping[char] || char) // Replace with mapped value if exists
                        .join('');
                         typedWord.textContent = mappedTypedCharacters;
                    
                    if (typedCharacters.length === currentWord.length) {
                        typedCharacters = "";
                        typedWord.textContent = ""; // Clear the typed word
                        currentIndex++;
                        displayNextWord();
                        
                    }
                }
            }
            
            // Initial display
            displayNextWord();
        }
